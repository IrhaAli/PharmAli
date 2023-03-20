// Get all drugs
const drugs = [
  "A-HYDROCORT",
  "A-METHAPRED",
  "A-POXIDE",
  "A.P.L.",
  "A/T/S",
  "ABACAVIR AND LAMIVUDINE",
  "ABACAVIR SULFATE",
  "ABACAVIR SULFATE AND LAMIVUDINE",
  "ABACAVIR SULFATE, LAMIVUDINE AND ZIDOVUDINE",
  "ABACAVIR SULFATE; LAMIVUDINE",
  "ABACAVIR; DOLUTEGRAVIR; LAMIVUDINE",
  "ABACAVIR; LAMIVUDINE",
  "ABELCET",
  "ABILIFY",
  "ABILIFY MAINTENA KIT",
  "ABILIFY MYCITE KIT",
  "ABIRATERONE ACETATE",
  "ABITREXATE",
  "ABLAVAR",
  "ABLYSINOL",
  "ABRAXANE",
  "ABREVA",
  "ABRILADA",
  "ABSORICA",
  "ABSORICA LD",
  "ABSTRAL",
  "ACALABRUTINIB",
  "ACAMPROSATE CALCIUM",
  "ACANYA",
  "ACARBOSE",
  "ACCOLATE",
  "ACCRETROPIN",
  "ACCRUFER",
  "ACCUNEB",
  "ACCUPRIL",
  "ACCURBRON",
  "ACCURETIC",
  "ACCUTANE",
  "ACEBUTOLOL HYDROCHLORIDE",
  "ACEON",
  "ACEPHEN",
  "ACETADOTE",
  "ACETAMINOPHEN",
  "ACETAMINOPHEN AND CODEINE PHOSPHATE",
  "ACETAMINOPHEN AND HYDROCODONE BITARTRATE",
  "ACETAMINOPHEN AND IBUPROFEN",
  "ACETAMINOPHEN AND PENTAZOCINE HYDROCHLORIDE",
  "ACETAMINOPHEN, ASPIRIN AND CAFFEINE",
  "ACETAMINOPHEN, ASPIRIN, AND CODEINE PHOSPHATE",
  "ACETAMINOPHEN, CAFFEINE AND DIHYDROCODEINE BITARTRATE",
  "ACETAMINOPHEN, CAFFEINE, AND DIHYDROCODEINE BITARTRATE",
  "ACETAMINOPHEN; OXYCODONE HYDROCHLORIDE",
  "ACETASOL",
  "ACETASOL HC",
  "ACETATED RINGER'S IN PLASTIC CONTAINER",
  "ACETAZOLAMIDE",
  "ACETAZOLAMIDE SODIUM",
  "ACETIC ACID",
  "ACETIC ACID 0.25% IN PLASTIC CONTAINER",
  "ACETIC ACID 2% IN AQUEOUS ALUMINUM ACETATE",
  "ACETIC ACID W/ HYDROCORTISONE",
  "ACETOHEXAMIDE",
  "ACETYLCYSTEINE",
  "ACHES-N-PAIN",
  "ACHROMYCIN",
  "ACHROMYCIN V",
  "ACILAC",
  "ACIPHEX",
  "ACIPHEX SPRINKLE",
  "ACITRETIN",
  "ACLOVATE",
  "ACTAHIST",
  "ACTEMRA",
  "ACTH",
  "ACTHAR",
  "ACTHAR GEL",
  "ACTHREL",
  "ACTICLATE",
  "ACTICLATE CAP",
  "ACTICORT",
  "ACTIDIL",
  "ACTIFED",
  "ACTIFED W/ CODEINE",
  "ACTIGALL",
  "ACTIMMUNE",
  "ACTIN-N",
  "ACTINEX",
  "ACTIQ",
  "ACTISITE",
  "ACTIVASE",
  "ACTIVELLA",
  "ACTONEL",
  "ACTONEL WITH CALCIUM (COPACKAGED)",
  "ACTOPLUS MET",
  "ACTOPLUS MET XR",
  "ACTOS",
  "ACTRON",
  "ACULAR",
  "ACULAR LS",
  "ACULAR PRESERVATIVE FREE",
  "ACUTECT",
  "ACUVAIL",
  "ACUVUE THERAVISION WITH KETOTIFEN",
  "ACYCLOVIR",
  "ACYCLOVIR IN SODIUM CHLORIDE 0.9% PRESERVATIVE FREE",
  "ACYCLOVIR SODIUM",
  "ACYLANID",
  "ACZONE",
  "ADAGEN",
  "ADAKVEO",
  "ADALAT",
  "ADALAT CC",
  "ADAPALENE",
  "ADAPALENE AND BENZOYL PEROXIDE",
  "ADASUVE",
  "ADBRY",
  "ADCETRIS",
  "ADCIRCA",
  "ADDERALL 10",
  "ADDERALL 12.5",
  "ADDERALL 15",
  "ADDERALL 20",
  "ADDERALL 30",
  "ADDERALL 5",
  "ADDERALL 7.5",
  "ADDERALL XR 10",
  "ADDERALL XR 15",
  "ADDERALL XR 20",
  "ADDERALL XR 25",
  "ADDERALL XR 30",
  "ADDERALL XR 5",
  "ADDYI",
  "ADEFOVIR DIPIVOXIL",
  "ADEMPAS",
  "ADENOCARD",
  "ADENOSCAN",
  "ADENOSINE",
  "ADHANSIA XR",
  "ADIPEX-P",
  "ADLARITY",
  "ADLYXIN",
  "ADMELOG",
  "ADMELOG SOLOSTAR",
  "ADPHEN",
  "ADRENACLICK",
  "ADRENALIN",
  "ADREVIEW",
  "ADRIAMYCIN PFS",
  "ADRUCIL",
  "ADUHELM",
  "ADVAIR DISKUS 100/50",
  "ADVAIR DISKUS 250/50",
  "ADVAIR DISKUS 500/50",
  "ADVAIR HFA",
  "ADVIL",
  "ADVIL ALLERGY AND CONGESTION RELIEF",
  "ADVIL ALLERGY SINUS",
  "ADVIL COLD AND SINUS",
  "ADVIL CONGESTION RELIEF",
  "ADVIL DUAL ACTION WITH ACETAMINOPHEN",
  "ADVIL LIQUI-GELS",
  "ADVIL MIGRAINE LIQUI-GELS",
  "ADVIL MULTI-SYMPTOM COLD & FLU",
  "ADVIL PM",
  "ADZENYS ER",
  "ADZENYS XR-ODT",
  "AEMCOLO",
  "AEROBID",
  "AEROLATE",
  "AEROLATE III",
  "AEROLATE JR",
  "AEROLATE SR",
  "AEROLONE",
  "AEROSEB-DEX",
  "AEROSEB-HC",
  "AEROSPAN HFA",
  "AEROSPORIN",
  "AFAXIN",
  "AFEDITAB CR",
  "AFINITOR",
  "AFINITOR DISPERZ",
  "AFIRMELLE",
  "AFREZZA",
  "AFRINOL",
  "AGENERASE",
  "AGGRASTAT",
  "AGGRENOX",
  "AGRYLIN",
  "AIMOVIG",
  "AIRDUO DIGIHALER",
  "AIRDUO RESPICLICK",
  "AIRSUPRA",
  "AJOVY",
  "AK-FLUOR 10%",
  "AK-FLUOR 25%",
  "AK-PENTOLATE",
  "AKBETA",
  "AKINETON",
  "AKLIEF",
  "AKNE-MYCIN",
  "AKOVAZ",
  "AKPENTOLATE",
  "AKPRO",
  "AKRINOL",
  "AKTEN",
  "AKTIPAK",
  "AKTOB",
  "AKYNZEO",
  "ALA-CORT",
  "ALA-SCALP",
  "ALAMAST",
  "ALAVERT",
  "ALAWAY",
  "ALBALON",
  "ALBAMYCIN",
  "ALBENDAZOLE",
  "ALBENZA",
  "ALBUTEROL",
  "ALBUTEROL SULFATE",
  "ALBUTEROL SULFATE AND IPRATROPIUM BROMIDE",
  "ALBUTEROL SULFATE; IPRATROPIUM BROMIDE",
  "ALCAINE",
  "ALCLOMETASONE DIPROPIONATE",
  "ALCOHOL 5% AND DEXTROSE 5%",
  "ALDACTAZIDE",
  "ALDACTONE",
  "ALDARA",
  "ALDOCLOR-150",
  "ALDOCLOR-250",
  "ALDOMET",
  "ALDORIL 15",
  "ALDORIL 25",
  "ALDORIL D30",
  "ALDORIL D50",
  "ALDURAZYME",
  "ALECENSA",
  "ALENDRONATE SODIUM",
  "ALESSE",
  "ALEVE",
  "ALEVE PM",
  "ALEVE-D SINUS & COLD",
  "ALFENTA",
  "ALFENTANIL",
  "ALFERON N INJECTION",
  "ALFUZOSIN HYDROCHLORIDE",
  "ALIMTA",
  "ALINIA",
  "ALIQOPA",
  "ALISKIREN HEMIFUMARATE",
  "ALKERAN",
  "ALKERGOT",
  "ALKINDI SPRINKLE",
  "ALLAY",
  "ALLEGRA",
  "ALLEGRA ALLERGY",
  "ALLEGRA HIVES",
  "ALLEGRA-D 12 HOUR ALLERGY AND CONGESTION",
  "ALLEGRA-D 24 HOUR ALLERGY AND CONGESTION",
  "ALLERFED",
  "ALLERNAZE",
  "ALLI",
  "ALLOPURINOL",
  "ALLOPURINOL SODIUM",
  "ALLZITAL",
  "ALMOTRIPTAN MALATE",
  "ALOCRIL",
  "ALOGLIPTIN",
  "ALOGLIPTIN AND METFORMIN HYDROCHLORIDE",
  "ALOGLIPTIN; METFORMIN HYDROCHLORIDE",
  "ALOMIDE",
  "ALOPRIM",
  "ALORA",
  "ALOSETRON HYDROCHLORIDE",
  "ALOXI",
  "ALPHACAINE",
  "ALPHACAINE HYDROCHLORIDE",
  "ALPHACAINE HYDROCHLORIDE W/ EPINEPHRINE",
  "ALPHADERM",
  "ALPHADROL",
  "ALPHAGAN",
  "ALPHAGAN P",
  "ALPHALIN",
  "ALPHAREDISOL",
  "ALPHATREX",
  "ALPHAZINE",
  "ALPRAZOLAM",
  "ALPROSTADIL",
  "ALREX",
  "ALSUMA",
  "ALTABAX",
  "ALTACE",
  "ALTAFLUOR BENOX",
  "ALTAVERA",
  "ALTOPREV",
  "ALTRENO",
  "ALUMINUM HYDROXIDE AND MAGNESIUM TRISILICATE",
  "ALUNBRIG",
  "ALUPENT",
  "ALVAIZ",
  "ALVESCO",
  "ALVIMOPAN",
  "ALYACEN 1/35",
  "ALYACEN 7/7/7",
  "ALYACEN 777",
  "ALYMSYS",
  "ALYQ",
  "AMABELZ",
  "AMANTADINE",
  "AMANTADINE HYDROCHLORIDE",
  "AMARYL",
  "AMBENYL",
  "AMBIEN",
  "AMBIEN CR",
  "AMBISOME",
  "AMBODRYL",
  "AMBRISENTAN",
  "AMCILL",
  "AMCINONIDE",
  "AMELUZ",
  "AMEN",
  "AMERGE",
  "AMERSCAN MDP KIT",
  "AMICAR",
  "AMIDATE",
  "AMIFOSTINE",
  "AMIKACIN SULFATE",
  "AMIKACIN SULFATE IN SODIUM CHLORIDE 0.9% IN PLASTIC CONTAINER",
  "AMIKIN",
  "AMIKIN IN SODIUM CHLORIDE 0.9% IN PLASTIC CONTAINER",
  "AMILORIDE HYDROCHLORIDE",
  "AMILORIDE HYDROCHLORIDE AND HYDROCHLOROTHIAZIDE",
  "AMINESS 5.2% ESSENTIAL AMINO ACIDS W/ HISTADINE",
  "AMINO ACIDS",
  "AMINOACETIC ACID 1.5% IN PLASTIC CONTAINER",
  "AMINOCAPROIC",
  "AMINOCAPROIC ACID",
  "AMINOCAPROIC ACID IN PLASTIC CONTAINER",
  "AMINOHIPPURATE SODIUM",
  "AMINOPHYLLIN",
  "AMINOPHYLLINE",
  "AMINOPHYLLINE DYE FREE",
  "AMINOPHYLLINE IN SODIUM CHLORIDE 0.45%",
  "AMINOPHYLLINE IN SODIUM CHLORIDE 0.45% IN PLASTIC CONTAINER",
  "AMINOSOL 5%",
  "AMINOSYN 10%",
  "AMINOSYN 10% (PH6)",
  "AMINOSYN 3.5%",
  "AMINOSYN 3.5% IN PLASTIC CONTAINER",
  "AMINOSYN 3.5% M",
  "AMINOSYN 3.5% M IN PLASTIC CONTAINER",
  "AMINOSYN 3.5% W/ DEXTROSE 25% IN PLASTIC CONTAINER",
  "AMINOSYN 3.5% W/ DEXTROSE 5% IN PLASTIC CONTAINER",
  "AMINOSYN 4.25% W/ DEXTROSE 25% IN PLASTIC CONTAINER",
  "AMINOSYN 5%",
  "AMINOSYN 7%",
  "AMINOSYN 7% (PH6)",
  "AMINOSYN 7% W/ ELECTROLYTES",
  "AMINOSYN 8.5%",
  "AMINOSYN 8.5% (PH6)",
  "AMINOSYN 8.5% W/ ELECTROLYTES",
  "AMINOSYN 8.5% W/ELECTROLYTES",
  "AMINOSYN II 10%",
  "AMINOSYN II 10% IN PLASTIC CONTAINER",
  "AMINOSYN II 10% W/ ELECTROLYTES",
  "AMINOSYN II 15% IN PLASTIC CONTAINER",
  "AMINOSYN II 3.5%",
  "AMINOSYN II 3.5% IN DEXTROSE 25% IN PLASTIC CONTAINER",
  "AMINOSYN II 3.5% IN DEXTROSE 5% IN PLASTIC CONTAINER",
  "AMINOSYN II 3.5% IN PLASTIC CONTAINER",
  "AMINOSYN II 3.5% M",
  "AMINOSYN II 3.5% M IN DEXTROSE 5% IN PLASTIC CONTAINER",
  "AMINOSYN II 3.5% M IN PLASTIC CONTAINER",
  "AMINOSYN II 3.5% W/ ELECTROLYTES IN DEXTROSE 25% IN PLASTIC CONTAINER",
  "AMINOSYN II 3.5% W/ ELECTROLYTES IN DEXTROSE 25% W/ CALCIUM IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% IN DEXTROSE 10% IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% IN DEXTROSE 20% IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% IN DEXTROSE 25% IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% M IN DEXTROSE 10% IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% W/ ELECT AND ADJUSTED PHOSPHATE IN DEXTROSE 10% IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% W/ ELECTROLYTES IN DEXTROSE 20% W/ CALCIUM IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% W/ ELECTROLYTES IN DEXTROSE 25% IN PLASTIC CONTAINER",
  "AMINOSYN II 4.25% W/ ELECTROLYTES IN DEXTROSE 25% W/ CALCIUM IN PLASTIC CONTAINER",
  "AMINOSYN II 5%",
  "AMINOSYN II 5% IN DEXTROSE 25% IN PLASTIC CONTAINER",
  "AMINOSYN II 5% W/ ELECTROLYTES IN DEXTROSE 25% W/ CALCIUM IN PLASTIC CONTAINER",
  "AMINOSYN II 7%",
  "AMINOSYN II 7% W/ ELECTROLYTES",
  "AMINOSYN II 8.5%",
  "AMINOSYN II 8.5% W/ ELECTROLYTES",
  "AMINOSYN II 8.5% W/ELECTROLYTES",
  "AMINOSYN-HBC 7%",
  "AMINOSYN-HBC 7% IN PLASTIC CONTAINER",
  "AMINOSYN-HF 8%",
  "AMINOSYN-PF 10%",
  "AMINOSYN-PF 7%",
  "AMINOSYN-RF 5.2%",
  "AMIODARONE HYDROCHLORIDE",
  "AMIPAQUE",
  "AMITID",
  "AMITIZA",
  "AMITRIL",
  "AMITRIPTYLINE HYDROCHLORIDE",
  "AMJEVITA",
  "AMLEXANOX",
  "AMLODIPINE AND OLMESARTAN MEDOXOMIL",
  "AMLODIPINE BENZOATE",
  "AMLODIPINE BESYLATE",
  "AMLODIPINE BESYLATE AND ATORVASTATIN CALCIUM",
  "AMLODIPINE BESYLATE AND BENAZEPRIL HYDROCHLORIDE",
  "AMLODIPINE BESYLATE AND VALSARTAN",
  "AMLODIPINE BESYLATE, VALSARTAN AND HYDROCHLOROTHIAZIDE",
  "AMLODIPINE BESYLATE; BENAZEPRIL HYDROCHLORIDE",
  "AMLODIPINE MALEATE; BENAZEPRIL HYDROCHLORIDE",
  "AMMONIA N 13",
  "AMMONIUM CHLORIDE",
  "AMMONIUM CHLORIDE 0.9% IN NORMAL SALINE",
  "AMMONIUM CHLORIDE 2.14%",
  "AMMONIUM CHLORIDE IN PLASTIC CONTAINER",
  "AMMONIUM LACTATE",
  "AMMONUL",
  "AMNESTEEM",
  "AMNESTROGEN",
  "AMONDYS 45",
  "AMOSENE",
  "AMOXAPINE",
  "AMOXICILLIN",
  "AMOXICILLIN AND CLAVULANATE POTASSIUM",
  "AMOXICILLIN PEDIATRIC",
  "AMOXIL",
  "AMPHADASE",
  "AMPHETAMINE SULFATE",
  "AMPHOTEC",
  "AMPHOTERICIN B",
  "AMPICILLIN AND SULBACTAM",
  "AMPICILLIN SODIUM",
  "AMPICILLIN TRIHYDRATE",
  "AMPYRA",
  "AMRINONE LACTATE",
  "AMRIX",
  "AMTURNIDE",
  "AMVAZ",
  "AMVUTTRA",
  "AMYVID",
  "AMZEEQ",
  "AN-DTPA",
  "AN-SULFUR COLLOID",
  "ANADROL-50",
  "ANAFRANIL",
  "ANAGRELIDE HYDROCHLORIDE",
  "ANAPROX",
  "ANAPROX DS",
  "ANASTROZOLE",
  "ANCEF",
  "ANCEF IN DEXTROSE 5% IN PLASTIC CONTAINER",
  "ANCEF IN PLASTIC CONTAINER",
  "ANCEF IN SODIUM CHLORIDE 0.9% IN PLASTIC CONTAINER",
  "ANCOBON",
  "ANDRODERM",
  "ANDROGEL",
  "ANDROID 10",
  "ANDROID 25",
  "ANDROID 5",
  "ANDROID-F",
  "ANECTINE",
  "ANESTACON",
  "ANEXSIA",
  "ANEXSIA 5/325",
  "ANEXSIA 7.5/325",
  "ANEXSIA 7.5/650",
  "ANGELIQ",
  "ANGIO-CONRAY",
  "ANGIOMAX",
  "ANGIOMAX RTU",
  "ANGIOVIST 282",
  "ANGIOVIST 292",
  "ANGIOVIST 370",
  "ANHYDRON",
  "ANISOTROPINE METHYLBROMIDE",
  "ANJESO",
  "ANNOVERA",
  "ANOQUAN",
  "ANORO ELLIPTA",
  "ANSAID",
  "ANSOLYSEN",
  "ANSPOR",
  "ANTABUSE",
  "ANTAGONATE",
  "ANTARA (MICRONIZED)",
  "ANTEPAR",
  "ANTHELIOS 20",
  "ANTHELIOS 40",
  "ANTHELIOS SX",
  "ANTHIM",
  "ANTITUSSIVE",
  "ANTIVERT",
  "ANTIZOL",
  "ANTRENYL",
  "ANTURANE",
  "ANUSOL HC",
  "ANZEMET",
  "APADAZ",
  "APHTHASOL",
  "APIDRA",
  "APIDRA SOLOSTAR",
  "APIXABAN",
  "APLENZIN",
  "APOGEN",
  "APOKYN",
  "APOMORPHINE HYDROCHLORIDE",
  "APONVIE",
  "APRACLONIDINE HYDROCHLORIDE",
  "APREMILAST",
  "APREPITANT",
  "APRESAZIDE",
  "APRESOLINE",
  "APRESOLINE-ESIDRIX",
  "APRETUDE",
  "APRISO",
  "APTENSIO XR",
  "APTIOM",
  "APTIVUS",
  "AQUAMEPHYTON",
  "AQUAPHYLLIN",
  "AQUASOL A",
  "AQUATAG",
  "AQUATENSEN",
  "ARAKODA",
  "ARALEN",
  "ARALEN HYDROCHLORIDE",
  "ARALEN PHOSPHATE W/ PRIMAQUINE PHOSPHATE",
  "ARAMINE",
  "ARANELLE",
  "ARANESP",
  "ARAVA",
  "ARAZLO",
  "ARCALYST",
  "ARCAPTA NEOHALER",
  "ARDUAN",
  "AREDIA",
  "ARESTIN",
  "ARESTOCAINE HYDROCHLORIDE",
  "ARESTOCAINE HYDROCHLORIDE W/ LEVONORDEFRIN",
  "ARFONAD",
  "ARFORMOTEROL TARTRATE",
  "ARGATROBAN",
  "ARGATROBAN IN 0.9% SODIUM CHLORIDE",
  "ARGATROBAN IN DEXTROSE",
  "ARGATROBAN IN SODIUM CHLORIDE",
  "ARICEPT",
  "ARICEPT ODT",
  "ARIDOL",
  "ARIDOL KIT",
  "ARIKAYCE KIT",
  "ARIMIDEX",
  "ARIPIPRAZOLE",
  "ARISTADA",
  "ARISTADA INITIO KIT",
  "ARISTOCORT",
  "ARISTOCORT A",
  "ARISTOGEL",
  "ARISTOSPAN",
  "ARIXTRA",
  "ARMODAFINIL",
  "ARMONAIR DIGIHALER",
  "ARMONAIR RESPICLICK",
  "ARNUITY ELLIPTA",
  "AROMASIN",
  "ARRANON",
  "ARSENIC TRIOXIDE",
  "ARTANE",
  "ARTESUNATE",
  "ARTHROTEC",
  "ARTICAINE HYDROCHLORIDE AND EPINEPHRINE BITARTRATE",
  "ARYMO ER",
  "ARZERRA",
  "ASACOL",
  "ASACOL HD",
  "ASBRON",
  "ASCLERA",
  "ASCOR",
  "ASENAPINE MALEATE",
  "ASENDIN",
  "ASHLYNA",
  "ASMANEX HFA",
  "ASMANEX TWISTHALER",
  "ASPARLAS",
  "ASPIRIN AND DIPYRIDAMOLE",
  "ASPIRIN; OMEPRAZOLE",
  "ASPRUZYO SPRINKLE",
  "ASTAGRAF XL",
  "ASTELIN",
  "ASTEPRO",
  "ASTEPRO ALLERGY",
  "ASTRAMORPH PF",
  "ATACAND",
  "ATACAND HCT",
  "ATARAX",
  "ATAZANAVIR",
  "ATAZANAVIR SULFATE",
  "ATAZANAVIR SULFATE AND RITONAVIR",
  "ATAZANAVIR SULFATE; RITONAVIR",
  "ATAZANAVIR SULFATE;RITONAVIR;LAMIVUDINE;ZIDOVUDINE",
  "ATELVIA",
  "ATENOLOL",
  "ATENOLOL AND CHLORTHALIDONE",
  "ATHENTIA NEXT",
  "ATHROMBIN",
  "ATHROMBIN-K",
  "ATIVAN",
  "ATNAA",
  "ATOMOXETINE HYDROCHLORIDE",
  "ATORVALIQ",
  "ATORVASTATIN CALCIUM",
  "ATOVAQUONE",
  "ATOVAQUONE AND PROGUANIL HYDROCHLORIDE",
  "ATRACURIUM BESYLATE",
  "ATRACURIUM BESYLATE PRESERVATIVE FREE",
  "ATRALIN",
  "ATRIDOX",
  "ATRIPLA",
  "ATROMID-S",
  "ATROPEN",
  "ATROPINE",
  "ATROPINE (AUTOINJECTOR)",
  "ATROPINE AND DEMEROL",
  "ATROPINE SULFATE",
  "ATROVENT",
  "ATROVENT HFA",
  "AUBAGIO",
  "AUGMENTIN '125'",
  "AUGMENTIN '200'",
  "AUGMENTIN '250'",
  "AUGMENTIN '400'",
  "AUGMENTIN '500'",
  "AUGMENTIN '875'",
  "AUGMENTIN ES-600",
  "AUGMENTIN XR",
  "AUREOMYCIN",
  "AUROVELA 1.5/30",
  "AUROVELA 1/20",
  "AUROVELA 24 FE",
  "AUROVELA FE 1.5/30",
  "AUROVELA FE 1/20",
  "AURYXIA",
  "AUSTEDO",
  "AUSTEDO XR",
  "AUVELITY",
  "AUVI-Q",
  "AVACLYR",
  "AVAGARD",
  "AVAGE",
  "AVALIDE",
  "AVANDAMET",
  "AVANDARYL",
  "AVANDIA",
  "AVAPRO",
  "AVASTIN",
  "AVC",
  "AVEED",
  "AVELOX",
  "AVELOX IN SODIUM CHLORIDE 0.8% IN PLASTIC CONTAINER",
  "AVENTYL",
  "AVENTYL HYDROCHLORIDE",
  "AVIANE-21",
  "AVIANE-28",
  "AVINZA",
  "AVITA",
  "AVODART",
  "AVONEX",
  "AVSOLA",
  "AVYCAZ",
  "AXERT",
  "AXID",
  "AXID AR",
  "AXIRON",
  "AXITINIB",
  "AXOTAL",
  "AXUMIN",
  "AYGESTIN",
  "AYUNA",
  "AYVAKIT",
  "AZACITIDINE",
  "AZACTAM",
  "AZACTAM IN PLASTIC CONTAINER",
  "AZASAN",
  "AZASITE",
  "AZATHIOPRINE",
  "AZATHIOPRINE SODIUM",
  "AZDONE",
  "AZEDRA",
  "AZELAIC ACID",
  "AZELASTINE HYDROCHLORIDE",
  "AZELASTINE HYDROCHLORIDE AND FLUTICASONE PROPIONATE",
  "AZELEX",
  "AZILECT",
  "AZILSARTAN MEDOXOMIL",
  "AZITHROMYCIN",
  "AZLIN",
  "AZMACORT",
  "AZO GANTANOL",
  "AZO GANTRISIN",
  "AZOLID",
  "AZOPT",
  "AZOR",
  "AZSTARYS",
  "AZTREONAM",
  "AZULFIDINE",
  "AZULFIDINE EN-TABS"
]

let queryString = `INSERT INTO drugs (name)
VALUES `
// Array of drugs starting with a specific letter
for (const drug in drugs) {
  queryString += `($${drug}),`
}
queryString = `${queryString.slice(0, -1)};`

console.log(queryString);