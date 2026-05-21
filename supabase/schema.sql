-- ─────────────────────────────────────────────────────────────────
--  3475 Kraftverket – Medlemsportal · Supabase-skjema
--  Kjør hele filen i Supabase SQL Editor (Run)
-- ─────────────────────────────────────────────────────────────────

-- 1) PROFILES: utvider auth.users med navn, alder, bilde, rolle
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  name        text not null,
  age         int,
  photo       text,
  role        text not null default 'member' check (role in ('member','admin')),
  created_at  timestamptz default now()
);

-- 2) PROGRAMS: treningsprogram & ukeplaner (admins skriver, alle leser)
create table if not exists public.programs (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  body        text,
  category    text default 'program' check (category in ('program','ukeplan')),
  created_by  uuid references public.profiles(id),
  created_at  timestamptz default now()
);

-- 3) CALENDAR_ENTRIES: personlige kalender-notater (kun eier ser)
create table if not exists public.calendar_entries (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  date        date not null,
  type        text,
  title       text,
  note        text,
  duration    int,
  created_at  timestamptz default now()
);

-- 4) CONVERSATIONS: gruppe, dm eller felles offentlig
create table if not exists public.conversations (
  id          uuid primary key default gen_random_uuid(),
  type        text not null check (type in ('dm','group','public')),
  name        text,
  created_by  uuid references public.profiles(id),
  created_at  timestamptz default now()
);

-- 5) CONVERSATION_MEMBERS: hvilke profiler er i hvilken samtale
create table if not exists public.conversation_members (
  conversation_id  uuid not null references public.conversations(id) on delete cascade,
  user_id          uuid not null references public.profiles(id) on delete cascade,
  primary key (conversation_id, user_id)
);

-- 6) MESSAGES: alle meldinger (knyttet til en conversation)
create table if not exists public.messages (
  id              uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  from_id         uuid not null references public.profiles(id) on delete cascade,
  body            text not null,
  created_at      timestamptz default now()
);

create index if not exists idx_messages_conv on public.messages(conversation_id, created_at);
create index if not exists idx_cal_user_date on public.calendar_entries(user_id, date);

-- ─────────────────────────────────────────────────────────────────
--  HELPER: er bruker admin?
-- ─────────────────────────────────────────────────────────────────
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- HELPER: er bruker medlem av samtalen? (bypasser RLS for å unngå rekursjon)
create or replace function public.is_conv_member(_conv uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.conversation_members
    where conversation_id = _conv and user_id = auth.uid()
  );
$$;

-- ─────────────────────────────────────────────────────────────────
--  AUTO-OPPRETT PROFIL ved ny innlogging
-- ─────────────────────────────────────────────────────────────────
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email,'@',1)),
    coalesce(new.raw_user_meta_data->>'role', 'member')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─────────────────────────────────────────────────────────────────
--  ROW LEVEL SECURITY
-- ─────────────────────────────────────────────────────────────────
alter table public.profiles               enable row level security;
alter table public.programs               enable row level security;
alter table public.calendar_entries       enable row level security;
alter table public.conversations          enable row level security;
alter table public.conversation_members   enable row level security;
alter table public.messages               enable row level security;

-- PROFILES
drop policy if exists "profiles_read_all"    on public.profiles;
drop policy if exists "profiles_update_self" on public.profiles;
drop policy if exists "profiles_update_admin" on public.profiles;
drop policy if exists "profiles_insert_admin" on public.profiles;
drop policy if exists "profiles_delete_admin" on public.profiles;

create policy "profiles_read_all" on public.profiles
  for select using (auth.uid() is not null);

create policy "profiles_update_self" on public.profiles
  for update using (auth.uid() = id);

create policy "profiles_update_admin" on public.profiles
  for update using (public.is_admin());

create policy "profiles_insert_admin" on public.profiles
  for insert with check (public.is_admin() or auth.uid() = id);

create policy "profiles_delete_admin" on public.profiles
  for delete using (public.is_admin());

-- PROGRAMS
drop policy if exists "programs_read_all"   on public.programs;
drop policy if exists "programs_write_admin" on public.programs;

create policy "programs_read_all" on public.programs
  for select using (auth.uid() is not null);

create policy "programs_write_admin" on public.programs
  for all using (public.is_admin()) with check (public.is_admin());

-- CALENDAR (kun eier)
drop policy if exists "calendar_owner" on public.calendar_entries;
create policy "calendar_owner" on public.calendar_entries
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- CONVERSATIONS
drop policy if exists "conv_read_members"   on public.conversations;
drop policy if exists "conv_create"          on public.conversations;
drop policy if exists "conv_update_creator"  on public.conversations;

create policy "conv_read_members" on public.conversations
  for select using (
    type = 'public' or public.is_conv_member(id)
  );

create policy "conv_create" on public.conversations
  for insert with check (auth.uid() = created_by);

create policy "conv_update_creator" on public.conversations
  for update using (auth.uid() = created_by);

-- CONVERSATION_MEMBERS
drop policy if exists "cm_read_self" on public.conversation_members;
drop policy if exists "cm_insert"    on public.conversation_members;
drop policy if exists "cm_delete"    on public.conversation_members;

create policy "cm_read_self" on public.conversation_members
  for select using (
    user_id = auth.uid() or public.is_conv_member(conversation_id)
  );

create policy "cm_insert" on public.conversation_members
  for insert with check (
    auth.uid() = user_id
    or exists (select 1 from public.conversations where id = conversation_id and created_by = auth.uid())
  );

create policy "cm_delete" on public.conversation_members
  for delete using (
    auth.uid() = user_id
    or exists (select 1 from public.conversations where id = conversation_id and created_by = auth.uid())
  );

-- MESSAGES
drop policy if exists "msg_read"   on public.messages;
drop policy if exists "msg_insert" on public.messages;

create policy "msg_read" on public.messages
  for select using (
    conversation_id in (select id from public.conversations where type = 'public')
    or public.is_conv_member(conversation_id)
  );

create policy "msg_insert" on public.messages
  for insert with check (
    from_id = auth.uid()
    and (
      conversation_id in (select id from public.conversations where type = 'public')
      or public.is_conv_member(conversation_id)
    )
  );

-- ─────────────────────────────────────────────────────────────────
--  REALTIME: aktiver for meldinger
-- ─────────────────────────────────────────────────────────────────
alter publication supabase_realtime add table public.messages;
alter publication supabase_realtime add table public.programs;

-- ─────────────────────────────────────────────────────────────────
--  FELLES CHAT: lag en offentlig samtale alle medlemmer kan se
-- ─────────────────────────────────────────────────────────────────
insert into public.conversations (id, type, name)
values ('00000000-0000-0000-0000-000000000001', 'public', 'Felles chat')
on conflict do nothing;

-- ─────────────────────────────────────────────────────────────────
--  SCHEDULE_ITEMS: ukeplan-klasser (admins skriver, alle leser)
-- ─────────────────────────────────────────────────────────────────
create table if not exists public.schedule_items (
  id           uuid primary key default gen_random_uuid(),
  day_of_week  int not null check (day_of_week between 0 and 6),
  start_time   time not null,
  end_time     time not null,
  name         text not null,
  type         text not null default 'functional' check (type in ('hyrox','functional','styrke','hiit','liss','loping','barn','annet')),
  location     text,
  trainer      text,
  program      jsonb,
  created_by   uuid references public.profiles(id),
  created_at   timestamptz default now()
);

create index if not exists idx_schedule_day on public.schedule_items(day_of_week, start_time);

alter table public.schedule_items enable row level security;

drop policy if exists "schedule_read_all"   on public.schedule_items;
drop policy if exists "schedule_write_admin" on public.schedule_items;

create policy "schedule_read_all" on public.schedule_items
  for select using (auth.uid() is not null);

create policy "schedule_write_admin" on public.schedule_items
  for all using (public.is_admin()) with check (public.is_admin());

-- ─────────────────────────────────────────────────────────────────
--  PERSONAL_CALENDAR: planlagte treninger (privat for hver bruker)
-- ─────────────────────────────────────────────────────────────────
create table if not exists public.personal_calendar (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  date        date not null,
  title       text not null,
  type        text,
  location    text,
  trainer     text,
  program     jsonb,
  source      text default 'manual',
  source_id   uuid,
  created_at  timestamptz default now()
);

create index if not exists idx_pc_user_date on public.personal_calendar(user_id, date);

alter table public.personal_calendar enable row level security;
drop policy if exists "pc_owner" on public.personal_calendar;
create policy "pc_owner" on public.personal_calendar
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
