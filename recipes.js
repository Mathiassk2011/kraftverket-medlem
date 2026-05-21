// Matretter med 30-50 g protein per porsjon. 110 oppskrifter.
const IMG = {
  // Kylling – basis
  kylling:           "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800",
  kylling_grill:     "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  kylling_stir:      "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?w=800",
  kylling_teriyaki:  "https://images.unsplash.com/photo-1636401870585-a8852371e84a?w=800",
  kylling_bakt:      "https://images.unsplash.com/photo-1775039984426-544b16dc2993?w=800",
  kylling_pasta:     "https://images.unsplash.com/photo-1748012199673-d990c72aaa57?w=800",
  kylling_suppe:     "https://images.unsplash.com/photo-1612966948332-81d747414a8f?w=800",
  // Kylling – spesifikke retter
  fajitas:           "https://images.unsplash.com/photo-1689773976415-293dd893f77e?w=800",
  shawarma:          "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800",
  honning_sennep:    "https://images.unsplash.com/photo-1636401870585-a8852371e84a?w=800",
  kylling_parmesan:  "https://images.unsplash.com/photo-1775039984426-544b16dc2993?w=800",
  kylling_katsu:     "https://images.unsplash.com/photo-1677743540715-d4fe04852225?w=800",
  kylling_burger:    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  kylling_rosmarin:  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  kylling_sotpotet:  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800",
  kylling_fetaost:   "https://images.unsplash.com/photo-1748012199673-d990c72aaa57?w=800",
  kyllinglar:        "https://images.unsplash.com/photo-1612966948332-81d747414a8f?w=800",
  kylling_pesto:     "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?w=800",
  // Storfe / steak
  storfe:            "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800",
  steak:             "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
  kjottboller:       "https://images.unsplash.com/photo-1678969406319-5776d82dabab?w=800",
  lamgryte:          "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
  kjottdeig:         "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=800",
  storfegryte:       "https://images.unsplash.com/photo-1689860892307-7db54ab276ba?w=800",
  mongolsk_biff:     "https://images.unsplash.com/photo-1710508836763-870d58493662?w=800",
  beef_carpaccio:    "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
  steak_wrap:        "https://images.unsplash.com/photo-1671572579845-52270341950f?w=800",
  biff_flatbrod:     "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800",
  pulled_pork:       "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800",
  souvlaki:          "https://images.unsplash.com/photo-1641977914975-0ba64e46b6f6?w=800",
  // Fisk
  laks:              "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
  hvitfisk:          "https://images.unsplash.com/photo-1664288377740-1bec924cd622?w=800",
  tunfisk_biff:      "https://images.unsplash.com/photo-1674063765936-d032795f4e1e?w=800",
  reker:             "https://images.unsplash.com/photo-1748659118802-a23f097d5398?w=800",
  krabbekake:        "https://images.unsplash.com/photo-1716959669846-18e5dbf1e355?w=800",
  rokelaks:          "https://images.unsplash.com/photo-1608039867578-2bba47388911?w=800",
  sushi:             "https://images.unsplash.com/photo-1575740226055-b78dd5964d33?w=800",
  sashimi:           "https://images.unsplash.com/photo-1628280817314-e15784385d79?w=800",
  sjokreps:          "https://images.unsplash.com/photo-1748659118802-a23f097d5398?w=800",
  laks_carpaccio:    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
  fiskekaker:        "https://images.unsplash.com/photo-1664288377740-1bec924cd622?w=800",
  grillet_sei:       "https://images.unsplash.com/photo-1664288377740-1bec924cd622?w=800",
  steinbit_bilde:    "https://images.unsplash.com/photo-1674063765936-d032795f4e1e?w=800",
  fisk_karri:        "https://images.unsplash.com/photo-1706145779556-f2c642db2699?w=800",
  laks_salat:        "https://images.unsplash.com/photo-1604908554049-01b1ec5c7d8a?w=800",
  tunfisk_salat:     "https://images.unsplash.com/photo-1674063765936-d032795f4e1e?w=800",
  tunfisk_egg_salat: "https://images.unsplash.com/photo-1604908554049-01b1ec5c7d8a?w=800",
  // Egg & meieri
  egg:               "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
  omelett:           "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=800",
  avokado_toast:     "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=800",
  hytteost:          "https://images.unsplash.com/photo-1720356778303-6cdc6d2e95ce?w=800",
  yoghurt:           "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
  frittata:          "https://images.unsplash.com/photo-1587900437942-8758241767ef?w=800",
  egg_benedict:      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
  skyr:              "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
  bygggrøt:          "https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=800",
  protein_vaffel:    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
  muesli:            "https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=800",
  // Pasta
  pasta:             "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
  pasta_bolognese:   "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800",
  pasta_carbonara:   "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=800",
  pasta_seafood:     "https://images.unsplash.com/photo-1764925563135-3d461e72345d?w=800",
  lasagne:           "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800",
  // Salat
  salat:             "https://images.unsplash.com/photo-1604908554049-01b1ec5c7d8a?w=800",
  salat_greek:       "https://images.unsplash.com/photo-1764397514710-227681ae8e85?w=800",
  salat_caesar:      "https://images.unsplash.com/photo-1712746784937-aa56235fbab0?w=800",
  salat_fargerik:    "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800",
  nicoise:           "https://images.unsplash.com/photo-1621150270679-476ea643bf8b?w=800",
  cobb_salat:        "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800",
  spinat_salat:      "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800",
  halloumi:          "https://images.unsplash.com/photo-1764397514710-227681ae8e85?w=800",
  edamame_salat:     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
  // Wrap / taco
  taco:              "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
  wrap:              "https://images.unsplash.com/photo-1671572579845-52270341950f?w=800",
  // Burger
  burger:            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  burger2:           "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800",
  // Bowls
  bowl:              "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?w=800",
  bowl_bento:        "https://images.unsplash.com/photo-1713047203705-44dd7d762d0c?w=800",
  korean_bowl:       "https://images.unsplash.com/photo-1741295017668-c8132acd6fc0?w=800",
  burrito_bowl:      "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?w=800",
  // Frokost
  pannekake:         "https://images.unsplash.com/photo-1592162196531-61c6f89c5ebb?w=800",
  pannekake_frokost: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
  smoothie:          "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800",
  havre:             "https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=800",
  milkshake:         "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800",
  // Asiatisk
  noodle:            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
  pad_thai:          "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800",
  pho:               "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=800",
  gyudon:            "https://images.unsplash.com/photo-1688431508895-4c2cab13b181?w=800",
  // Andre
  pizza:             "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
  suppe:             "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
  ris:               "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
  curry:             "https://images.unsplash.com/photo-1706145779556-f2c642db2699?w=800",
  butter_chicken:    "https://images.unsplash.com/photo-1768179669433-bd9d52949c20?w=800",
  karri_suppe:       "https://images.unsplash.com/photo-1768179669433-bd9d52949c20?w=800",
  vegetar:           "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
  falafel:           "https://images.unsplash.com/photo-1680990999782-ba7fe26e4d0b?w=800",
  tofu:              "https://images.unsplash.com/photo-1644527199880-fcf2bb61b2b4?w=800",
  tempeh:            "https://images.unsplash.com/photo-1644527199880-fcf2bb61b2b4?w=800",
  linsegryte:        "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
  veggie_chili:      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
  moussaka:          "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800",
  protein:           "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
};

window.RECIPES = [
  // ── ORIGINAL 10 ──
  { id: "kylling-ris", name: "Kylling med ris og grønnsaker", image: IMG.kylling, protein: 45, kcal: 580, time: "25 min",
    ingredients: ["200 g kyllingfilet","100 g jasminris (tørrvekt)","1 paprika","1 håndfull brokkoli","2 ss soyasaus","1 ss olivenolje","Salt, pepper, hvitløk"],
    steps: ["Kok risen etter anvisning på pakka.","Skjær kyllingen i terninger, krydre med salt, pepper og hvitløk.","Stek kyllingen i olivenolje på middels høy varme i 6–8 minutter.","Tilsett paprika og brokkoli, stek videre i 4 minutter.","Hell over soyasaus og rør sammen.","Server kyllingblandingen over risen."] },

  { id: "laks-potet", name: "Ovnsbakt laks med poteter", image: IMG.laks, protein: 42, kcal: 620, time: "30 min",
    ingredients: ["180 g laksefilet","300 g småpoteter","1 sitron","2 ss olivenolje","Fersk dill","Salt og pepper"],
    steps: ["Forvarm ovnen til 200 °C.","Del potetene i to og legg på et stekebrett med olje, salt og pepper.","Stek potetene i 15 minutter.","Legg laksen oppå potetene, dryss med dill og litt sitronskall.","Stek videre i 12–14 minutter til laksen er gjennomstekt.","Server med sitronbåt på siden."] },

  { id: "biff-quinoa", name: "Biff med quinoa og avokado", image: IMG.storfe, protein: 48, kcal: 640, time: "20 min",
    ingredients: ["200 g indrefilet av storfe","80 g quinoa (tørrvekt)","1/2 avokado","Cherrytomater","1 ss olivenolje","Salt, pepper"],
    steps: ["Kok quinoa i 12–15 minutter til den er myk.","Krydre biffen godt med salt og pepper.","Stek biffen i smør/olje 2–3 minutter på hver side.","La biffen hvile 5 minutter før du skjærer i skiver.","Anrett quinoa, biff, avokado og tomater i en bolle."] },

  { id: "egg-havre", name: "Eggrøre med havre og bønner", image: IMG.egg, protein: 35, kcal: 510, time: "15 min",
    ingredients: ["4 egg","60 g havregryn","100 g sorte bønner","1 avokado","Salt, pepper, chili"],
    steps: ["Kok havregrynen med vann og salt i 5 minutter.","Pisk eggene lett, krydre med salt og pepper.","Stek eggrøren på lav varme til den er kremete.","Varm bønnene i mikro eller panne.","Server havre, eggrøre, bønner og avokado sammen."] },

  { id: "kalkun-wrap", name: "Kalkunwrap med hummus", image: IMG.wrap, protein: 38, kcal: 540, time: "10 min",
    ingredients: ["150 g kalkunfilet (stekt)","2 fullkornswraps","3 ss hummus","Salat, agurk, paprika","1 ss yoghurtdressing"],
    steps: ["Stek kalkunen i biter med litt olje og salt.","Smør hummus på wrapen.","Legg salat, kalkun og grønnsaker oppå.","Topp med dressing og rull stramt.","Skjær i to og server."] },

  { id: "torsk-gront", name: "Pannestekt torsk med grønnsaker", image: IMG.hvitfisk, protein: 40, kcal: 480, time: "20 min",
    ingredients: ["220 g torskefilet","200 g søtpotet","100 g sukkererter","1 ss smør","Sitron, salt, pepper"],
    steps: ["Kok søtpotet i terninger i 10 minutter.","Stek torsken i smør på middels varme 3 minutter pr. side.","Damp sukkerertene i 3 minutter.","Anrett torsk, søtpotet og sukkererter på tallerkenen.","Press sitron over og krydre."] },

  { id: "kylling-pasta", name: "Kremet kyllingpasta", image: IMG.kylling_pasta, protein: 46, kcal: 660, time: "25 min",
    ingredients: ["200 g kyllingfilet","100 g fullkornspasta","1 dl matfløte 9%","1 ss pesto","Spinat, parmesan","Salt, pepper"],
    steps: ["Kok pastaen al dente.","Stek kyllingen i biter med salt og pepper.","Tilsett fløte og pesto i kyllingpannen.","Rør inn spinat til den faller sammen.","Bland pastaen i sausen og topp med parmesan."] },

  { id: "tunfisksalat", name: "Tunfisksalat med egg", image: IMG.tunfisk_salat, protein: 34, kcal: 420, time: "10 min",
    ingredients: ["1 boks tunfisk i vann","2 hardkokte egg","Blandet salat","Cherrytomater, agurk","1 ss olivenolje, sitron"],
    steps: ["Kok eggene i 8 minutter, avkjøl i kaldt vann.","Skyll og rens grønnsakene.","Bland salat, tomater og agurk i en bolle.","Topp med tunfisk og delte egg.","Drypp over olje og sitron."] },

  { id: "kjottdeig-taco", name: "Tacobowl med kjøttdeig", image: IMG.taco, protein: 44, kcal: 600, time: "20 min",
    ingredients: ["200 g kjøttdeig (5–10% fett)","80 g ris","100 g mais","100 g sorte bønner","1 avokado, salsa","Tacokrydder"],
    steps: ["Kok risen etter anvisning.","Brun kjøttdeigen og smak til med tacokrydder.","Varm bønner og mais.","Anrett ris, kjøttdeig, bønner, mais og avokado i en bolle.","Topp med salsa."] },

  { id: "cottage-bowl", name: "Cottage cheese-bolle med bær", image: IMG.hytteost, protein: 32, kcal: 380, time: "5 min",
    ingredients: ["300 g cottage cheese 4%","1 håndfull blåbær","1 ss honning","30 g mandler","1 ss chiafrø"],
    steps: ["Ha cottage cheese i en bolle.","Topp med bær, mandler og chiafrø.","Drypp over honning og server."] },

  // ── 100 NYE OPPSKRIFTER ──

  // KYLLING (1-18)
  { id: "kylling-teriyaki", name: "Kylling teriyaki med ris", image: IMG.kylling_teriyaki, protein: 43, kcal: 590, time: "20 min",
    ingredients: ["200 g kyllingfilet","100 g ris","3 ss teriyakisaus","1 ts sesamfrø","Vårløk","Brokkoli"],
    steps: ["Kok risen.","Skjær kylling i biter, stek i panne 6 min.","Hell over teriyakisaus, kok inn 2 min.","Damp brokkoli ved siden av.","Topp med sesam og vårløk."] },

  { id: "kylling-parmesan", name: "Kylling parmesan", image: IMG.kylling_parmesan, protein: 47, kcal: 640, time: "30 min",
    ingredients: ["220 g kyllingfilet","30 g parmesan","2 ss tomatpuré","50 g mozzarella","Italienske urter","Salat"],
    steps: ["Bank kyllingen flat, krydre.","Stek 3 min pr. side.","Smør på tomatpuré, dryss parmesan og mozzarella.","Gratiner i ovnen 8 min på 200 °C.","Server med salat."] },

  { id: "kylling-fajitas", name: "Kylling fajitas med paprika", image: IMG.fajitas, protein: 41, kcal: 560, time: "20 min",
    ingredients: ["200 g kyllingfilet","2 paprika","1 rødløk","Tacokrydder","2 lavkarbo-wraps","Gresk yoghurt"],
    steps: ["Skjær kylling og grønnsaker i strimler.","Stek kylling med krydder 5 min.","Tilsett paprika og løk, stek 5 min til.","Varm wrap, fyll med blandingen.","Topp med gresk yoghurt."] },

  { id: "kylling-caesar", name: "Kylling caesarsalat", image: IMG.salat_caesar, protein: 42, kcal: 530, time: "15 min",
    ingredients: ["180 g kyllingfilet","Romanosalat","2 ss caesardressing (light)","20 g parmesan","Croutons","Sitron"],
    steps: ["Krydre og stek kyllingen 6 min.","La kyllingen hvile, skjær i strimler.","Bland salat og dressing i en bolle.","Topp med kylling, parmesan og croutons.","Press litt sitron over."] },

  { id: "kylling-tikka", name: "Kylling tikka masala", image: IMG.curry, protein: 44, kcal: 620, time: "30 min",
    ingredients: ["200 g kyllingfilet","2 dl tomatpassata","1 dl matfløte 9%","Tikka masala-krydder","80 g ris","Koriander"],
    steps: ["Kok ris.","Skjær kylling i biter, krydre godt.","Stek kyllingen 5 min.","Tilsett tomatpassata og fløte, kok 10 min.","Server med ris og koriander."] },

  { id: "kylling-shawarma", name: "Kylling shawarma med tzatziki", image: IMG.shawarma, protein: 45, kcal: 610, time: "25 min",
    ingredients: ["200 g kyllinglår","Shawarma-krydder","1 dl tzatziki","Tomat, salat, rødløk","1 pita fullkorn","Sitron"],
    steps: ["Marinér kylling i krydder 10 min.","Stek kylling i panne 8 min.","Varm pitaen.","Fyll pita med kylling, salat og grønnsaker.","Topp med tzatziki."] },

  { id: "kylling-grill", name: "Grillet kylling med rotgrønnsaker", image: IMG.kylling_grill, protein: 46, kcal: 560, time: "35 min",
    ingredients: ["220 g kyllingfilet","200 g gulrot","200 g pastinakk","2 ss olivenolje","Rosmarin","Hvitløk"],
    steps: ["Forvarm ovn til 200 °C.","Skjær grønnsakene i staver, bland med olje og urter.","Stek i ovnen 25 min.","Grill kyllingen 5 min pr. side.","Anrett og server."] },

  { id: "kylling-brokkoli", name: "Kylling og brokkoli stir-fry", image: IMG.kylling_stir, protein: 44, kcal: 530, time: "20 min",
    ingredients: ["200 g kyllingfilet","250 g brokkoli","2 ss østerssaus","1 ss soyasaus","Hvitløk, ingefær","100 g ris"],
    steps: ["Kok risen.","Skjær kylling i biter, stek 4 min.","Tilsett brokkoli, hvitløk og ingefær.","Hell på sauser, stek 4 min til.","Server over ris."] },

  { id: "kylling-quinoa", name: "Kylling-quinoa salat", image: IMG.bowl, protein: 43, kcal: 580, time: "25 min",
    ingredients: ["180 g kyllingfilet","80 g quinoa","Spinat","Cherrytomater","Fetaost","Olivenolje, sitron"],
    steps: ["Kok quinoa i 15 min.","Stek kylling og skjær i biter.","Bland quinoa, spinat og tomater.","Topp med kylling og fetaost.","Drypp over olje og sitron."] },

  { id: "kylling-burger", name: "Kyllingburger på proteinbrød", image: IMG.kylling_burger, protein: 45, kcal: 590, time: "20 min",
    ingredients: ["200 g kyllingfilet","Proteinburgerbrød","Cheddarost","Salat, tomat, agurk","Light dressing"],
    steps: ["Krydre og stek kyllingfileten 4 min pr. side.","Rist burgerbrødet.","Smør dressing på brødet.","Legg på kylling, ost, salat og tomat.","Klem sammen og server."] },

  { id: "kylling-sotpotet", name: "Kylling med søtpotet", image: IMG.kylling_sotpotet, protein: 42, kcal: 570, time: "30 min",
    ingredients: ["200 g kyllingfilet","250 g søtpotet","Brokkoli","Olivenolje","Salt, pepper, paprikapulver"],
    steps: ["Skjær søtpotet i terninger, stek i ovn 20 min på 200 °C.","Krydre og stek kylling 6 min.","Damp brokkoli i 4 min.","Anrett kylling, søtpotet og brokkoli.","Krydre på toppen."] },

  { id: "kylling-suppe", name: "Kremet kyllingsuppe", image: IMG.kylling_suppe, protein: 38, kcal: 480, time: "30 min",
    ingredients: ["200 g kyllingfilet","1 L kyllingbuljong","1 dl fløte","Gulrot, sellerirot","Persille","Pasta-stjerner 50 g"],
    steps: ["Kok buljongen.","Tilsett kylling og grønnsaker i biter.","Kok 15 min.","Rør inn fløte og pasta, kok 5 min.","Topp med persille."] },

  { id: "kyllinglar-kikert", name: "Kyllinglår med kikerter", image: IMG.kyllinglar, protein: 44, kcal: 620, time: "40 min",
    ingredients: ["200 g kyllinglår","1 boks kikerter","1 dl tomatpassata","Spisskum","Hvitløk","Spinat"],
    steps: ["Brun kyllinglårene i panne.","Tilsett krydder, kikerter og tomat.","Småkok 25 min.","Rør inn spinat siste 3 min.","Server varm."] },

  { id: "kylling-katsu", name: "Kylling katsu med ris", image: IMG.kylling_katsu, protein: 46, kcal: 680, time: "30 min",
    ingredients: ["200 g kyllingfilet","Panko","1 egg","100 g ris","Katsu-saus","Spisskålsalat"],
    steps: ["Bank kyllingen flat.","Vend i egg og panko.","Stek i panne 4 min pr. side.","Skjær i strimler og legg over ris.","Hell over katsu-saus."] },

  { id: "kylling-bakad", name: "Bakt kylling med fetaost", image: IMG.kylling_fetaost, protein: 47, kcal: 590, time: "30 min",
    ingredients: ["220 g kyllingfilet","60 g fetaost","Cherrytomater","Oliven","Oregano","Olivenolje"],
    steps: ["Legg kylling i ildfast form.","Topp med fetaost, tomater og oliven.","Drypp over olje og krydder.","Stek i ovn 25 min på 200 °C.","Server med salat."] },

  { id: "kylling-rosmarin", name: "Rosmarin-kylling med poteter", image: IMG.kylling_rosmarin, protein: 45, kcal: 600, time: "35 min",
    ingredients: ["220 g kyllingfilet","300 g småpoteter","Fersk rosmarin","Hvitløk","Smør, olivenolje","Sitron"],
    steps: ["Stek potetene i ovn 25 min.","Stek kylling med rosmarin og hvitløk 5 min pr. side.","Tilsett smør og sitronsaft.","Anrett poteter og kylling.","Drypp smørsaus over."] },

  { id: "kylling-honning-sennep", name: "Honning-sennep kylling", image: IMG.honning_sennep, protein: 43, kcal: 580, time: "25 min",
    ingredients: ["200 g kyllingfilet","1 ss honning","1 ss dijonsennep","100 g ris","Asparges","Olivenolje"],
    steps: ["Kok ris.","Bland honning og sennep til marinade.","Pensle kyllingen, stek 5 min pr. side.","Damp asparges i 4 min.","Server kyllingen over ris med asparges."] },

  { id: "kylling-pesto", name: "Pestokylling med couscous", image: IMG.kylling_pesto, protein: 44, kcal: 610, time: "20 min",
    ingredients: ["200 g kyllingfilet","2 ss pesto","80 g couscous","Cherrytomater","Mozzarella mini","Ruccola"],
    steps: ["Lag couscous med kokende vann.","Stek kyllingen 6 min.","Vend kyllingen i pesto.","Bland med couscous, tomater og mozzarella.","Topp med ruccola."] },

  // STORFE (19-30)
  { id: "wok-storfe", name: "Wokkjøtt med nudler", image: IMG.noodle, protein: 42, kcal: 600, time: "20 min",
    ingredients: ["180 g storfekjøtt i strimler","100 g eggnudler","Paprika, gulrot, brokkoli","Soya, østers, sesam","Hvitløk, ingefær"],
    steps: ["Kok nudlene.","Stek kjøttet på sterk varme 2 min.","Tilsett grønnsaker, stek 3 min.","Hell på sauser og nudler.","Rør sammen og server."] },

  { id: "hamburger-sotpotet", name: "Hamburger med søtpotetfries", image: IMG.burger, protein: 45, kcal: 680, time: "30 min",
    ingredients: ["180 g kjøttdeig (mager)","Proteinbrød","300 g søtpotet","Cheddar","Salat, tomat","Burgersaus"],
    steps: ["Skjær søtpotet i staver, stek i ovn 25 min.","Form burger og stek 4 min pr. side.","Legg ost på burgeren siste minutt.","Anrett i brød med salat og tomat.","Server med fries."] },

  { id: "kjottboller-tomat", name: "Kjøttboller i tomatsaus", image: IMG.kjottboller, protein: 44, kcal: 600, time: "30 min",
    ingredients: ["200 g kjøttdeig","1 egg","Løk","2 dl tomatpassata","100 g pasta","Basilikum, parmesan"],
    steps: ["Form kjøttdeig til boller.","Stek bollene gyldne.","Tilsett løk og passata, småkok 15 min.","Kok pastaen.","Server kjøttbollene over pasta med parmesan."] },

  { id: "indrefilet-pepper", name: "Indrefilet med peppersaus", image: IMG.steak, protein: 48, kcal: 670, time: "25 min",
    ingredients: ["180 g indrefilet","1 dl fløte","2 ss pepperkorn","Cognac (valgfritt)","250 g småpoteter","Asparges"],
    steps: ["Kok potetene.","Stek biffen 2 min pr. side.","Lag saus av fløte og pepper i samme panne.","Damp asparges i 4 min.","Anrett alt med sausen over."] },

  { id: "bibimbap-biff", name: "Bibimbap med biff", image: IMG.korean_bowl, protein: 43, kcal: 640, time: "30 min",
    ingredients: ["150 g biff","80 g ris","Spinat, gulrot, sopp","1 egg","Gochujang","Sesamolje, soya"],
    steps: ["Kok ris.","Stek biff i strimler 3 min.","Stek grønnsaker hver for seg.","Stek et speilegg.","Anrett alt på risen og topp med gochujang."] },

  { id: "bolognese", name: "Bolognese med pasta", image: IMG.pasta_bolognese, protein: 41, kcal: 660, time: "35 min",
    ingredients: ["200 g kjøttdeig","Løk, gulrot, hvitløk","2 dl tomatpassata","100 g spaghetti","Parmesan","Olivenolje, oregano"],
    steps: ["Finhakk grønnsakene og fres i olje.","Brun kjøttdeigen i pannen.","Tilsett passata og krydder, småkok 20 min.","Kok pastaen al dente.","Topp med parmesan og server."] },

  { id: "storfegryte", name: "Storfegryte med rotgrønnsaker", image: IMG.storfegryte, protein: 45, kcal: 580, time: "60 min",
    ingredients: ["220 g storfekjøtt i terninger","Gulrot, sellerirot, kålrot","1 L kjøttbuljong","Laurbærblad, timian","2 ss tomatpuré","Persille"],
    steps: ["Brun kjøttet i en kjele.","Tilsett rotgrønnsaker og krydder.","Hell på buljong og tomatpuré.","Småkok i 45 min.","Topp med persille."] },

  { id: "filet-mignon", name: "Filet mignon med grønnsaker", image: IMG.steak, protein: 48, kcal: 600, time: "20 min",
    ingredients: ["180 g indrefilet","Brokkoli, asparges","Hvitløkssmør","Salt, pepper","Sitronpepper"],
    steps: ["Krydre biffen godt.","Stek 2 min pr. side i panne.","La biffen hvile under folie.","Damp grønnsakene.","Server med hvitløkssmør smeltet over."] },

  { id: "steakwrap", name: "Steakwrap med jalapeño", image: IMG.steak_wrap, protein: 42, kcal: 590, time: "20 min",
    ingredients: ["180 g biff i strimler","2 wraps","Jalapeño","Salat, rødløk","Cheddar","Light rømme"],
    steps: ["Stek biffstrimlene i 3 min.","Varm wraps.","Smør på rømme.","Legg på biff, salat, rødløk og jalapeño.","Topp med ost og rull stramt."] },

  { id: "mongolsk-biff", name: "Mongolsk biff med ris", image: IMG.mongolsk_biff, protein: 44, kcal: 660, time: "25 min",
    ingredients: ["200 g biff i strimler","80 g ris","Soya, brun sukker","Ingefær, hvitløk","Vårløk"],
    steps: ["Kok risen.","Vend biffen i litt potetmel.","Stek biffen sprø i panne.","Lag saus av soya, sukker, ingefær.","Vend biffen i sausen, server over ris."] },

  { id: "asian-beef-noodle", name: "Asian beef noodle bowl", image: IMG.noodle, protein: 43, kcal: 620, time: "20 min",
    ingredients: ["180 g biff","100 g eggnudler","Pak choi","Soya, sriracha","Sesamfrø","Lime"],
    steps: ["Kok nudler.","Stek biffen rask 3 min.","Damp pak choi 2 min.","Bland nudler med soya og sriracha.","Topp med biff, sesam og lime."] },

  { id: "carpaccio-salat", name: "Carpaccio-salat med ruccola", image: IMG.beef_carpaccio, protein: 35, kcal: 460, time: "10 min",
    ingredients: ["120 g carpaccio (rå biff)","Ruccola","30 g parmesan","Pinjekjerner","Olivenolje, sitron","Pepper"],
    steps: ["Legg carpaccio på tallerken.","Topp med ruccola.","Riv over parmesan.","Strø på pinjekjerner.","Drypp over olje, sitron og pepper."] },

  // FISK & SJØMAT (31-44)
  { id: "sushibowl-laks", name: "Sushibowl med laks", image: IMG.sushi, protein: 41, kcal: 580, time: "20 min",
    ingredients: ["150 g rå laks (sushikvalitet)","100 g sushiris","Edamame","Avokado","Soya, wasabi","Sesamfrø, nori"],
    steps: ["Kok risen med sushieddik.","Skjær laksen i terninger.","Anrett ris, laks, edamame og avokado i en bolle.","Topp med sesam, nori og soya.","Server med wasabi."] },

  { id: "tunfiskbiff-sesam", name: "Tunfiskbiff med sesam", image: IMG.tunfisk_biff, protein: 46, kcal: 520, time: "15 min",
    ingredients: ["180 g tunfiskfilet","Sesamfrø","Soya, ingefær","Edamame","80 g ris","Lime"],
    steps: ["Kok risen.","Vend tunfisken i sesam.","Skjær 1 min pr. side på sterk varme.","Skjær i skiver.","Server med ris, edamame og soya."] },

  { id: "reker-hvitloek", name: "Reker i hvitløkssmør", image: IMG.reker, protein: 38, kcal: 480, time: "15 min",
    ingredients: ["250 g rensede reker","3 fedd hvitløk","2 ss smør","Persille, sitron","Brød eller pasta 80 g"],
    steps: ["Smelt smør i panne med hvitløk.","Tilsett reker, stek 3 min.","Tilsett persille og sitronsaft.","Server umiddelbart med brød eller pasta."] },

  { id: "torsk-bonnesalat", name: "Bakt torsk med bønnesalat", image: IMG.hvitfisk, protein: 42, kcal: 510, time: "25 min",
    ingredients: ["220 g torskefilet","1 boks hvite bønner","Tomat, rødløk","Olivenolje, sitron","Persille","Salt, pepper"],
    steps: ["Stek torsken i ovn 15 min på 200 °C.","Bland bønner, tomat og rødløk.","Drypp over olje og sitron.","Topp med persille.","Server torsk på bønnesalat."] },

  { id: "sjokrepsalat", name: "Sjøkrepssalat med avokado", image: IMG.sjokreps, protein: 36, kcal: 460, time: "10 min",
    ingredients: ["200 g sjøkreps eller scampi","Avokado","Cherrytomater","Salatblader","Light rømmedressing","Sitron"],
    steps: ["Skyll sjøkrepsene.","Anrett salat, avokado og tomater.","Topp med sjøkrepsene.","Drypp over dressing og sitron.","Server kald."] },

  { id: "laks-carpaccio", name: "Laksecarpaccio", image: IMG.laks_carpaccio, protein: 35, kcal: 420, time: "10 min",
    ingredients: ["150 g rå laks i tynne skiver","Kapers, rødløk","Olivenolje, sitron","Dill","Sennep-honning-dressing"],
    steps: ["Legg laksen i tynne skiver på tallerken.","Strø over kapers og finhakket rødløk.","Drypp over olje og sitron.","Topp med dill.","Server med dressingen ved siden av."] },

  { id: "rokelaks-egg", name: "Røkelaks med eggerøre", image: IMG.rokelaks, protein: 38, kcal: 470, time: "10 min",
    ingredients: ["3 egg","100 g røkelaks","2 fullkornsbrød","Smør","Gressløk","Pepper"],
    steps: ["Pisk eggene med en klatt smør.","Stek på lav varme til kremete.","Rist brødskivene.","Anrett med røkelaks oppå brødet.","Topp med eggerøre og gressløk."] },

  { id: "fiskekaker", name: "Fiskekaker med poteter", image: IMG.fiskekaker, protein: 40, kcal: 520, time: "25 min",
    ingredients: ["250 g fiskedeig","2 egg","300 g poteter","Erter","Smør","Persille, salt"],
    steps: ["Kok potetene.","Bland fiskedeig med egg og krydder.","Form kaker, stek 4 min pr. side.","Damp ertene.","Server fiskekaker med poteter og erter."] },

  { id: "krabbecake", name: "Krabbecake med salat", image: IMG.krabbekake, protein: 35, kcal: 460, time: "20 min",
    ingredients: ["200 g krabbekjøtt","1 egg","Panko","Salat, sitron","Aioli","Salt, pepper"],
    steps: ["Bland krabbekjøtt, egg og panko.","Form kaker.","Stek 3 min pr. side.","Anrett på salat.","Topp med aioli og sitron."] },

  { id: "sei-bank", name: "Grillet seibank", image: IMG.grillet_sei, protein: 44, kcal: 500, time: "20 min",
    ingredients: ["220 g sei","Sitron","Olivenolje","Brokkoli, gulrot","Smør, persille","Salt, pepper"],
    steps: ["Krydre seien.","Stek 4 min pr. side i panne.","Damp brokkoli og gulrot.","Smelt smør med persille.","Server seien med grønnsaker og smør."] },

  { id: "sashimi", name: "Sashimi-tallerken", image: IMG.sashimi, protein: 38, kcal: 380, time: "10 min",
    ingredients: ["150 g rå laks","150 g rå tunfisk","Soya, wasabi","Ingefær","Edamame","Sesamfrø"],
    steps: ["Skjær fisken i tynne skiver.","Anrett på tallerken.","Server med soya og wasabi.","Topp med sesam.","Server med edamame og syltet ingefær."] },

  { id: "steinbit", name: "Steinbit med skinnstekt potet", image: IMG.steinbit_bilde, protein: 43, kcal: 580, time: "30 min",
    ingredients: ["220 g steinbit","300 g poteter","Smør","Sitron","Dill","Salt, pepper"],
    steps: ["Skjær potetene i skiver, stek i smør 15 min.","Krydre steinbiten.","Stek fisken 4 min pr. side.","Topp med dill.","Server med poteter og sitron."] },

  { id: "fisk-karri", name: "Hvit fisk i karri", image: IMG.fisk_karri, protein: 40, kcal: 540, time: "25 min",
    ingredients: ["220 g hvit fisk","1 dl kokosmelk light","Karri","80 g ris","Spinat","Lime"],
    steps: ["Kok risen.","Lag karrisaus med kokosmelk og krydder.","Tilsett fisken i sausen, kok 8 min.","Rør inn spinat siste minuttene.","Server med ris og lime."] },

  { id: "laks-salat", name: "Laksesalat med agurkbåter", image: IMG.laks_salat, protein: 39, kcal: 500, time: "15 min",
    ingredients: ["180 g varmrøkt laks","Blandet salat","Agurk, cherrytomater","Egg","Olivenolje, sitron","Dill"],
    steps: ["Kok ett hardkokt egg.","Anrett salat, agurk og tomater.","Del laksen i biter, legg over.","Topp med egg i båter.","Drypp over olje og sitron med dill."] },

  // EGG & MEIERI (45-54)
  { id: "protein-pannekake", name: "Proteinpannekaker med kvarg", image: IMG.pannekake, protein: 42, kcal: 540, time: "15 min",
    ingredients: ["60 g havremel","30 g proteinpulver vanilje","2 egg","1 dl skummet melk","100 g kvarg","Bær"],
    steps: ["Bland alt unntatt kvarg og bær til en røre.","Stek små pannekaker.","Anrett med kvarg mellom.","Topp med bær.","Server umiddelbart."] },

  { id: "omelett-spinat", name: "Tre-egg omelett med spinat", image: IMG.omelett, protein: 36, kcal: 460, time: "10 min",
    ingredients: ["3 egg","Spinat","30 g fetaost","Cherrytomater","Olivenolje","Salt, pepper"],
    steps: ["Pisk eggene med salt.","Stek spinat og tomater først 2 min.","Hell over eggene.","Strø over fetaost.","Brett omeletten dobbel og server."] },

  { id: "hytteost-pancake", name: "Hytteostpancakes", image: IMG.pannekake_frokost, protein: 35, kcal: 480, time: "15 min",
    ingredients: ["150 g cottage cheese","2 egg","40 g havregryn","Banan","Kanel","Bær"],
    steps: ["Bland alt i en blender.","Stek små pancakes på lav varme 2 min pr. side.","Anrett i en stabel.","Topp med bær.","Server varm."] },

  { id: "frittata", name: "Frittata med tomat og fetaost", image: IMG.frittata, protein: 34, kcal: 470, time: "20 min",
    ingredients: ["5 egg","100 g cherrytomater","60 g fetaost","Spinat","Løk","Basilikum"],
    steps: ["Forvarm ovn til 180 °C.","Stek løk og spinat i ovnsfast panne.","Bland egg, hell i pannen.","Topp med tomater og fetaost.","Stek i ovn 12 min."] },

  { id: "eggerore-rokelaks", name: "Eggrøre med røkelaks", image: IMG.rokelaks, protein: 38, kcal: 460, time: "10 min",
    ingredients: ["4 egg","80 g røkelaks","Gressløk","Smør","Pepper","Fullkornstoast"],
    steps: ["Pisk eggene lett.","Smelt smør i panne på lav varme.","Hell i egg, rør sakte til kremete.","Topp med biter av røkelaks.","Server på toast med gressløk."] },

  { id: "egg-muffins", name: "Eggemuffins med skinke", image: IMG.egg, protein: 32, kcal: 380, time: "25 min",
    ingredients: ["6 egg","100 g skinke i terninger","60 g revet ost","Paprika","Salt, pepper","Persille"],
    steps: ["Forvarm ovn til 180 °C.","Pisk egg, krydre.","Fordel skinke, paprika og ost i muffinsformer.","Hell over eggblanding.","Stek 15 min."] },

  { id: "yoghurt-bolle", name: "Yoghurtbolle med granola", image: IMG.yoghurt, protein: 33, kcal: 450, time: "5 min",
    ingredients: ["300 g gresk yoghurt 10%","30 g granola","Bær","1 ss peanøttsmør","Honning","Chiafrø"],
    steps: ["Ha yoghurt i en bolle.","Topp med granola og bær.","Legg på en klatt peanøttsmør.","Drypp over honning og chiafrø.","Server kald."] },

  { id: "bygg-grot", name: "Bygggrøt med kvarg", image: IMG.bygggrøt, protein: 31, kcal: 420, time: "15 min",
    ingredients: ["50 g bygggryn","2 dl skummet melk","150 g kvarg","Bær","Kanel","Honning"],
    steps: ["Kok byggrynene i melk 10 min.","La avkjøle litt.","Topp med kvarg.","Strø på bær og kanel.","Drypp over honning."] },

  { id: "protein-smoothie", name: "Proteinsmoothie med banan", image: IMG.smoothie, protein: 38, kcal: 480, time: "5 min",
    ingredients: ["30 g proteinpulver","1 banan","3 dl melk","1 ss peanøttsmør","20 g havre","Is"],
    steps: ["Ha alt i en blender.","Kjør til glatt konsistens.","Hell i et glass.","Server umiddelbart."] },

  { id: "skyr-bolle", name: "Skyrbolle med nøtter og bær", image: IMG.skyr, protein: 34, kcal: 420, time: "5 min",
    ingredients: ["250 g skyr","Bær","30 g valnøtter","1 ss honning","Kanel"],
    steps: ["Ha skyr i en bolle.","Topp med bær og valnøtter.","Drypp over honning.","Strø på kanel."] },

  // VEGETAR / BELGVEKSTER (55-67)
  { id: "tofu-karri-ris", name: "Tofu med karri og ris", image: IMG.tofu, protein: 32, kcal: 540, time: "25 min",
    ingredients: ["200 g fast tofu","1 dl kokosmelk light","Karri","80 g ris","Brokkoli","Soya, hvitløk"],
    steps: ["Press og skjær tofu i terninger.","Stek tofuen til den er sprø.","Lag karrisaus med kokosmelk og krydder.","Tilsett tofu og brokkoli.","Server over ris."] },

  { id: "falafelwrap", name: "Falafelwrap med tzatziki", image: IMG.falafel, protein: 30, kcal: 570, time: "20 min",
    ingredients: ["6 falafel","2 wraps","Hummus","Salat, tomat, agurk","Tzatziki","Sitron"],
    steps: ["Varm falafel i ovn 10 min.","Smør hummus på wrap.","Fyll med falafel og grønnsaker.","Topp med tzatziki.","Rull stramt og server."] },

  { id: "linsegryte", name: "Linsegryte med spinat", image: IMG.linsegryte, protein: 31, kcal: 480, time: "30 min",
    ingredients: ["200 g røde linser","1 dl tomatpassata","Spinat","Løk, hvitløk","Spisskum","Salt"],
    steps: ["Fres løk og hvitløk.","Tilsett linser og krydder.","Hell på tomat og vann, kok 20 min.","Rør inn spinat.","Smak til og server."] },

  { id: "kikertesalat", name: "Kikertesalat med fetaost", image: IMG.salat_greek, protein: 30, kcal: 510, time: "10 min",
    ingredients: ["1 boks kikerter","60 g fetaost","Cherrytomater, agurk","Rødløk","Olivenolje, sitron","Persille"],
    steps: ["Skyll og avrenn kikertene.","Bland med tomater, agurk og rødløk.","Smuldre fetaost over.","Drypp over olje og sitron.","Topp med persille."] },

  { id: "quinoa-edamame", name: "Quinoabolle med edamame", image: IMG.bowl, protein: 33, kcal: 540, time: "20 min",
    ingredients: ["100 g quinoa","100 g edamame","Avokado","Cherrytomater","Sesamfrø","Soya-vinaigrette"],
    steps: ["Kok quinoa i 15 min.","Kok edamame i 5 min.","Anrett quinoa, edamame og grønnsaker.","Topp med avokado og sesam.","Drypp over vinaigrette."] },

  { id: "tempeh-stir", name: "Tempeh-stirfry", image: IMG.tempeh, protein: 35, kcal: 550, time: "20 min",
    ingredients: ["200 g tempeh","Paprika, brokkoli","80 g ris","Soya, sesamolje","Hvitløk, ingefær","Sesamfrø"],
    steps: ["Kok ris.","Skjær tempeh i biter, stek 5 min.","Tilsett grønnsaker, stek 4 min.","Hell på soya og sesamolje.","Server over ris med sesam."] },

  { id: "bonnebrenner", name: "Bønnebrenner med søtpotet", image: IMG.vegetar, protein: 32, kcal: 580, time: "30 min",
    ingredients: ["1 boks sorte bønner","250 g søtpotet","30 g havremel","Krydder","Avokado","Light rømme"],
    steps: ["Kok søtpotet og mos.","Bland med bønner og havremel.","Form burgere.","Stek 4 min pr. side.","Server med avokado og rømme."] },

  { id: "linseburger", name: "Linseburger med yoghurt", image: IMG.vegetar, protein: 30, kcal: 540, time: "30 min",
    ingredients: ["200 g kokte linser","1 egg","30 g havre","Løk","Spisskum","Gresk yoghurt"],
    steps: ["Mos linsene grovt.","Bland med egg, havre og krydder.","Form burgere.","Stek 4 min pr. side.","Server med yoghurt på toppen."] },

  { id: "edamame-salat", name: "Edamamesalat med mynte", image: IMG.edamame_salat, protein: 32, kcal: 460, time: "10 min",
    ingredients: ["200 g edamame","60 g fetaost","Mynte, mint","Sitron, olivenolje","Granateple","Salt"],
    steps: ["Kok edamame i 5 min.","Bland med fetaost og mynte.","Drypp over olje og sitron.","Topp med granateple.","Server som tilbehør eller hovedrett."] },

  { id: "veggie-chili", name: "Veggie chili med kvarg", image: IMG.veggie_chili, protein: 33, kcal: 520, time: "30 min",
    ingredients: ["1 boks kidneybønner","1 boks svarte bønner","2 dl tomatpassata","Mais","Tacokrydder","Kvarg"],
    steps: ["Stek løk og hvitløk.","Tilsett bønner, tomat og krydder.","Småkok 20 min.","Topp med kvarg.","Server varm."] },

  { id: "halloumi-salat", name: "Halloumi-salat", image: IMG.halloumi, protein: 34, kcal: 540, time: "15 min",
    ingredients: ["180 g halloumi","Vannmelon","Mynte","Olivenolje","Sitron","Pepper"],
    steps: ["Skjær halloumi i skiver.","Stek 2 min pr. side.","Bland med vannmelon og mynte.","Drypp over olje og sitron.","Server umiddelbart."] },

  { id: "linseskal", name: "Linseskål med kikerter", image: IMG.bowl, protein: 30, kcal: 530, time: "20 min",
    ingredients: ["100 g linser","1/2 boks kikerter","Avokado","Spinat","Tahini","Sitron"],
    steps: ["Kok linser i 15 min.","Skyll og bland med kikerter.","Topp med spinat og avokado.","Drypp over tahini og sitron.","Server lun eller kald."] },

  { id: "tofu-peanott", name: "Tofu-skvær med peanøttsaus", image: IMG.tofu, protein: 33, kcal: 580, time: "25 min",
    ingredients: ["200 g tofu","2 ss peanøttsmør","Soya, lime","80 g ris","Spinat","Sesam"],
    steps: ["Skjær tofu i terninger, stek sprø.","Lag peanøttsaus av smør, soya og lime.","Kok ris.","Vend tofu i sausen.","Server over ris med spinat og sesam."] },

  // FROKOST (68-75)
  { id: "havre-peanottsmor", name: "Proteinhavre med peanøttsmør", image: IMG.havre, protein: 34, kcal: 540, time: "10 min",
    ingredients: ["60 g havregryn","20 g proteinpulver","2 dl melk","1 ss peanøttsmør","Banan","Kanel"],
    steps: ["Kok havre i melk.","Rør inn proteinpulver.","Topp med banan og peanøttsmør.","Strø over kanel.","Server varm."] },

  { id: "egg-benedict", name: "Egg benedict med skinke", image: IMG.egg_benedict, protein: 32, kcal: 510, time: "20 min",
    ingredients: ["3 egg","80 g spekeskinke","2 engelske muffins","Hollandaise (light)","Spinat","Pepper"],
    steps: ["Lag posjerte egg 3 min.","Rist muffinsene.","Legg på spinat og skinke.","Topp med egg og hollandaise.","Pepre på toppen."] },

  { id: "avokado-toast", name: "Avokado-toast med egg", image: IMG.avokado_toast, protein: 30, kcal: 520, time: "10 min",
    ingredients: ["2 grovbrød","1 avokado","2 egg","40 g fetaost","Chiliflak","Sitron"],
    steps: ["Rist brødskivene.","Mos avokado med sitron.","Stek 2 speilegg.","Smør avokado på brødet, legg egg over.","Smuldre fetaost og dryss chili."] },

  { id: "skinke-omelett", name: "Skinke-omelett", image: IMG.omelett, protein: 33, kcal: 470, time: "10 min",
    ingredients: ["3 egg","60 g skinke","30 g revet ost","Vårløk","Salt, pepper","Smør"],
    steps: ["Pisk eggene.","Smelt smør i panne.","Stek eggene på lav varme.","Strø over skinke, ost og vårløk.","Brett dobbel og server."] },

  { id: "quinoa-frokost", name: "Quinoa-frokostbolle", image: IMG.bowl, protein: 30, kcal: 470, time: "20 min",
    ingredients: ["80 g quinoa","2 dl melk","20 g proteinpulver","Bær","Mandler","Honning"],
    steps: ["Kok quinoa i melk 15 min.","Rør inn proteinpulver.","Hell i bolle.","Topp med bær og mandler.","Drypp over honning."] },

  { id: "muesli-skyr", name: "Proteinmüsli med skyr", image: IMG.muesli, protein: 32, kcal: 490, time: "5 min",
    ingredients: ["250 g skyr","40 g müsli","Bær","Kanel","Honning","Mandler"],
    steps: ["Ha skyr i en bolle.","Topp med müsli og bær.","Strø over mandler og kanel.","Drypp over honning."] },

  { id: "protein-vaffel", name: "Proteinvafler med bær", image: IMG.protein_vaffel, protein: 35, kcal: 520, time: "15 min",
    ingredients: ["100 g havremel","30 g proteinpulver","2 egg","2 dl skummet melk","Bær","Kvarg"],
    steps: ["Bland alt til en røre.","Stek i vaffeljern 3 min.","Anrett med kvarg.","Topp med bær.","Server umiddelbart."] },

  { id: "frokost-smoothie", name: "Frokostsmoothie med kefir", image: IMG.smoothie, protein: 32, kcal: 420, time: "5 min",
    ingredients: ["3 dl kefir","30 g proteinpulver","Banan","Bær","20 g havre","Honning"],
    steps: ["Ha alt i en blender.","Kjør glatt.","Hell i et høyt glass.","Server umiddelbart."] },

  // SALATER (76-83)
  { id: "greek-salad-kylling", name: "Greek salad med kylling", image: IMG.salat_greek, protein: 44, kcal: 570, time: "15 min",
    ingredients: ["180 g kyllingfilet","Tomat, agurk, rødløk","80 g fetaost","Oliven","Olivenolje, oregano","Sitron"],
    steps: ["Stek kylling og skjær i biter.","Bland grønnsakene.","Topp med fetaost og oliven.","Legg på kylling.","Drypp over olje, sitron og oregano."] },

  { id: "cobb-salat", name: "Cobb salat", image: IMG.cobb_salat, protein: 45, kcal: 620, time: "20 min",
    ingredients: ["150 g kylling","2 egg","60 g bacon","Avokado","Blåmuggost","Cherrytomater"],
    steps: ["Kok eggene 8 min.","Stek kylling og bacon.","Anrett salat i striper på tallerken.","Topp med blåmuggost.","Server med vinaigrette."] },

  { id: "caesar-kalkun", name: "Caesar salad med kalkun", image: IMG.salat_caesar, protein: 42, kcal: 550, time: "15 min",
    ingredients: ["180 g kalkunfilet","Romanosalat","Caesardressing (light)","Parmesan","Croutons","Sitron"],
    steps: ["Stek kalkunen 5 min.","Skjær i strimler.","Bland salat med dressing.","Topp med kalkun, parmesan og croutons.","Press litt sitron over."] },

  { id: "spinat-oksesalat", name: "Spinatsalat med oksekjøtt", image: IMG.spinat_salat, protein: 43, kcal: 540, time: "15 min",
    ingredients: ["180 g okse-strimler","Babyspinat","Fetaost","Granateple","Valnøtter","Balsamico"],
    steps: ["Stek oksestrimler 3 min.","Anrett spinat.","Topp med fetaost og granateple.","Legg på oksen og valnøttene.","Drypp over balsamico."] },

  { id: "nicoise", name: "Niçoise salat", image: IMG.nicoise, protein: 40, kcal: 530, time: "20 min",
    ingredients: ["1 boks tunfisk","2 egg","200 g potet","Sukkererter","Oliven","Sitron"],
    steps: ["Kok poteter og egg.","Damp sukkererter.","Anrett alt i striper på fat.","Topp med tunfisk og oliven.","Drypp over sitron og olje."] },

  { id: "asian-chicken-salat", name: "Asian chicken salad", image: IMG.salat_fargerik, protein: 44, kcal: 540, time: "15 min",
    ingredients: ["180 g kylling","Spisskål","Gulrot","Sesamdressing","Cashewnøtter","Vårløk"],
    steps: ["Stek kylling og skjær i strimler.","Strimle spisskål og gulrot.","Bland med dressing.","Topp med kylling og cashew.","Pynt med vårløk."] },

  { id: "tunfisk-eggsalat", name: "Tunfisksalat med eggsalat", image: IMG.tunfisk_egg_salat, protein: 38, kcal: 510, time: "15 min",
    ingredients: ["1 boks tunfisk","2 egg","Salatblader","Cherrytomater","Light majones","Sitron"],
    steps: ["Kok eggene hardt.","Mos eggene med majones.","Anrett salat.","Topp med tunfisk og eggesalat.","Drypp over sitron."] },

  { id: "bonne-kornsalat", name: "Bønne- og kornsalat", image: IMG.salat_greek, protein: 30, kcal: 530, time: "20 min",
    ingredients: ["1 boks kikerter","80 g bygg","Fetaost","Granateple","Mynte","Sitron, olivenolje"],
    steps: ["Kok byggryn i 25 min.","Bland byggen med kikerter.","Topp med fetaost og granateple.","Drypp over olje og sitron.","Pynt med mynte."] },

  // INTERNASJONAL (84-99)
  { id: "pad-thai", name: "Pad thai med kylling", image: IMG.pad_thai, protein: 42, kcal: 640, time: "25 min",
    ingredients: ["180 g kylling","100 g risnudler","2 egg","Vårløk","Peanøtter","Pad thai-saus"],
    steps: ["Kok risnudlene.","Stek kylling og hell på saus.","Tilsett pisket egg, rør inn.","Bland med nudlene.","Topp med vårløk og peanøtter."] },

  { id: "pho-biff", name: "Pho med biff", image: IMG.pho, protein: 40, kcal: 560, time: "30 min",
    ingredients: ["150 g biff i tynne skiver","100 g risnudler","1 L oksebuljong","Stjerneanis, ingefær","Mynte, koriander","Lime"],
    steps: ["Kok buljong med krydder 15 min.","Kok risnudlene.","Legg biff i bunnen av bolle.","Hell over kokende buljong.","Topp med urter og lime."] },

  { id: "kylling-bento", name: "Kyllingteriyaki bento", image: IMG.bowl_bento, protein: 44, kcal: 600, time: "25 min",
    ingredients: ["200 g kylling","Teriyakisaus","80 g ris","Edamame","Gulrot, agurk","Sesamfrø"],
    steps: ["Kok ris.","Stek kylling og hell over teriyaki.","Forbered grønnsakene i biter.","Anrett alt i en bento-boks.","Topp med sesamfrø."] },

  { id: "butter-chicken", name: "Indisk butter chicken", image: IMG.butter_chicken, protein: 43, kcal: 660, time: "30 min",
    ingredients: ["200 g kylling","2 dl tomatpassata","1 dl matfløte","Garam masala","80 g ris","Koriander"],
    steps: ["Stek kylling i biter med krydder.","Tilsett passata og fløte.","Småkok 15 min.","Server over ris.","Topp med koriander."] },

  { id: "lamgryte", name: "Marokkansk lamgryte", image: IMG.lamgryte, protein: 41, kcal: 620, time: "60 min",
    ingredients: ["200 g lammekjøtt","1 boks kikerter","Tomatpassata","Aprikoser","Ras el hanout","Couscous 60 g"],
    steps: ["Brun lammekjøttet.","Tilsett krydder, kikerter, tomat og aprikoser.","Småkok 40 min.","Lag couscous.","Server gryten over couscous."] },

  { id: "carbonara", name: "Spaghetti carbonara", image: IMG.pasta_carbonara, protein: 40, kcal: 680, time: "20 min",
    ingredients: ["100 g spaghetti","80 g bacon","2 egg","40 g parmesan","Pepper","Persille"],
    steps: ["Kok spaghetti.","Stek bacon sprøtt.","Pisk egg med parmesan.","Bland varm pasta med bacon og eggblanding.","Pepre godt og server."] },

  { id: "mousaka", name: "Greek mousaka", image: IMG.moussaka, protein: 42, kcal: 640, time: "60 min",
    ingredients: ["200 g kjøttdeig (lam el. okse)","Aubergine","Tomatpassata","Bechamel light","Parmesan","Oregano"],
    steps: ["Stek aubergineskiver.","Brun kjøttdeig med tomat og krydder.","Lagvis i form: aubergine, kjøtt, bechamel.","Topp med parmesan.","Stek i ovn 30 min på 200 °C."] },

  { id: "burrito-bowl", name: "Mexican burrito bowl", image: IMG.burrito_bowl, protein: 44, kcal: 640, time: "25 min",
    ingredients: ["200 g kjøttdeig","80 g ris","Svarte bønner","Mais","Avokado","Salsa"],
    steps: ["Kok ris.","Brun kjøttdeig med tacokrydder.","Varm bønner og mais.","Anrett alt i en bolle.","Topp med avokado og salsa."] },

  { id: "gyudon", name: "Japansk gyudon", image: IMG.gyudon, protein: 41, kcal: 620, time: "20 min",
    ingredients: ["180 g biff i tynne skiver","1 løk","Soya, mirin","80 g ris","1 egg","Vårløk"],
    steps: ["Kok ris.","Stek løk og biff med soya og mirin.","Småkok 5 min.","Hell over ris.","Topp med rått egg og vårløk."] },

  { id: "kylling-currysuppe", name: "Curry-suppe med kylling", image: IMG.karri_suppe, protein: 38, kcal: 540, time: "25 min",
    ingredients: ["180 g kylling","1 dl kokosmelk light","Karri","Buljong","Risnudler 60 g","Koriander"],
    steps: ["Stek kylling med karri.","Tilsett kokosmelk og buljong.","Kok risnudler i suppen.","Smak til.","Topp med koriander."] },

  { id: "pulled-pork-wrap", name: "Pulled pork-wrap", image: IMG.pulled_pork, protein: 43, kcal: 620, time: "20 min",
    ingredients: ["180 g pulled pork (ferdig)","2 wraps","Coleslaw","BBQ-saus","Pickles","Salat"],
    steps: ["Varm pulled pork.","Bland med BBQ-saus.","Varm wraps.","Fyll wrap med kjøtt, coleslaw og pickles.","Rull stramt og server."] },

  { id: "sweet-sour", name: "Sweet & sour kylling", image: IMG.kylling_stir, protein: 43, kcal: 660, time: "25 min",
    ingredients: ["200 g kylling","Paprika, ananas","Sweet & sour-saus","80 g ris","Sesamfrø","Vårløk"],
    steps: ["Kok ris.","Stek kylling i biter.","Tilsett paprika og ananas.","Hell over saus, kok inn 3 min.","Server over ris med sesam."] },

  { id: "korean-bbq", name: "Korean BBQ-bowl", image: IMG.korean_bowl, protein: 44, kcal: 650, time: "25 min",
    ingredients: ["180 g biff","Gochujang, soya","80 g ris","Kimchi","Vårløk","Sesamolje"],
    steps: ["Marinér biff i gochujang og soya 10 min.","Kok ris.","Stek biffen i sesamolje 3 min.","Anrett over ris.","Topp med kimchi og vårløk."] },

  { id: "lasagne", name: "Lasagne med kjøttdeig", image: IMG.lasagne, protein: 42, kcal: 670, time: "60 min",
    ingredients: ["200 g kjøttdeig","Lasagneplater","Tomatpassata","Bechamel light","Parmesan","Oregano"],
    steps: ["Brun kjøttdeig med tomatpassata.","Lag bechamel light.","Lagvis i form: plater, kjøtt, bechamel.","Topp med parmesan.","Stek i ovn 30 min på 200 °C."] },

  { id: "souvlaki", name: "Souvlaki med tzatziki", image: IMG.souvlaki, protein: 44, kcal: 600, time: "30 min",
    ingredients: ["200 g kylling i terninger","Oregano, sitron","Tzatziki","1 pita","Tomat, agurk, rødløk","Olivenolje"],
    steps: ["Marinér kylling i krydder og sitron.","Tre på spyd.","Grill 10 min, snu underveis.","Varm pita.","Server med tzatziki og grønnsaker."] },

  { id: "kjottdeig-pizza", name: "Proteinpizza med kjøttdeig", image: IMG.pizza, protein: 42, kcal: 640, time: "30 min",
    ingredients: ["1 proteinpizzabunn","150 g kjøttdeig","Tomatpassata","Mozzarella","Paprika","Oregano"],
    steps: ["Brun kjøttdeigen.","Smør passata på bunn.","Topp med kjøttdeig, paprika og mozzarella.","Stek i ovn 12 min på 220 °C.","Strø over oregano."] },

  // ENKEL & RASKT (100-110)
  { id: "protein-milkshake", name: "Proteinmilkshake med kakao", image: IMG.milkshake, protein: 35, kcal: 420, time: "5 min",
    ingredients: ["30 g sjokoladeproteinpulver","3 dl skummet melk","1 banan","1 ss kakao","Is"],
    steps: ["Ha alt i en blender.","Kjør glatt.","Hell i et glass.","Server umiddelbart."] },

  { id: "tunfisk-pasta", name: "Pasta med tunfisk og tomat", image: IMG.pasta, protein: 38, kcal: 580, time: "15 min",
    ingredients: ["1 boks tunfisk","100 g pasta","2 dl tomatpassata","Hvitløk","Chili","Persille"],
    steps: ["Kok pastaen.","Fres hvitløk i olje.","Tilsett passata og tunfisk.","Kok 5 min.","Bland med pasta og persille."] },

  { id: "kylling-suppe-asia", name: "Kyllingsuppe med ingefær", image: IMG.kylling_suppe, protein: 36, kcal: 460, time: "20 min",
    ingredients: ["180 g kylling","1 L buljong","Ingefær, hvitløk","Risnudler 60 g","Pak choi","Vårløk"],
    steps: ["Kok buljong med ingefær og hvitløk.","Tilsett kylling i biter.","Kok 8 min.","Tilsett nudler og pak choi.","Topp med vårløk."] },

  { id: "wrap-kylling-salsa", name: "Kyllingwrap med salsa", image: IMG.wrap, protein: 41, kcal: 570, time: "15 min",
    ingredients: ["150 g kylling","2 wraps","Salsa","Avokado","Salat","Light rømme"],
    steps: ["Stek kylling i biter.","Varm wraps.","Smør rømme på wrap.","Fyll med kylling, salat, avokado og salsa.","Rull og skjær i to."] },

  { id: "biff-flatbrod", name: "Biffstrimler i flatbrød", image: IMG.biff_flatbrod, protein: 42, kcal: 590, time: "20 min",
    ingredients: ["180 g biff i strimler","2 flatbrød","Hummus","Salat, tomat","Rødløk","Sitron"],
    steps: ["Stek biffstrimler 3 min.","Varm flatbrød.","Smør hummus.","Legg på biff og grønnsaker.","Press sitron over og rull."] },

  { id: "stekt-laks-asia", name: "Stekt laks med edamame", image: IMG.laks, protein: 44, kcal: 580, time: "20 min",
    ingredients: ["180 g laks","100 g edamame","80 g ris","Soya, ingefær","Sesamfrø","Lime"],
    steps: ["Kok ris.","Stek laksen 4 min pr. side.","Kok edamame.","Anrett alt i en bolle.","Drypp over soya, ingefær og lime."] },

  { id: "hytteost-toast", name: "Cottage cheese-toast med egg", image: IMG.hytteost, protein: 32, kcal: 460, time: "10 min",
    ingredients: ["2 grovbrød","150 g cottage cheese","2 egg","Tomat","Pepper","Gressløk"],
    steps: ["Rist brødskivene.","Smør cottage cheese på brødet.","Stek 2 speilegg.","Legg egg over.","Topp med tomat, pepper og gressløk."] },

  { id: "yoghurt-protein", name: "Yoghurtparfait med protein", image: IMG.yoghurt, protein: 35, kcal: 470, time: "5 min",
    ingredients: ["250 g skyr","30 g proteinpulver","Bær","Granola","Honning","Mandler"],
    steps: ["Bland skyr og proteinpulver.","Lagvis i et glass: skyr, granola, bær.","Gjenta lagene.","Topp med mandler og honning."] },

  { id: "reke-pasta", name: "Reke- og hvitløkspasta", image: IMG.pasta_seafood, protein: 40, kcal: 620, time: "20 min",
    ingredients: ["200 g reker","100 g linguine","Hvitløk","Sitron","Chili","Persille"],
    steps: ["Kok pasta.","Fres hvitløk og chili i olje.","Tilsett reker, stek 3 min.","Bland med pasta.","Topp med persille og sitron."] },

  { id: "kyllingbiff-cesar", name: "Kyllingbiff cæsar", image: IMG.salat_caesar, protein: 45, kcal: 590, time: "20 min",
    ingredients: ["220 g kyllingfilet","Romanosalat","Cæsardressing","Parmesan","Croutons","Bacon"],
    steps: ["Krydre og stek kyllingen 6 min.","Stek bacon sprøtt.","Bland salat og dressing.","Skjær kyllingen i skiver.","Topp med kylling, bacon, parmesan og croutons."] },

  { id: "egg-avokado-salsa", name: "Egg med avokado og salsa", image: IMG.avokado_toast, protein: 31, kcal: 470, time: "10 min",
    ingredients: ["3 egg","1 avokado","Salsa","2 grovbrød","Chiliflak","Sitron"],
    steps: ["Stek 3 speilegg.","Mos avokado med sitron.","Smør avokado på brødet.","Legg eggene oppå.","Topp med salsa og chili."] }
];
