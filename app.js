const APP_VERSION=globalThis.WC26_CONFIG?.version||"704.12.20";
const DATA_SCHEMA_VERSION=2;
const DATA_REVISION="2026-07-17-collections-v70111";
const MASTER_SEED_KEY="world-cup-2026-master-seed-revision";
const PROJECTS_KEY="world-cup-2026-projects-v600";
const ACTIVE_PROJECT_KEY="world-cup-2026-active-project-v600";


const COLLECTION_DEFINITIONS={
  "world-cup-2026":{label:"WORLD CUP 2026",subtitle:"Mi colección",icon:"26",theme:"worldcup"},
  "liga-este-2026-27":{label:"LIGA ESTE 2026/27",subtitle:"Panini · LaLiga EA Sports",icon:"LE",theme:"ligaeste"},
  "megacracks-2026-27":{label:"MEGACRACKS 2026/27",subtitle:"25.º aniversario",icon:"MC",theme:"megacracks"}
};

const LIGA_ESTE_TEAMS={
 "Deportivo Alavés":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18A","18B","19","20"],
 "Athletic Club de Bilbao":["01","02","03","04","05","06A","06B","07","08","09A","09B","10","11","12","13","14","15","16","17A","17B","18","19","20"],
 "Atlético de Madrid":["01","02","03","04","05","06","07","08A","08B","09","10","11","12","13","14A","14B","15","16","17","18","19","20"],
 "FC Barcelona":["01","02","03","04","05","06A","06B","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "Real Betis":["01","02","03","04","05A","05B","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "RC Celta de Vigo":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13","14","15","16","17","18A","18B","19","20"],
 "Deportivo":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13","14","15","16","17","18","19","20"],
 "Elche CF":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "RCD Espanyol":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "Getafe CF":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "Levante UD":["01","02","03","04","05","06","07","08","09","10","11","12","13","14A","14B","15","16","17","18","19","20"],
 "Real Madrid CF":["01","02","03","04","05","06","07","08","09","10A","10B","11","12","13","14","15A","15B","16A","16B","17","18","19","20"],
 "Malaga CF":["01","02","03","04","05","06","07","08","09","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "Osasuna":["01","02","03","04","05A","05B","06","07","08","09","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "Racing de Santander":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13","14","15","16","17","18","19","20"],
 "Rayo Vallecano":["01","02","03","04","05","06","07","08","09","10","11A","11B","12","13","14","15","16","17","18","19","20"],
 "Real Sociedad":["01","02","03","04","05","06","07","08","09","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "Sevilla":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13","14","15","16","17","18","19","20"],
 "Valencia":["01","02","03","04","05","06","07","08A","08B","09","10","11","12","13","14","15","16","17","18","19","20A","20B"],
 "Villarreal":["01","02","03","04","05","06A","06B","07A","07B","08A","08B","09","10","11","12","13","14","15","16","17","18","19","20"]
};
const LIGA_ESTE_TEAM_INFO={
 "Deportivo Alavés":{"01":["Escudo","Escudo"],"02":["Quique Sánchez Flores","Entrenador"],"03":["Sivera","Portero"],"04":["Pendiente","Pendiente"],"05":["Jonny","Defensa"],"06":["Koski","Defensa"],"07":["Tenaglia","Defensa"],"08":["Parada","Defensa"],"09":["Yusi","Defensa"],"10":["Pendiente","Pendiente"],"11":["Benavidez","Medio"],"12":["Blanco","Medio"],"13":["Guevara","Medio"],"14":["Aleñá","Medio"],"15":["Pablo Ibáñez","Medio"],"16":["Denis Suárez","Medio"],"17":["Ángel Pérez","Delantero"],"18A":["Abde","Delantero"],"18B":["Mañas","Delantero"],"19":["Toni Martínez","Delantero"],"20":["Boyé","Delantero"]},
 "Athletic Club de Bilbao":{"01":["Escudo","Escudo"],"02":["Edin Terzic","Entrenador"],"03":["Unai Simón","Portero"],"04":["Padilla","Portero"],"05":["Areso","Defensa"],"06A":["Paredes","Defensa"],"06B":["Yeray","Defensa"],"07":["Vivian","Defensa"],"08":["Laporte","Defensa"],"09A":["Yuri","Defensa"],"09B":["Adama Boiro","Defensa"],"10":["Jauregizar","Medio"],"11":["Ruiz de Galarreta","Medio"],"12":["Rego","Medio"],"13":["Unai Gómez","Medio"],"14":["Sancet","Medio"],"15":["Nico Serrano","Medio"],"16":["Berenguer","Delantero"],"17A":["Robert Navarro","Delantero"],"17B":["Maroan","Delantero"],"18":["Nico Williams","Delantero"],"19":["Williams","Delantero"],"20":["Guruzeta","Delantero"]},
 "Atlético de Madrid":{"01":["Escudo","Escudo"],"02":["Cholo Simeone","Entrenador"],"03":["Oblak","Portero"],"04":["Musso","Portero"],"05":["Marcos Llorente","Defensa"],"06":["Nahuel Molina","Defensa"],"07":["Pubill","Defensa"],"08A":["Le Normand","Defensa"],"08B":["Giménez","Defensa"],"09":["Hancko","Defensa"],"10":["Ruggeri","Defensa"],"11":["Koke","Medio"],"12":["Barrios","Medio"],"13":["Johnny Cardoso","Medio"],"14A":["Rodri Mendoza","Medio"],"14B":["Obed Vargas","Medio"],"15":["Álex Baena","Medio"],"16":["Almada","Medio"],"17":["Giuliano","Delantero"],"18":["Lookman","Delantero"],"19":["Sorloth","Delantero"],"20":["Julián Alvarez","Delantero"]},
 "FC Barcelona":{"01":["Escudo","Escudo"],"02":["Hansi Flick","Entrenador"],"03":["Joan García","Portero"],"04":["Szczesny","Portero"],"05":["Koundé","Defensa"],"06A":["Araujo","Defensa"],"06B":["Christensen","Defensa"],"07":["Cubarsí","Defensa"],"08":["Gerard Martín","Defensa"],"09":["Joao Cancelo","Defensa"],"10":["Balde","Defensa"],"11":["Eric García","Defensa"],"12":["De Jong","Medio"],"13":["Gavi","Medio"],"14":["Bernal","Medio"],"15":["Pedri","Medio"],"16":["Fermín","Medio"],"17":["Dani Olmo","Delantero"],"18":["Ferran Torres","Delantero"],"19":["Raphinha","Delantero"],"20":["Lamine Yamal","Delantero"]},
 "Real Betis":{"01":["Escudo","Escudo"],"02":["Manuel Pellegrini","Entrenador"],"03":["Valles","Portero"],"04":["Pau López","Portero"],"05A":["Aitor Ruibal","Defensa"],"05B":["Bellerín","Defensa"],"06":["Diego Llorente","Defensa"],"07":["Bartra","Defensa"],"08":["Natan","Defensa"],"09":["Valentín Gómez","Defensa"],"10":["Marc Roca","Medio"],"11":["Amrabat","Medio"],"12":["Fidalgo","Medio"],"13":["Pendiente","Pendiente"],"14":["Lo Celso","Medio"],"15":["Pablo Fornals","Medio"],"16":["Isco","Medio"],"17":["Riquelme","Delantero"],"18":["Antony","Delantero"],"19":["Cucho Hernández","Delantero"],"20":["Abde","Delantero"]},
 "RC Celta de Vigo":{"01":["Escudo","Escudo"],"02":["Claudio Giráldez","Entrenador"],"03":["Radu","Portero"],"04":["Iván Villar","Portero"],"05":["Álvaro Núñez","Defensa"],"06":["Javi Rueda","Defensa"],"07":["Javi Rodríguez","Defensa"],"08":["Starfelt","Defensa"],"09A":["Marcos Alonso","Defensa"],"09B":["Yoel Lago","Defensa"],"10":["Carreira","Defensa"],"11":["Ilaix Moriba","Medio"],"12":["Miguel Román","Medio"],"13":["Hugo Álvarez","Medio"],"14":["Sotelo","Medio"],"15":["Fer López","Medio"],"16":["Swedberg","Medio"],"17":["Iago Aspas","Delantero"],"18A":["Pablo Durán","Delantero"],"18B":["El-Abdellaoui","Delantero"],"19":["Jutglà","Delantero"],"20":["Borja Iglesias","Delantero"]},
 "Deportivo":{"01":["Escudo","Escudo"],"02":["Antonio Hidalgo","Entrenador"],"03":["Álvaro Fernández","Portero"],"04":["Germán Parreño","Portero"],"05":["Adrià Altimira","Defensa"],"06":["Loureiro","Defensa"],"07":["Noubi","Defensa"],"08":["Dani Barcia","Defensa"],"09A":["Ximo Navarro","Defensa"],"09B":["Arnau Comas","Defensa"],"10":["Quagliata","Defensa"],"11":["Villares","Medio"],"12":["Riki","Medio"],"13":["Mario Soriano","Medio"],"14":["José Ángel","Medio"],"15":["Luismi Cruz","Medio"],"16":["Mella","Medio"],"17":["Pendiente","Pendiente"],"18":["Yeremay","Delantero"],"19":["Eddahchouri","Delantero"],"20":["Nsongo","Delantero"]},
 "Elche CF":{"01":["Escudo","Escudo"],"02":["Eder Saravia","Entrenador"],"03":["Dituro","Portero"],"04":["Pendiente","Pendiente"],"05":["Pétrot","Defensa"],"06":["Chust","Defensa"],"07":["Bigas","Defensa"],"08":["Affengruber","Defensa"],"09A":["Pedrosa","Defensa"],"09B":["Sangaré","Defensa"],"10":["Germán Valera","Medio"],"11":["Martim Neto","Medio"],"12":["Gonzalo Villar","Medio"],"13A":["Fede Redondo","Medio"],"13B":["Jon Chetauya","Medio"],"14":["Marc Aguado","Medio"],"15":["Josan","Medio"],"16":["Morente","Medio"],"17":["Pendiente","Pendiente"],"18":["Cepeda","Delantero"],"19":["Diangana","Delantero"],"20":["Yago Santiago","Delantero"]},
 "RCD Espanyol":{"01":["Escudo","Escudo"],"02":["Manolo González","Entrenador"],"03":["Dmitrovic","Portero"],"04":["Fortuño","Portero"],"05":["El Hilali","Defensa"],"06":["Rubén Sánchez","Defensa"],"07":["Riedel","Defensa"],"08":["Cabrera","Defensa"],"09":["Miguel Rubio","Defensa"],"10":["Pendiente","Pendiente"],"11":["Pol Lozano","Medio"],"12":["Urko","Medio"],"13":["Edu Expósito","Medio"],"14":["Jofre","Medio"],"15":["Pendiente","Pendiente"],"16":["Dolan","Delantero"],"17":["Pere Milla","Delantero"],"18":["Puado","Delantero"],"19":["Kike García","Delantero"],"20":["Roberto Fernández","Delantero"]},
 "Getafe CF":{"01":["Escudo","Escudo"],"02":["Jose Bordalás","Entrenador"],"03":["David Soria","Portero"],"04":["Letacek","Portero"],"05":["Kiko Femenía","Defensa"],"06":["Djené","Defensa"],"07":["Boselli","Defensa"],"08":["Abqar","Defensa"],"09":["Zaid Romero","Defensa"],"10":["Davinchi","Defensa"],"11":["Mario Martín","Medio"],"12":["Javi Muñoz","Medio"],"13":["Pendiente","Pendiente"],"14":["Pendiente","Pendiente"],"15":["Pendiente","Pendiente"],"16":["Pendiente","Pendiente"],"17":["Álex Sancris","Delantero"],"18":["Borja Mayoral","Delantero"],"19":["Luis Vázquez","Delantero"],"20":["Satriano","Delantero"]},
 "Levante UD":{"01":["Escudo","Escudo"],"02":["Luís Castro","Entrenador"],"03":["Ryan","Portero"],"04":["Pablo Campos","Portero"],"05":["Toljan","Defensa"],"06":["Elgezabal","Defensa"],"07":["Dela","Defensa"],"08":["Pendiente","Pendiente"],"09":["Manu Sánchez","Defensa"],"10":["Arriaga","Medio"],"11":["Oriol Rey","Medio"],"12":["Olasagasti","Medio"],"13":["Pendiente","Pendiente"],"14A":["Victor García","Medio"],"14B":["Paco Cortés","Medio"],"15":["Carlos Álvarez","Medio"],"16":["Tunde","Delantero"],"17":["Brugué","Delantero"],"18":["Iván Romero","Delantero"],"19":["Etta Eyong","Delantero"],"20":["Carlos Espí","Delantero"]},
 "Real Madrid CF":{"01":["Escudo","Escudo"],"02":["José Mourinho","Entrenador"],"03":["Courtois","Portero"],"04":["Lunin","Portero"],"05":["Trent","Defensa"],"06":["Militao","Defensa"],"07":["Asencio","Defensa"],"08":["Rüdiger","Defensa"],"09":["Huijsen","Defensa"],"10A":["Carreras","Defensa"],"10B":["Mendy","Defensa"],"11":["Tchouaméni","Medio"],"12":["Fede Valverde","Medio"],"13":["Camavinga","Medio"],"14":["Bellingham","Medio"],"15A":["Güler","Medio"],"15B":["Thiago Pitarch","Medio"],"16A":["Mastantuono","Medio"],"16B":["Brahim Díaz","Delantero"],"17":["Gonzalo","Delantero"],"18":["Rodrygo","Delantero"],"19":["Vinícius","Delantero"],"20":["Mbappé","Delantero"]},
 "Malaga CF":{"01":["Escudo","Escudo"],"02":["Juan Franisco Funes","Entrenador"],"03":["Alfonso Herrero","Portero"],"04":["Carlos López","Portero"],"05":["Puga","Defensa"],"06":["Murillo","Defensa"],"07":["Pendiente","Pendiente"],"08":["Einar Galilea","Defensa"],"09":["Rafita","Defensa"],"10":["Pendiente","Pendiente"],"11":["Izan Mérino","Medio"],"12":["Dani Lorenzo","Medio"],"13A":["Rafa Rodríguez","Medio"],"13B":["Juanpe","Medio"],"14":["Dotor","Medio"],"15":["Aarón Ochoa","Medio"],"16":["Larrubia","Delantero"],"17":["Lobete","Delantero"],"18":["Adrián Niño","Delantero"],"19":["Joaquín","Delantero"],"20":["Chupe","Delantero"]},
 "Osasuna":{"01":["Escudo","Escudo"],"02":["Luis Miguel Ramis","Entrenador"],"03":["Sergio Herrera","Portero"],"04":["Aitor Fernández","Portero"],"05A":["Rosier","Defensa"],"05B":["Arguibide","Defensa"],"06":["Boyomo","Defensa"],"07":["Herrando","Defensa"],"08":["Catena","Defensa"],"09":["Abel Bretones","Defensa"],"10":["Osambela","Medio"],"11":["Torró","Medio"],"12":["Moncayola","Medio"],"13A":["Moi Gómez","Medio"],"13B":["Iker Muñoz","Medio"],"14":["Rubén García","Medio"],"15":["Aimar Oroz","Medio"],"16":["Iker Benito","Medio"],"17":["Raúl Moro","Delantero"],"18":["Raúl García","Delantero"],"19":["Kike Barja","Delantero"],"20":["Budimir","Delantero"]},
 "Racing de Santander":{"01":["Escudo","Escudo"],"02":["José Alberto López","Entrenador"],"03":["Pendiente","Pendiente"],"04":["Eriksson","Portero"],"05":["Mantilla","Defensa"],"06":["Sangalli","Defensa"],"07":["Facu González","Defensa"],"08":["Javi Castro","Defensa"],"09A":["Manu Hernando","Defensa"],"09B":["Mario García","Defensa"],"10":["Jorge Salinas","Defensa"],"11":["Maguette","Medio"],"12":["Gustavo Puerta","Medio"],"13":["Íñigo","Medio"],"14":["Aldasoro","Medio"],"15":["Suleiman","Delantero"],"16":["Andrés Martín","Delantero"],"17":["Guliashvili","Delantero"],"18":["Íñigo Vicente","Delantero"],"19":["Arana","Delantero"],"20":["Villalibre","Delantero"]},
 "Rayo Vallecano":{"01":["Escudo","Escudo"],"02":["Beñat San José","Entrenador"],"03":["Batalla","Portero"],"04":["Cárdenas","Portero"],"05":["Ratiu","Defensa"],"06":["Balliu","Defensa"],"07":["Nobel Mendy","Defensa"],"08":["Lejeune","Defensa"],"09":["Luiz Felipe","Defensa"],"10":["Pep Chavarría","Defensa"],"11A":["Pedro Díaz","Medio"],"11B":["Nteka","Medio"],"12":["Pathé Ciss","Medio"],"13":["Óscar Valentín","Medio"],"14":["Unai López","Medio"],"15":["Isi","Medio"],"16":["De Frutos","Delantero"],"17":["Fran Pérez","Delantero"],"18":["Álvaro García","Delantero"],"19":["Camello","Delantero"],"20":["Alemao","Delantero"]},
 "Real Sociedad":{"01":["Escudo","Escudo"],"02":["Pellegrino Matarazzo","Entrenador"],"03":["Remiro","Portero"],"04":["Marrero","Portero"],"05":["Aramburu","Defensa"],"06":["Zubeldia","Defensa"],"07":["Jon Martín","Defensa"],"08":["Sergio Gómez","Defensa"],"09":["Aihen Muñoz","Defensa"],"10":["Gorrotxategi","Medio"],"11":["Pablo Marín","Medio"],"12":["Turrientes","Medio"],"13A":["Yangel Herrera","Medio"],"13B":["Pendiente","Pendiente"],"14":["Carlos Soler","Medio"],"15":["Sucic","Medio"],"16":["Barrenetxea","Delantero"],"17":["Kubo","Delantero"],"18":["Guedes","Delantero"],"19":["Oskarsson","Delantero"],"20":["Oyarzabal","Delantero"]},
 "Sevilla":{"01":["Escudo","Escudo"],"02":["Luis García","Entrenador"],"03":["Vlachodimos","Portero"],"04":["Pendiente","Pendiente"],"05":["Carmona","Defensa"],"06":["Juanlu","Defensa"],"07":["Kike Salas","Defensa"],"08":["Nianzou","Defensa"],"09A":["Castrín","Defensa"],"09B":["Marcao","Defensa"],"10":["Suazo","Defensa"],"11":["Oso","Medio"],"12":["Agoumé","Medio"],"13":["Pendiente","Pendiente"],"14":["Sow","Medio"],"15":["Vargas","Medio"],"16":["Manu Bueno","Medio"],"17":["Peque","Delantero"],"18":["Ejuke","Delantero"],"19":["Akor Adams","Delantero"],"20":["Isaac Romero","Delantero"]},
 "Valencia":{"01":["Escudo","Escudo"],"02":["Carlos Corberán","Entrenador"],"03":["Dimitrievski","Portero"],"04":["Rivero","Portero"],"05":["Foulquier","Defensa"],"06":["Copete","Defensa"],"07":["Tárrega","Defensa"],"08A":["Cömert","Defensa"],"08B":["Diakhaby","Defensa"],"09":["Gayà","Defensa"],"10":["Jesús Vázquez","Defensa"],"11":["Pepelu","Medio"],"12":["Guido Rodríguez","Medio"],"13":["Javi Guerra","Medio"],"14":["Luis Rioja","Medio"],"15":["Ugrinic","Medio"],"16":["André Almeida","Medio"],"17":["Hugo Duro","Delantero"],"18":["Diego López","Delantero"],"19":["Ramazani","Delantero"],"20A":["Sadiq","Delantero"],"20B":["Lucas Beltrán","Delantero"]},
 "Villarreal":{"01":["Escudo","Escudo"],"02":["Íñigo Pérez","Entrenador"],"03":["Luiz Júnior","Portero"],"04":["Arnau Tenas","Portero"],"05":["Mouriño","Defensa"],"06A":["Pau Navarro","Defensa"],"06B":["Logan Costa","Defensa"],"07A":["Foyth","Defensa"],"07B":["Freeman","Defensa"],"08A":["Kambwala","Defensa"],"08B":["Rafa Marín","Defensa"],"09":["Renato Veiga","Defensa"],"10":["Sergi Cardona","Defensa"],"11":["Pape Gueye","Medio"],"12":["Santi Comesaña","Medio"],"13":["Maciá","Medio"],"14":["Moleiro","Medio"],"15":["Buchanan","Delantero"],"16":["Oluwaseyi","Delantero"],"17":["Ayoze","Delantero"],"18":["Pépé","Delantero"],"19":["Mikautadze","Delantero"],"20":["Gerard Moreno","Delantero"]}
};
const LIGA_ESTE_CRESTS={
 "Deportivo Alavés":"data:image/png;base64,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",
 "Athletic Club de Bilbao":"data:image/png;base64,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",
 "Atlético de Madrid":"data:image/png;base64,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",
 "FC Barcelona":"data:image/png;base64,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",
 "Real Betis":"data:image/png;base64,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",
 "RC Celta de Vigo":"data:image/png;base64,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",
 "Deportivo":"data:image/png;base64,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",
 "Elche CF":"data:image/png;base64,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",
 "RCD Espanyol":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAA4mElEQVR42u2dd7hdVbX2f2PO1XY7NT0hIYHQIRCaIiWIqBSlCdKboGIXrihgwS5YwAbqlSIKKEHpRUAJIB2EBAKEHkoSktPPbqvMOb8/1k5ATPzufa6SwpnPsx9yOPvsvdYa7xz1nWOIc46R9fZdauQRjABgZI0AYGSNAGBkjQBgZI0AYJ1ehxwyW4sge+xx5sytZ37x4Rlbn+G22e7Uu/bc8yubiiCHHDJbv+0Q4Jx7W70OPvhg7Zzj3e8+feL2O37xywcf/MOuN/7/t9tL3o55ABER94Ybf/PPIyZg3dd6TgTZbruP+SK8bYUPvD01wMgaiQJG1ggARtYIAEYW3tv0vjUgb/QLATPiBI6sEQ2wrgMeIE3TnUTSseCanhdG4L0MPNT6vR3RAOv8sjeCereFpoIIa/+EUoePOIHr/n2+09rsWxa3MebVMOu9soTrCQ1uBpivJUky8+3mHL9dbnR5kWdnpbwzFHpyMnCXi589WKfVeVaU3gT0mVrrmW96/wgA1rGVQuriRWc623+J6Kgg2dJzJV38LZtHAjodMQHr8DK50ytZ74/Jhm4CFWH6ryPt+YUAYt6GYfHbCgDWmAboLNrkWQnWOx+XDhBMu5zCRo8ANtXGNFuRgIwAYN2x/X4r3PV9be601vZov9uDzOAcgrE6HK2NyV7WQXpP65koIHg7hMnrKgAEZutc65MCjfy/spdS3rh4yXezdPFXtfhF0pc/r5Ol5xutg8nG6L1af9MEEiBrgWid3Shrex5A3qSyXevfrbRu72ak5fdb7U/HphFe+F7qD0yoL9jFKtEKHUFWx0loi5veq1y42SIsf3eOzJnmAk/cjfiFOwHmzJnjzZo1680Py7GWJ47WVgCo1s5chddeHWut/x2lwv0cdL/RoKdLv0+y6EuI6gRiwMfZKuHkX+J1HffmDxqG9G9J4r4QBMH8/0+IaUYA8NbZ9VbY1ttGnEzMnD/eiAslHXo5CEdFVpcvVEpv6eIniHv/aF3jQUu2DAnWV5heZWp3IeK/YR9bVHF7HGJd+qpFd6CK2+F3Hurp8i5Ya5elad8JoXIDxkUboV3s0vrLXhQ+D50vtT7FXzUgRwDw79z5FoiMSY/RWh0EenugY/nWb9ntjmTpuSZd/E1F1ie5BRfAIeKBKra09xssia3hnAHxwFlwFqd8/O5PmnDSdzRSWNn1PGNtcp1K7PlE0bNvuL4RAPyHdr6J43gj3/d+rpR+D0A29Bdnm09YZxsov1up8h5i+v9gzeIvKaeKIAWw7g3ugc0j/jcXg51eARIQUCrf0NkQqvsjTnef6Fz1dueypRYJRaINCTr28dDjwPJMZpuf9rzoz8uvcwQA/wHhw+AGUJ4Nepts6OY4XXKmMvX5GlsTxAHKiTce7IASUYCHcwmqAPgt4RrBNSUX0XJ5a5CCAyUtMFhsDcT5rT3dwFF0zvQjIE4AlFP+OKu7P5mF408PgR5I9wf/7rUJBGsDAASQ+cz3NmfT2aA+GC/9STN79ZRQxAiqDFaBFdAWJMlDeAeIRUJFOi8kfdTDZQ5/M4u3VYx4NlfWClxTkzwQks7XkEIwMyPcLcZZA0a1tIUB67V+duA5cDEua6JHn5hEk88PwD1cq8X7lkqlJWuLOVgbAKABk8UDB3hhx5+ywRuy+PkDNCoQkQBMlu/eII/eXabybW0dUlLULihRPU9wsctFkiravu4oHj6E6xFktKN+eYWh0xVEBkyuEkrHQvnkGiQGnIAI4juk4HAZuJrg0IiAywbwJ/0gDcac4kPtS1A6a20BwNqQ4LDMPkR7YdtxMOTSJd9ExIpICKRIG9hlIenfi9gBD9EWl4KUIH0qoHaBAp2iRhvUGAM6xQ7K6+peBJc4iFLUGIcaA9KeUr8c0ocDVNnln+c5zBKf5k0R6d8LSKQQLwMHokOy185RJC84KB3JouuKa4szqNYC9e/q+3xpLKh32up9YuuPaKQENkMKQuPSEn3HhvR9xKNxTQmKKn/0PmRPa1xskIJA0nopQcI3+IQORJHv8iRPDYgnOCzmBZ0DxeaAav7Vo//zAf0neQx/pwxGg8qAIs4s0sngDQJsxoSdtnxTjmAEAP8HAOD7608FRmVD9wKJYD0oW5K/hwydo8n6UmxicjUvuVsvCFjBmTfsxeVO38ryee4NOUUHYsGJ5G+VFfYy9zMCQ/UyS/PGCCmT+yDOYar3WrDKmMoWreyhjADg3wEACTsBTPqqk5bwxCN37BoGXZF8o1ZdbsNFcNYh7Qbx5H+vjG0eNahRpgUWh7OCHfLAOcQH8Szp04AR0C6/0GyZgxitgzaAWbNmjZiA/+NyABlpo3W5ufxFcpVtWtvV5XveLBJIFCgHKXjrOVS74Iz8z+9UgcsEaRO89UxeQtICKZhXW99LKxZ0Ln+twI2SVimidb1zRgDw71ietUssGC+c8Lq4xaG6LCiFcyC+xbwEpl8jIbgY9KQUPSW36/+rlYI3GfQkg2sCgcMOacyLuTPYugh0twKvZWocKH+0QEiWxYvyD5rlRgDwb9AANJ5YpGCRV9gEQRzO4oyg17dICUgFicC+6jAvqhYABGmzBNu7PEfwPzI2rWWEcPvchLgkdxrNQk32kiBRHgZKKHjTLUKuBRy4oLilWCTxvN4n/uH6RwDwfwKAcMsuQ8A8KW7qnO5wkOBiwZue4a2ncA2QAGzNkTzgg1b5nSWWcJcUKau8QrAyYb95ZSDtinBWCknLefAgedDDDhkIwTUEPVHwtsgwTcnDURVYXdkBBXN5+ICFIwD4d17jwc6kJr0Nf1PR0RYOaUJToUdlRLvZvAbnBAktyV0K269QocPVFP7mCeH24GouD8pa5mKlUNP5+8LtQW+W4KoKFTnckEc8RyG+RRBcLIS7ObyJKTQ1SAMpbGwpbAtwC9s9nLWe7QgA/l1mwM8W3QJeX9B1oLLWWhTYuqNwUIye5GGrDqlAusCRPhRCCVwKeIbogAzCPFRDAO1e1wJCiypK/vtIUdg/Q5TNtUYJkodD0vnkSaeaQ49VFA9JcHEeblqbOVXe14NKDEuuJU+vrhW8wrUFAIpw/aeAa/Xo45UK1jOoGBoKNSmhdLyFpJW0MYbmDRpxKq/sJoI3LUN8hUtz7y17olU7EMAK2VM6/5YEJNB4G2S4hDzfbxTNazVkBnQeZZRPsOipMa6mQCc4r8tEE08U4BZ44THWoiNmaw8AcDZN+y+Atro35iTtsobF97CDjuigOsHugu1zqDGO5hxo3lZA2hw0QYqWaA+BmkaN1QTvNDnrzwPXdIS7ZeiJGtfQFPYGijbPCLY5kjuKNP8CarTF9liCd2iigxu4QQeeh01rLug+SmBqHMfDF8E7G6wwNiMA+HctA2jfn3sfcFUw5lOKYKrDDIMLEC+l8D4LaYB5TfDWc+gJWW4CrCAlQ/vZw1Q+r2j/gqP4oWqe/1d5uBjuXaXtNEvbl4S2bw4hUV4rdrHCm54QbC2YxQrlh0TvyRA/wzkP7DASjDfhxDO0hVvCcODm2bNnj/AB/kOr9WAHtrZ0/NUNX9PReO4IlFKCCK6mMQt9ahf7hLMcxaOHsIvzjB6GPDkUKSTJcFmQ/7w8/2sECRLwPVyj5Qu0GIdqrKN5Y5l4jkfxyAZqVIaEORfUWlxh2sXotoMGYfB90P4AzPFgVjYCgP8gCKzNfqaU98nmcwcaO3SVxusCUlTZYWs6V+++ARXmplgUGAPOIrqMM0vy6o4sz+bVED0eZ6otJ9HPaWEImDo4Dylo8FJcQ4HzwfRDcUdT3Ph2bYn+qOBDrGVsoLXJBPzjRStP4xZhGnPzBAAWrMMOCFgDBR8RD5f24swgLhvEZQPo9r0Ip12JKu0EzoCtgjOo4o6EG16F7j6y9d5enOnDJb2I1474JVyS4YZVi16WgS5jG/MEuxCgbW2J+/8py7qWXe/y0KoJPnlF3+YgUA50gEuWoYvvwh97ClnPr3HJizgJ8Uo7oUd/CuVPIph6LbZ6Dy7rQ7wuVOmdiO7CHz8dFUzBVG8H20TCyfjdHyVddh5Z76VIMDq3C+KDGQIpOSg6BYP/gxTTiAn4d5mArDmwuxd1/DXr+zWNF090SvLqLxaUP45w/cuR8iwwGc71IV6ESNv/IuxIcFkDUe2gwNYeJ33pMEzj8RaRxIFENpz8M+V1fYQsq+/vecVrGGEFv1VaQLDWnIXiv2z1bszgVULWD3oKXueHUaVN/5H0GxtsvR/T248bGMT09eHqVZxNEe0jhTK6qxvpakd3daIKbUjo/0Mc6pqLyAauxmXPIN4odPu+VhdmWGvt2UrpL6+oG49ogLfEb/GAJMuy9yrl/UzBdONwWudyt4MDZC+9QjxvLskjD5M+/RTm5VcxS/uw1SrOmLyIQ4sJrAWch6qU0Z2dqEmTCDbdhGDmTIKtZuBPnoRq78jjUYPTghh4UJv6SfjFh4EwTyON+ABvhfAdkMRxvKkHMxEnaN9hMpp3309zzhwac+4geXw+tq8XmxggRGkPaQ+QKEIkr++7VPJ0rwUpW2yjiR1ciHvmWRq33IJ4Gt3Vjb/5FhRm7Ua0+yyCd+wAynNis4Kxeo8sjqthGC5o2f8RE/AfdP5UK8Qqmjj9vIT+CQrWx1qGL/899Stn07z/fmxPL2gPKRcRFyEdQrB1hulzZI8D4nBNiPbNiPbMoCY0/+zRnKORooAoRAnOKdwQIA1cVocsQ40aRfTOd1A85BAqh354+bU9l8bxr/0wPIecefCGo2sjAPh3aSkDOJrNd+P7P0DrbTCGoUsvS4bPP99Ln3hcuabBuRK6I8y5AXWL7sxo+1ZMuEtGfJtH/8lRXh8YEipnxhQPS8me1HhTLYNnhDSu1+jOPDrU4yylj2c0rwlJH/OQyGGbMa5eRwIPb8vNbdtJn8raDjs0QCnIsofSND3FLxTufBNgR/IA/0fhZ0DJNpvfIopuQettGnfemS16316m96MnBsnc+colZdS4dkofFtTEBFtPccOWcJYh3Nky8MmIgc9HuZVWeQpAFGSPK3o+WCB7RVHYN0NsiwRqhNLxGZXPJfhbJbhahnMZ4vvork6gTHrffNX7kY8Ei/fa29T/drfB87bzC4XbaDS+BhQAM2fOHG8EAP934U8jTf+gougMOzAgvV86zS7d7wAvvudvWrWPRo8rUTo8oeuXdTq+W8cbn/MDVATpAoVdKpQ+lVL6eIqenKt/8YDEocc7Or7fxJtqiO/XOA/coBC9PyPa05A8oFDdrWODljz9O2QId0gJdyqiSt3Ed9+plx2wn+494yvWDA56FApn2jS9rNFoTJk1a1a2pvtZayoAfCBL03QHrLkB39+7/sCD6ZIP7idDP/ihwvfRo0bhmikSZlROjZHQ0XtUAfNai/cfOdK5iv5PhCQPaYpHprR/K84PehiHSwUpO7yNLdWfBDSu9BENqstR+UJM43qPeI6HN+11n84lgupwtH0zpvKlBoQZ4o3GxR5DZ5+lXtv/QJqPPpoo398vDILrSJJtWiD2RgDwvxN+mmXZ7r5S16L0JsN/mJ0sO+AgP3nwIdHjxuVE0EaMFCF7UdO83kc8KH88oePcHAwkICFkzyqGvxFSO98nmGlQo3K+oBrlsAOKviOLVH/hg3I4B+VPJnjTHNEuhmgPA6qVbdZAHYrHJHhTbX6VBvyZdcJ3OlTnWJL77pOl+x0Q1K66OlFab2mVujZN03e1QOCPAOB/pvbTLMt2F2OuROuxAz/+SdZ74gkBSQ01tguXJmBsXsgBRDvqsz3UpJwLMPTlEBcrpAh2SIj2NIy9v0750ynNmz3My4IqWrK5iuQvOUtItzuoQ7CpJdovo3qBT/0ajbMONcohJYvrFfyZlsKHMkyPYIccqgTt34kpHR/jahnS3YWrDdJz/HHB0Hm/SJXnTVLW/iltNN6V55DXvJNC+swzz1yjbH5ar2+rRP6ow3D0wFnfz/rPON1TpQo2CXFVg/i8Trdw+e40ixTBtgZiIXtG03luE7NYkT6uUMphe4Xkbx61C0KyROPKmsa8gNodAS5SWDROC24Y0gc18Z89Grf4SMER7WRo/MnHNaH9rASxEP/FQ08Ab7wj2MkydFqIfU2BNrhGCEqo33i9VuVyVtj5XRVx7r1izK1o/RprGFlkjQgDWw2YTLPZnOr7/s1a6+kDPzo36z/9i54Uu0EEf3oKAtlTrXMAUcsx0+CGIHyvoevCJm5IaN6uqf4iwDyjQRS2CtZkeFFC0Td4aYZSLo/3Tf4xmfJIRJPEAa6iUErQFYsaZUkfV4S7Z3T/tkHvEQX0WEf5lATRUP+Dz/D3fAgEb4Ij+kBK4/oQs9hBfYDOH/wwa//kJzysfQyl9gFeWZNCxDUBAMtP5JVI09/j+3sP/+aStPdTn/CdtOF1QNs364SzLM5Acq9i8OshdtnrhzxdBqoChYMTknt90r8HEFmQGJp1DI5CRxuuewzz6aCn3MWwUxgRPAdllTG62s+4Wg/dzX6K9RrGCoMmQOsIfFBdGcF2GY3rPUonpLR9KSGdq+n7WISr5uamsG9K589ieo6ISO8LkHKGqzbo/u9fppXDDvNtklytguAIcsaCWxM0wZoAgDzcy7Lv4XlfbPz19nTZYYf6NrboUQHt363hTXUMnRWguhxtpyU0/6IZ+FyILG/1I4B1uKRVFs4GITPoiZPwt9+Bwm674L9zR469p8GfXmgg5RKZzf8GlR8vU0lMZ1Znw9pSdnjtad7x8lx263+a5NVXQGkkbM8PmjYyyidmtH01ZuAzEfVrPFR3bmY6zo7Rky29+xdRFQuRxiUxEoWM+eOVSWGndwY0m98gir7GGkIeWd0AyMu7g4Pv9cqV67PeHr34ve+X7IVnRXQb/mYxXb+JyZ5S9B0dkfUp2j4bU/5YSs+HIswrKu/dZIEgwFUHcc2YcPsdKH/oQ4T77IO/4QakwPFXPcdld76IigRnLcsPma7YhqJaB0oCMIqzD9yQL4weov9P11K78kqSBx/CbyuQeGX8MCHcwRLfp7Hx8gPJQvfsOunTivTvitKRGfWrNLULyjjbj7/p5m78jTc46exIVL3+XiqVu9aE2oFazd/tGB4epdrbv48Sv/dLp5HNf1xURwcSpqSPevR/PMLbxNJ9RQNvtM2F7r2hLKQUKI197TW8iZMZ9bPzGHfN1bR99jOEG26AzSwfv/wxLrv1KbxCfobPicKq/OWUAtWy+dbA8BA/2HMMX9i+G7P+NDpP/hzjrrmaUef/FDd6PJ31PmxDU7vRxyUgGtyQovihFG8DS7SboXxCmkcK/QrRCbqjg/TvD0vfV7/qlNYRlcqPBl58sWNNiMRWpwbwgMwmyZkqCL5WnX1l1nPM0R7lTtywQxXzWNv2C+Fuhs7zG6SPatQoh3lV6P94hJQ9XBLjanUqxx9Lx+ln4E2cgLEW0hTt+3zi6qc5f85LBBWf1MLK7lcpUE7I6gnf+MBGfOU9U0mMxXOWLMkIihFXvpxy+k9v5r/u+y0fnv9nhoKQVPnoAUPhmIz2b8Q0rvao/9Yne0lhegTB5TkEEQgEMzTEmMsvN+UPfECbNP2i9v2zWc39BVcXAHL7lyRb2iC4yQ0MTFg8azebPrVQe5NLFPZt0LjOx/QKUgLXL4TvMHT8qoF5VdF3fIQbCHBpFYkKdJ31XSrHHJP3bU1TLIL2PU6+9ml+fNuL+GWfzDlWdqsi4IuQ1FK+vNcGfPP9G5Aai1ZCZhyBp7juyaUcdtGj1AiRUoGPPXEDX77jVyiTUIsj2g6I8Xe0DH4lxNXyE0pkeclZ2lsnjJoB1gwSbLKJGX/HHKVKxReJ473IS8mrzR9YXXkABShrzBeU1u8bOPusrH7lVZ7q7KL9G1UK+xnqf/RxgznrzxnBPK9In9I0r/EwC0OcGUJ3dTPm0t9R2m8/XJbhnMOKwvc0p934LD+85Xl0OcD84zH+fwg/PCWk1YRT3juN7+29IcY6RATrLIGnue3Zfg6/5DGGM/A9h4tjHpy4NU9MmM6eLzxAydSoLiiQ3Sp544hK7uN7E6HypYTKySmFDxvEGrKnK2QvPS+qUs6id72r22bZoHjeHF7vXfK28AEUYOKeng2V5x2TLHzJVS+9VAsV/M0Sgp0N/Z8JMS8JUsibegYzDWqCJZ6jyZ4NQNXQXaMYO/sKCrvtik0SnNI4EXytOPPW5znr5ufQRR/rVq72ERAlpMMJn9x9fc7eZ3pL+GCtw9eau14c4PCL5zIYG1SgSZ3glMKv9nDzhO04ft+vUi+UKeoGtqTynEQd9Bjo+GWDaN+M5p89kvsUlS+mBDvHYEsydMnFOn11kVNRdHxzyZIprd2v3i4AyB2AQuEQlOqu/uY3xr76sqIQ4TLACioUXFUwywQ9xdJ5XhM12uVxf5AgfsCYiy8k3G5bXByD72OcQyvF925fyDdueBa/7GNFWJWJ80Wwwwkn7DqZcz64UR4ZAJlx+J7i3pcG+dCFc1nWzNCRh7VuRdSQ6oCg1sud42Zw8t5fwopGZQanBBpC8agU1e7o+3CBoa8HDJ4Skj0jhDsa0EXMCwtV7fLLM2C8LhYPejtFATl3d+7ckpRKR9llS139mqsVOsjbuj0uxA9o2s9tUjomw1vPUdg3y2n/vXmYZgdqdH33u0S77ZbvfD8gMxZfK8658yVOu2YBOvIwrFz4AoQ63/nH7DSJ8w7aBK1yZ8C43Ob/fdEwH754LktrCX7okWVvjtQcifIJm/1cO257fvaej9Ge1jFOwAN/K0M8R9N8UIMHhQMyvA0c6eMtM+FpqrNna/r7nW5rO5qbbgpXVzioVsf3ZdOm7algeuOOOyR7aoEiKiEqA4ThbwYkf9e0f7PJ6JvrFD+UUf1pgOsLcNVeykccTvm4Y7DWgueRWUfgac677xVOuWoBKvKwSlbs2H9yerQQDyccssMEzjt4U7yWlrDO4WvFE0vrHHzhXF7uj9GRR5qtXC7aE+LYMSlo8oHvn4ra/0Do60W0T3KPJtrb0H5aTMf3Yzp/2SS+WxPf6iMFixRKZPOfkPqdd6Fgy2ynnWatLo3srQYNAFG0v3OO6jXXGxenWnV72OEEtMMsUwx8IiTYwUNPcKRPKdL5ATCMXm8KHWecgSiFyzKsUgSe4qKHFvG5K55EAgWyauF7WsiGEz6wzTj++5DNKOjc2bMOfK14cmmd/S94hOd76+iijzFupUc9PC1kjYz1OiKuPGpzdphUoXnqafh33IXpHaR+aQHd6SgenOKaQvWnAbULfKxxSOQQHWCbTanecIMp7PdBrQqF/YA/sxoOlqi3+LsMAwMdnu/vJL09xPfcI1Ip4YYsqt2hKq3cvoHGjT7VC3zSR3Xel6fRoO2kj+NPXR+bpmQieEpx2SNL+MTvn8T4GqfVKoXve7nw995yDL89fHPaAoV1boXwn+1rcMjFc3lmaR2vFOTCXxWImhljSwG/PWYrdli/i6SZEG66MW0fOQGJ69gUBr8V0rNfkZ6DCwz9IMDW83uzPYIbcEipSPPOv4kMDqKCYNelc+aUW2ZA1mUAOKJoW2Bc7Z57MYtfEVyB8F0Jo/7YYNQ1dcKdDKKh7bSY6N0GfMHFdfyNN6Z82KE460isI9CaK+Yt5YTL59NUgM57A67s8YVebvP33Gw0Fx+xBe2hR5YfJ8TXileGYg69eB6PLxrGL/krsfm58LQWstjQWfC45Jgt2W39DmJj0TqvZxWOOgI7ZSqS1pE2wQ5IXrQijzj0OEfxiJTooCZ4RczLC6XxwAMAkzp33HEGKxrVrJsmIO+5LbKthkrjrruMaxqtRysqpzaJH/BQRUf7N2PcMOgNLANPRLhUgW1S3G8/vPHjSeKEKAy47skeTrjsMRrOoX2NWZXa9xRxNWHXjbr5zRFbMLrok5rc4/e18Fo14UMXzeXhhYN4ZZ80tSsFkfYEkxg6A81lR2/FezfsIjUWT8CIRmE5+fkC60/agROX/ZG+LMIfa/FnWPyZhmBbi7++hQ5H/FdN86YIO5BI/a67TGHPPduV580E7n6rNcBbCQAHoMNwS4D0sUesc4EOts7wNnbU/6QQcQTvMjRu9qifEOXNngoZuDZK+++Xe+lhwG3P9nHsJfMYNi3hr8JWay1kwzE7TO3kd0duyfhKQNYK97QSllQzDrl4Lvc/P4Au59HESj9HCS41tCvFRUdswfs36iZrZQttK3L4+s1Pc94tS9hj+s4cveAGpN+ht7K0fz+GKqSPaYZvDUgfUWTPC6Ic4nukDz9iAe1EtljXowCzZO7cEjCFao3shYWi/RDnLNmjmvInEypfSHAmT6T42+S5EVev4W+2GbLlDLQItz/Xz2EXz6Mvtah/IXxfK0w1ZbvJ7Vxx7Fas1x7mNQIHnlYMxIajfzePu57uxS8HGLMKb18JJrMUnPCLI7Zgv81HkxiLUnlhyVOK7/zlBb5+84t4oeG+7mk81zGFgopJnvewS6F6YUDP0QWq5/vE92psv+TH08KQ9PnnhCzD87xpzJ8fvNUp4bdUA4ybMmUMMNq8+CLZ0j5RHT7x3ULyYIQ30eFtbPA3t0R7GGzd0fizhjRGtt2WIPD42wt9HHHJY/Q0M3To5UJbqfCFtJaw1cQKlx07gykdEamxKARPC9XEcMzvHufWJ5bhV/LfrdRmSS78wMHPD92MQ7caQ2wsnrxeJ/jBHQs54/pn0AUfaw21qMIjYzdms1efZPi1EvZlIdjBIIFDdbq8CbUDjEOCALOsR3hpIUzbYAxjx44CFq2zYWACnQF0xS+8gGs2hShEyHn86QIhfdyj/ieh+mOH8x2qYEnrivE778hDPQlHXjiXxTWDX9ArF5rLbXXayNh4bJlLj9mK6d0FksygVe6MDSeGYy59nOvmvoZuC1cpfKUEjCUwjp99eDOO2XY8qTH4okitI/QUP7n7ZU69egESeryeJxTmjdqAo5SAb6leFCBhayRN0hK+vF6GdMPDNF9cSDRtgy6U6lqnAaCgHWhLFi9y2FbEs3xmT1v+BrEOm4A0BasyKu0lHgrHcNjvnmThUIwuR/9S+KaRMa2rwBXHbsUWY0srKnuIUM8sJ17xBFc9sgTdtupQTylBrEMSwzmHbMYJO0xo2fw8zAw9xX/fv4j/+uNTSJC3p7PWocjb1D3TNoGEAB1Zmnd6kIHqcK83j7NvAIC1kr66iAjaUmh/q7njb20iSKkICOnvt1irEMnn72R5yIQ4VDFvwOFEoZOEtNLGJ/+ylGc98IpBHqKtLDnj5cmZKe0hf/zIDLYaXyYzBiUKJZBYx6evfIo/3L8Ivy0gW4XwpdVq3jZTfnTgJpz0zkkkmcFrCd/Tit88tJjPXvEE1mulp5dHIAK4jGWFNhqFEl6ziS37iFjcoOBShwSSNxZZXlswVmz/gAUKEgTRup0KlpweYWt1t5zL57L8NE7712LaTk2Q9rzVe55WdwyIz8suQAWtB73SzJwia2ZMqARcftwMth5fITEWEbWCOPTZPy3g4ntfIagEZNattPYqko8YdE3Dtz+wMZ/fdQrJcm6Ay4V/+aNL+NgVT9DQCue9KfHUuqea09RFo5XLRxA2INo7o/Mn+UFVl7TAIjlpxNRrAD5JEqzTqWADyoO8Yxf5oQ5bUwT7p5Q/F+NiIX1S07xBQ0EQZ3GeD1GINXk3/pWGenHG6KLHpcfM4J2T24kzg6fyHL8R4fNXP80v73oJXQ5InFtp5V0QPBxpPePMfTfk9D3Wx1iLFsHY3OG78vGlfPTy+cTOoX31z7kHyU2aUQpL3krGWdBFKH8qIdwtQ41yJPf9Y65Hssy1/n7drgXoLDO54PMH4KygSpb4Ts3QWSHEQvKgRqI8HexEobMUFccQFf9RcA6UFkzcSs4cM4NZ0zpyR02pfCKcEk694Rl+NudFVDnArkr4IihxpMMpX9prA76257Q8ZCTnEgSe4vqnevnopY9Ts/8i8eRyMokyBtXy9kTnGqD645BkrqJ5nZefa3gjmP3WUEPnzDoNAJyLAUO5rFyLyo0Htk+o/iAEadX8QxAsRhSFLKacNKDQ/bqObe18kxraPM1vj96K97QyczqfAIWnFF+++Xl+eOsLeXr3X1DClICppnz2PVP59t4b5iFjq0roacWtz/Rx3G8foz+x6Eiv0nnUWkgTywZF6FCGustVPB40b1M0bokQ7XIms5Gcwi7ipFQUIEap+K0GwFuqcpzv14C67upSopRbPpFJFchj5FYkYKtAFTKtKcd1RifDOXPTvf6gTWYpiHDhEVuwzybdxFmuri0OpRTfvO0FvnPTs/hFj8zJKoXvKcFUE07abQo//MD0FabGtIR/+/MDHHrJPHriNBd+5lYagfieIh1O2HqDbn6+cwdmcAjxPUTylrRSAlVw4IOrtvpQ5moMr7tLgLonUlunAeCLDACDwcSJrdm8eZs/OyjYXsEN5O8LtrJE78kwSuMnTaYPL0ZEI86htILUETrHfx+2BQdtOXqFzTcu3/nfm7OQr17/LFLw8tYiKyOGtMig6VDCce9aLyeGiOTJHwuBVtzz0iBHXDKPvnqGF3qrzjr6irSesvH4MlccsQkb9r5MvdFEOQ87CG44Zzjhgx7tCGZYVJvLh1N42gUT1gMYiNN0cN02AfV6D+VyTzh16iRVKDiynPrtT7P4mxn8mQZ/hsXbwGJfE2qH+zDg2Lr3Wdz09+Uz/zKLNpZfHL4ZR2wzlrTFBjI2J3Sc+7eXOe2anBiyfK7TqlK8yVDC4e+YyC8O3hTrHK5lJgJP8fdXhzni4nksHk7wIr3KsFFrIa2nTO0ucOVxM5he1iy+90GUzaeSlvbPG1N4G+dCV215+5m+YwvE9xlUV5Fg/fUBepuNxrJwHdYAijFjlll4TaZORY/ptraaorqEjh82aftqTLCTIXtSUf15AAqijQyNzGfmkicpmTrWKWySce7Bm3LsthNWJHmWC/+X97/KqX96Ci/08tFxq6KBK0U2FHPgduP41cGb5qFfS/ieVjy2pMZBF8/lxf4GXuStWvhKMI2UKR0RV39kBluMr5BUa7jHHgFbwN8ypeOHMYUPZ2QLVKvnOQx8MSR7yUN0jO4abZk0AQuLz7nggoG3uhz8VgJgOfd9AWGAXn+qQBO7zMM1oXmLz9JdS/SeFFH7jY8UwGuzNFXI9L6FbLfsOZwNOOeAjTjpHRNJUosWVgj/4ocX85krnsD6Gteq0q1U5SkhrcbsO2Msvz18C4pe3iPA2lz4Ty5rCb+njlf08wrhyj6nFYGMb4u44vit2Wpcmcw6zH33kix4Dj06JLlLGPpaCMP5jGtSIf6LpnaFj2sqXJagN9hQ0BqsfeLMM8+06zIAcn+p2ZwHmHDGNgqb4KpCfLsm3M0QvicjnJmXUJ2BdK7CFTVho8Hez93N6Qdtymd3nZLX4bXkFqSVnDnh9/NJtMJpWSU3wG+RQffcYjSXHrUlRV9jyH1R31M839/kwxfP45klVfyiv8qdvzzx1F30+cMxW7HDpApxnOIpoXbV1dhGAwKNS2D4vID+T4V40yzBzhl6PUewWT6Q2pnUBdvO1EDq4vjxN5bN10UAWADTaDxoYbC8xx7KKd9J0VC7LCCdp+j6RZNRV9UJtzMMfzcke0nhVSwD1uewV+/jGxNrYB3aWbJWfP6nx5dxwuVPYAWUt2pKmNfy0nfZpJvLjtySSuit2N3LWUEfvmguj706jF8OSP+FzTdxRlfkMfvYrdhlagdJnBCGAdnTz1C/+WZUVMINgK0JqtuRPq7pOyZi8CsRwTsM4U4O22+QUkjl3e8WoFen6QNvfE7rKgBUMHfuEwqeCbediTdpsnWmjq369H86YuCkAoNfDek9rEDjeg0CthckKJK9+AJDF1wESmGMJdCKm57q4fhLH6NpLeLp/y8f8B0bdnHFUVsxquitSPR4SrFoOOHAi+bx0MIBvFKwaiawEmxiaPMVvztmBrtv0EmaGnydhwZDF15ItvAVVDmicnKTwvsz7NKcKk4ItQt8eg+NaN4RgNTQk6e5YKstAZ7iRz96jtVwWvitBIBjzhzFrFkZmf0zXZ2Eu+4sbriOKuZJoeatmsZsn3SBgiQ/FNLx/SbBlgbnygxfdCHNJ57EDwNueWoZh17yGIOpRQLvXwo/raZst347Vx63FeMqr+9uTyt66imHXjKPB5/vx6+Eq7T5y4khgRIuPnIr9tqoiySzaLGI55M8+ijV316CaqsgRUu4S0bHeU06zm3iTbbYQUEqjmyBwg1rSBtEu82CtgombtxMbv/VumwCYNas/On2916NSFr54AcVUYiLs7xKVnE4lcfKpY8ndP53g8KRKYVDmuhCiXTxa6Tf/gZ/fXGQI343n6H4DcSQVan9WsoWkypccexWTKyELT6goJUwlGQc/tvHuGtBb356eFU7Xws2s4TOcdHhW7D/5qNIMouv8kSWbTTo+8rXML39oCKyVyy9hxYZOjMk2N7S+d8Nyh/PTwtJRcAluGLRte3/QQXSzBYPXLs61P/qcAJzEsDo0Y9YuL24yy7O33wz4+o1nNPgOwr7pHT+ukn7t2LsUmHwlALhXhnRXjWcN4rspuu47XPfoEeXCDxWTeXSiqyWMn18mSuPmcHUzgJZK8unBIZiw6GXPM6t85fhV0KS7F9wAzJHaPPE02Ezxq5wQjEG5XkM/ehHNG65GVXsJtimSfvXUyqnxngbWlwT9HhH+/diyh/NoKpx1Rrh1jNMtP32ADeH649/ktU0am51nA3MJ6339V1IV6cUDzwQZ1Jc06EnOjrOjqEJg6dG+JtazKtQ/12ABKCVYTgo8Zm7f8NBL/2NpNCFZ7JW6/c3hWj1hA1HFbjq2BlsPLqYk0ElL/w0jeO438/npkdfw6sEq2YFCWAtNjX8+JDNOGrmONJWypksbx1bvWI2/d87C9XZgcsyiodllD+TUDwyJZhpSO7T1H7nM3xOq/WcdjhrKH3oIKG9nay//6I3Ppe3XBiroT9AXvl68sluNt30FtvbO/PVnXfJzJIlHiai4/sN1HqO/qMjKp9Kad6riO/0kIJDfLBoApNgfJ+T9j6DG9fbEa/eh5H8dPDyUzuTOyOuOmFrZo6vkBqDEmkljeCoy+dz+X2v4LeFq/T2lcqJIS42nHvQJnx25/XyxBMOrEH5AfXrr2fZ8cfjcIgXgDXobke0n6FwSIqrQe3XAc2rNbYpSEHANvAmrZdNuPduT1Uq9/Q//PDendtuO8hqOiK+uvoDeIweXUuGh63X0bGvS1LXuPUmEV2R7DlH+ZMpdokw9OMQN5AfE5flc39xJJ5PkCXs8/w9vNI1kcfHboJKYnyxpLFjTHvIlcfOYIdJbaSZRdTy6ULCibOf4Hf3vvovhS8ieM5hmxnfP2ATTt51ci58a1BKIZ5H9Q9X0HPSx7ANi2QFqBlIBFuD5D5Ner/G38BSPinB39qS3K7zQZPDw67jq191hXftBI3GaYXJkx9qpeTt20UDrDA9Q0NDneW2tmtVrb7Ty7vNMmbBU1qKbfhbxpiXFKZf+AeKRGuGKDGkxiPymgQ+/OCdx3L+1gdSbVjG6iZXnLgtu07tJDO52rcuzwF/6k8L+NUdC/EqAeZfdQwBknrWahezPllmEJOhwxDXbDJwzo8Z+N53EBug1/MpHdlAT4b4r5rGjV4uyjjvLVz4UIaeYKhdVMLW+vG32cZMuv2v2mo9Z3BwcP/Ozs5hVmPLuNXZI8gH0nh4eP+wUpndvOVWtWj/A0W3lcXVBDyb99dxbxC+32oXM8sQbGkY/FWE0obRVLlm2i5ctNtHOPnzH2SviQFZmuU1fSVopfjctU/z49tewFvRMWTlFUJBsPWE0/bakO+8fxpZalC+l+PukUcY+Na3qV93PdLegShNx09rBJtY0gWaYLeM5rUeg6eFOVBFcIOAL0hksI2mG3/9dS7abVfTHBz8QNTe/mdWc4+g1dkq1gLaC8OnbZZt4E+fvnW2dKmJ77hTqXHtiDP/uCc8sA1Bj3J0nBVTOCJDh4bmPT41v8Bmrz3NPi/ew4amimy0MUFHW979S4TTr1/AD/78PGHZb1X97Ao+6vIulQqHchY7FHPK+6bx3X2mYxC0VthFixg4+/v0nX4ayaNz0eO6cUMQbJ5R+ljCwKcjhn8U4vqF8kkpZokiuU8jpZz8ISUft7SH9s982lROPEHbLLvQLxZ/zOst8VfbWt19AnPHp6dngu0a9Tc12D/11X32Nemj87R0dkDaYk+2/GNXFzrOaRJsa6he6FM5OWX4zIDqFT50abxGk7RRJZg6lWj/g+g65nC+9WqZM296GQoabNbiI7p8iuhyBSMCSkMKn9trI87ZfRym3iB55hkav/89tT/+kWzhS0AZ1VaAKMH1Cf5mls5LGgx/K6B+uQ9a6DyvgYxy9B9VQIoOfB/X30+w/fZmwo3XaxNFC+rPP79LZfr0ntWR+1/TALCiShj3938g7Oz8Q/Ohh/zXPniAco26kkIBsjQ/+dsjFD+a0vbVGPOSEN/hUTw4Zeh7IbWLPFQnWBFkWOPSJthhVHs7j4zdhIembMXDYzfipfI4Bort1FRAojysc2iEAhlhvc7+kzU/2Nonvvd+anfeQfbo37EDQ0ixDF6BcGaKG8x7FrgAaEDH+THhjob+j0UkD+WNqqUL+g4LkU4PV60j7W123HXX2HDGjDgbHDzAa2+/lZFOof8MgrTRON0vFL5dvfY6s+yII5WEoUjo4QYt4e6Grl83qf40wA5C6fMJw98JcwaxkXwUTFWI9sgwvYrsaR8nKW1xg5CMZhgyUOxgadDBQKGN4Sgv3/qeUEmGaa8PMi2ukry2lLjWQBOC34YUPcTLAEf3Hxq4utB7eAEpO1xd0JMtHefE+BtYspfznwe/GNK4MUQKCS7J3Ngr/mCK732vZ+L4FB2GP2INmi62pgBALX/ZOD5fheHxgxdclPZ++tO+qpQg8Yl2adL+/YR0nsIuVfjbGno+WMxHwHQ47BIoHGToPDemcbVm4OQAaVNkTpPF4NUNoUsJSimec/nJHw02BttQGCXUixpKAdrzUaMt0e4xamxG9ecBZqmieHBG+1lN+j8V0bzJQ3U6bD/o0RDtleJt6GjerkgeiIAU16jT/ctfZG1HHuHZJDlfBcFnW/ebsYa0jF9TRpks3w1GXXvtSXa//TrbP3LcAZImSd8p/+VLKZLmnUWywxSV0xKCWRn1S/183l+7w74mFPbJaDstxvTlZVhE4YzDD1K6Tk0gEOq3BwzNifK79hyuJnjTHMGuGa5P0A8r7GJH4fgapY8mYPM5A1hBio7GdZriIZrKJxLim3PN421sMS8ItUv8nONXDhDdwMap6/7Jj9O2I48IbL15hSpGn2mpfGFkXsC/1AQWqJgkuVwHwT5Dl/w27fvc5z1MJvjtkMatnSf5eLg+CHfOCy61XwV4G1ncEAyeEUHk0JNy1U2cz3qu/jSk/tucm+9Pd3T8tIlqd+A7qj8NGP5pSOnohPbvxAyeHmIWK+xiwSyVvCX8ezM6zo2p/tInfJfBidB3TJh3/wpD7MAALozcqJ/8OKsceqhvm8lVqq/nSCZMqLMGDpZc00bGLKdEVXUQHG7T9A9tRx/lj77i90aNGWtddQlS8bFDCik4XFMI32Pp/GkTVRL8rS3+liZvKSdAlrdlQcPApyKaN/mUjk3BE1wslE5KcA569i/Sd2SB+FYPVbIkD2jMQkX5Uwldv26ip1vsgKC6HM2/esR3atq+krOWqj/3EE9A+5hFi1HjJ9qxV842lUMP9bM4/t3SKDiKCRMarKFTRdfEoVHLu2ZW1ZIlx9lm85zSe97jjb/pRhW9+z3GLl6C+BZ8HzLB39SQvaDo/0QEAt5Eh+mVvGtnBnqCRQJH6RMJ4S4Zyf0K23Dobou/mSW+TZM+q8ie1pilglQge0WRPa9AQc/+BdIHFKrL4TJwOGoXeQx8PqLvuALJXQUwBvvaEgr77pNN/PNNqrjrrp6t18/2wvCEcbNnN1dXpW9tBQArwqP11muqKDrFDA9/XG24QW38jTfoju98O7NOrO3pR0qW+mVF+j9doH61ZvDrAbYV5tMaDulNsHnMvo3FLFUMfjNEPMHZfG6wKrn88IY4XNJKOCSO5AGF+FDYL6P7igaF/TJcP+h2R/qYT/33RfDA0YvzPNN59lnZuKuu8vSUKYPJ0NBHVLH4RSDh4IMda/A84TV5cOTyhya6Uvml7e19t7X27s4vnupNvO0WVdh7r8Q2m8719+X9eSf5SKqpnROQzhcI8vS6v50he0Ux9I2cmOlv1BL2EMT3a6J9DMHWhuBdhuKBad7hO4DkIQ/RjsJeKcmDmvQJQSo6n0jpW8h6cGnTFffaN57w19t0x8knexbuSAYG3h20tV3I6+zeNXqY9NoyPNoDspfvvbcwYeut/0sXCp8AxtWuu94M/fKXNO/6m6JRFym24dIIVXKgDK7pKB2d4jKoXxLQfXWD7Alh8MsRaNBjHe3nNvE3zM1E82aPwdNDnANVAG9DS/aCxi71WoOlG9iBISgVXGHW7qby0RNVaZ+9FbDINBo/088//0M23zxZE1K86xoAlieL8qnctdoMGwSfVL5/PKDrt97G8GWXm+Ytt2B6lygRX1ShBIEP9dwfIADdafOZAn25iFw9d+zCnQx2KN/1ZLJiKKSrASQ4V4Mkc2r0WFt4//soH364Lu7xboCUJLkgqdXODzo757U0qrAWDI1eGwGQm6z58z023zw588wz1RnHHz9TJk36pKfUQUCFVxcxdN311G64IUvnzcMsXSrWGaWUEvF8MF4+Hj7KW8aggaR1GBWLiizOZbg0xVrrVKitHjXG+VvOoPzBD3iVffaG8eMBhrB2du3ll88rrb/+I63SYgs2a7bKX9sB8M/aAIhfeWW6P27c0crz9gWmAW0MDdO88w7qDz5okqcWWLPwJWf6lomrN8Q1E1yW5WfHtCC+5yQMkKjgdNco502ZIt5GG+nSDjuoaNYsqJRzocNzZNl1LFp0CZMnP/cGP2qt2vXrAgDe7MTmu+5Xv/KzI47YnTDczfO8bYGNgCkr3tffD0uXYgYGsY163qtPa1ShiO7ogHFjob39jU7oQuDpLMseotm8w3voodvJJ4L/83evpWttB8Cbawmv9+B6+GE/Hj9+Ax1F60tU3EBHwRSUmgCMBtqAiNcrck1gEOixWbbIJMmLkqbPmlrtpcevv/65bT/60XSV37OWr3UFACuA8PDDD+ttt91WWl74Pwhp/plnBuN23DHyu7v9tjDUtThWLgytjWPTlqYJ8+c3eV3YbwSX9wah23Xpga1rABhZ61AiaGSNAGBkjQBgZI0AYGSNAGBk/YfW/wPpZU2ct0rxFwAAAABJRU5ErkJggg==",
 "Getafe CF":"data:image/png;base64,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",
 "Levante UD":"data:image/png;base64,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",
 "Real Madrid CF":"data:image/png;base64,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",
 "Malaga CF":"data:image/png;base64,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",
 "Osasuna":"data:image/png;base64,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",
 "Racing de Santander":"data:image/png;base64,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",
 "Rayo Vallecano":"data:image/png;base64,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",
 "Real Sociedad":"data:image/png;base64,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",
 "Sevilla":"data:image/png;base64,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",
 "Valencia":"data:image/png;base64,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qQgRkfXr18vhhx/+OhD0qoEFCxZIHEVtPT09iweKBfpb+j0RIQiCr4mIPXT+/Aiw2Uym78UyFUtXvvqVr/RJVn92cC/9ioisXLlSctmsJBMJqUmnxXPdvna8duAzNTXie574nif1dXUCyEUXXdTHKP1dekHwwgsvyPTp0/dQV5maGkkkEpJIJKL7fvMbEZEbd0+bH6wAcESExx57bJSIPPm73/1O0ul0mPD9vg7vpdWPfexjEkWRWGv/onH3tzJAa0uLHHnEEQLIkLo6aRw1SnzfFwWVNlUHPplICCANQ4fK8OHDJZlMilJK7rjjjj0A1d+lXHUn7733XqmrqxPf86RXWKquZ3TmJz4hIrJ869atU3cDwaAEgCcitLS0nCQihc+cdZYF4kxNzR6+9IEHHigbNmzoF736PwGgqalJZs6cKclkUr7//e9LR3u7/Oi222TWzJl9Pnmvt3DuuefK2rVrZcWKFXLssccKINdcc82AAmB3dfD1K68UpdQesQellJkwYUK8csUKKyJnDMTikv6kf/3BD37QEZFrurq6ZNq0aYFSyvauxE1Uafiee+4REdnDKh4oAGzZskXmzJkjV1999R4St2HjRpk7d25fh99666170PKmTZvkqKOOkiu++tUBUwG7qysTx1IoFOSdixYJVXaqsGZagOAnP/mJiMhtzzzzjNffxmC/0v/y5cvHiMjjd//qV5JIJKJkIiHZTKbPn/7kmWf2SX7vIA1kieNYOjo6JI5jieNYTBz3geCF55+XTCYjF114YQUcpZJEUdSnkjo6OvoAMdAlqj7niSeekPq6uj6bpbrELfrExz8uIrKyubl5en+vLuq3NX2Aam5ufqeIdF900UV96/AzNTXieZ6MGz9B1m/YIGEUSRCGYqzdKzU2RqI4ltiYvu/Cquq5/vrrZd369RJGkURx3Pf3KI4ljo3EsdkrbbQiUq4y4gXnn9/HArlsVpRSZsb06WbVqlWhiPzzYAVAb4M+F4ahHH30UQFg89lsb3xbvvXNb1VoNorEiIitVmNlz89v8J19k+/2uH73uttvwjgWY/e8h7EisYnFikhcHQAje94/io3Exr7hc6y8eTWveY75n66rXhNGscTGypat22TC+PGVJe9VD8bzvOChhx4SEbm8OoHXbypA99Osn7n66qtTwIHr16+TNWvW4GitlONQCgLmHXwQ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",
 "Villarreal":"data:image/png;base64,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"
};
function ligaEsteStickerInfo(team,code){return LIGA_ESTE_TEAM_INFO?.[team]?.[code]||null}
const LIGA_ESTE_SPECIAL_BADGES={
 "ADN / LALIGA PRIME":"./assets/ligaeste-specials/adn-laliga-prime.png",
 "LALIGA FANTASY":"./assets/ligaeste-specials/laliga-fantasy.png",
 "DRAFT 23":"./assets/ligaeste-specials/draft-23.png",
 "DRAFT 23 KROMIX":"./assets/ligaeste-specials/draft-23-kromix.png",
 "EXTRA STICKER BRONCE":"./assets/ligaeste-specials/extra-bronce.png",
 "EXTRA STICKER PLATA":"./assets/ligaeste-specials/extra-plata.png",
 "EXTRA STICKER ORO":"./assets/ligaeste-specials/extra-oro.png"
};
function ligaEsteCrestUrl(team){return LIGA_ESTE_CRESTS[team]||""}
function ligaEsteTeamSearchText(team){const source=LIGA_ESTE_TEAM_INFO?.[team]||LIGA_ESTE_INSERT_INFO?.[team]||{};const rows=Object.entries(source).flatMap(([code,[name,pos]])=>[code,name,pos]);return normalizeTradeName([team,...rows].join(" "))}

const LIGA_ESTE_INSERTS={
 "ADN / LALIGA PRIME":Array.from({length:15},(_,i)=>String(i+1).padStart(2,"0")),
 "LALIGA FANTASY":Array.from({length:9},(_,i)=>String(i+1).padStart(2,"0")),
 "DRAFT 23":Array.from({length:23},(_,i)=>String(i+1).padStart(2,"0")),
 "DRAFT 23 KROMIX":Array.from({length:23},(_,i)=>`K${i+1}`),
 "EXTRA STICKER BRONCE":["01","02","03","04","05"],
 "EXTRA STICKER PLATA":["01","02","03","04","05"],
 "EXTRA STICKER ORO":["01","02","03","04","05"]
};
const LIGA_ESTE_EXTRA_NAMES=["Lamine Yamal","Mbappé","Nico Williams","Pedri","Oblak"];
const LIGA_ESTE_INSERT_INFO={"ADN / LALIGA PRIME":{"01":["Antony (Betis)","Delantero"],"02":["Bellingham (Real Madrid)","Medio"],"03":["Courtois (Real Madrid)","Portero"],"04":["Fermín (Barcelona)","Medio"],"05":["Julián Alvarez (Atlético)","Delantero"],"06":["Lamine Yamal (Barcelona)","Delantero"],"07":["Lookman (Atlético)","Delantero"],"08":["Mbappé (Real Madrid)","Delantero"],"09":["Moleiro (Villarreal)","Medio"],"10":["Nico Williams (Athletic)","Delantero"],"11":["Oyarzabal (Real Sociedad)","Delantero"],"12":["Pedri (Barcelona)","Medio"],"13":["Raphinha (Barcelona)","Delantero"],"14":["Unai Simón (Athletic)","Portero"],"15":["Vinícius (Real Madrid)","Delantero"]},"LALIGA FANTASY":{"01":["Hansi Flick (Barcelona)","Entrenador"],"02":["Joan García (Barcelona)","Portero"],"03":["Lejeune (Rayo Vallecano)","Defensa"],"04":["Fornals (Betis)","Medio"],"05":["Lamine Yamal (Barcelona)","Delantero"],"06":["Luis Milla (Getafe)","Medio"],"07":["Pedri (Barcelona)","Medio"],"08":["Luis Milla (Getafe)","Medio"],"09":["Mbappé (Real Madrid)","Delantero"]},"DRAFT 23":{"01":["Asencio (Real Madrid)","Defensa"],"02":["Balde (Barcelona)","Defensa"],"03":["Barrios (Atlético de Madrid)","Medio"],"04":["Carlos Espí (Levante)","Delantero"],"05":["Carreras (Real Madrid)","Defensa"],"06":["Cubarsí (Barcelona)","Defensa"],"07":["Fer López (Celta)","Medio"],"08":["Gavi (Barcelona)","Medio"],"09":["Gonzalo (Real Madrid)","Delantero"],"10":["Huijsen (Real Madrid)","Defensa"],"11":["Jauregizar (Athletic)","Medio"],"12":["Javi Guerra (Valencia)","Medio"],"13":["Jon Martín (Real Sociedad)","Defensa"],"14":["Juanlu (Sevilla)","Defensa"],"15":["Marc Bernal (Barcelona)","Medio"],"16":["Mastantuono (Real Madrid)","Medio"],"17":["Oso (Sevilla)","Medio"],"18":["Pau Navarro (Villarreal)","Defensa"],"19":["Pubill (Atlético de Madrid)","Defensa"],"20":["Renato Veiga (Villarreal)","Defensa"],"21":["Rodri Mendoza (Atlético de Madrid)","Medio"],"22":["Thiago Pitarch (Real Madrid)","Medio"],"23":["Yeremay (Deportivo)","Delantero"]},"DRAFT 23 KROMIX":{"K1":["Asencio (Real Madrid)","Defensa"],"K2":["Balde (Barcelona)","Defensa"],"K3":["Barrios (Atlético de Madrid)","Medio"],"K4":["Carlos Espí (Levante)","Delantero"],"K5":["Carreras (Real Madrid)","Defensa"],"K6":["Cubarsí (Barcelona)","Defensa"],"K7":["Fer López (Celta)","Medio"],"K8":["Gavi (Barcelona)","Medio"],"K9":["Gonzalo (Real Madrid)","Delantero"],"K10":["Huijsen (Real Madrid)","Defensa"],"K11":["Jauregizar (Athletic)","Medio"],"K12":["Javi Guerra (Valencia)","Medio"],"K13":["Jon Martín (Real Sociedad)","Defensa"],"K14":["Juanlu (Sevilla)","Defensa"],"K15":["Marc Bernal (Barcelona)","Medio"],"K16":["Mastantuono (Real Madrid)","Medio"],"K17":["Oso (Sevilla)","Medio"],"K18":["Pau Navarro (Villarreal)","Defensa"],"K19":["Pubill (Atlético de Madrid)","Defensa"],"K20":["Renato Veiga (Villarreal)","Defensa"],"K21":["Rodri Mendoza (Atlético de Madrid)","Medio"],"K22":["Thiago Pitarch (Real Madrid)","Medio"],"K23":["Yeremay (Deportivo)","Delantero"]},"EXTRA STICKER BRONCE":{"01":["Lamine Yamal (Barcelona)","Delantero"],"02":["Mbappé (Real Madrid)","Delantero"],"03":["Nico Williams (Athletic)","Delantero"],"04":["Pedri (Barcelona)","Medio"],"05":["Oblak (Atlético de Madrid)","Portero"]},"EXTRA STICKER PLATA":{"01":["Lamine Yamal (Barcelona)","Delantero"],"02":["Mbappé (Real Madrid)","Delantero"],"03":["Nico Williams (Athletic)","Delantero"],"04":["Pedri (Barcelona)","Medio"],"05":["Oblak (Atlético de Madrid)","Portero"]},"EXTRA STICKER ORO":{"01":["Lamine Yamal (Barcelona)","Delantero"],"02":["Mbappé (Real Madrid)","Delantero"],"03":["Nico Williams (Athletic)","Delantero"],"04":["Pedri (Barcelona)","Medio"],"05":["Oblak (Atlético de Madrid)","Portero"]}};
function ligaEsteInsertInfo(team,code){return LIGA_ESTE_INSERT_INFO?.[team]?.[code]||null}

function inventoryFromCodeMap(map){return Object.fromEntries(Object.entries(map).map(([team,codes])=>[team,Object.fromEntries(codes.map(code=>[code,0]))]));}
const MEGACRACKS_TEAMS=globalThis.MEGACRACKS_DATA?.teams||{};
const MEGACRACKS_ITEM_INFO=globalThis.MEGACRACKS_DATA?.info||{};
const MEGACRACKS_SPECIALS=globalThis.MEGACRACKS_DATA?.specials||{};
const MEGACRACKS_SPECIAL_INFO=globalThis.MEGACRACKS_DATA?.specialInfo||{};
globalThis.MEGACRACKS_ITEM_INFO={...MEGACRACKS_ITEM_INFO,...MEGACRACKS_SPECIAL_INFO};
function isMegacracksSpecialTeam(team){return Object.prototype.hasOwnProperty.call(MEGACRACKS_SPECIALS,team)}
function megacracksItemInfo(team,code){return MEGACRACKS_ITEM_INFO?.[team]?.[code]||MEGACRACKS_SPECIAL_INFO?.[team]?.[code]||null}
function megacracksCrestUrl(team){return LIGA_ESTE_CRESTS[team]||""}
function megacracksTeamSearchText(team){const source=MEGACRACKS_ITEM_INFO?.[team]||MEGACRACKS_SPECIAL_INFO?.[team]||{};return normalizeTradeName([team,...Object.entries(source).flatMap(([code,[name]])=>[code,name])].join(" "))}
function collectionInventoryTemplate(type){
 if(type==="liga-este-2026-27")return inventoryFromCodeMap({...LIGA_ESTE_TEAMS,...LIGA_ESTE_INSERTS});
 if(type==="megacracks-2026-27")return inventoryFromCodeMap({...MEGACRACKS_TEAMS,...MEGACRACKS_SPECIALS});
 if(type==="world-cup-2026")return createEmptyInventoryFrom(masterInventories["world-cup-2026-main"]||originalInventory);
 return {};
}
function seedTypeForCollection(type){
 if(type==="liga-este-2026-27")return "liga-este-2026-27-first-edition";
 if(type==="megacracks-2026-27")return "megacracks-2026-27-first-edition";
 return "world-cup-2026-main";
}
function isLigaEsteInsertTeam(team){return Object.prototype.hasOwnProperty.call(LIGA_ESTE_INSERTS,team)}
function collectionTypeLabel(type){return COLLECTION_DEFINITIONS[type]?.label||COLLECTION_DEFINITIONS["world-cup-2026"].label}
function inferCollectionType(projectOrSeed={}){
 const explicit=projectOrSeed.collectionType;
 if(explicit&&COLLECTION_DEFINITIONS[explicit])return explicit;
 const seed=String(projectOrSeed.seedType||"").toLowerCase();
 const name=String(projectOrSeed.name||"").toLowerCase();
 if(seed.includes("liga-este-2026-27")||name.includes("liga este 2026")||name.includes("liga este 26/27"))return "liga-este-2026-27";
 if(seed.includes("megacracks-2026-27")||name.includes("megacracks 2026")||name.includes("megacracks 26/27"))return "megacracks-2026-27";
 return "world-cup-2026";
}
function collectionDefinition(project=projects?.[activeProjectId]){return COLLECTION_DEFINITIONS[inferCollectionType(project)]||COLLECTION_DEFINITIONS["world-cup-2026"]}
function syncCollectionChrome(collectionType){
 const shell=document.querySelector("#appShell");
 const scroll=document.querySelector("#appScroll");
 const header=document.querySelector(".app-header");
 const titlebar=document.querySelector(".compact-home-titlebar");
 if(!shell||!scroll||!header||!titlebar)return;
 const detached=collectionType==="liga-este-2026-27"||collectionType==="megacracks-2026-27";
 if(detached){
   if(titlebar.parentElement!==shell)shell.insertBefore(titlebar,scroll);
 }else if(titlebar.parentElement!==header){
   header.insertBefore(titlebar,header.firstChild);
 }
}
function applyCollectionIdentity(project=projects?.[activeProjectId]){
 if(!project)return;
 project.collectionType=inferCollectionType(project);
 syncCollectionChrome(project.collectionType);
 const def=collectionDefinition(project);
 document.body.dataset.collectionType=project.collectionType;
 document.body.classList.remove("collection-theme-worldcup","collection-theme-ligaeste","collection-theme-megacracks");
 document.body.classList.add(`collection-theme-${def.theme}`);
 const kicker=document.querySelector(".collection-header-kicker");if(kicker)kicker.textContent=def.label;
 const subtitle=document.querySelector(".collection-header-subtitle");if(subtitle)subtitle.textContent=def.subtitle;
 if(teamSearch)teamSearch.placeholder=(project.collectionType==="liga-este-2026-27"||project.collectionType==="megacracks-2026-27")?"Buscar jugador, club o nº…":"Buscar selección…";
 const dialogSearch=document.querySelector("#dialogSearch");if(dialogSearch)dialogSearch.placeholder=(project.collectionType==="liga-este-2026-27"||project.collectionType==="megacracks-2026-27")?"Buscar jugador o club…":"Buscar selección…";
 const teamLabel=document.querySelector("#teamSelectorLabel");if(teamLabel)teamLabel.textContent=(project.collectionType==="liga-este-2026-27"||project.collectionType==="megacracks-2026-27")?"Club":"Selección";
 const dialogTitle=document.querySelector("#teamDialogTitle");if(dialogTitle)dialogTitle.textContent=(project.collectionType==="liga-este-2026-27"||project.collectionType==="megacracks-2026-27")?"Elegir club":"Elegir selección";
 const infoSub=$("#appInfoSubtitle");if(infoSub)infoSub.textContent=`Build ${APP_VERSION}`;
 const logo=document.querySelector("#ligaEsteHeaderLogo");if(logo){logo.hidden=project.collectionType==="world-cup-2026";logo.textContent=project.collectionType==="megacracks-2026-27"?"Mega\nCracks":"LIGA\nESTE";}
}

const EXTRA_PLAYERS=[
 "Messi","CR7","L. Yamal","Mbappé","Haaland",
 "Vini Jr.","Bellingham","Valverde","Modric","Hakimi",
 "Luis Díaz","Salah","Son","Doku","Wirtz",
 "Caicedo","Davies","Gakpo","Pulisic","Raúl Jiménez"
];
const EXTRA_VARIANTS=[
 {key:"epic",team:"Extra · Epic",label:"Epic",icon:"🟣",code:"EPI"},
 {key:"bronze",team:"Extra · Bronce",label:"Bronce",icon:"🟤",code:"BRO"},
 {key:"silver",team:"Extra · Plata",label:"Plata",icon:"⚪",code:"PLA"},
 {key:"gold",team:"Extra · Oro",label:"Oro",icon:"🟡",code:"ORO"}
];
const EXTRA_TEAMS=EXTRA_VARIANTS.map(item=>item.team);
function isExtraTeam(team){return EXTRA_TEAMS.includes(team)}
function extraVariantForTeam(team){return EXTRA_VARIANTS.find(item=>item.team===team)||null}
function extraPlayerName(code){return EXTRA_PLAYERS[Math.max(0,Number(code)-1)]||String(code)}
function stickerDisplayLabel(team,code){
 if(inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27"){
   if(team.startsWith("EXTRA STICKER"))return LIGA_ESTE_EXTRA_NAMES[Math.max(0,Number(code)-1)]||code;
   const info=ligaEsteStickerInfo(team,code);if(info)return info[0];
   const insertInfo=ligaEsteInsertInfo(team,code);if(insertInfo)return insertInfo[0];
 }
 return isExtraTeam(team)?extraPlayerName(code):code;
}
function stickerFeedbackLabel(team,code){return isExtraTeam(team)?`${extraVariantForTeam(team)?.label||"Extra"} · ${extraPlayerName(code)}`:`${team} ${code}`}

const LEGACY_KEYS={
 inventory:"panini-mercat-inventory-v423",
 team:"panini-mercat-team-v3",
 target:"panini-mercat-target-v3",
 session:"panini-mercat-session-v3",
 history:"panini-mercat-history-v3",
 sessions:"panini-mercat-finished-sessions-v3",
 exchange:"panini-mercat-exchange-v423"
};

let originalInventory={},masterInventories={},inventory={},flags={},teamGroups={},history=[],finishedSessions=[];
let sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};
let currentFilter="all",currentView="inventory",exchangeType="give",exchangeListType="give";
let exchange={give:{},receive:{}};
let projects={},activeProjectId="",pendingSync={},lastSyncedAt=null;
let mainTab="collection",collectionFilter="all",collectionTeamFilter="all",collectionSort="album";
let pendingExcelImport=null;

const CLOUD_STATE_TABLE="wc_user_state";
const CLOUD_LOCAL_META_KEY="world-cup-2026-cloud-meta-v7007";
let cloudSession=null,cloudSubscription=null,cloudSaveTimer=null,cloudApplying=false,cloudReady=false,cloudRevision=0,cloudLastUpdatedAt=null,cloudConflictOpen=false;
let pendingBackupRestore=null;
let appDataReady=false,appDataReadyResolve;
const appDataReadyPromise=new Promise(resolve=>{appDataReadyResolve=resolve});

const $=s=>document.querySelector(s);
const teamSelect=$("#teamSelect"),teamSearch=$("#teamSearch"),suggestions=$("#searchSuggestions");
const targetInput=$("#targetInput"),targetValue=$("#targetValue"),grid=$("#stickerGrid");
const toast=$("#toast"),undoButton=$("#undoButton"),emptyState=$("#emptyState");

function makeId(){return crypto.randomUUID?.()||`p-${Date.now()}-${Math.random().toString(16).slice(2)}`}
function emptyInventory(){return Object.fromEntries(Object.entries(originalInventory).map(([team,stickers])=>[team,Object.fromEntries(Object.keys(stickers).map(code=>[code,0]))]))}
function defaultProject(name,target,projectInventory,seedType="custom"){
 return {
   id:makeId(),name,target:Number(target)||1,seedType,collectionType:inferCollectionType({name,seedType}),collectionOrder:Object.keys(projects||{}).length,inventory:structuredClone(projectInventory),
   history:[],finishedSessions:[],sessionStats:{plus:0,minus:0,startedAt:new Date().toISOString()},
   exchange:{give:{},receive:{}},teamOrder:Object.keys(projectInventory),selectedTeam:Object.keys(projectInventory)[0]||"",
   pendingSync:{},lastSyncedAt:null,ui:{teamFilter:"all",collectionFilter:"all",currentFilter:"all",sort:"album",mainTab:"collection",scrollY:0},createdAt:new Date().toISOString()
 };
}
function projectTeamOrder(project=projects?.[activeProjectId],sourceInventory=project?.inventory||inventory){
 const available=Object.keys(sourceInventory||{});
 // El orden de las selecciones debe seguir siempre el orden oficial del álbum.
 // Un teamOrder antiguo recibido desde la nube no puede reordenar el desplegable
 // ni la vista «Todas las selecciones». Solo se usa para referencias adicionales
 // que no formen parte de la edición maestra.
 const masterOrder=Object.keys(masterInventories[project?.seedType]||{});
 const storedOrder=Array.isArray(project?.teamOrder)?project.teamOrder:[];
 const seen=new Set();
 return [...masterOrder,...storedOrder,...available]
   .filter(team=>available.includes(team)&&!seen.has(team)&&seen.add(team));
}
function currentCollectionOptions(project=projects?.[activeProjectId]){
 if(!project)return {collaborationEnabled:true,extra:{epic:false,bronze:false,silver:false,gold:false}};
 project.collectionOptions=project.collectionOptions||{collaborationEnabled:true};
 if(typeof project.collectionOptions.collaborationEnabled!=="boolean")project.collectionOptions.collaborationEnabled=true;
 project.collectionOptions.extra={epic:false,bronze:false,silver:false,gold:false,...(project.collectionOptions.extra||{})};
 return project.collectionOptions;
}
function collaborationEnabled(project=projects?.[activeProjectId]){return currentCollectionOptions(project).collaborationEnabled!==false}
function extraVariantEnabled(key,project=projects?.[activeProjectId]){return currentCollectionOptions(project).extra?.[key]===true}
function teamVisibleForProject(team,project=projects?.[activeProjectId]){
 if(team==="Coca-Cola")return collaborationEnabled(project);
 const variant=extraVariantForTeam(team);
 return variant?extraVariantEnabled(variant.key,project):true;
}
function currentTeamOrder(){return projectTeamOrder(projects?.[activeProjectId],inventory).filter(team=>teamVisibleForProject(team))}
function ensureProjectInventorySchema(project){
 if(!project||!project.inventory)return;
 project.collectionType=inferCollectionType(project);
 if(project.collectionType==="liga-este-2026-27"){
   // 704.11.18: corrige la asignación del nº 11 preservando el inventario existente.
   const racing=project.inventory["Racing de Santander"]||{};
   const rayo=project.inventory["Rayo Vallecano"]||{};
   const hasOldRacing=Object.prototype.hasOwnProperty.call(racing,"11A")||Object.prototype.hasOwnProperty.call(racing,"11B");
   const hasOldRayo=Object.prototype.hasOwnProperty.call(rayo,"11");
   if(hasOldRacing||hasOldRayo){
     if(hasOldRacing){
       racing["11"]=(Number(racing["11"])||0)+(Number(racing["11A"])||0);
       rayo["11B"]=(Number(rayo["11B"])||0)+(Number(racing["11B"])||0);
       delete racing["11A"]; delete racing["11B"];
     }
     if(hasOldRayo){
       rayo["11A"]=(Number(rayo["11A"])||0)+(Number(rayo["11"])||0);
       delete rayo["11"];
     }
   }
   // Completa únicamente claves inexistentes; nunca reinicia cantidades guardadas.
   for(const [team,codes] of Object.entries(LIGA_ESTE_TEAMS)){
     if(!project.inventory[team])project.inventory[team]={};
     for(const code of codes)if(!Object.prototype.hasOwnProperty.call(project.inventory[team],code))project.inventory[team][code]=0;
   }
   return;
 }
 if(project.collectionType==="megacracks-2026-27"){
   project.migrations=project.migrations||{};
   // 704.12.12 · Levante: Carlos Espí pasa de 214 a 215. Movemos el stock una sola vez.
   if(!project.migrations.megacracksLevanteEspi215){
     const levante=project.inventory["Levante UD"]||{};
     const oldQty=Number(levante["214"])||0;
     if(oldQty>0){levante["215"]=(Number(levante["215"])||0)+oldQty;levante["214"]=0;}
     // Renombre de la categoría manteniendo cualquier inventario de EL existente.
     if(project.inventory["EDICIONES LIMITADAS"]){
       const previous=project.inventory["EDICIONES LIMITADAS"];
       const target=project.inventory["LIMITED EDITION"]||(project.inventory["LIMITED EDITION"]={});
       Object.entries(previous).forEach(([code,qty])=>target[code]=(Number(target[code])||0)+(Number(qty)||0));
       delete project.inventory["EDICIONES LIMITADAS"];
     }
     project.migrations.megacracksLevanteEspi215=true;
   }
   for(const [team,codes] of Object.entries({...MEGACRACKS_TEAMS,...MEGACRACKS_SPECIALS})){if(!project.inventory[team])project.inventory[team]={};for(const code of codes)if(!Object.prototype.hasOwnProperty.call(project.inventory[team],code))project.inventory[team][code]=0;}
   return;
 }
 if(project.collectionType!=="world-cup-2026")return;
 // FWC se mostraba antiguamente como 01–20. La app usa ahora los códigos reales 00–19.
 const currentFwc=project.inventory.FWC||{};
 if(Object.prototype.hasOwnProperty.call(currentFwc,"20")&&!Object.prototype.hasOwnProperty.call(currentFwc,"00")){
   const migrated={};
   for(let n=1;n<=20;n++)migrated[String(n-1).padStart(2,"0")]=Number(currentFwc[String(n).padStart(2,"0")])||0;
   project.inventory.FWC=migrated;
 }
 // Coca-Cola es una colección independiente de colaboración, CC01–CC12.
 if(!project.inventory["Coca-Cola"])project.inventory["Coca-Cola"]=Object.fromEntries(Array.from({length:12},(_,i)=>[String(i+1).padStart(2,"0"),0]));
 else for(let n=1;n<=12;n++){const code=String(n).padStart(2,"0");if(!Object.prototype.hasOwnProperty.call(project.inventory["Coca-Cola"],code))project.inventory["Coca-Cola"][code]=0;}
 EXTRA_VARIANTS.forEach(({team})=>{
   if(!project.inventory[team])project.inventory[team]=Object.fromEntries(EXTRA_PLAYERS.map((_,i)=>[String(i+1).padStart(2,"0"),0]));
   else EXTRA_PLAYERS.forEach((_,i)=>{const code=String(i+1).padStart(2,"0");if(!Object.prototype.hasOwnProperty.call(project.inventory[team],code))project.inventory[team][code]=0;});
 });
}
function ensureProjectTeamOrder(project){
 if(!project)return;
 project.collectionType=inferCollectionType(project);
 ensureProjectInventorySchema(project);
 project.teamOrder=projectTeamOrder(project,project.inventory);
 if(!project.selectedTeam||!project.inventory?.[project.selectedTeam])project.selectedTeam=project.teamOrder[0]||"";
 project.ui={teamFilter:"all",collectionFilter:"all",currentFilter:"all",sort:"album",mainTab:"collection",scrollY:0,...(project.ui||{})};
 if(project.ui.teamFilter!=="all"&&!project.inventory?.[project.ui.teamFilter])project.ui.teamFilter="all";
}
function migrateLegacy(seedProjects=[]){
 const created=seedProjects.map(seed=>defaultProject(seed.name,seed.target,seed.inventory,seed.seedType));
 if(!created.length){
   created.push(defaultProject("Mundial 2026 · 5 álbumes",5,structuredClone(originalInventory),"world-cup-2026-main"));
 }
 created[0].selectedTeam=localStorage.getItem(LEGACY_KEYS.team)||Object.keys(created[0].inventory)[0];
 projects=Object.fromEntries(created.map(project=>[project.id,project]));
 activeProjectId=created[0].id;
 persistProjects();
}
function findSeedProject(seed){
 return Object.values(projects).find(project=>
   project.seedType===seed.seedType||
   (seed.seedType==="panini-swiss-edition"&&normalize(project.name).includes("swiss"))||
   (seed.seedType==="world-cup-2026-main"&&(normalize(project.name).includes("mundial 2026")||normalize(project.name).includes("world cup")))
 );
}
function bootstrapProjectsFromSeed(seedData){
 const seedProjects=Array.isArray(seedData?.projects)?seedData.projects:[];
 seedProjects.forEach(seed=>{seed.collectionType=inferCollectionType(seed)});
 masterInventories=Object.fromEntries(seedProjects.map(seed=>[seed.seedType,structuredClone(seed.inventory)]));
 masterInventories["liga-este-2026-27-first-edition"]=collectionInventoryTemplate("liga-este-2026-27");
 masterInventories["megacracks-2026-27-first-edition"]=collectionInventoryTemplate("megacracks-2026-27");
 originalInventory=structuredClone(masterInventories["world-cup-2026-main"]||originalInventory);

 // Build 700.7: los datos existentes pertenecen al usuario y nunca se sobrescriben
 // por una actualización de código o por una nueva revisión del archivo seed.
 if(projects&&Object.keys(projects).length){
   Object.values(projects).forEach(ensureProjectTeamOrder);
   if(!projects[activeProjectId])activeProjectId=Object.keys(projects)[0];
   return;
 }

 migrateLegacy(seedProjects);
 localStorage.setItem(MASTER_SEED_KEY,seedData.revision||DATA_REVISION);
}
function getMasterInventoryForProject(project){
 const stored=masterInventories[project?.seedType];
 if(stored)return structuredClone(stored);
 const template=collectionInventoryTemplate(inferCollectionType(project));
 return Object.keys(template).length?structuredClone(template):structuredClone(originalInventory);
}
function ensureCollectionOrder(){
 const items=Object.values(projects||{});
 const ordered=items.slice().sort((a,b)=>{
   const av=Number.isFinite(Number(a.collectionOrder))?Number(a.collectionOrder):Number.MAX_SAFE_INTEGER;
   const bv=Number.isFinite(Number(b.collectionOrder))?Number(b.collectionOrder):Number.MAX_SAFE_INTEGER;
   return av-bv||String(a.createdAt||"").localeCompare(String(b.createdAt||""));
 });
 ordered.forEach((project,index)=>project.collectionOrder=index);
}
function orderedProjects(){
 ensureCollectionOrder();
 return Object.values(projects||{}).sort((a,b)=>Number(a.collectionOrder)-Number(b.collectionOrder));
}
function persistProjects(){
 ensureCollectionOrder();
 localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));
 localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
 if(!cloudApplying)scheduleCloudSave();
}

function cloudClient(){return window.WCAuth?.client||window.wcSupabase||null}
function canonicalize(value){
 if(Array.isArray(value))return value.map(canonicalize);
 if(value&&typeof value==="object")return Object.fromEntries(Object.keys(value).sort().map(key=>[key,canonicalize(value[key])]));
 return value;
}
function comparableProjects(source=projects){
 return Object.fromEntries(Object.entries(source||{}).map(([id,p])=>[id,{
   id:p.id,name:p.name,target:Number(p.target)||1,seedType:p.seedType||"custom",collectionType:inferCollectionType(p),collectionOrder:Number(p.collectionOrder)||0,
   inventory:p.inventory||{},collectionOptions:p.collectionOptions||{},teamOrder:p.teamOrder||[],selectedTeam:p.selectedTeam||"",
   exchange:p.exchange||{give:{},receive:{}},createdAt:p.createdAt||null
 }]));
}
function hashText(text){let h=2166136261;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(16).padStart(8,"0")}
function stateFingerprint(sourceProjects=projects,sourceActive=activeProjectId){return hashText(JSON.stringify(canonicalize({activeProjectId:sourceActive||"",projects:comparableProjects(sourceProjects)})))}
function projectTotals(sourceProjects,sourceActive){
 const p=sourceProjects?.[sourceActive]||Object.values(sourceProjects||{})[0];if(!p)return {missing:0,duplicates:0,stickers:0};
 const target=Math.max(1,Number(p.target)||1);let missing=0,duplicates=0,stickers=0;
 Object.values(p.inventory||{}).forEach(team=>Object.values(team||{}).forEach(raw=>{const n=Math.max(0,Number(raw)||0);stickers+=n;missing+=Math.max(0,target-n);duplicates+=Math.max(0,n-target)}));
 return {missing,duplicates,stickers};
}
function saveExternalCloudBackup(row,reason="cloud-conflict"){
 if(!row?.payload?.projects)return;
 const snapshots=readJSON("panini-mercat-auto-backups-v5",[]);
 snapshots.push({format:"panini-mercat-backup",schemaVersion:DATA_SCHEMA_VERSION,createdAt:new Date().toISOString(),reason,activeProjectId:row.payload.activeProjectId,projects:structuredClone(row.payload.projects)});
 localStorage.setItem("panini-mercat-auto-backups-v5",JSON.stringify(snapshots.slice(-10)));
}
function createAutoBackup(reason="antes-de-sincronizar"){
 // Copia estrictamente local: no llama a commitProjectState(), porque esa función
 // programa una subida a Supabase y podría competir con la descarga elegida.
 commitProjectStateLocalOnly();
 const snapshots=readJSON("panini-mercat-auto-backups-v5",[]);
 const snapshot={
   format:"panini-mercat-backup",
   version:APP_VERSION,
   schemaVersion:DATA_SCHEMA_VERSION,
   createdAt:new Date().toISOString(),
   reason,
   activeProjectId,
   projects:structuredClone(projects)
 };
 snapshots.push(snapshot);
 localStorage.setItem("panini-mercat-auto-backups-v5",JSON.stringify(snapshots.slice(-10)));
 return snapshot;
}
function ensureCloudConflictDialog(){
 let dialog=$("#cloudConflictDialog");if(dialog)return dialog;
 dialog=document.createElement("dialog");dialog.id="cloudConflictDialog";dialog.className="app-dialog cloud-conflict-dialog";
 dialog.innerHTML=`<form method="dialog" class="dialog-card"><header><div><small>Sincronización protegida</small><h2>Hay dos inventarios diferentes</h2></div></header><div class="dialog-body"><p>La app no reemplazará ninguno automáticamente. Revisa los totales y elige qué copia conservar.</p><div id="cloudConflictComparison" class="cloud-conflict-comparison"></div><p class="settings-note">Antes de reemplazar nada se guardará una copia local de seguridad.</p></div><footer class="cloud-conflict-actions"><button id="cloudConflictUseCloud" class="primary" type="button">Usar datos de la nube</button><button id="cloudConflictUseLocal" class="secondary" type="button">Usar este dispositivo</button><button id="cloudConflictCancel" class="ghost" type="button">Cancelar sin cambiar nada</button></footer></form>`;
 document.body.appendChild(dialog);return dialog;
}
function askCloudConflict(row,{reason="sync"}={}){
 if(cloudConflictOpen)return Promise.resolve("cancel");
 const dialog=ensureCloudConflictDialog(),localTotals=projectTotals(projects,activeProjectId),remoteTotals=projectTotals(row.payload.projects,row.payload.activeProjectId);
 $("#cloudConflictComparison").innerHTML=`<article><strong>Este dispositivo</strong><span>${localTotals.missing} me faltan</span><span>${localTotals.duplicates} repetidas</span><small>${localTotals.stickers} unidades registradas</small></article><article><strong>Nube</strong><span>${remoteTotals.missing} me faltan</span><span>${remoteTotals.duplicates} repetidas</span><small>${remoteTotals.stickers} unidades registradas</small></article>`;
 cloudConflictOpen=true;setCloudStatus("⚠ Conflicto pendiente","error");
 return new Promise(resolve=>{
   const finish=choice=>{cloudConflictOpen=false;dialog.close();resolve(choice)};
   $("#cloudConflictUseCloud").onclick=()=>finish("cloud");
   $("#cloudConflictUseLocal").onclick=()=>finish("local");
   $("#cloudConflictCancel").onclick=()=>finish("cancel");
   dialog.oncancel=e=>{e.preventDefault();finish("cancel")};
   dialog.showModal();
 });
}
function cloudMeta(){return readJSON(CLOUD_LOCAL_META_KEY,{revision:0,updatedAt:null,userId:null})}
function writeCloudMeta(meta){localStorage.setItem(CLOUD_LOCAL_META_KEY,JSON.stringify(meta))}
function cloudPayload(){
 commitProjectStateLocalOnly();
 return {format:"world-cup-2026-cloud-state",schemaVersion:DATA_SCHEMA_VERSION,dataOwner:"supabase-user",version:APP_VERSION,activeProjectId,projects:structuredClone(projects)};
}
function commitProjectStateLocalOnly(){
 const p=projects[activeProjectId];
 if(!p)return;
 p.inventory=structuredClone(inventory);p.history=structuredClone(history.slice(-300));
 p.finishedSessions=structuredClone(finishedSessions.slice(-100));p.sessionStats=structuredClone(sessionStats);
 p.exchange=structuredClone(exchange);p.pendingSync=structuredClone(pendingSync);p.lastSyncedAt=lastSyncedAt;
 p.target=getTarget();if(inventory[teamSelect.value])p.selectedTeam=teamSelect.value;
 p.ui={...(p.ui||{}),teamFilter:collectionTeamFilter,collectionFilter,currentFilter,sort:collectionSort,mainTab,scrollY:Math.max(0,Math.round(window.scrollY||0))};
 localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));
 localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
}
function setCloudStatus(text,state="idle"){
 const node=$("#saveStatus");if(node)node.textContent=text;
 document.body.dataset.cloudState=state;
}
function scheduleCloudSave(delay=450){
 if(!cloudReady||!cloudSession||cloudApplying)return;
 clearTimeout(cloudSaveTimer);cloudSaveTimer=setTimeout(()=>saveCloudState().catch(console.error),delay);
}
async function saveCloudState({force=false}={}){
 const client=cloudClient();if(!client||!cloudSession||!navigator.onLine||cloudApplying||cloudConflictOpen)return false;
 clearTimeout(cloudSaveTimer);cloudSaveTimer=null;setCloudStatus("Comprobando la nube…","syncing");
 if(!force){
   const {data:remote,error:readError}=await client.from(CLOUD_STATE_TABLE).select("payload,revision,updated_at").eq("user_id",cloudSession.user.id).maybeSingle();
   if(readError){setCloudStatus("No se pudo comprobar la nube","error");throw readError}
   if(remote?.payload?.projects&&Number(remote.revision)>cloudRevision){
     const choice=await askCloudConflict(remote,{reason:"before-save"});
     if(choice==="cloud"){createAutoBackup("antes-de-usar-nube");await applyCloudPayload(remote);return false}
     if(choice==="local"){saveExternalCloudBackup(remote,"antes-de-reemplazar-nube");cloudRevision=Number(remote.revision)||0;cloudLastUpdatedAt=remote.updated_at||null;return saveCloudState({force:true})}
     setCloudStatus("Sin sincronizar: elige una copia","error");return false;
   }
 }
 setCloudStatus("Sincronizando…","syncing");
 const nextRevision=Math.max(cloudRevision,Number(cloudMeta().revision)||0)+1;
 const payload=cloudPayload();
 const {data,error}=await client.from(CLOUD_STATE_TABLE).upsert({user_id:cloudSession.user.id,payload,revision:nextRevision,updated_at:new Date().toISOString()},{onConflict:"user_id"}).select("revision,updated_at").single();
 if(error){setCloudStatus("Error al guardar en la nube","error");throw error}
 cloudRevision=Number(data.revision)||nextRevision;cloudLastUpdatedAt=data.updated_at;lastSyncedAt=data.updated_at;
 Object.values(projects).forEach(p=>{p.pendingSync={};p.lastSyncedAt=data.updated_at});pendingSync={};
 commitProjectStateLocalOnly();writeCloudMeta({revision:cloudRevision,updatedAt:data.updated_at,userId:cloudSession.user.id,fingerprint:stateFingerprint()});
 updateSyncUI();setCloudStatus("✓ Guardado en la nube","synced");return true;
}
async function applyCloudPayload(row,{silent=false}={}){
 if(!row?.payload?.projects)return false;
 cloudApplying=true;
 try{
   projects=structuredClone(row.payload.projects);
   // Supabase es la fuente de verdad. El código de la build nunca reinicia inventarios ni objetivos.
   Object.values(projects).forEach(ensureProjectTeamOrder);
   activeProjectId=row.payload.activeProjectId&&projects[row.payload.activeProjectId]?row.payload.activeProjectId:Object.keys(projects)[0];
   cloudRevision=Number(row.revision)||0;cloudLastUpdatedAt=row.updated_at||null;
   localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
   writeCloudMeta({revision:cloudRevision,updatedAt:cloudLastUpdatedAt,userId:cloudSession?.user?.id||null,fingerprint:stateFingerprint()});
   loadProjectState();renderProjectsList();
   if(!silent)showToast("Datos actualizados desde la nube");
   setCloudStatus("✓ Sincronizado","synced");return true;
 }finally{cloudApplying=false}
}
function displayUserName(user){
 const raw=user?.user_metadata?.full_name||user?.user_metadata?.name||user?.email?.split("@")[0]||"";
 return String(raw).trim().split(/\s+/)[0]||"coleccionista";
}
function hideAppSplash(){window.WCAuth?.hideSplash?.();const splash=$("#appSplash");if(splash)splash.hidden=true}
function showReturningWelcome(session){
 hideAppSplash();
 const name=displayUserName(session?.user);
 showToast(`👋 Bienvenido de nuevo, ${name}`);
}
function openFirstCollectionOnboarding(session){
 hideAppSplash();
 const gate=$("#onboardingGate");if(!gate)return;
 $("#onboardingUserName").textContent=displayUserName(session?.user);
 $("#onboardingCreateStep").hidden=false;$("#onboardingReadyStep").hidden=true;
 $("#onboardingMessage").textContent="";
 gate.hidden=false;document.body.classList.add("onboarding-locked");
}
function closeFirstCollectionOnboarding(){
 const gate=$("#onboardingGate");if(gate)gate.hidden=true;
 document.body.classList.remove("onboarding-locked");
}
async function createFirstCloudCollection(event){
 event?.preventDefault();
 const name=$("#onboardingCollectionName")?.value.trim();
 const target=Math.max(1,Number(document.querySelector('input[name="onboardingTarget"]:checked')?.value)||5);
 const message=$("#onboardingMessage"),button=$("#onboardingCreateButton");
 if(!name){if(message)message.textContent="Escribe un nombre para la colección.";return}
 if(button){button.disabled=true;button.textContent="Creando colección…"}
 if(message)message.textContent="Sincronizando con la nube…";
 try{
   const seedType=Object.keys(masterInventories)[0]||"world-cup-2026-main";
   const base=structuredClone(masterInventories[seedType]||originalInventory);
   const blank=Object.fromEntries(Object.entries(base).map(([team,stickers])=>[team,Object.fromEntries(Object.keys(stickers).map(code=>[code,0]))]));
   const first=defaultProject(name,target,blank,seedType);
   projects={[first.id]:first};activeProjectId=first.id;
   localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
   loadProjectState();renderProjectsList();
   cloudReady=true;await saveCloudState();startRealtime();
   $("#onboardingCreateStep").hidden=true;$("#onboardingReadyStep").hidden=false;
 }catch(error){
   console.error(error);if(message)message.textContent="No se pudo crear la colección. Comprueba la conexión e inténtalo de nuevo.";
 }finally{if(button){button.disabled=false;button.textContent="Crear colección"}}
}
async function initialCloudSync(session){
 const client=cloudClient();if(!client||!session)return;
 await appDataReadyPromise;
 cloudSession=session;setCloudStatus("Conectando con la nube…","syncing");
 const {data,error}=await client.from(CLOUD_STATE_TABLE).select("payload,revision,updated_at").eq("user_id",session.user.id).maybeSingle();
 if(error){setCloudStatus("Falta preparar la base de datos","error");console.error(error);hideAppSplash();return}
 cloudReady=true;
 if(data?.payload?.projects&&Object.keys(data.payload.projects).length){
   const meta=cloudMeta(),localFp=stateFingerprint(),remoteFp=stateFingerprint(data.payload.projects,data.payload.activeProjectId),baseline=meta.fingerprint||null;
   if(localFp===remoteFp){cloudRevision=Number(data.revision)||0;cloudLastUpdatedAt=data.updated_at||null;writeCloudMeta({revision:cloudRevision,updatedAt:cloudLastUpdatedAt,userId:session.user.id,fingerprint:localFp});setCloudStatus("✓ Sincronizado","synced")}
   else if(baseline&&localFp===baseline){createAutoBackup("antes-de-actualizar-desde-nube");await applyCloudPayload(data,{silent:true})}
   else if(baseline&&remoteFp===baseline){cloudRevision=Number(data.revision)||0;cloudLastUpdatedAt=data.updated_at||null;saveExternalCloudBackup(data,"nube-anterior");await saveCloudState({force:true})}
   else{
     const choice=await askCloudConflict(data,{reason:"initial"});
     if(choice==="cloud"){createAutoBackup("antes-de-usar-nube");await applyCloudPayload(data,{silent:true})}
     else if(choice==="local"){saveExternalCloudBackup(data,"antes-de-reemplazar-nube");cloudRevision=Number(data.revision)||0;cloudLastUpdatedAt=data.updated_at||null;await saveCloudState({force:true})}
     else setCloudStatus("Sin sincronizar: elige una copia","error");
   }
   startRealtime();showReturningWelcome(session);
 }else{cloudReady=false;openFirstCollectionOnboarding(session)}
}
function startRealtime(){
 const client=cloudClient();if(!client||!cloudSession)return;
 if(cloudSubscription)client.removeChannel(cloudSubscription);
 cloudSubscription=client.channel(`wc-state-${cloudSession.user.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:CLOUD_STATE_TABLE,filter:`user_id=eq.${cloudSession.user.id}`},payload=>{
   const row=payload.new;if(!row||Number(row.revision)<=cloudRevision)return;reconcileCloudRow(row,{reason:"realtime"}).catch(console.error);
 }).subscribe();
}
window.addEventListener("wc-auth-ready",event=>{if(event.detail?.session)initialCloudSync(event.detail.session).catch(console.error)});
window.addEventListener("wc-auth-changed",event=>{
 const session=event.detail?.session;if(session&&!cloudReady)initialCloudSync(session).catch(console.error);
 if(!session){cloudSession=null;cloudReady=false;if(cloudSubscription)cloudClient()?.removeChannel(cloudSubscription);cloudSubscription=null}
});
function hasLocalPendingChanges(){
 return stateFingerprint()!==(cloudMeta().fingerprint||stateFingerprint())||Object.values(projects||{}).some(project=>Object.keys(project?.pendingSync||{}).length>0)||Object.keys(pendingSync||{}).length>0;
}
async function reconcileCloudRow(row,{reason="manual"}={}){
 if(!row?.payload?.projects||cloudConflictOpen)return false;
 const localFp=stateFingerprint(),remoteFp=stateFingerprint(row.payload.projects,row.payload.activeProjectId),baseline=cloudMeta().fingerprint||null;
 if(localFp===remoteFp){cloudRevision=Number(row.revision)||cloudRevision;cloudLastUpdatedAt=row.updated_at||cloudLastUpdatedAt;writeCloudMeta({revision:cloudRevision,updatedAt:cloudLastUpdatedAt,userId:cloudSession?.user?.id||null,fingerprint:localFp});setCloudStatus("✓ Sincronizado","synced");return true}
 if(baseline&&localFp===baseline){createAutoBackup("antes-de-actualizar-desde-nube");return applyCloudPayload(row,{silent:reason!=="manual"})}
 if(baseline&&remoteFp===baseline){cloudRevision=Number(row.revision)||cloudRevision;cloudLastUpdatedAt=row.updated_at||cloudLastUpdatedAt;saveExternalCloudBackup(row,"nube-anterior");return saveCloudState({force:true})}
 const choice=await askCloudConflict(row,{reason});
 if(choice==="cloud"){createAutoBackup("antes-de-usar-nube");return applyCloudPayload(row)}
 if(choice==="local"){saveExternalCloudBackup(row,"antes-de-reemplazar-nube");cloudRevision=Number(row.revision)||cloudRevision;cloudLastUpdatedAt=row.updated_at||cloudLastUpdatedAt;return saveCloudState({force:true})}
 setCloudStatus("Sin sincronizar: elige una copia","error");return false;
}
async function refreshCloudState({reason="manual"}={}){
 const client=cloudClient();if(!client||!cloudSession||!navigator.onLine||cloudApplying||cloudConflictOpen)return false;
 const {data,error}=await client.from(CLOUD_STATE_TABLE).select("payload,revision,updated_at").eq("user_id",cloudSession.user.id).maybeSingle();
 if(error){console.error("No se pudo refrescar la nube",reason,error);setCloudStatus("Sin conexión con la nube","error");return false}
 if(!data?.payload?.projects)return false;
 const remoteRevision=Number(data.revision)||0;
 if(remoteRevision<cloudRevision)return false;
 return reconcileCloudRow(data,{reason});
}
window.addEventListener("online",()=>{if(cloudSession){cloudReady=true;refreshCloudState({reason:"online"}).catch(console.error)}});
window.addEventListener("focus",()=>{if(cloudSession)refreshCloudState({reason:"focus"}).catch(console.error)});
document.addEventListener("visibilitychange",()=>{
 if(document.visibilityState==="visible"&&cloudSession)refreshCloudState({reason:"foreground"}).catch(console.error);
});

// Build 703.1: foreground recovery for iOS PWAs and desktop browser tabs.
// A token refresh or a restored page must not leave the loading overlay above
// an application whose cloud state is already available.
let foregroundRecoveryTimer=null;
function recoverFromForeground(){
 if(document.visibilityState&&document.visibilityState!=="visible")return;
 clearTimeout(foregroundRecoveryTimer);
 foregroundRecoveryTimer=setTimeout(()=>{
   const authGate=$("#authGate");
   const onboardingGate=$("#onboardingGate");
   const authIsOpen=authGate&&!authGate.hidden;
   const onboardingIsOpen=onboardingGate&&!onboardingGate.hidden;
   if(cloudReady&&!authIsOpen&&!onboardingIsOpen){
     hideAppSplash();
   }
 },120);
}
document.addEventListener("visibilitychange",recoverFromForeground);
window.addEventListener("pageshow",recoverFromForeground);
window.addEventListener("focus",recoverFromForeground);

function loadProjectState(){
 const p=projects[activeProjectId];
 ensureProjectTeamOrder(p);
 inventory=structuredClone(p.inventory);
 history=structuredClone(p.history||[]);
 finishedSessions=structuredClone(p.finishedSessions||[]);
 sessionStats=structuredClone(p.sessionStats||{plus:0,minus:0,startedAt:new Date().toISOString()});
 exchange=structuredClone(p.exchange||{give:{},receive:{}});
 pendingSync=structuredClone(p.pendingSync||{});
 lastSyncedAt=p.lastSyncedAt||null;
 targetInput.value=String(p.target||1);
 targetValue.textContent=String(p.target||1);
 const ui=p.ui||{};
 collectionTeamFilter=ui.teamFilter||"all";
 collectionFilter=ui.collectionFilter||"all";
 currentFilter=ui.currentFilter||"all";
 collectionSort=ui.sort||"album";
 mainTab=ui.mainTab||"collection";
 populateTeams();
 teamSelect.value=collectionTeamFilter==="all"?"all":(inventory[collectionTeamFilter]?collectionTeamFilter:"all");
 updateCurrentTeamUI();
 const sortNode=$("#collectionSort");if(sortNode)sortNode.value=collectionSort;
 document.querySelectorAll(".collection-filter-button").forEach(button=>button.classList.toggle("active",button.dataset.collectionFilter===collectionFilter));
 document.querySelectorAll(".tab").forEach(button=>button.classList.toggle("active",button.dataset.filter===currentFilter));
 $("#activeProjectName").textContent=p.name;
 renderAll();updateNavigationBadges();updateSyncUI();
 requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:Number(ui.scrollY)||0,left:0,behavior:"auto"})));
}
function commitProjectState(){
 commitProjectStateLocalOnly();
 scheduleCloudSave();
}

function updateConnectionStatus(){
 const online=navigator.onLine;
 document.body.classList.toggle("is-online",online);
 document.body.classList.toggle("is-offline",!online);
}
function showLoading(message="Cargando…"){
 let overlay=$("#loadingOverlay");
 if(!overlay){
   overlay=document.createElement("div");
   overlay.id="loadingOverlay";
   overlay.className="loading-overlay";
   overlay.innerHTML=`<div class="loading-card"><div class="loading-spinner"></div><strong id="loadingMessage"></strong></div>`;
   document.body.appendChild(overlay);
 }
 $("#loadingMessage").textContent=message;
 overlay.hidden=false;
 overlay.style.display="grid";
}
function hideLoading(){
 const overlay=$("#loadingOverlay");
 if(!overlay)return;
 overlay.hidden=true;
 overlay.style.display="none";
}
window.addEventListener("online",updateConnectionStatus);
window.addEventListener("offline",updateConnectionStatus);

async function loadData(){
 showLoading("Preparando tus colecciones…");
 const [i,f,g,s]=await Promise.all([
   fetch("./data/inventory.json"),
   fetch("./data/flags-v4.json"),
   fetch("./data/team-groups.json"),
   fetch("./data/projects-seed.json")
 ]);
 originalInventory=await i.json();flags=await f.json();teamGroups=await g.json();
 const seedData=await s.json();
 projects=readJSON(PROJECTS_KEY,null);
 activeProjectId=localStorage.getItem(ACTIVE_PROJECT_KEY)||"";
 bootstrapProjectsFromSeed(seedData);
 if(!projects||!Object.keys(projects).length||!projects[activeProjectId])migrateLegacy(seedData.projects);
 loadProjectState();
 renderProjectsList();
 setupSettingsCenter();
 document.body.classList.add("main-tab-collection");
 updateConnectionStatus();
 appDataReady=true;appDataReadyResolve?.();window.dispatchEvent(new CustomEvent("wc-app-data-ready"));
 hideLoading();
}
function readJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function normalize(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}
function megacracksSpecialBadgeHTML(team){
 const kind={
  "ÉLITE":"elite","ÉLITE POWER":"elite-power","ENJOY":"enjoy","ENJOY POWER":"enjoy-power",
  "ZONA VIP":"vip","ZONA VIP POWER":"vip-power","MASTER ROOKIE":"rookie","STARS ON 25":"stars",
  "SPECIAL ONE BLACK":"black","SPECIAL ONE GOLD":"gold","LIMITED EDITION":"limited"
 }[team]||"default";
 const icons={
  elite:`<svg viewBox="0 0 48 48"><path d="M24 5l5.5 11.2L42 18l-9 8.8 2.2 12.4L24 33.3l-11.2 5.9L15 26.8 6 18l12.5-1.8z"/></svg>`,
  "elite-power":`<svg viewBox="0 0 48 48"><path d="M28 3L10 27h12l-2 18 18-25H26z"/></svg>`,
  enjoy:`<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15"/><path d="M16 26c2.7 6 13.3 6 16 0M17 19h.1M31 19h.1"/></svg>`,
  "enjoy-power":`<svg viewBox="0 0 48 48"><path d="M28 3L11 25h11l-2 19 17-24H26z"/><path d="M13 10l4 4M35 10l-4 4"/></svg>`,
  vip:`<svg viewBox="0 0 48 48"><path d="M8 17l8 7 8-13 8 13 8-7-4 20H12z"/><path d="M13 40h22"/></svg>`,
  "vip-power":`<svg viewBox="0 0 48 48"><path d="M7 18l9 6 8-13 8 13 9-6-5 19H12z"/><path d="M27 20l-7 10h6l-1 8 8-12h-6z"/></svg>`,
  rookie:`<svg viewBox="0 0 48 48"><path d="M24 5l6 9 11 3-7 9 .5 12L24 34l-10.5 4 .5-12-7-9 11-3z"/><path d="M19 22h10M24 17v10"/></svg>`,
  stars:`<svg viewBox="0 0 48 48"><path d="M15 9l2.5 5 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8zM33 24l2.2 4.5 5 .7-3.6 3.5.8 5-4.4-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z"/><circle cx="29" cy="11" r="3"/></svg>`,
  black:`<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><path d="M24 13l3.5 7 7.5 1-5.5 5.4 1.4 7.6-6.9-3.6-6.9 3.6 1.4-7.6L13 21l7.5-1z"/></svg>`,
  gold:`<svg viewBox="0 0 48 48"><path d="M24 5l5 10 11 1.6-8 7.8 1.9 11L24 30.2l-9.9 5.2 1.9-11-8-7.8L19 15z"/><circle cx="24" cy="24" r="5"/></svg>`,
  limited:`<svg viewBox="0 0 48 48"><path d="M9 14h30v22H9z"/><path d="M15 14v22M33 14v22M20 20h8M20 26h8M20 32h5"/></svg>`,
  default:`<svg viewBox="0 0 48 48"><path d="M24 7l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z"/></svg>`
 };
 return `<span class="megacracks-special-badge ${kind}" aria-hidden="true">${icons[kind]||icons.default}</span>`;
}
function flagHTML(team){
 const activeType=inferCollectionType(projects?.[activeProjectId]);
 if(activeType==="megacracks-2026-27"){
   if(isMegacracksSpecialTeam(team))return megacracksSpecialBadgeHTML(team);
   const crest=megacracksCrestUrl(team);if(crest)return `<span class="ligaeste-crest-wrap"><span class="ligaeste-crest-fallback">${collectionSafeText(team).slice(0,2).toUpperCase()}</span><img class="ligaeste-team-crest" src="${crest}" alt="Escudo de ${collectionSafeText(team)}" onload="this.previousElementSibling.style.display='none'" onerror="this.style.display='none';this.previousElementSibling.style.display='grid'"></span>`;
 }
 if(activeType==="liga-este-2026-27"){
   if(isLigaEsteInsertTeam(team)){
  const badge=LIGA_ESTE_SPECIAL_BADGES[team];
  return badge?`<span class="ligaeste-insert-mark"><img src="${badge}" alt="${collectionSafeText(team)}"></span>`:`<span class="ligaeste-insert-mark" aria-hidden="true">✦</span>`;
 }
   const crest=ligaEsteCrestUrl(team);
   if(crest)return `<span class="ligaeste-crest-wrap"><span class="ligaeste-crest-fallback">${collectionSafeText(team).slice(0,2).toUpperCase()}</span><img class="ligaeste-team-crest" src="${crest}" alt="Escudo de ${collectionSafeText(team)}" onload="this.previousElementSibling.style.display='none'" onerror="this.style.display='none';this.previousElementSibling.style.display='grid'"></span>`;
 }
 const flag=flags[team]||TEAM_FLAG_EMOJI?.[team]||"";
 if(flag)return /^(?:\.|\/|https?:|data:)/.test(flag)?`<img src="${flag}" alt="">`:`<span class="inline-flag-emoji" aria-hidden="true">${flag}</span>`;
 return '<span class="inline-flag-emoji" aria-hidden="true"></span>';
}
function formatTime(iso){return new Date(iso).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}
function getTarget(){return Math.max(1,Number(targetInput.value)||5)}
function keyFor(team,code){return `${team}|||${code}`}
function splitKey(key){const [team,code]=key.split("|||");return{team,code}}
function showToast(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(window.__tt);window.__tt=setTimeout(()=>toast.classList.remove("show"),900)}
function vibrate(){if("vibrate"in navigator)navigator.vibrate(12)}


function syncKey(team,code){return `${team}|||${code}`}
function markPendingSync(team,code,previous,next,source="manual"){
 const key=syncKey(team,code);
 const existing=pendingSync[key];
 pendingSync[key]={
   team,code,
   firstPrevious:existing?existing.firstPrevious:previous,
   latestValue:next,
   updatedAt:new Date().toISOString(),
   source
 };
}
function pendingSyncCount(){return Object.keys(pendingSync).length}
function isPendingSync(team,code){return Boolean(pendingSync[syncKey(team,code)])}
function updateSyncUI(){
 const count=pendingSyncCount();
 const countText=`${count} ${count===1?"cambio pendiente":"cambios pendientes"}`;
 const countNode=$("#pendingSyncCount");
 const badge=$("#projectPendingBadge");
 const button=$("#markSyncedButton");
 if(countNode)countNode.textContent=countText;
 if(badge)badge.textContent=`${count} pendientes`;
 if(button)button.disabled=count===0;
 if($("#lastSyncText")){
   $("#lastSyncText").textContent=lastSyncedAt
     ? `Última sincronización: ${new Date(lastSyncedAt).toLocaleString("es-ES",{dateStyle:"short",timeStyle:"short"})}`
     : "Todavía no sincronizado";
 }
}

function saveAll(message="Todo guardado"){
 commitProjectState();
 $("#saveStatus").textContent=message;
 $("#saveDot").textContent="✓";
}
function collectionAllTeamsLabel(){const type=inferCollectionType(projects?.[activeProjectId]);return type==="world-cup-2026"?"Todas las selecciones":"Todos los clubes";}
function populateTeams(){
 teamSelect.innerHTML="";
 const allOption=document.createElement("option");
 allOption.value="all";allOption.textContent=collectionAllTeamsLabel();
 teamSelect.appendChild(allOption);
 currentTeamOrder().forEach(team=>{
   const option=document.createElement("option");
   option.value=team;option.textContent=team;
   teamSelect.appendChild(option);
 });
 renderTeamList(currentTeamOrder());
}

function updateCurrentTeamUI(){
 const team=teamSelect.value||"all",flag=$("#currentTeamFlag"),emoji=$("#currentTeamEmoji");
 if(team==="all"){
   $("#currentTeamName").textContent=collectionAllTeamsLabel();
   flag.removeAttribute("src");
   flag.alt="Todas";
   flag.style.display="none";
   if(emoji){emoji.hidden=true;emoji.textContent="";emoji.innerHTML="";}
   return;
 }
 $("#currentTeamName").textContent=team;
 if(team==="Coca-Cola"||isExtraTeam(team)){
   flag.removeAttribute("src");
   flag.style.display="none";
   if(emoji){emoji.textContent=team==="Coca-Cola"?"🥤":(extraVariantForTeam(team)?.icon||"✨");emoji.hidden=false;}
   return;
 }
 const flagSource=flags[team]||"";
 if(!flagSource){
   const activeType=inferCollectionType(projects?.[activeProjectId]);
   if((activeType==="liga-este-2026-27"&&!isLigaEsteInsertTeam(team))||(activeType==="megacracks-2026-27"&&!isMegacracksSpecialTeam(team))){const crest=activeType==="megacracks-2026-27"?megacracksCrestUrl(team):ligaEsteCrestUrl(team);if(crest){if(emoji){emoji.hidden=true;emoji.textContent="";emoji.innerHTML="";}flag.style.display="";flag.src=crest;flag.alt=team;return;}}
   flag.removeAttribute("src");flag.style.display="none";
   if(emoji){
     if(activeType==="megacracks-2026-27"&&isMegacracksSpecialTeam(team))emoji.innerHTML=megacracksSpecialBadgeHTML(team);
     else if(activeType==="liga-este-2026-27"&&isLigaEsteInsertTeam(team)){
       const badge=LIGA_ESTE_SPECIAL_BADGES[team];
       emoji.innerHTML=badge?`<span class="ligaeste-insert-mark"><img src="${badge}" alt=""></span>`:"✦";
     }else emoji.textContent="";
     emoji.hidden=false;
   }
   return;
 }
 if(emoji){emoji.hidden=true;emoji.textContent="";}
 flag.style.display="";
 flag.src=flagSource;
 flag.alt=team;
}
function selectTeam(team){
 collectionTeamFilter=team&&inventory[team]?team:"all";
 teamSelect.value=collectionTeamFilter;
 teamSearch.value="";
 $("#dialogSearch").value="";
 suggestions.hidden=true;
 syncMainSearchSpace();
 updateCurrentTeamUI();
 saveAll();
 renderAll();
}
function renderTeamList(teams){
 const activeType=inferCollectionType(projects?.[activeProjectId]);
 const isLiga=activeType==="liga-este-2026-27"; const isMega=activeType==="megacracks-2026-27";
 const worldButton=`<button class="team-option world-option" data-team="all">
   <span class="team-option-world-icon">${isLiga||isMega?"🏟️":"🌍"}</span><strong>${isLiga||isMega?"Todos los clubes":"Todas las selecciones"}</strong>
 </button>`;
 const pinned=["FWC","Coca-Cola",...EXTRA_TEAMS].filter(team=>teams.includes(team));
 const regular=teams.filter(team=>!pinned.includes(team));
 const categoryButtons=pinned.map(team=>{
   const variant=extraVariantForTeam(team);
   const label=team==="Coca-Cola"?"Coca-Cola · CC":team==="FWC"?"FWC · Especiales":`Extra Stickers · ${variant.label}`;
   return `<button class="team-option featured-team-option ${variant?`extra-option extra-${variant.key}`:""}" data-team="${team}"><span class="team-option-world-icon">${TEAM_FLAG_EMOJI[team]||variant?.icon||""}</span><strong>${label}</strong></button>`;
 }).join("");
 $("#teamList").innerHTML=worldButton+categoryButtons+regular.map(team=>`<button class="team-option" data-team="${team}">${flagHTML(team)}<strong>${team}</strong></button>`).join("");
 $("#teamList").querySelectorAll("button").forEach(button=>button.onclick=()=>{
   selectTeam(button.dataset.team);
   $("#teamDialog").close();
 });
}

function stateFor(qty){
 const need=Math.max(0,getTarget()-qty),offer=Math.max(0,qty-getTarget());
 if(need>0)return{kind:"need",text:`🔴 −${need}`,need,offer};
 if(offer>0)return{kind:"offer",text:`🟢 +${offer}`,need,offer};
 return{kind:"just",text:"🟡 JUSTO",need,offer};
}

function createCard(team,code,qty){
 const st=stateFor(qty),card=document.createElement("article");
 const stagedGive=getExchangeQty("give",team,code);
 const stagedReceive=getExchangeQty("receive",team,code);
 card.className=`sticker-card sticker-card-premium ${st.kind}`;
 card.dataset.code=code;
 card.innerHTML=`
   <div class="sticker-main">
     <div class="sticker-number ${isExtraTeam(team)?"extra-player-name":""}">${stickerDisplayLabel(team,code)}</div>
     <div class="sticker-meta">
       <span class="sticker-stock-label">Stock</span>
       <strong class="sticker-stock-value">x${qty}</strong>
       <span class="status ${st.kind}">${st.text}</span>
     </div>
   </div>
   <div class="sticker-actions">
     ${currentView!=="exchange"||currentFilter!=="need"
       ? `<button class="step-button minus ${currentView==="exchange"?"exchange-action give-action":""}" aria-label="${currentView==="exchange"?"Marcar para dar":"Restar stock"}">
            <span class="button-symbol">${currentView==="exchange"?"DAR":"−"}</span>
            ${currentView==="exchange"&&stagedGive?`<small>✓ x${stagedGive}</small>`:""}
          </button>`
       : `<span class="exchange-action-placeholder"></span>`}
     ${currentView!=="exchange"||currentFilter!=="offer"
       ? `<button class="step-button plus ${currentView==="exchange"?"exchange-action receive-action":""}" aria-label="${currentView==="exchange"?"Marcar para recibir":"Sumar stock"}">
            <span class="button-symbol">${currentView==="exchange"?"RECIBIR":"+"}</span>
            ${currentView==="exchange"&&stagedReceive?`<small>✓ x${stagedReceive}</small>`:""}
          </button>`
       : `<span class="exchange-action-placeholder"></span>`}
   </div>`;
 const minusButton=card.querySelector(".minus");
 const plusButton=card.querySelector(".plus");
 if(minusButton)minusButton.onclick=e=>{
   const isExchange=currentView==="exchange";
   showActionFeedback(e.currentTarget,isExchange?"give":"minus",isExchange?"DAR ✓":"−1");
   const next=isExchange?getExchangeQty("give",team,code)+1:Math.max(0,(Number(inventory[team][code])||0)-1);
   showTopFeedback({
     type:isExchange?"exchange":"negative",
     title:`${stickerFeedbackLabel(team,code)} ${isExchange?"preparado para dar":"eliminado"}`,
     detail:isExchange?`Marcados: x${next}`:`Inventario: x${next}`,
     key:`${isExchange?"give":"minus"}:${team}:${code}`
   });
   if(isExchange)stageFromMainList("give",team,code,e.currentTarget);
   else changeQuantity(team,code,-1,e.currentTarget);
 };
 if(plusButton)plusButton.onclick=e=>{
   const isExchange=currentView==="exchange";
   showActionFeedback(e.currentTarget,isExchange?"receive":"plus",isExchange?"RECIBIR ✓":"+1");
   const next=isExchange?getExchangeQty("receive",team,code)+1:(Number(inventory[team][code])||0)+1;
   showTopFeedback({
     type:isExchange?"exchange":"positive",
     title:`${stickerFeedbackLabel(team,code)} ${isExchange?"preparado para recibir":"añadido"}`,
     detail:isExchange?`Marcados: x${next}`:`Inventario: x${next}`,
     key:`${isExchange?"receive":"plus"}:${team}:${code}`
   });
   if(isExchange)stageFromMainList("receive",team,code,e.currentTarget);
   else changeQuantity(team,code,1,e.currentTarget);
 };
 return card;
}

function isCurrentAlbumComplete(){const target=getTarget();return currentTeamOrder().every(team=>Object.values(inventory?.[team]||{}).every(qty=>Number(qty)>=target));}
function checkAlbumCompletion(previouslyComplete=false){
 const project=projects?.[activeProjectId];if(!project)return;project.ui=project.ui||{};
 const nowComplete=isCurrentAlbumComplete(),key=`${getTarget()}`;
 if(!nowComplete){if(project.ui.albumCompletedTarget===key)delete project.ui.albumCompletedTarget;return;}
 if(previouslyComplete||project.ui.albumCompletedTarget===key)return;
 project.ui.albumCompletedTarget=key;persistProjects();
 const overlay=$("#albumCompleteOverlay");if(overlay){$("#albumCompleteName").textContent=project.name||"Álbum";overlay.hidden=false;overlay.classList.add("show");navigator.vibrate?.([80,50,120]);}
}
function changeQuantity(team,code,delta,button){
 const wasComplete=isCurrentAlbumComplete();
 const previous=Number(inventory[team][code])||0,next=Math.max(0,previous+delta);
 if(next===previous)return;
 history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta,at:new Date().toISOString()});
 inventory[team][code]=next;
 markPendingSync(team,code,previous,next,"inventario");
 delta>0?sessionStats.plus++:sessionStats.minus++;
 saveAll("✓ Guardado ahora");vibrate();
 const card=button.closest(".sticker-card");
 card?.classList.add(delta>0?"flash-card-plus":"flash-card-minus");
 setTimeout(()=>card?.classList.remove("flash-card-plus","flash-card-minus"),430);
 renderAll();checkAlbumCompletion(wasComplete);
 showToast(`✓ ${stickerFeedbackLabel(team,code)} actualizado · x${next}`);
}
function matchesFilter(qty){
 const kind=stateFor(qty).kind;
 return currentFilter==="all"||(currentFilter==="need"&&kind==="need")||(currentFilter==="offer"&&kind==="offer");
}
function renderCards(){
 const team=inventory[teamSelect.value]?teamSelect.value:currentTeamOrder()[0];
 if(!team||!inventory[team])return;
 grid.innerHTML="";
 Object.entries(inventory[team]).sort(([a],[b])=>Number(a)-Number(b)).forEach(([code,q])=>{
   q=Number(q)||0;if(matchesFilter(q))grid.appendChild(createCard(team,code,q));
 });
 emptyState.hidden=grid.children.length>0;
}


function updateSettingsTargetUI(){
 const node=$("#settingsTargetValue");
 if(node)node.textContent=String(getTarget());
}

function updateGlobalDashboard(){
 const target=getTarget();
 let total=0,missing=0,repeats=0;
 currentTeamOrder().forEach(team=>{const stickers=inventory[team]||{};
   Object.values(stickers).forEach(raw=>{
     const qty=Number(raw)||0;
     total+=qty;
     missing+=Math.max(0,target-qty);
     repeats+=Math.max(0,qty-target);
   });
 });
 const totalNode=$("#globalInventoryTotal");
 const missingNode=$("#globalMissingTotal");
 const repeatsNode=$("#globalRepeatsTotal");
 if(totalNode)totalNode.textContent=total.toLocaleString("es-ES");
 if(missingNode)missingNode.textContent=missing.toLocaleString("es-ES");
 if(repeatsNode)repeatsNode.textContent=repeats.toLocaleString("es-ES");
}

function updateSummary(){
 const team=inventory[teamSelect.value]?teamSelect.value:currentTeamOrder()[0];
 if(!team||!inventory[team])return;
 const values=Object.values(inventory[team]).map(Number);
 let need=0,offer=0,total=0,needCards=0,offerCards=0;
 values.forEach(q=>{const s=stateFor(q);need+=s.need;offer+=s.offer;total+=q;if(s.kind==="need")needCards++;if(s.kind==="offer")offerCards++;});
 $("#needTotal").textContent=need;$("#offerTotal").textContent=offer;$("#selectionTotal").textContent=total;
 $("#tabAllCount").textContent=values.length;$("#tabNeedCount").textContent=needCards;$("#tabOfferCount").textContent=offerCards;
 $("#sessionChanges").textContent=`+${sessionStats.plus} / −${sessionStats.minus}`;
 const balance=sessionStats.plus-sessionStats.minus;$("#sessionBalance").textContent=(balance>0?"+":"")+balance;
}
function updateLastChange(){
 const last=history.at(-1);
 $("#lastChange").textContent=last?`Último cambio: ${last.team} ${last.code} · ${last.delta>0?"+1":"−1"} · ${formatTime(last.at)}`:"Sin cambios todavía";
}

function isShinySticker(team,code){
 return team==="FWC"||(team!=="Coca-Cola"&&code==="01");
}
function collectionStickerMatches(team,code,qty){
 const target=getTarget();
 const effectiveFilter=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":collectionFilter;
 if(effectiveFilter==="all")return true;
 if(effectiveFilter==="missing")return qty<target;
 if(effectiveFilter==="repeats")return qty>target;
 if(effectiveFilter==="shiny")return isShinySticker(team,code);
 if(effectiveFilter==="collaboration")return team==="Coca-Cola";
 return true;
}


let topFeedbackTimer=null;
let topFeedbackState={key:"",count:0,lastAt:0};

function showTopFeedback({type,title,detail,key}){
 const capsule=$("#topFeedbackCapsule");
 if(!capsule)return;

 const now=Date.now();
 if(key&&topFeedbackState.key===key&&now-topFeedbackState.lastAt<850){
   topFeedbackState.count+=1;
 }else{
   topFeedbackState={key:key||"",count:1,lastAt:now};
 }
 topFeedbackState.lastAt=now;

 capsule.classList.remove("positive","negative","exchange","show");
 capsule.classList.add(type);
 $("#topFeedbackIcon").textContent=type==="positive"?"✓":type==="negative"?"−":"⇄";
 $("#topFeedbackTitle").textContent=title;
 $("#topFeedbackDetail").textContent=topFeedbackState.count>1
   ? `${detail} · ${topFeedbackState.count} acciones`
   : detail;

 capsule.hidden=false;
 void capsule.offsetWidth;
 capsule.classList.add("show");

 clearTimeout(topFeedbackTimer);
 topFeedbackTimer=setTimeout(()=>{
   capsule.classList.remove("show");
   setTimeout(()=>{capsule.hidden=true},220);
 },1250);
}

function animateCounter(card,positive){
 if(!card)return;
 const counter=card.querySelector(".collection-sticker-qty,.sticker-stock-value");
 if(!counter)return;
 counter.classList.remove("counter-pop","positive","negative");
 void counter.offsetWidth;
 counter.classList.add("counter-pop",positive?"positive":"negative");
 setTimeout(()=>counter.classList.remove("counter-pop","positive","negative"),460);
}

function showActionFeedback(button,type,label){
 if(!button)return;
 button.classList.remove("press-feedback");
 void button.offsetWidth;
 button.classList.add("press-feedback");

 const card=button.closest(".collection-sticker,.sticker-card");
 if(!card)return;
 animateCounter(card,type==="plus"||type==="receive");

 const positive=type==="plus"||type==="receive";
 card.classList.remove("feedback-plus","feedback-minus");
 void card.offsetWidth;
 card.classList.add(positive?"feedback-plus":"feedback-minus");

 card.querySelectorAll(".action-feedback").forEach(node=>node.remove());
 const bubble=document.createElement("span");
 bubble.className=`action-feedback ${type}`;
 bubble.textContent=label;
 card.appendChild(bubble);

 setTimeout(()=>{
   bubble.remove();
   card.classList.remove("feedback-plus","feedback-minus");
   button.classList.remove("press-feedback");
 },760);

 if(navigator.vibrate){
   navigator.vibrate(positive?[18]:[12,22,12]);
 }
}

function createGlobalSticker(team,code,qty){
 const state=stateFor(qty);
 const item=document.createElement("article");
 const giveQty=getExchangeQty("give",team,code);
 const receiveQty=getExchangeQty("receive",team,code);
 const staged=giveQty||receiveQty;
 item.className=`collection-sticker ${state.kind} ${isShinySticker(team,code)?"shiny":""} ${staged?"exchange-staged":""}`;
 const exchangeMode=currentView==="exchange";
 item.innerHTML=`<div><span class="collection-sticker-code ${isExtraTeam(team)?"extra-player-name":""}">${stickerDisplayLabel(team,code)}</span><div class="collection-sticker-qty">x${qty}</div></div>
 <div class="collection-sticker-actions ${exchangeMode?"exchange-actions":""}">
   ${exchangeMode
     ? `${currentFilter!=="need"?`<button class="give-global" data-type="give">DAR${giveQty?` <small>✓x${giveQty}</small>`:""}</button>`:"<span></span>"}
        ${currentFilter!=="offer"?`<button class="receive-global" data-type="receive">RECIBIR${receiveQty?` <small>✓x${receiveQty}</small>`:""}</button>`:"<span></span>"}`
     : `<button data-delta="-1" aria-label="Restar">−</button><button data-delta="1" aria-label="Sumar">+</button>`}
 </div>`;
 if(exchangeMode){
   item.querySelectorAll("button[data-type]").forEach(button=>button.onclick=()=>{
     const type=button.dataset.type;
     const current=getExchangeQty(type,team,code);
     if(type==="give"&&current>=qty){
       showToast(`No puedes marcar más de x${qty} para dar`);
       return;
     }
     setExchangeQty(type,team,code,current+1);
     showActionFeedback(button,type,type==="give"?"DAR ✓":"RECIBIR ✓");
     showTopFeedback({
       type:"exchange",
       title:stickerFeedbackLabel(team,code),
       detail:type==="give"?`Preparado para dar · x${current+1}`:`Preparado para recibir · x${current+1}`,
       key:`${type}:${team}:${code}`
     });
     saveAll("Intercambio preparado");
     setTimeout(()=>renderAll(),130);
   });
 }else{
   item.querySelectorAll("button[data-delta]").forEach(button=>button.onclick=()=>{
     const delta=Number(button.dataset.delta);
     const previous=Number(inventory[team][code])||0;
     const next=Math.max(0,previous+delta);
     if(next===previous)return;
     inventory[team][code]=next;
     markPendingSync(team,code,previous,next,"coleccion-global");
     history.push({id:makeId(),team,code,previous,next,delta,at:new Date().toISOString()});
     delta>0?sessionStats.plus++:sessionStats.minus++;
     saveAll("✓ Guardado ahora");
     showActionFeedback(button,delta>0?"plus":"minus",delta>0?"+1":"−1");
     showTopFeedback({
       type:delta>0?"positive":"negative",
       title:`${stickerFeedbackLabel(team,code)} ${delta>0?"añadido":"eliminado"}`,
       detail:`Inventario: x${next}`,
       key:`${delta>0?"plus":"minus"}:${team}:${code}`
     });
     setTimeout(()=>renderAll(),130);
   });
 }
 return item;
}

function activeShareListType(){
 const effectiveFilter=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":collectionFilter;
 return effectiveFilter==="missing"||effectiveFilter==="repeats"?effectiveFilter:null;
}

function updateShareCollectionButton(){
 const button=$("#shareCollectionListButton");
 if(!button)return;
 const type=activeShareListType();
 button.hidden=!type;
 button.setAttribute("aria-label",type==="missing"?"Compartir cromos que me faltan":"Compartir cromos repetidos");
}

const TEAM_FLAG_EMOJI={
 "México":"🇲🇽","Sudáfrica":"🇿🇦","Corea del Sur":"🇰🇷","Chequia":"🇨🇿",
 "Canadá":"🇨🇦","Bosnia y Herzegovina":"🇧🇦","Catar":"🇶🇦","Suiza":"🇨🇭",
 "Brasil":"🇧🇷","Marruecos":"🇲🇦","Haití":"🇭🇹","Escocia":"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
 "Estados Unidos":"🇺🇸","Paraguay":"🇵🇾","Australia":"🇦🇺","Turquía":"🇹🇷",
 "Alemania":"🇩🇪","Curazao":"🇨🇼","Costa de Marfil":"🇨🇮","Ecuador":"🇪🇨",
 "Países Bajos":"🇳🇱","Japón":"🇯🇵","Suecia":"🇸🇪","Túnez":"🇹🇳",
 "Bélgica":"🇧🇪","Egipto":"🇪🇬","Irán":"🇮🇷","Nueva Zelanda":"🇳🇿",
 "España":"🇪🇸","Cabo Verde":"🇨🇻","Arabia Saudita":"🇸🇦","Uruguay":"🇺🇾",
 "Francia":"🇫🇷","Senegal":"🇸🇳","Irak":"🇮🇶","Noruega":"🇳🇴",
 "Argentina":"🇦🇷","Argelia":"🇩🇿","Austria":"🇦🇹","Jordania":"🇯🇴",
 "Portugal":"🇵🇹","RD Congo":"🇨🇩","Uzbekistán":"🇺🇿","Colombia":"🇨🇴",
 "Inglaterra":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Croacia":"🇭🇷","Ghana":"🇬🇭","Panamá":"🇵🇦",
 "FWC":"⭐","Coca-Cola":"🥤","Extra · Epic":"🟣","Extra · Bronce":"🟤","Extra · Plata":"⚪","Extra · Oro":"🟡"
};

const PANINI_TEAM_CODES={
 "FWC":"FWC","CC":"Coca-Cola","EPI":"Extra · Epic","BRO":"Extra · Bronce","PLA":"Extra · Plata","ORO":"Extra · Oro","MEX":"México","RSA":"Sudáfrica","KOR":"Corea del Sur","CZE":"Chequia",
 "CAN":"Canadá","BIH":"Bosnia y Herzegovina","QAT":"Catar","SUI":"Suiza",
 "BRA":"Brasil","MAR":"Marruecos","HAI":"Haití","SCO":"Escocia",
 "USA":"Estados Unidos","PAR":"Paraguay","AUS":"Australia","TUR":"Turquía",
 "GER":"Alemania","CUW":"Curazao","CIV":"Costa de Marfil","ECU":"Ecuador",
 "NED":"Países Bajos","JPN":"Japón","SWE":"Suecia","TUN":"Túnez",
 "BEL":"Bélgica","EGY":"Egipto","IRN":"Irán","NZL":"Nueva Zelanda",
 "ESP":"España","CPV":"Cabo Verde","KSA":"Arabia Saudita","URU":"Uruguay",
 "FRA":"Francia","SEN":"Senegal","IRQ":"Irak","NOR":"Noruega",
 "ARG":"Argentina","ALG":"Argelia","AUT":"Austria","JOR":"Jordania",
 "POR":"Portugal","COD":"RD Congo","UZB":"Uzbekistán","COL":"Colombia",
 "ENG":"Inglaterra","CRO":"Croacia","GHA":"Ghana","PAN":"Panamá"
};
const TEAM_TO_PANINI_CODE=Object.fromEntries(Object.entries(PANINI_TEAM_CODES).map(([code,team])=>[team,code]));
const PANINI_CODE_ALIASES={JAP:"JPN",SAU:"KSA",NLD:"NED",HOL:"NED",KOR:"KOR",RDC:"COD",DRC:"COD",BOS:"BIH",CZR:"CZE",CRC:"CUW"};

// Nombres admitidos para listas copiadas desde WhatsApp, en castellano e inglés.
const PANINI_TEAM_NAME_ALIASES={
 FWC:["fwc","fifa world cup","mundial"],CC:["cc","coca cola","coca-cola","cocacola","colaboracion coca cola","colaboración coca cola"],
 MEX:["mexico","méxico"],RSA:["south africa","sudafrica","sudáfrica"],KOR:["south korea","korea republic","corea del sur","corea"],CZE:["czechia","czech republic","chequia","republica checa","república checa"],
 CAN:["canada","canadá"],BIH:["bosnia and herzegovina","bosnia-herzegovina","bosnia y herzegovina","bosnia"],QAT:["qatar","catar"],SUI:["switzerland","suiza"],
 BRA:["brazil","brasil"],MAR:["morocco","marruecos","morroco","marocco"],HAI:["haiti","haití"],SCO:["scotland","escocia"],
 USA:["united states","usa","estados unidos","eeuu","estados unidos de america"],PAR:["paraguay"],AUS:["australia"],TUR:["turkey","turkiye","türkiye","turquia","turquía"],
 GER:["germany","alemania"],CUW:["curacao","curaçao","curazao","curazao"],CIV:["ivory coast","cote d ivoire","côte d'ivoire","costa de marfil"],ECU:["ecuador"],
 NED:["netherlands","holland","paises bajos","países bajos","holanda"],JPN:["japan","japon","japón"],SWE:["sweden","suecia"],TUN:["tunisia","tunez","túnez"],
 BEL:["belgium","belgica","bélgica"],EGY:["egypt","egipto"],IRN:["iran","irán"],NZL:["new zealand","nueva zelanda"],
 ESP:["spain","espana","españa"],CPV:["cape verde","cabo verde"],KSA:["saudi arabia","arabia saudita","arabia saudi"],URU:["uruguay"],
 FRA:["france","francia"],SEN:["senegal"],IRQ:["iraq","irak"],NOR:["norway","noruega"],
 ARG:["argentina"],ALG:["algeria","argelia"],AUT:["austria"],JOR:["jordan","jordania"],
 POR:["portugal"],COD:["dr congo","d r congo","democratic republic of congo","rd congo","republica democratica del congo","república democrática del congo","congo"],UZB:["uzbekistan","uzbekistán"],COL:["colombia"],
 ENG:["england","inglaterra"],CRO:["croatia","croacia"],GHA:["ghana"],PAN:["panama","panamá"]
};
function normalizeTradeName(value){return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();}
const PANINI_NORMALIZED_NAME_TO_CODE=(()=>{const map={};Object.keys(PANINI_TEAM_CODES).forEach(code=>{map[normalizeTradeName(code)]=code;});Object.entries(PANINI_TEAM_NAME_ALIASES).forEach(([code,names])=>names.forEach(name=>map[normalizeTradeName(name)]=code));return map;})();
const PANINI_SORTED_NAME_ALIASES=Object.keys(PANINI_NORMALIZED_NAME_TO_CODE).sort((a,b)=>b.length-a.length);
function teamSearchText(team){
 const activeType=inferCollectionType(projects?.[activeProjectId]);
 if(activeType==="liga-este-2026-27")return ligaEsteTeamSearchText(team);
 if(activeType==="megacracks-2026-27")return megacracksTeamSearchText(team);
 const code=TEAM_TO_PANINI_CODE[team]||team;
 const aliases=PANINI_TEAM_NAME_ALIASES[code]||[];
 return normalizeTradeName([team,code,...aliases].join(" "));
}
function filterTeamsByQuery(query){
 const q=normalizeTradeName(query);
 if(!q)return currentTeamOrder();
 return currentTeamOrder().filter(team=>teamSearchText(team).includes(q));
}

function paniniDisplayCode(team,internalCode){
 const raw=String(internalCode);
 if(inferCollectionType(projects?.[activeProjectId])!=="world-cup-2026")return raw;
 const n=Number(raw);
 return String(n).padStart(2,"0");
}

function paniniInternalCode(team,displayNumber){
 const n=Number(displayNumber);
 if(!Number.isInteger(n))return null;
 if(team==="FWC")return n>=0&&n<=19?String(n).padStart(2,"0"):null;
 if(team==="Coca-Cola")return n>=1&&n<=12?String(n).padStart(2,"0"):null;
 return n>=1&&n<=20?String(n).padStart(2,"0"):null;
}


function collectShareGroups(type,projectId=activeProjectId){
 if(projectId===activeProjectId)commitProjectStateLocalOnly();
 const project=projects?.[projectId]||projects?.[activeProjectId];
 const sourceInventory=project?.inventory||inventory;
 const target=Math.max(1,Number(project?.target)||1);
 const groups=[];
 let totalUnits=0,totalReferences=0;
 projectTeamOrder(project,sourceInventory).filter(team=>teamVisibleForProject(team,project)).forEach(team=>{
   const stickers=sourceInventory[team]||{};
   const items=Object.entries(stickers)
     .map(([code,raw])=>{
       const qty=Math.max(0,Number(raw)||0);
       const units=type==="album"?qty:type==="missing"?Math.max(0,target-qty):Math.max(0,qty-target);
       return {code,units,qty};
     })
     .filter(item=>type==="album"?item.qty>0:item.units>0)
     .sort((a,b)=>Number(a.code)-Number(b.code));
   if(!items.length)return;
   totalReferences+=items.length;
   totalUnits+=items.reduce((sum,item)=>sum+(type==="album"?item.qty:item.units),0);
   groups.push({team,items});
 });
 return {groups,totalUnits,totalReferences,project};
}

function shareCollectionPlayerName(collectionType,team,code){
 if(collectionType==="liga-este-2026-27"){
   const info=ligaEsteStickerInfo(team,code)||ligaEsteInsertInfo(team,code);
   return info?.[0]||String(code);
 }
 if(collectionType==="megacracks-2026-27"){
   const info=megacracksItemInfo(team,code);
   return info?.[0]||String(code);
 }
 return stickerDisplayLabel(team,code);
}
function buildPremiumClubShareText(type,{compact=false,projectId=activeProjectId}={}){
 const {groups,totalUnits,totalReferences,project}=collectShareGroups(type,projectId);
 if(!groups.length)return {text:"",totalUnits:0,totalReferences:0};
 const collectionType=inferCollectionType(project);
 const isLiga=collectionType==="liga-este-2026-27";
 const isMega=collectionType==="megacracks-2026-27";
 const specialCheck=isLiga?isLigaEsteInsertTeam:isMegacracksSpecialTeam;
 const collectionName=isLiga?"LIGA ESTE 2026/27":"MEGACRACKS 2026/27";
 const brandIcon=isLiga?"🟣":"⚫";
 const stateIcon=type==="missing"?"🔎":type==="repeats"?"🔁":"📚";
 const stateLabel=type==="missing"?"ME FALTAN":type==="repeats"?"REPETIDOS PARA CAMBIAR":"INVENTARIO";
 const summary=type==="album"
   ?`${totalReferences} referencias · ${totalUnits} unidades`
   :`${totalUnits} cromos · ${totalReferences} referencias`;
 const clubGroups=groups.filter(group=>!specialCheck(group.team));
 const specialGroups=groups.filter(group=>specialCheck(group.team));
 const lines=[`${brandIcon} *StickerBase · ${collectionName}*`,`${stateIcon} *${stateLabel}* · ${summary}`,""];
 const itemText=(group,item)=>{
   const code=String(item.code);
   const name=shareCollectionPlayerName(collectionType,group.team,item.code);
   const units=type==="album"?item.qty:item.units;
   return `${code} · ${name}${units>1?` x${units}`:""}`;
 };
 if(compact){
   if(clubGroups.length){lines.push("⚽ *CLUBES*");clubGroups.forEach(group=>lines.push(`*${group.team}*: ${group.items.map(item=>itemText(group,item)).join(" | ")}`));}
   if(specialGroups.length){if(clubGroups.length)lines.push("");lines.push(isLiga?"✨ *ESPECIALES E INSERTS*":"✨ *ESPECIALES Y PARALELAS*");specialGroups.forEach(group=>lines.push(`*${group.team}*: ${group.items.map(item=>itemText(group,item)).join(" | ")}`));}
 }else{
   const appendGroups=(heading,icon,subset)=>{
     if(!subset.length)return;
     lines.push(`${icon} *${heading}*`,"");
     subset.forEach((group,index)=>{
       lines.push(`*${group.team}*`);
       group.items.forEach(item=>lines.push(`• ${itemText(group,item)}`));
       if(index<subset.length-1)lines.push("");
     });
   };
   appendGroups("CLUBES","⚽",clubGroups);
   if(clubGroups.length&&specialGroups.length)lines.push("");
   appendGroups(isLiga?"ESPECIALES E INSERTS":"ESPECIALES Y PARALELAS","✨",specialGroups);
 }
 lines.push("","────────────","Generado con StickerBase");
 return {text:lines.join("\n"),totalUnits,totalReferences};
}
function buildShareCollectionText(type,{flags=false,compact=false,projectId=activeProjectId}={}){
 const project=projects?.[projectId]||projects?.[activeProjectId];
 const collectionType=inferCollectionType(project);
 if(collectionType==="liga-este-2026-27"||collectionType==="megacracks-2026-27")return buildPremiumClubShareText(type,{compact,projectId});
 const {groups,totalUnits,totalReferences}=collectShareGroups(type,projectId);
 if(!groups.length)return {text:"",totalUnits:0,totalReferences:0};
 const projectName=project?.name||"Mundial 2026";
 const missing=type==="missing",album=type==="album";
 const summary=album
   ?`Inventario del álbum · ${totalReferences} referencias · ${totalUnits} cromos`
   :missing?`Me faltan ${totalUnits} cromos`:`Tengo ${totalUnits} cromos repetidos para cambiar`;
 const lines=["🏆 "+projectName,"",summary,""];
 groups.forEach((group,index)=>{
   const officialCode=TEAM_TO_PANINI_CODE[group.team]||group.team;
   const heading=(flags?`${TEAM_FLAG_EMOJI[group.team]||""} `:"")+officialCode;
   const stickers=group.items.map(item=>{
     const shown=paniniDisplayCode(group.team,item.code);
     if(album)return `${shown} x${item.qty}`;
     return item.units>1?`${shown} x${item.units}`:shown;
   }).join(", ");
   if(compact)lines.push(`${heading.trim()}: ${stickers}`);
   else{
     lines.push(heading.trim());lines.push(stickers);
     if(index<groups.length-1)lines.push("");
   }
 });
 return {text:lines.join("\n"),totalUnits,totalReferences};
}
function openShareOptions(type=activeShareListType(),projectId=activeProjectId){
 if(!type)return;
 const {totalUnits,totalReferences}=collectShareGroups(type,projectId);
 if(type!=="album"&&!totalUnits){
   showToast(type==="missing"?"No te falta ningún cromo":"No tienes cromos repetidos");
   return;
 }
 if(type==="album"&&!totalReferences){showToast("Esta colección no contiene referencias");return;}
 const sheet=$("#shareOptionsSheet");
 if(!sheet)return;
 sheet.dataset.type=type;sheet.dataset.projectId=projectId;
 $("#shareOptionsTitle").textContent=type==="album"?"Exportar álbum":type==="missing"?"Compartir cromos que me faltan":"Compartir cromos repetidos";
 const shareProject=projects?.[projectId]||projects?.[activeProjectId],shareType=inferCollectionType(shareProject),premiumShare=shareType==="liga-este-2026-27"||shareType==="megacracks-2026-27";
 const shareBtn=sheet.querySelector('[data-share-option="share"] small'),copyBtn=sheet.querySelector('[data-share-option="copy"] small'),compactBtn=sheet.querySelector('[data-share-option="compact"] small');
 if(shareBtn)shareBtn.textContent=premiumShare?"Formato premium · WhatsApp, Telegram, Mensajes…":"Con banderas · WhatsApp, Telegram, Mensajes…";
 if(copyBtn)copyBtn.textContent=premiumShare?"Formato premium · nombres, números y apartados":"Sin banderas · ideal para Wallapop o Vinted";
 if(compactBtn)compactBtn.textContent=premiumShare?"Versión breve · una línea por club o especial":"Sin banderas · una línea por selección";
 sheet.hidden=false;
 requestAnimationFrame(()=>sheet.classList.add("open"));
 document.body.classList.add("share-sheet-open");
}

function exportEditedCollectionAlbum(){
 const projectId=$("#editCollectionId")?.value;
 if(!projectId||!projects?.[projectId])return;
 closeEditCollection();
 setTimeout(()=>openShareOptions("album",projectId),80);
}

function closeShareOptions(){
 const sheet=$("#shareOptionsSheet");
 if(!sheet)return;
 sheet.classList.remove("open");
 document.body.classList.remove("share-sheet-open");
 setTimeout(()=>{if(!sheet.classList.contains("open"))sheet.hidden=true;},180);
}

async function copyShareText(text){
 if(navigator.clipboard?.writeText){
   await navigator.clipboard.writeText(text);
   return;
 }
 const area=document.createElement("textarea");
 area.value=text;
 area.setAttribute("readonly","");
 area.style.position="fixed";
 area.style.opacity="0";
 document.body.appendChild(area);
 area.select();
 const copied=document.execCommand("copy");
 area.remove();
 if(!copied)throw new Error("No se pudo copiar la lista");
}


function actionFeedback(button,{busy="Procesando…",done="Hecho ✓",error="Error"}={}){
 if(!button)return {success(){},fail(){},restore(){}};
 const original=button.dataset.originalLabel||button.textContent;
 button.dataset.originalLabel=original;
 button.disabled=true;button.classList.add("is-working");button.textContent=busy;
 vibrate();
 let timer;
 const finish=(label,cls)=>{clearTimeout(timer);button.classList.remove("is-working","is-success","is-error");button.classList.add(cls);button.textContent=label;timer=setTimeout(()=>{button.disabled=false;button.classList.remove(cls);button.textContent=original;},1100)};
 return {success(label=done){finish(label,"is-success")},fail(label=error){finish(label,"is-error")},restore(){clearTimeout(timer);button.disabled=false;button.classList.remove("is-working","is-success","is-error");button.textContent=original}};
}

async function runShareOption(mode){
 const sheet=$("#shareOptionsSheet");
 const type=sheet?.dataset.type||activeShareListType();
 const projectId=sheet?.dataset.projectId||activeProjectId;
 if(!type)return;
 const options=mode==="share"?{flags:true,compact:true,projectId}:mode==="compact"?{flags:false,compact:true,projectId}:{flags:false,compact:false,projectId};
 const {text,totalUnits,totalReferences}=buildShareCollectionText(type,options);
 if(!text||(type==="album"?!totalReferences:!totalUnits)){
   closeShareOptions();
   showToast(type==="album"?"Esta colección no contiene referencias":type==="missing"?"No te falta ningún cromo":"No tienes cromos repetidos");
   return;
 }
 const title=type==="album"?"Inventario completo":type==="missing"?"Cromos que me faltan":"Cromos repetidos";
 closeShareOptions();
 try{
   if(mode==="share"){
     // En iOS el Web Share API altera el viewport visual al volver de WhatsApp.
     // Abrimos WhatsApp directamente y mantenemos el scroll dentro del shell de la app.
     await copyShareText(text);
     showToast("Lista copiada · abriendo WhatsApp…");
     const whatsappUrl=`whatsapp://send?text=${encodeURIComponent(text)}`;
     setTimeout(()=>{window.location.href=whatsappUrl;},80);
     return;
   }
   await copyShareText(text);
   showToast(mode==="compact"?"Lista compacta copiada ✓":"Lista copiada al portapapeles ✓");
 }catch(error){
   if(error?.name==="AbortError"){
     document.documentElement.style.scrollBehavior="auto";
     document.body.style.scrollBehavior="auto";
     requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:window.scrollY,left:0,behavior:"auto"})));
     return;
   }
   try{
     await copyShareText(text);
     showToast("Lista copiada al portapapeles ✓");
   }catch(copyError){
     console.error("No se pudo compartir la lista",error,copyError);
     showToast("No se pudo compartir la lista");
   }
 }
}

const DEFAULT_TOP_STARS={
 "ESP|15":"Lamine Yamal","ENG|11":"Jude Bellingham","ENG|18":"Harry Kane",
 "FRA|20":"Kylian Mbappé","FRA|15":"Ousmane Dembélé","FRA|14":"Michael Olise",
 "POR|15":"Cristiano Ronaldo","ARG|17":"Lionel Messi","NZL|06":"Tim Payne","CPV|02":"Vozinha"
};

function tradeStickerKey(item){return `${item.officialCode}|${item.displayCode}`}
let tradeAnalyzerGiveSelection=new Map();
let tradeAnalyzerGiveTouched=new Set();
let tradeReceiveSelection=new Map();
function tradeSourceKey(item){return String(item?.sourceRaw||`${item?.team||""}|${item?.displayCode||""}`)}
function currentTradePreferences(){
 const project=projects?.[activeProjectId];
 if(!project)return {stars:{},protected:{}};
 project.tradePreferences=project.tradePreferences||{stars:{},protected:{},disabledDefaultStars:{},disabledDefaultProtected:{}};
 project.tradePreferences.stars=project.tradePreferences.stars||{};
 project.tradePreferences.protected=project.tradePreferences.protected||{};
 project.tradePreferences.disabledDefaultStars=project.tradePreferences.disabledDefaultStars||{};
 project.tradePreferences.disabledDefaultProtected=project.tradePreferences.disabledDefaultProtected||{};
 return project.tradePreferences;
}
function isTradeStar(item){const key=tradeStickerKey(item),prefs=currentTradePreferences();return Boolean((DEFAULT_TOP_STARS[key]&&!prefs.disabledDefaultStars[key])||prefs.stars[key])}
function isTradeProtected(item){const key=tradeStickerKey(item),prefs=currentTradePreferences();return Boolean((DEFAULT_TOP_STARS[key]&&!prefs.disabledDefaultProtected[key])||prefs.protected[key])}
function tradeStarName(item){return DEFAULT_TOP_STARS[tradeStickerKey(item)]||""}
function tradeStickerCategory(item){
 const t=inferCollectionType(projects?.[activeProjectId]);if(t==="liga-este-2026-27")return isLigaEsteInsertTeam(item.team)?"special":"normal";if(t==="megacracks-2026-27")return isMegacracksSpecialTeam(item.team)?"special":"normal";
 return item.team==="Coca-Cola"?"collaboration":item.team==="FWC"||(item.team!=="Coca-Cola"&&Number(item.displayCode)===1)?"special":"normal";
}
function toggleTradeMark(item,type){
 const prefs=currentTradePreferences();const key=tradeStickerKey(item);
 if(DEFAULT_TOP_STARS[key]&&type==="protected"){showToast("Esta estrella TOP está protegida por defecto");return;}
 prefs[type][key]=!prefs[type][key];if(!prefs[type][key])delete prefs[type][key];
 persistProjects();renderTradeAnalyzerResult();
}

function levenshteinDistance(a,b){
 const rows=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
 for(let i=0;i<=a.length;i++)rows[i][0]=i;
 for(let j=0;j<=b.length;j++)rows[0][j]=j;
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 return rows[a.length][b.length];
}
function suggestPaniniCode(rawCode){
 const code=String(rawCode||"").toUpperCase();const alias=PANINI_CODE_ALIASES[code];if(alias)return alias;
 const best=Object.keys(PANINI_TEAM_CODES).map(candidate=>({candidate,d:levenshteinDistance(code,candidate)})).sort((a,b)=>a.d-b.d)[0];
 return best&&best.d<=1?best.candidate:null;
}
function suggestPaniniTeamName(rawName){
 const normalized=normalizeTradeName(rawName);if(!normalized)return null;
 const best=PANINI_SORTED_NAME_ALIASES.map(alias=>({alias,d:levenshteinDistance(normalized,alias)})).sort((a,b)=>a.d-b.d||a.alias.length-b.alias.length)[0];
 const limit=normalized.length<=5?1:Math.max(2,Math.floor(normalized.length*.22));
 return best&&best.d<=limit?PANINI_NORMALIZED_NAME_TO_CODE[best.alias]:null;
}
function parseWorldCupTradeList(rawText){
 const found=[],invalid=[],foundByKey=new Map(),invalidSeen=new Set();
 const addInvalid=(raw,reason,suggestion="")=>{const key=`${raw}|${reason}`;if(!raw||invalidSeen.has(key))return;invalidSeen.add(key);invalid.push({raw,reason,suggestion});};
 const addSticker=(rawCode,number,rawToken,requestedUnits=1)=>{
   let code=String(rawCode||"").toUpperCase();code=PANINI_CODE_ALIASES[code]||code;const team=PANINI_TEAM_CODES[code];
   if(!team){addInvalid(rawToken||`${rawCode}${number}`,"Selección no reconocida",suggestPaniniCode(rawCode)||suggestPaniniTeamName(rawCode)||"");return;}
   if(team==="Coca-Cola"&&!collaborationEnabled()){addInvalid(rawToken||`${code}${number}`,"Coca-Cola está desactivada en Ajustes");return;}const internalCode=paniniInternalCode(team,number);if(!internalCode){addInvalid(rawToken||`${code}${number}`,team==="FWC"?"FWC admite números del 00 al 19":team==="Coca-Cola"?"CC admite números del 01 al 12":"El número debe estar entre 01 y 20");return;}
   const key=`${team}|${internalCode}`;const units=Math.max(1,Number(requestedUnits)||1);const existing=foundByKey.get(key);
   if(existing){existing.requestedUnits+=units;return;}
   const item={team,officialCode:code,internalCode,displayCode:paniniDisplayCode(team,internalCode),requestedUnits:units,sourceRaw:String(rawToken||`${code}${number}`).trim()};foundByKey.set(key,item);found.push(item);
 };
 String(rawText||"").replace(/\r/g,"").split("\n").forEach(originalLine=>{
   const quantityMatch=originalLine.match(/[×xX]\s*(\d+)/);const requestedUnits=quantityMatch?Math.max(1,Number(quantityMatch[1])||1):1;
   const clean=originalLine.replace(/[×xX]\s*\d+/g,"").replace(/[：]/g,":").trim();if(!clean)return;
   const heading=normalizeTradeName(clean).replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
   const ignoredHeadings=["he needs from you","he gives you","what i need","what i give","missing","duplicates","needed","offered","faltantes","repetidas","lo que necesito","lo que doy","figuritas app liste","figuritas app list","figuritas app lista"];
   if(ignoredHeadings.some(value=>heading===value||heading.startsWith(value+" ")))return;

   // Formato compacto con uno o varios códigos: ESP15, ESP 15, KSA01...
   const compactMatches=[...clean.toUpperCase().matchAll(/(?:^|[^A-Z])([A-Z]{3})\s*[:]?\s*(\d{1,2})(?=$|[^0-9])/g)];
   if(compactMatches.length){
     compactMatches.forEach(m=>addSticker(m[1],m[2],m[0].trim(),requestedUnits));
     const residue=clean.toUpperCase().replace(/(?:^|[^A-Z])([A-Z]{3})\s*[:]?\s*(\d{1,2})(?=$|[^0-9])/g," ").replace(/[\s,;:\-–—]+/g,"").trim();
     if(!residue)return;
   }

   // Nombre completo o abreviatura al principio; el guion se trata como separador, no como rango.
   const normalizedLine=normalizeTradeName(clean);
   let matchedAlias="";
   for(const alias of PANINI_SORTED_NAME_ALIASES){if(normalizedLine===alias||normalizedLine.startsWith(alias+" ")){matchedAlias=alias;break;}}
   if(matchedAlias){
     const code=PANINI_NORMALIZED_NAME_TO_CODE[matchedAlias];
     const words=matchedAlias.split(" ").length;
     const normalizedParts=normalizedLine.split(" ");
     const numericText=normalizedParts.slice(words).join(" ");
     const nums=[...numericText.matchAll(/\b(\d{1,2})\b/g)].map(m=>m[1]);
     if(nums.length){nums.forEach(n=>addSticker(code,n,`${code}${n}`,requestedUnits));return;}
     addInvalid(clean,"No se ha encontrado ningún número de cromo");return;
   }

   // Si hay números pero el país no se reconoce, sugerir la selección más próxima.
   const nums=[...clean.matchAll(/\b(\d{1,2})\b/g)].map(m=>m[1]);
   if(nums.length){
     const rawName=clean.replace(/[\d,;:\-–—]+/g," ").trim();
     addInvalid(clean,"Selección no reconocida",suggestPaniniTeamName(rawName)||suggestPaniniCode(rawName)||"");
   }else addInvalid(clean,"No se ha encontrado ningún código o selección");
 });
 return {found,invalid};
}

function clubTradeAliases(type){
 const aliases=[];
 const add=(alias,team)=>{const n=normalizeTradeName(alias);if(n&&!aliases.some(x=>x.alias===n&&x.team===team))aliases.push({alias:n,team});};
 const short={
  "Deportivo Alavés":["Alavés","Alaves","ALA"],"Athletic Club de Bilbao":["Athletic","Bilbao","ATH"],"Atlético de Madrid":["Atlético","Atletico","ATM"],
  "FC Barcelona":["Barcelona","Barça","Barca","BAR"],"Real Betis":["Betis","BET"],"RC Celta de Vigo":["Celta","CEL"],"Deportivo":["Depor","DEP"],
  "Elche CF":["Elche","ELC"],"RCD Espanyol":["Espanyol","ESP"],"Getafe CF":["Getafe","GET"],"Levante UD":["Levante","LEV"],"Osasuna":["OSA"],
  "Racing de Santander":["Racing","Santander","RAC"],"Rayo Vallecano":["Rayo","RAY"],"Real Madrid CF":["Real Madrid","Madrid","RMA","RM"],
  "Real Sociedad":["Sociedad","RSO"],"Sevilla":["SEV"],"Valencia":["VAL"],"Villarreal":["VIL"]
 };
 currentTeamOrder().forEach(team=>{add(team,team);(short[team]||[]).forEach(a=>add(a,team));add(team.replace(/^FC\s+/i,"").replace(/^RC(D)?\s+/i,"").replace(/\s+(CF|UD)$/i,""),team);});
 if(type==="liga-este-2026-27"){
  [["ADN","ADN / LALIGA PRIME"],["LALIGA PRIME","ADN / LALIGA PRIME"],["PRIME","ADN / LALIGA PRIME"],["FANTASY","LALIGA FANTASY"],["DRAFT","DRAFT 23"],["KROMIX","DRAFT 23 KROMIX"],["EXTRA BRONCE","EXTRA STICKER BRONCE"],["BRONCE","EXTRA STICKER BRONCE"],["EXTRA PLATA","EXTRA STICKER PLATA"],["PLATA","EXTRA STICKER PLATA"],["EXTRA ORO","EXTRA STICKER ORO"],["ORO","EXTRA STICKER ORO"]].forEach(([a,t])=>add(a,t));
 }else{
  [["ENJOY","ENJOY"],["ENJOY POWER","ENJOY POWER"],["ZONA VIP","ZONA VIP"],["VIP","ZONA VIP"],["ZONA VIP POWER","ZONA VIP POWER"],["VIP POWER","ZONA VIP POWER"],["MASTER ROOKIE","MASTER ROOKIE"],["ROOKIE","MASTER ROOKIE"],["STARS ON 25","STARS ON 25"],["STARS 25","STARS ON 25"],["ELITE","ÉLITE"],["ÉLITE","ÉLITE"],["ELITE POWER","ÉLITE POWER"],["ÉLITE POWER","ÉLITE POWER"],["SPECIAL ONE BLACK","SPECIAL ONE BLACK"],["ONE BLACK","SPECIAL ONE BLACK"],["BLACK","SPECIAL ONE BLACK"],["SPECIAL ONE GOLD","SPECIAL ONE GOLD"],["ONE GOLD","SPECIAL ONE GOLD"],["GOLD","SPECIAL ONE GOLD"],["ORO","SPECIAL ONE GOLD"],["DORADA","SPECIAL ONE GOLD"],["DORADO","SPECIAL ONE GOLD"],["SPECIAL ONE BLACK","SPECIAL ONE BLACK"],["NEGRA","SPECIAL ONE BLACK"],["NEGRO","SPECIAL ONE BLACK"],["LIMITED EDITION","LIMITED EDITION"],["LIMITED","LIMITED EDITION"],["EDICION LIMITADA","LIMITED EDITION"],["EDICIONES LIMITADAS","LIMITED EDITION"]].forEach(([a,t])=>add(a,t));
 }
 return aliases.sort((a,b)=>b.alias.length-a.alias.length);
}
function clubTradeInfo(type,team){return type==="liga-este-2026-27"?(LIGA_ESTE_TEAM_INFO?.[team]||LIGA_ESTE_INSERT_INFO?.[team]||{}):(MEGACRACKS_ITEM_INFO?.[team]||MEGACRACKS_SPECIAL_INFO?.[team]||{});}
function normalizeClubTradeCode(value){
 const raw=String(value||"").toUpperCase().replace(/\s+/g,"").replace(/^N[º°]?/i,"");
 let m=raw.match(/^(EL|B|G)0*(\d+)$/);if(m)return `${m[1]}${Number(m[2])}`;
 m=raw.match(/^(\d+)([ABP]?)$/);if(m)return `${Number(m[1])}${m[2]}`;
 return raw;
}
function resolveClubTradeCode(team,value){const wanted=normalizeClubTradeCode(value);return Object.keys(inventory?.[team]||{}).find(code=>normalizeClubTradeCode(code)===wanted)||null;}
function extractClubTradeCodes(team,text){
 const found=[];const add=v=>{const c=resolveClubTradeCode(team,v);if(c&&!found.includes(c))found.push(c)};
 String(text||"").toUpperCase().replace(/\b(?:X|×)\s*\d+\b/g," ").replace(/\b\d+\s*(?:X|×)\b/g," ").match(/(?:EL|B|G)?0*\d{1,3}[ABP]?/g)?.forEach(add);
 for(const m of String(text||"").matchAll(/\b(\d{1,3})\s*[-–—]\s*(\d{1,3})\b/g)){const a=Number(m[1]),b=Number(m[2]);if(Number.isInteger(a)&&Number.isInteger(b)&&Math.abs(b-a)<=40)for(let n=Math.min(a,b);n<=Math.max(a,b);n++)add(String(n));}
 return found;
}
function clubTradeNameMatches(query,candidate){
 const q=normalizeTradeName(query),n=normalizeTradeName(candidate);if(!q||!n)return false;if(q===n||n.includes(q))return true;
 const qt=q.split(/\s+/).filter(x=>x.length>=3),nt=n.split(/\s+/).filter(Boolean);if(!qt.length)return false;
 return qt.every(token=>nt.some(nameToken=>nameToken===token||nameToken.startsWith(token)||token.startsWith(nameToken)));
}
function clubTradeNameForItem(type,item){const info=clubTradeInfo(type,item.team)?.[item.internalCode];return info?.[0]||item.displayCode;}
function parseClubTradeList(rawText,type){
 const found=[],invalid=[],byKey=new Map(),aliases=clubTradeAliases(type),named=[];
 const add=(team,code,raw,units=1)=>{const exact=resolveClubTradeCode(team,code);if(!exact){invalid.push({raw,reason:`Número no válido para ${team}`,suggestion:""});return false}const key=`${team}|${exact}`,existing=byKey.get(key);if(existing){existing.requestedUnits+=units;return true}const item={team,officialCode:team,internalCode:exact,displayCode:exact,requestedUnits:Math.max(1,Number(units)||1),sourceRaw:String(raw||"").trim()};byKey.set(key,item);found.push(item);return true};
 currentTeamOrder().forEach(team=>Object.entries(clubTradeInfo(type,team)).forEach(([code,[name,pos]])=>{if(name&&normalizeTradeName(name)!=="pendiente")named.push({team,code,name,normalized:normalizeTradeName(String(name).replace(/\s*\([^)]*\)\s*/g," ")),pos:normalizeTradeName(pos||"")})}));
 named.sort((a,b)=>b.normalized.length-a.normalized.length);
 const ignored=["tengo","busco","necesito","faltan","faltantes","repetidos","repetidas","duplicados","doy","ofrezco","cambio","quiero","lista","mis faltas","mis repetidos","lo que necesito","lo que tengo","para dar","para recibir"];
 String(rawText||"").replace(/\r/g,"").split(/\n+/).forEach(line=>{
  const original=line.trim();if(!original)return;
  let clean=original.replace(/^[•·▪◦*-]\s*/,"").replace(/^\d+[.)]\s+(?=[A-Za-zÁÉÍÓÚÜÑ])/i,"").trim();
  const suffixQty=clean.match(/(?:^|\s)[x×]\s*(\d+)\s*$/i),prefixQty=clean.match(/^\s*(\d+)\s*[x×]\s+/i);const units=Math.max(1,Number(suffixQty?.[1]||prefixQty?.[1])||1);clean=clean.replace(/(?:^|\s)[x×]\s*\d+\s*$/i,"").replace(/^\s*\d+\s*[x×]\s+/i,"").trim();
  const norm=normalizeTradeName(clean);if(!norm||ignored.some(x=>norm===x||norm===x+":"))return;
  const aliasHit=aliases.find(x=>norm===x.alias||norm.startsWith(x.alias+" ")||norm.endsWith(" "+x.alias)||norm.includes(" "+x.alias+" "));
  if(aliasHit){
   const codes=extractClubTradeCodes(aliasHit.team,clean);if(codes.length){codes.forEach(code=>add(aliasHit.team,code,original,units));return}
   const remainder=normalizeTradeName(norm.replace(aliasHit.alias," ").replace(/\s+/g," ").trim());
   const nameHits=named.filter(x=>x.team===aliasHit.team&&remainder&&clubTradeNameMatches(remainder,x.normalized));
   if(nameHits.length){nameHits.forEach(x=>add(x.team,x.code,original,units));return}
   invalid.push({raw:original,reason:"Falta un número o jugador reconocible",suggestion:aliasHit.team});return;
  }
  const nameHits=named.filter(x=>x.normalized.length>=3&&clubTradeNameMatches(norm,x.normalized));const uniqueNames=[...new Map(nameHits.map(x=>[`${x.team}|${x.code}`,x])).values()];if(uniqueNames.length){uniqueNames.forEach(x=>add(x.team,x.code,original,units));return;}
  const tokens=String(clean).toUpperCase().match(/(?:EL|B|G)?0*\d{1,3}[ABP]?/g)||[];let resolved=0;for(const token of tokens){const matches=currentTeamOrder().map(team=>({team,code:resolveClubTradeCode(team,token)})).filter(x=>x.code);if(matches.length===1){add(matches[0].team,matches[0].code,original,units);resolved++;}}
  if(resolved)return;
  invalid.push({raw:original,reason:type==="megacracks-2026-27"?"Club, especial, número o jugador no reconocido":"Club, apartado, número o jugador no reconocido",suggestion:""});
 });
 return {found,invalid};
}
function parseLigaEsteTradeList(rawText){return parseClubTradeList(rawText,"liga-este-2026-27");}
function parseMegacracksTradeList(rawText){return parseClubTradeList(rawText,"megacracks-2026-27");}
function parseTradeList(rawText){
 const t=inferCollectionType(projects?.[activeProjectId]);return t==="liga-este-2026-27"?parseLigaEsteTradeList(rawText):t==="megacracks-2026-27"?parseMegacracksTradeList(rawText):parseWorldCupTradeList(rawText);
}

function groupTradeAnalysis(items){const order=currentTeamOrder(),groups={};items.forEach(item=>(groups[item.team]||=[]).push(item));return Object.entries(groups).sort((a,b)=>order.indexOf(a[0])-order.indexOf(b[0]));}
function escapeTradeHtml(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[char]);}
function applyTradeAnalyzerSuggestion(raw,replacement){const input=$("#tradeAnalyzerInput");if(!input||!raw||!replacement)return;const escaped=String(raw).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");input.value=input.value.replace(new RegExp(escaped,"i"),replacement);renderTradeAnalyzerResult();}
function editTradeAnalyzerList(){tradeAnalyzerGiveSelection=new Map();tradeAnalyzerGiveTouched=new Set();tradeReceiveSelection=new Map();const dialog=$("#tradeAnalyzerDialog");dialog?.classList.remove("analyzed","exchange-step");$("#tradeAnalyzerEntry").hidden=false;$("#tradeAnalyzerResult").hidden=true;$("#tradeAnalyzerBody")?.scrollTo({top:0,behavior:"auto"});setTimeout(()=>$("#tradeAnalyzerInput")?.focus(),60);}
function tradeCopyLines(items,includeQuantities=true){return groupTradeAnalysis(items).map(([team,rows])=>`${TEAM_FLAG_EMOJI[team]||""} ${TEAM_TO_PANINI_CODE[team]||team}: ${rows.map(row=>{const units=Object.prototype.hasOwnProperty.call(row,"selectedUnits")?row.selectedUnits:row.available;return includeQuantities&&units>1?`${row.displayCode} x${units}`:row.displayCode;}).join(" ")}`);}
function chooseBalancedTrade(available,normalNeeded,specialNeeded,collaborationNeeded=0,allowDuplicates=false){const pool=available.filter(x=>!isTradeProtected(x)&&!isTradeStar(x)).sort((a,b)=>b.available-a.available||currentTeamOrder().indexOf(a.team)-currentTeamOrder().indexOf(b.team)||Number(a.displayCode)-Number(b.displayCode));const take=(category,needed)=>{const candidates=pool.filter(x=>tradeStickerCategory(x)===category),selected=[];let left=Math.max(0,Number(needed)||0);for(const item of candidates){if(left<=0)break;selected.push({...item,selectedUnits:1});left--;}if(allowDuplicates&&left>0){let pass=2;while(left>0){let added=false;for(const item of candidates){if(left<=0)break;if(item.available>=pass){selected.find(x=>tradeStickerKey(x)===tradeStickerKey(item)).selectedUnits++;left--;added=true;}}if(!added)break;pass++;}}return {selected,left};};const normals=take("normal",normalNeeded),specials=take("special",specialNeeded),collaborations=take("collaboration",collaborationNeeded);return {items:[...normals.selected,...specials.selected,...collaborations.selected],missingNormal:normals.left,missingSpecial:specials.left,missingCollaboration:collaborations.left};}
function renderInvalidLines(items){if(!items.length)return "";return `<div class="trade-review-list">${items.map(item=>{const numberMatch=String(item.raw).match(/(\d{1,2})/),replacement=item.suggestion&&numberMatch?`${item.suggestion}${String(numberMatch[1]).padStart(2,"0")}`:"";return `<div class="trade-review-item"><div><strong>${escapeTradeHtml(item.raw)}</strong><small>${escapeTradeHtml(item.reason)}</small></div>${replacement?`<button type="button" data-raw="${escapeTradeHtml(item.raw)}" data-replacement="${escapeTradeHtml(replacement)}">Corregir</button>`:""}</div>`;}).join("")}</div>`;}
function wireInvalidCorrections(root){root.querySelectorAll("[data-replacement]").forEach(b=>b.addEventListener("click",()=>applyTradeAnalyzerSuggestion(b.dataset.raw,b.dataset.replacement)));}
function renderBalancedStickerList(items){
 const type=inferCollectionType(projects?.[activeProjectId]);
 const normal=items.filter(item=>tradeStickerCategory(item)==="normal"),special=items.filter(item=>tradeStickerCategory(item)==="special"),collaboration=items.filter(item=>tradeStickerCategory(item)==="collaboration");
 const itemLabel=row=>{const units=row.selectedUnits||row.requestedUnits||1;if(type==="world-cup-2026")return `${row.displayCode}${units>1?` ×${units}`:""}`;const name=clubTradeNameForItem(type,row);return `<strong>${escapeTradeHtml(name)}</strong><small>${escapeTradeHtml(row.displayCode)}${units>1?` ×${units}`:""}</small>`;};
 const section=(label,rows,detail="")=>{if(!rows.length)return "";const units=rows.reduce((sum,item)=>sum+(item.selectedUnits||item.requestedUnits||1),0);return `<section class="balanced-sticker-section"><header><strong>${label}</strong><span>${units}${detail}</span></header><div class="balanced-sticker-groups">${groupTradeAnalysis(rows).map(([team,teamRows])=>`<div class="balanced-sticker-row"><b>${flagHTML(team)} ${escapeTradeHtml(TEAM_TO_PANINI_CODE[team]||team)}</b><span class="balanced-sticker-names">${teamRows.map(itemLabel).join("")}</span></div>`).join("")}</div></section>`;};
 return `${section("Normales",normal," cromos")}${section("Especiales",special," cromos")}${section("Colaboración",collaboration," cromos")}`;
}
function applyAssistantTrade(receivedItems,givenItems,button){
 if(!receivedItems?.length){showToast("Pega la lista recibida para actualizar el inventario");return;}
 if(button.disabled)return;button.disabled=true;
 const wasComplete=isCurrentAlbumComplete(),now=new Date().toISOString(),changes=[];
 for(const item of givenItems||[]){const qty=Number(item.selectedUnits)||1,previous=Number(inventory[item.team]?.[item.internalCode])||0;if(previous<qty){button.disabled=false;showToast(`Stock insuficiente: ${item.team} ${item.displayCode}`);return;}changes.push({item,delta:-qty,previous,next:previous-qty});}
 for(const item of receivedItems){const qty=Math.max(1,Number(item.selectedUnits||item.requestedUnits)||1),previous=Number(inventory[item.team]?.[item.internalCode])||0;changes.push({item,delta:qty,previous,next:previous+qty});}
 changes.forEach(({item,delta,previous,next})=>{inventory[item.team][item.internalCode]=next;markPendingSync(item.team,item.internalCode,previous,next,"asistente-intercambio");history.push({id:makeId(),team:item.team,code:item.internalCode,previous,next,delta,at:now,source:"asistente-intercambio"});if(delta>0)sessionStats.plus+=delta;else sessionStats.minus+=Math.abs(delta);});
 saveAll("Intercambio completado");renderAll();checkAlbumCompletion(wasComplete);button.textContent="Intercambio completado ✓";showToast("✓ Inventario actualizado");
}
function renderBalancedTrade(box,available,normalNeeded,specialNeeded,collaborationNeeded=0,allowDuplicates=null,receivedItems=null){
 const exactItems=(available||[]).map(item=>{const maxAllowed=Math.max(1,Number(item.stockAvailable??item.available)||1),wanted=Math.max(1,Number(item.selectedUnits||item.requestedUnits)||1);return {...item,selectedUnits:Math.min(maxAllowed,wanted)};}),delivered=exactItems.reduce((sum,item)=>sum+(item.selectedUnits||1),0);
 const canApply=Array.isArray(receivedItems)&&receivedItems.length>0;
 const receivedUnits=canApply?receivedItems.reduce((sum,item)=>sum+Math.max(1,Number(item.selectedUnits||item.requestedUnits)||1),0):(Number(normalNeeded)||0)+(Number(specialNeeded)||0)+(Number(collaborationNeeded)||0);
 box.innerHTML=`${canApply?`<div class="trade-receive-summary"><div class="trade-clean-status"><strong>Vas a recibir · ${receivedUnits}</strong></div><div class="balanced-sticker-list">${renderBalancedStickerList(receivedItems.map(item=>({...item,selectedUnits:Math.max(1,Number(item.selectedUnits||item.requestedUnits)||1)})))}</div></div>`:""}<div class="trade-clean-status"><strong>Vas a entregar · ${delivered}</strong></div>${exactItems.length?`<div class="balanced-sticker-list">${renderBalancedStickerList(exactItems)}</div><button id="copyBalancedTrade" class="primary trade-main-action" type="button">Copiar intercambio</button><button id="completeAssistantTrade" class="trade-main-action complete-trade-action" type="button" ${canApply?"":"disabled"}>Completar intercambio</button>${canApply?"":`<p class="trade-clean-note">Para actualizar el inventario automáticamente, pega la lista exacta que vas a recibir.</p>`}`:`<p class="trade-clean-note">No has seleccionado ningún cromo para entregar.</p>`}`;
 $("#copyBalancedTrade")?.addEventListener("click",async event=>{const fb=actionFeedback(event.currentTarget,{busy:"Copiando…",done:"Copiado ✓"});try{await copyShareText(tradeCopyLines(exactItems,true).join("\n"));fb.success();}catch{fb.fail("Error");}});
 $("#completeAssistantTrade")?.addEventListener("click",event=>applyAssistantTrade(receivedItems,exactItems,event.currentTarget));
}
function tradeAmbiguousGroups(items){
 const groups=new Map();for(const item of items){const key=tradeSourceKey(item);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(item);}return [...groups.entries()].filter(([,rows])=>rows.length>1);
}
function receiveSelectionForSource(source){
 let bucket=tradeReceiveSelection.get(source);
 if(!(bucket instanceof Map)){bucket=new Map();tradeReceiveSelection.set(source,bucket);}
 return bucket;
}
function receivedChoiceQty(source,key){return Math.max(0,Number(receiveSelectionForSource(source).get(key))||0)}
function setReceivedChoiceQty(source,key,qty){
 const bucket=receiveSelectionForSource(source),next=Math.max(0,Number(qty)||0);
 if(next)bucket.set(key,next);else bucket.delete(key);
 if(!bucket.size)tradeReceiveSelection.delete(source);
 return next;
}
function resolveReceivedTradeItems(parsed){
 const groups=new Map();for(const item of parsed.found){const key=tradeSourceKey(item);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(item);}
 const selected=[],ambiguous=[];
 for(const [source,rows] of groups){
   if(rows.length===1){selected.push({...rows[0],selectedUnits:Math.max(1,Number(rows[0].requestedUnits)||1)});continue;}
   const bucket=tradeReceiveSelection.get(source),chosen=[];
   if(bucket instanceof Map){for(const item of rows){const qty=Math.max(0,Number(bucket.get(tradeStickerKey(item)))||0);if(qty)chosen.push({...item,selectedUnits:qty,requestedUnits:qty});}}
   if(chosen.length)selected.push(...chosen);else ambiguous.push({source,rows});
 }
 return {selected,ambiguous};
}
function renderReceiveAmbiguities(root,groups){
 if(!groups.length){root.innerHTML="";return;}
 const type=inferCollectionType(projects?.[activeProjectId]);
 root.innerHTML=`<div class="trade-ambiguity-box"><strong>Elige qué versiones vas a recibir</strong><p>Puedes seleccionar varias cards y repetir una misma versión. Usa − / + para indicar la cantidad exacta.</p>${groups.map(group=>`<section data-receive-source="${escapeTradeHtml(group.source)}"><small>${escapeTradeHtml(group.source)}</small>${group.rows.map(item=>{const key=tradeStickerKey(item),qty=receivedChoiceQty(group.source,key);return `<article class="trade-choice-card${qty?" selected":""}" data-source="${escapeTradeHtml(group.source)}" data-key="${escapeTradeHtml(key)}"><span class="trade-choice-icon">${flagHTML(item.team)}</span><div class="trade-choice-copy"><b>${escapeTradeHtml(type==="world-cup-2026"?`${item.team} ${item.displayCode}`:clubTradeNameForItem(type,item))}</b><em>${escapeTradeHtml(item.team)} · ${escapeTradeHtml(item.displayCode)}</em></div><div class="trade-choice-qty"><button type="button" data-choice-step="minus" aria-label="Restar unidad">−</button><output>${qty}</output><button type="button" class="primary" data-choice-step="plus" aria-label="Sumar unidad">+</button></div></article>`}).join("")}</section>`).join("")}<button type="button" id="confirmReceiveChoices" class="primary trade-main-action">Continuar con la selección</button></div>`;
 root.querySelectorAll(".trade-choice-card").forEach(card=>{
   const source=card.dataset.source,key=card.dataset.key,output=card.querySelector("output");
   const update=delta=>{const next=setReceivedChoiceQty(source,key,receivedChoiceQty(source,key)+delta);output.textContent=String(next);card.classList.toggle("selected",next>0);if(navigator.vibrate)navigator.vibrate(8);};
   card.querySelector('[data-choice-step="minus"]')?.addEventListener("click",()=>update(-1));
   card.querySelector('[data-choice-step="plus"]')?.addEventListener("click",()=>update(1));
 });
 $("#confirmReceiveChoices")?.addEventListener("click",()=>{const missing=groups.some(group=>{const bucket=tradeReceiveSelection.get(group.source);return !(bucket instanceof Map)||![...bucket.values()].some(q=>Number(q)>0)});if(missing){showToast("Selecciona al menos una versión de cada coincidencia");return;}$("#generateBalancedTrade")?.click();});
}
function renderExchangeStep(available){
 const result=$("#tradeAnalyzerResult"),dialog=$("#tradeAnalyzerDialog");dialog?.classList.add("exchange-step");
 result.innerHTML=`<button id="backToTradeSummary" class="trade-back-button" type="button">← Volver</button><div class="trade-clean-card"><h3>¿Qué te dará la otra persona?</h3><div class="trade-receive-tabs"><button type="button" class="active" data-receive-mode="list">Pegar lista</button><button type="button" data-receive-mode="counts">Cantidades</button></div><div id="tradeReceiveListPanel"><p class="trade-context-label compact">Pega la lista de cromos que vas a recibir</p><textarea id="tradeReceiveList" rows="6" placeholder="Ejemplo: Francia 15 · FWC 18"></textarea></div><div id="tradeReceiveCountsPanel" hidden><div class="trade-count-stepper" data-count-kind="normal"><span>Normales</span><div class="trade-count-controls"><button type="button" class="trade-count-btn" data-count-action="decrease" aria-label="Restar cromo normal">−</button><output id="tradeReceiveNormalCount" aria-live="polite">0</output><button type="button" class="trade-count-btn primary" data-count-action="increase" aria-label="Sumar cromo normal">+</button></div></div><div class="trade-count-stepper" data-count-kind="special"><span>Especiales</span><div class="trade-count-controls"><button type="button" class="trade-count-btn" data-count-action="decrease" aria-label="Restar cromo especial">−</button><output id="tradeReceiveSpecialCount" aria-live="polite">0</output><button type="button" class="trade-count-btn primary" data-count-action="increase" aria-label="Sumar cromo especial">+</button></div></div><div class="trade-count-stepper" data-count-kind="collaboration" ${collaborationEnabled()?"":"hidden"}><span>Colaboración</span><div class="trade-count-controls"><button type="button" class="trade-count-btn" data-count-action="decrease" aria-label="Restar cromo de colaboración">−</button><output id="tradeReceiveCollaborationCount" aria-live="polite">0</output><button type="button" class="trade-count-btn primary" data-count-action="increase" aria-label="Sumar cromo de colaboración">+</button></div></div></div><button id="generateBalancedTrade" class="primary trade-main-action" type="button">Generar intercambio</button><div id="receivedListErrors"></div><div id="balancedTradeResult"></div></div>`;
 $("#backToTradeSummary")?.addEventListener("click",renderTradeAnalyzerResult);
 result.querySelectorAll("[data-receive-mode]").forEach(btn=>btn.addEventListener("click",()=>{result.querySelectorAll("[data-receive-mode]").forEach(x=>x.classList.toggle("active",x===btn));$("#tradeReceiveListPanel").hidden=btn.dataset.receiveMode!=="list";$("#tradeReceiveCountsPanel").hidden=btn.dataset.receiveMode!=="counts";$("#receivedListErrors").innerHTML="";$("#balancedTradeResult").innerHTML="";}));
 const countState={normal:0,special:0,collaboration:0};
 const renderCount=(kind)=>{const out=$(kind==="normal"?"#tradeReceiveNormalCount":kind==="special"?"#tradeReceiveSpecialCount":"#tradeReceiveCollaborationCount");if(out)out.textContent=String(countState[kind]);};
 result.querySelectorAll(".trade-count-stepper").forEach(stepper=>{stepper.querySelectorAll("[data-count-action]").forEach(button=>button.addEventListener("click",()=>{const kind=stepper.dataset.countKind;const delta=button.dataset.countAction==="increase"?1:-1;countState[kind]=Math.max(0,countState[kind]+delta);renderCount(kind);if(navigator.vibrate)navigator.vibrate(8);}));});
 $("#generateBalancedTrade")?.addEventListener("click",event=>{const fb=actionFeedback(event.currentTarget,{busy:"Generando…",done:"Generado ✓"});let normalNeeded=0,specialNeeded=0,collaborationNeeded=0,receivedItems=null;const errors=$("#receivedListErrors");if(!$("#tradeReceiveListPanel").hidden){const received=parseTradeList($("#tradeReceiveList").value),resolved=resolveReceivedTradeItems(received);if(resolved.ambiguous.length){renderReceiveAmbiguities(errors,resolved.ambiguous);fb.fail("Elige la versión");return;}receivedItems=resolved.selected;normalNeeded=receivedItems.filter(x=>tradeStickerCategory(x)==="normal").reduce((sum,x)=>sum+Math.max(1,Number(x.selectedUnits||x.requestedUnits)||1),0);specialNeeded=receivedItems.filter(x=>tradeStickerCategory(x)==="special").reduce((sum,x)=>sum+Math.max(1,Number(x.selectedUnits||x.requestedUnits)||1),0);collaborationNeeded=receivedItems.filter(x=>tradeStickerCategory(x)==="collaboration").reduce((sum,x)=>sum+Math.max(1,Number(x.selectedUnits||x.requestedUnits)||1),0);if(received.invalid.length){errors.innerHTML=`<details class="trade-ignored-lines"><summary>${received.invalid.length} ${received.invalid.length===1?"línea ignorada":"líneas ignoradas"}</summary>${renderInvalidLines(received.invalid)}</details>`;wireInvalidCorrections(errors);}else errors.innerHTML="";}else{normalNeeded=countState.normal;specialNeeded=countState.special;collaborationNeeded=countState.collaboration;receivedItems=null;errors.innerHTML="";}if(!normalNeeded&&!specialNeeded&&!collaborationNeeded){fb.fail("No hay cromos válidos");return;}renderBalancedTrade($("#balancedTradeResult"),available,normalNeeded,specialNeeded,collaborationNeeded,null,receivedItems);requestAnimationFrame(()=>{const body=$("#tradeAnalyzerBody"),target=$("#balancedTradeResult");if(body&&target)body.scrollTo({top:Math.max(0,target.offsetTop-16),behavior:"auto"});});fb.success();});
}
function renderTradeDetectedItems(items,selectable=false,selectedKeys=new Map()){
 const type=inferCollectionType(projects?.[activeProjectId]);
 if(!items.length)return "";
 return `<div class="trade-detected-list">${items.map(item=>{
  const name=type==="world-cup-2026"?`${item.team} ${item.displayCode}`:clubTradeNameForItem(type,item),key=tradeStickerKey(item),maxOffer=Math.max(0,Number(item.stockAvailable??item.available)||0),safe=maxOffer>0&&!isTradeStar(item)&&!isTradeProtected(item),qty=selectedKeys instanceof Map?Math.max(0,Number(selectedKeys.get(key))||0):(selectedKeys.has?.(key)?1:0),selected=qty>0;
  const status=maxOffer>0?`<span class="trade-detected-stock available">Puedes ofrecer hasta ${maxOffer}${item.requestedUnits>1?` · pide ${item.requestedUnits}`:""}</span>`:`<span class="trade-detected-stock unavailable">Sin unidades para ofrecer</span>`;
  return `<article class="trade-detected-item${selected?" selected":""}" data-give-key="${escapeTradeHtml(key)}" data-give-max="${maxOffer}"><div class="trade-detected-icon">${flagHTML(item.team)}</div><div class="trade-detected-copy"><strong>${escapeTradeHtml(name)}</strong><small>${escapeTradeHtml(item.team)} · ${escapeTradeHtml(item.displayCode)}</small>${status}</div><div class="trade-detected-owned">x${item.owned}</div>${selectable&&safe?`<div class="trade-choice-qty trade-give-qty"><button type="button" data-give-step="minus" aria-label="Restar unidad">−</button><output>${qty}</output><button type="button" class="primary" data-give-step="plus" aria-label="Sumar unidad">+</button></div>`:""}</article>`;
 }).join("")}</div>`;
}
function renderTradeAnalyzerResult(){
 const input=$("#tradeAnalyzerInput"),result=$("#tradeAnalyzerResult"),dialog=$("#tradeAnalyzerDialog");if(!input||!result)return;
 const parsed=parseTradeList(input.value);
 if(!parsed.found.length&&!parsed.invalid.length){result.hidden=false;result.innerHTML='<div class="trade-inline-alert">No se ha reconocido ningún cromo de la lista que pide la otra persona.</div>';return;}
 const target=getTarget(),analysed=parsed.found.map(item=>{const owned=Number(inventory?.[item.team]?.[item.internalCode])||0,stockAvailable=Math.max(0,owned-target),requestedUnits=Math.max(1,Number(item.requestedUnits)||1);return {...item,owned,stockAvailable,requestedUnits,available:stockAvailable};}),safeAvailable=analysed.filter(x=>x.stockAvailable>0&&!isTradeStar(x)&&!isTradeProtected(x));
 const sourceGroups=new Map();analysed.forEach(item=>{const key=tradeSourceKey(item);if(!sourceGroups.has(key))sourceGroups.set(key,[]);sourceGroups.get(key).push(item);});
 const safeKeys=new Set(safeAvailable.map(tradeStickerKey));for(const key of [...tradeAnalyzerGiveSelection.keys()])if(!safeKeys.has(key))tradeAnalyzerGiveSelection.delete(key);
 for(const rows of sourceGroups.values()){const safeRows=rows.filter(x=>safeKeys.has(tradeStickerKey(x)));if(safeRows.length===1){const item=safeRows[0],key=tradeStickerKey(item);if(!tradeAnalyzerGiveSelection.has(key)&&!tradeAnalyzerGiveTouched.has(key))tradeAnalyzerGiveSelection.set(key,Math.max(1,Math.min(Number(item.stockAvailable)||1,Number(item.requestedUnits)||1)));}}
 const selected=safeAvailable.filter(item=>(Number(tradeAnalyzerGiveSelection.get(tradeStickerKey(item)))||0)>0).map(item=>({...item,selectedUnits:Math.min(Number(item.stockAvailable)||0,Math.max(1,Number(tradeAnalyzerGiveSelection.get(tradeStickerKey(item)))||1))})),previewItems=selected,previewUnits=previewItems.reduce((sum,item)=>sum+(item.selectedUnits||0),0),withoutStock=analysed.filter(x=>x.stockAvailable<=0).length,ambiguousAvailable=[...sourceGroups.values()].some(rows=>rows.filter(x=>safeKeys.has(tradeStickerKey(x))).length>1);
 result.innerHTML=`<button id="editTradeAnalyzerList" class="trade-back-button" type="button">← Editar lista</button><div class="trade-clean-card"><div class="trade-clean-status"><strong>${analysed.length} cromos detectados</strong>${withoutStock?`<span>${withoutStock} sin unidades disponibles</span>`:""}${ambiguousAvailable?`<span>Elige qué versión quieres usar</span>`:""}${parsed.invalid.length?`<span>${parsed.invalid.length} ${parsed.invalid.length===1?"línea no entendida":"líneas no entendidas"}</span>`:""}</div>${renderTradeDetectedItems(analysed,true,tradeAnalyzerGiveSelection)}${parsed.invalid.length?`<div class="trade-inline-alert">${renderInvalidLines(parsed.invalid)}</div>`:""}${selected.length?`<details class="trade-offer-preview" open><summary>Seleccionado para ofrecer · ${previewUnits}</summary><div class="balanced-sticker-list">${renderBalancedStickerList(previewItems)}</div></details>`:`<div class="trade-no-offer">${safeAvailable.length?"Selecciona la versión o versiones exactas que quieres usar en el intercambio.":"Los cromos se han reconocido, pero ahora mismo no tienes unidades disponibles para ofrecer."}</div>`}<button id="copyTradeAnalyzerAll" class="primary trade-main-action" type="button" ${selected.length?"":"disabled"}>${selected.length?"Copiar selección":"Nada seleccionado"}</button><button id="prepareBalancedTrade" class="secondary trade-main-action" type="button" ${selected.length?"":"disabled"}>${selected.length?"Preparar intercambio":"Selecciona una versión"}</button></div>`;
 result.hidden=false;dialog?.classList.add("analyzed");dialog?.classList.remove("exchange-step");$("#tradeAnalyzerEntry").hidden=true;$("#tradeAnalyzerBody")?.scrollTo({top:0,behavior:"auto"});$("#editTradeAnalyzerList")?.addEventListener("click",editTradeAnalyzerList);wireInvalidCorrections(result);
 result.querySelectorAll("[data-give-key]").forEach(card=>{const key=card.dataset.giveKey,max=Math.max(0,Number(card.dataset.giveMax)||0),output=card.querySelector("output");const update=delta=>{tradeAnalyzerGiveTouched.add(key);const current=Math.max(0,Number(tradeAnalyzerGiveSelection.get(key))||0),next=Math.max(0,Math.min(max,current+delta));if(next)tradeAnalyzerGiveSelection.set(key,next);else tradeAnalyzerGiveSelection.delete(key);if(output)output.textContent=String(next);card.classList.toggle("selected",next>0);renderTradeAnalyzerResult();if(navigator.vibrate)navigator.vibrate(8);};card.querySelector('[data-give-step="minus"]')?.addEventListener("click",()=>update(-1));card.querySelector('[data-give-step="plus"]')?.addEventListener("click",()=>update(1));});
 $("#copyTradeAnalyzerAll")?.addEventListener("click",async event=>{if(!selected.length)return;const fb=actionFeedback(event.currentTarget,{busy:"Copiando…",done:"Copiado ✓"});try{await copyShareText(tradeCopyLines(selected).join("\n"));fb.success();}catch{fb.fail("Error");}});
 $("#prepareBalancedTrade")?.addEventListener("click",()=>{if(selected.length)renderExchangeStep(selected);});
}
function openTradeAnalyzer(){
 tradeAnalyzerGiveSelection=new Map();tradeAnalyzerGiveTouched=new Set();tradeReceiveSelection=new Map();
 const dialog=$("#tradeAnalyzerDialog");if(!dialog)return;
 const area=$("#tradeAnalyzerInput");
 if(area){const t=inferCollectionType(projects?.[activeProjectId]);area.placeholder=t==="liga-este-2026-27"?"Ejemplos:\nBarcelona: 07, 11, 18A\nCubarsí\nDRAFT 23: 06 x2\nADN 08":t==="megacracks-2026-27"?"Ejemplos:\nBarcelona: 78, 79\nFermín\nLamine Oro\nENJOY POWER 383P x2":"Ejemplo: ESP15 · Francia 20 · FWC 18";}dialog.classList.remove("analyzed","exchange-step");$("#tradeAnalyzerEntry").hidden=false;$("#tradeAnalyzerResult").hidden=true;if(!dialog.open)dialog.showModal();$("#tradeAnalyzerBody")?.scrollTo({top:0,behavior:"auto"});setTimeout(()=>$("#tradeAnalyzerInput")?.focus(),80);}
function closeTradeAnalyzer(){const dialog=$("#tradeAnalyzerDialog");if(dialog?.open)dialog.close();}


async function shareActiveCollectionList(){
 openShareOptions(activeShareListType(),activeProjectId);
}

function ligaEsteIsOpen(team){
 const p=projects?.[activeProjectId];p.ui=p.ui||{};p.ui.ligaEsteOpenTeams=p.ui.ligaEsteOpenTeams||{};
 if(collectionTeamFilter!=="all")return team===collectionTeamFilter;
 return !!p.ui.ligaEsteOpenTeams[team];
}
function toggleLigaEsteTeam(team){
 if(collectionTeamFilter!=="all"&&isLigaEsteInsertTeam(team)){selectTeam("all");return;}
 const p=projects?.[activeProjectId];if(!p)return;p.ui=p.ui||{};p.ui.ligaEsteOpenTeams=p.ui.ligaEsteOpenTeams||{};
 p.ui.ligaEsteOpenTeams[team]=!p.ui.ligaEsteOpenTeams[team];persistProjects();renderGlobalCollection();
}
function ligaEsteRow(team,code,qty){
 const activeType=inferCollectionType(projects?.[activeProjectId]);
 const info=activeType==="megacracks-2026-27"?(megacracksItemInfo(team,code)||[stickerDisplayLabel(team,code),""]):(ligaEsteStickerInfo(team,code)||ligaEsteInsertInfo(team,code)||[stickerDisplayLabel(team,code),""]);
 const [name,position]=info,st=stateFor(qty),pending=name==="Pendiente";
 const exchangeMode=currentView==="exchange";
 const giveQty=getExchangeQty("give",team,code),receiveQty=getExchangeQty("receive",team,code);
 const row=document.createElement("div");row.className=`ligaeste-player-row ${st.kind}${pending?" ligaeste-pending-row":""}${exchangeMode?" ligaeste-exchange-row":""}`;row.dataset.code=code;
 row.innerHTML=`<div class="ligaeste-player-number">${collectionSafeText(code.replace(/^0(?=\d)/,""))}</div><div class="ligaeste-player-copy"><strong>${collectionSafeText(name)}</strong><span>${collectionSafeText(position||"")}</span></div>
 <div class="ligaeste-row-stock ${exchangeMode?"exchange":""}">
 ${exchangeMode
   ? `<button type="button" class="ligaeste-exchange-step give" aria-label="Dar una unidad">−1${giveQty?`<small>✓x${giveQty}</small>`:""}</button><button type="button" class="ligaeste-exchange-step receive" aria-label="Recibir una unidad">+1${receiveQty?`<small>✓x${receiveQty}</small>`:""}</button>`
   : `<button type="button" class="ligaeste-row-step minus" aria-label="Restar ${collectionSafeText(name)}">−</button><strong>${qty}</strong><button type="button" class="ligaeste-row-step plus" aria-label="Sumar ${collectionSafeText(name)}">+</button>`}
 </div>`;
 if(exchangeMode){
   row.querySelector(".give").onclick=e=>{
     const current=getExchangeQty("give",team,code);
     const stock=Number(inventory?.[team]?.[code])||0;
     if(stock<=0){
       showActionFeedback(e.currentTarget,"minus","SIN STOCK");
       showTopFeedback({type:"negative",title:`${name} · Sin stock para dar`,detail:"Añade al menos una unidad al inventario antes de marcarla para dar.",key:`liga-give-empty:${team}:${code}`});
       showToast("No tienes stock de este cromo para dar");
       return;
     }
     if(current>=stock){
       showActionFeedback(e.currentTarget,"minus","MÁXIMO");
       showTopFeedback({type:"negative",title:`${name} · Máximo disponible`,detail:`Tienes x${stock} y ya has marcado x${current} para dar.`,key:`liga-give-max:${team}:${code}`});
       return;
     }
     setExchangeQty("give",team,code,current+1);
     showActionFeedback(e.currentTarget,"give","−1 ✓");
     showTopFeedback({type:"exchange",title:`${name} · ${team}`,detail:`Preparado para dar · x${current+1}`,key:`liga-give:${team}:${code}`});
     saveAll("Intercambio preparado");renderAll();
   };
   row.querySelector(".receive").onclick=e=>{
     const current=getExchangeQty("receive",team,code);
     setExchangeQty("receive",team,code,current+1);
     showActionFeedback(e.currentTarget,"receive","+1 ✓");
     showTopFeedback({type:"exchange",title:`${name} · ${team}`,detail:`Preparado para recibir · x${current+1}`,key:`liga-receive:${team}:${code}`});
     saveAll("Intercambio preparado");renderAll();
   };
 }else{
   row.querySelector(".minus").onclick=e=>{
     const previous=Number(inventory?.[team]?.[code])||0;
     const next=Math.max(0,previous-1);
     if(next===previous)return;
     showTopFeedback({type:"negative",title:`${stickerFeedbackLabel(team,code)} eliminado`,detail:`Inventario: x${next}`,key:`liga-minus:${team}:${code}`});
     changeQuantity(team,code,-1,e.currentTarget);
   };
   row.querySelector(".plus").onclick=e=>{
     const previous=Number(inventory?.[team]?.[code])||0;
     const next=previous+1;
     showTopFeedback({type:"positive",title:`${stickerFeedbackLabel(team,code)} añadido`,detail:`Inventario: x${next}`,key:`liga-plus:${team}:${code}`});
     changeQuantity(team,code,1,e.currentTarget);
   };
 }
 return row;
}
function renderLigaEsteCollection(){
 const list=$("#globalCollectionList");if(!list)return;list.innerHTML="";
 let teams=currentTeamOrder().filter(team=>collectionFilter!=="all"||!isLigaEsteInsertTeam(team)||(collectionTeamFilter!=="all"&&team===collectionTeamFilter));
 const insertTeams=currentTeamOrder().filter(team=>isLigaEsteInsertTeam(team));
 if(collectionSort==="az")teams.sort((a,b)=>a.localeCompare(b,"es"));
 teams.forEach(team=>{
   if(collectionTeamFilter!=="all"&&team!==collectionTeamFilter)return;
   const stickers=inventory[team]||{};
   const entries=Object.entries(stickers).filter(([code,qty])=>collectionStickerMatches(team,code,Number(qty)||0));
   if(!entries.length)return;
   const target=getTarget(),total=Object.values(stickers).reduce((sum,q)=>sum+Number(q||0),0),missing=Object.values(stickers).reduce((sum,q)=>sum+Math.max(0,target-Number(q||0)),0),open=ligaEsteIsOpen(team);
   const section=document.createElement("section");section.className=`ligaeste-team-accordion${open?" open":""}`;
   section.innerHTML=`<button type="button" class="ligaeste-team-toggle" aria-expanded="${open}"><div class="ligaeste-team-heading">${flagHTML(team)}<div><strong>${collectionSafeText(team)}</strong><span>${total} cromos · ${missing?`${missing} pendientes`:"Completo"}</span></div></div><span class="ligaeste-team-chevron">⌄</span></button><div class="ligaeste-team-body" ${open?"":"hidden"}><div class="ligaeste-list-head"><span>Nº</span><span>Jugador / cromo</span><span>Stock</span></div><div class="ligaeste-player-list"></div></div>`;
   section.querySelector(".ligaeste-team-toggle").onclick=()=>toggleLigaEsteTeam(team);
   const rows=section.querySelector(".ligaeste-player-list");entries.sort(([a],[b])=>String(a).localeCompare(String(b),"es",{numeric:true})).forEach(([code,qty])=>rows.appendChild(ligaEsteRow(team,code,Number(qty)||0)));
   list.appendChild(section);
 });
 if(collectionTeamFilter==="all"&&collectionFilter==="all"&&insertTeams.length){
   const special=document.createElement("section");special.className="ligaeste-specials-group";special.innerHTML=`<div class="ligaeste-specials-title"><span>✦</span><div><strong>Especiales e inserts</strong><small>ADN · Fantasy · Draft 23 · Kromix · Extra Stickers</small></div></div>`;
   insertTeams.forEach(team=>{const stickers=inventory[team]||{},total=Object.values(stickers).reduce((a,b)=>a+Number(b||0),0);const btn=document.createElement("button");btn.type="button";btn.className="ligaeste-special-shortcut";btn.innerHTML=`${flagHTML(team)}<span>${collectionSafeText(team)}</span><strong>${total}</strong>`;btn.onclick=()=>selectTeam(team);special.appendChild(btn)});list.appendChild(special);
 }
 if(!list.children.length)list.innerHTML='<div class="collection-empty">No hay cromos para este filtro.</div>';
}


function megacracksIsOpen(team){const p=projects?.[activeProjectId];p.ui=p.ui||{};p.ui.megacracksOpenTeams=p.ui.megacracksOpenTeams||{};if(collectionTeamFilter!=="all")return team===collectionTeamFilter;return !!p.ui.megacracksOpenTeams[team]}
function toggleMegacracksTeam(team){if(collectionTeamFilter!=="all"&&isMegacracksSpecialTeam(team)){selectTeam("all");return;}const p=projects?.[activeProjectId];if(!p)return;p.ui=p.ui||{};p.ui.megacracksOpenTeams=p.ui.megacracksOpenTeams||{};p.ui.megacracksOpenTeams[team]=!p.ui.megacracksOpenTeams[team];persistProjects();renderGlobalCollection()}
function renderMegacracksCollection(){
 const list=$("#globalCollectionList");if(!list)return;list.innerHTML="";
 let teams=currentTeamOrder().filter(team=>collectionFilter!=="all"||!isMegacracksSpecialTeam(team)||(collectionTeamFilter!=="all"&&team===collectionTeamFilter));
 const specialTeams=currentTeamOrder().filter(team=>isMegacracksSpecialTeam(team));if(collectionSort==="az")teams.sort((a,b)=>a.localeCompare(b,"es"));
 teams.forEach(team=>{if(collectionTeamFilter!=="all"&&team!==collectionTeamFilter)return;const stickers=inventory[team]||{},entries=Object.entries(stickers).filter(([code,qty])=>collectionStickerMatches(team,code,Number(qty)||0));if(!entries.length)return;
 const target=getTarget(),total=Object.values(stickers).reduce((a,b)=>a+Number(b||0),0),missing=Object.values(stickers).reduce((a,b)=>a+Math.max(0,target-Number(b||0)),0),open=megacracksIsOpen(team);
 const section=document.createElement("section");section.className=`ligaeste-team-accordion megacracks-team-accordion${open?" open":""}`;section.innerHTML=`<button type="button" class="ligaeste-team-toggle" aria-expanded="${open}"><div class="ligaeste-team-heading">${flagHTML(team)}<div><strong>${collectionSafeText(team)}</strong><span>${total} cards · ${missing?`${missing} pendientes`:"Completo"}</span></div></div><span class="ligaeste-team-chevron">⌄</span></button><div class="ligaeste-team-body" ${open?"":"hidden"}><div class="ligaeste-list-head"><span>Nº</span><span>Jugador / card</span><span>Stock</span></div><div class="ligaeste-player-list"></div></div>`;
 section.querySelector(".ligaeste-team-toggle").onclick=()=>toggleMegacracksTeam(team);const rows=section.querySelector(".ligaeste-player-list");entries.sort(([a],[b])=>String(a).localeCompare(String(b),"es",{numeric:true})).forEach(([code,qty])=>rows.appendChild(ligaEsteRow(team,code,Number(qty)||0)));list.appendChild(section)});
 if(collectionTeamFilter==="all"&&collectionFilter==="all"&&specialTeams.length){const special=document.createElement("section");special.className="ligaeste-specials-group megacracks-specials-group";special.innerHTML=`<div class="ligaeste-specials-title"><span>◆</span><div><strong>Especiales y paralelas</strong><small>Élite · Enjoy · Zona VIP · Master Rookie · Stars on 25 · Special One</small></div></div>`;specialTeams.forEach(team=>{const stickers=inventory[team]||{},total=Object.values(stickers).reduce((a,b)=>a+Number(b||0),0);const btn=document.createElement("button");btn.type="button";btn.className="ligaeste-special-shortcut";btn.innerHTML=`${flagHTML(team)}<span>${collectionSafeText(team)}</span><strong>${total}</strong>`;btn.onclick=()=>selectTeam(team);special.appendChild(btn)});list.appendChild(special)}
 if(!list.children.length)list.innerHTML='<div class="collection-empty">No hay cards para este filtro.</div>';
}
function renderGlobalCollection(){
 updateShareCollectionButton();
 const activeCollectionType=inferCollectionType(projects?.[activeProjectId]);
 if(activeCollectionType==="liga-este-2026-27"){renderLigaEsteCollection();return;}
 if(activeCollectionType==="megacracks-2026-27"){renderMegacracksCollection();return;}
 const list=$("#globalCollectionList");
 if(!list)return;
 list.innerHTML="";
 let teams=currentTeamOrder().map(team=>[team,inventory[team]]);
 if(collectionSort==="az")teams.sort(([a],[b])=>a.localeCompare(b,"es"));
 if(collectionSort==="most-repeats"){
   teams.sort(([,a],[,b])=>{
     const target=getTarget();
     const ra=Object.values(a).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     const rb=Object.values(b).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     return rb-ra;
   });
 }
 if(collectionSort==="least-repeats"){
   teams.sort(([,a],[,b])=>{
     const target=getTarget();
     const ra=Object.values(a).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     const rb=Object.values(b).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     return ra-rb;
   });
 }
 teams.forEach(([team,stickers])=>{
   if(collectionTeamFilter!=="all"&&team!==collectionTeamFilter)return;
   let entries=Object.entries(stickers)
     .filter(([code,qty])=>collectionStickerMatches(team,code,Number(qty)||0));
   entries.sort(([a],[b])=>Number(a)-Number(b));
   if(collectionSort==="number")entries.sort(([a],[b])=>Number(a)-Number(b));
   if(!entries.length)return;
   const target=getTarget();
   const total=Object.values(stickers).reduce((sum,q)=>sum+Number(q||0),0);
   const missing=Object.values(stickers).reduce((sum,q)=>sum+Math.max(0,target-Number(q||0)),0);
   const section=document.createElement("section");
   section.className=`collection-team${isExtraTeam(team)?" collection-team-extra":""}${isLigaEsteInsertTeam(team)?" collection-team-insert":""}`;
   section.innerHTML=`<header class="collection-team-header">
     <div class="collection-team-title">${flagHTML(team)}<strong>${isExtraTeam(team)?`Extra Stickers · ${extraVariantForTeam(team).label}`:team}</strong></div>
     <div class="collection-team-summary"><strong>${total} cromos</strong>${missing?`${missing} pendientes`:"Completa"}</div>
   </header><div class="collection-stickers-grid"></div>`;
   const grid=section.querySelector(".collection-stickers-grid");
   entries.forEach(([code,qty])=>grid.appendChild(createGlobalSticker(team,code,Number(qty)||0)));
   list.appendChild(section);
 });
 if(!list.children.length)list.innerHTML='<div class="collection-empty">No hay cromos para este filtro.</div>';
}
function calculateProjectStatistics(){
 const target=getTarget();
 const collectionType=inferCollectionType(projects?.[activeProjectId]);
 let total=0,missing=0,repeats=0,shiny=0,fwc=0,badges=0,collaboration=0,complete=0;
 let normalMissing=0,normalComplete=0;
 const specialProgress={};
 currentTeamOrder().map(team=>[team,inventory[team]]).forEach(([team,stickers])=>{
   let teamComplete=true;
   const isLigaInsert=collectionType==="liga-este-2026-27"&&isLigaEsteInsertTeam(team);const isMegaInsert=collectionType==="megacracks-2026-27"&&isMegacracksSpecialTeam(team);
   let specialOwned=0,specialTotal=0;
   Object.entries(stickers).forEach(([code,raw])=>{
     const qty=Number(raw)||0;
     total+=qty;
     const unitMissing=Math.max(0,target-qty);
     missing+=unitMissing;
     repeats+=Math.max(0,qty-target);
     if(qty<target)teamComplete=false;
     if(collectionType==="liga-este-2026-27"||collectionType==="megacracks-2026-27"){
       if(isLigaInsert||isMegaInsert){
         specialTotal++;
         if(qty>=target)specialOwned++;
       }else{
         normalMissing+=unitMissing;
       }
     }
     if(team==="FWC"){shiny+=qty;fwc+=qty}
     else if(team==="Coca-Cola"){collaboration+=qty}
     else if(code==="01"){shiny+=qty;badges+=qty}
   });
   if(teamComplete){
     complete++;
     if((collectionType==="liga-este-2026-27"&&!isLigaInsert)||(collectionType==="megacracks-2026-27"&&!isMegaInsert))normalComplete++;
   }
   if(isLigaInsert||isMegaInsert)specialProgress[team]={owned:specialOwned,total:specialTotal};
 });
 const required=currentTeamOrder().reduce((sum,team)=>sum+Object.keys(inventory[team]||{}).length,0)*target;
 const useful=Math.max(0,total-mathExcessForProgress());
 const roundedProgress=required?Math.round(useful/required*100):0;
 const progress=missing>0?Math.min(99,roundedProgress):Math.min(100,roundedProgress);
 return {total,missing,repeats,shiny,fwc,badges,collaboration,complete,progress,normalMissing,normalComplete,specialProgress,collectionType};
}
function mathExcessForProgress(){
 const target=getTarget();
 return currentTeamOrder().reduce((sum,team)=>sum+Object.values(inventory[team]||{}).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0),0);
}
function renderStatistics(){
 const s=calculateProjectStatistics();
 const isLiga=s.collectionType==="liga-este-2026-27";const isMega=s.collectionType==="megacracks-2026-27";
 const values={
   statsTotalStickers:`${s.total.toLocaleString("es-ES")} cromos`,
   statsMissingUnits:((isLiga||isMega)?s.normalMissing:s.missing).toLocaleString("es-ES"),
   statsRepeatUnits:s.repeats.toLocaleString("es-ES"),
   statsShinyTotal:s.shiny.toLocaleString("es-ES"),
   statsCompleteTeams:String((isLiga||isMega)?s.normalComplete:s.complete),
   statsProgress:`${s.progress}%`,
   statsFwcTotal:s.fwc.toLocaleString("es-ES"),
   statsBadgesTotal:s.badges.toLocaleString("es-ES"),
   statsCollaborationTotal:s.collaboration.toLocaleString("es-ES"),
   statsCompleteTeamsText:`${(isLiga||isMega)?s.normalComplete:s.complete} ${(isLiga||isMega)?"clubes completos":"selecciones completas"}`
 };
 Object.entries(values).forEach(([id,value])=>{const node=$("#"+id);if(node)node.textContent=value});
 const ring=$("#statsProgressRing");
 if(ring)ring.style.setProperty("--progress",String(s.progress));

 const genericGrid=document.querySelector(".visual-stats-grid");
 const shinyBreakdown=document.querySelector(".shiny-breakdown");
 const custom=$("#collectionSpecificStats");
 if((isLiga||isMega)&&custom){
   if(genericGrid)genericGrid.hidden=true;
   if(shinyBreakdown)shinyBreakdown.hidden=true;
   custom.hidden=false;
   const specials=isMega?Object.keys(MEGACRACKS_SPECIALS):Object.keys(LIGA_ESTE_INSERTS);
   custom.innerHTML=`<div class="collection-stats-summary-grid">
     <article class="collection-stat-card total"><span>▦</span><div><small>Cromos que tienes</small><strong>${s.total.toLocaleString("es-ES")}</strong><em>unidades totales</em></div></article>
     <article class="collection-stat-card missing"><span>−</span><div><small>Me faltan</small><strong>${s.normalMissing.toLocaleString("es-ES")}</strong><em>solo cromos de clubes</em></div></article>
     <article class="collection-stat-card repeats"><span>+</span><div><small>Repetidas</small><strong>${s.repeats.toLocaleString("es-ES")}</strong><em>unidades totales</em></div></article>
   </div>
   <div class="ligaeste-special-stat-title"><strong>Especiales</strong><small>Progreso por apartado</small></div>
   <div class="ligaeste-special-stat-grid">
     ${specials.map(team=>{
       const p=s.specialProgress[team]||{owned:0,total:Object.keys(inventory?.[team]||{}).length};
       const badge=isMega?"":(LIGA_ESTE_SPECIAL_BADGES[team]||"");
       return `<article class="ligaeste-special-stat-card${isMega?" megacracks-special-stat-card":""}">
         ${isMega?megacracksSpecialBadgeHTML(team):(badge?`<img src="${badge}" alt="">`:"")}
         <div><strong>${collectionSafeText(team)}</strong><span>${p.owned}/${p.total}</span></div>
       </article>`;
     }).join("")}
   </div>`;
 }else{
   if(genericGrid)genericGrid.hidden=false;
   if(shinyBreakdown)shinyBreakdown.hidden=false;
   if(custom){custom.hidden=true;custom.innerHTML="";}
 }
}
function setMainTab(tab){
 if(tab==="settings"){
   const dialog=$("#settingsDialog");
   if(dialog&&!dialog.open){
     document.body.classList.add("settings-overlay-open");
     dialog.showModal();
   }
   return;
 }
 mainTab=tab;
 document.body.classList.remove("main-tab-collection","main-tab-statistics","main-tab-trade","main-tab-collections");
 document.body.classList.add(`main-tab-${tab}`);

 document.querySelectorAll(".bottom-nav-button").forEach(button=>{
   button.classList.toggle("active",button.dataset.mainView===tab);
 });

 const inventoryView=$("#inventoryView");
 const statisticsView=$("#statisticsView");
 const tradeView=$("#tradeView");
 const collectionsView=$("#collectionsView");
 const missingView=$("#missingView");

 if(inventoryView)inventoryView.hidden=tab!=="collection";
 if(statisticsView)statisticsView.hidden=tab!=="statistics";
 if(tradeView)tradeView.hidden=tab!=="trade";
 if(collectionsView)collectionsView.hidden=tab!=="collections";
 if(missingView)missingView.hidden=true;

 if(tab==="collection")renderGlobalCollection();
 if(tab==="statistics")renderStatistics();
 if(tab==="collections")renderCollections();

 window.scrollTo({top:0,behavior:"auto"});
}

function renderAll(){
 applyCollectionIdentity();
 updateOptionalCollectionVisibility();
 const homeName=$("#homeCollectionName");if(homeName&&projects[activeProjectId])homeName.textContent=projects[activeProjectId].name;
 if(currentView!=="missing")renderCards();
 updateSummary();
 updateGlobalDashboard();
 updateSettingsTargetUI();
 updateLastChange();
 undoButton.disabled=history.length===0;
 if(currentView==="missing")renderMissing();
 updateNavigationBadges();
 renderGlobalCollection();
 renderStatistics();
 renderCollections();
 const banner=$("#globalExchangeBanner");
 if(banner){
   const active=currentView==="exchange";
   banner.hidden=!active;
   banner.style.display=active?"flex":"none";
   document.body.classList.toggle("exchange-active",active);
   const totals=exchangeTotals();
   $("#globalExchangeSummary").textContent=`${totals.give} para dar · ${totals.receive} para recibir`;
 }
}

function undoChange(change){
 const current=Number(inventory[change.team][change.code])||0;
 inventory[change.team][change.code]=change.previous;
 markPendingSync(change.team,change.code,current,change.previous,"deshacer");
 change.delta>0?sessionStats.plus=Math.max(0,sessionStats.plus-1):sessionStats.minus=Math.max(0,sessionStats.minus-1);
 history=history.filter(item=>item.id!==change.id);
 saveAll("Cambio deshecho");renderAll();renderHistory();showToast("Cambio deshecho");
}

function setView(view){
 currentView=view==="missing"?"inventory":view;
 document.querySelectorAll(".mode-button").forEach(button=>button.classList.toggle("active",button.dataset.view===currentView));
 $("#inventoryView").hidden=false;
 $("#missingView").hidden=true;
 $("#exchangeModePanel").hidden=currentView!=="exchange";
 document.body.classList.toggle("exchange-active",currentView==="exchange");
 renderAll();
}
document.querySelectorAll(".mode-button").forEach(button=>button.onclick=()=>setView(button.dataset.view));
document.querySelectorAll(".tab").forEach(button=>button.onclick=()=>{
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
 button.classList.add("active");
 currentFilter=button.dataset.filter;
 collectionFilter=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":"all";
 document.querySelectorAll(".collection-filter-button").forEach(x=>{
   const wanted=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":"all";
   x.classList.toggle("active",x.dataset.collectionFilter===wanted);
 });
 renderCards();
 renderGlobalCollection();
});

teamSelect.onchange=()=>{collectionTeamFilter=teamSelect.value||"all";updateCurrentTeamUI();saveAll();renderAll()};
function syncMainSearchSpace(){
 const box=document.querySelector(".premium-search");
 if(!box||!suggestions)return;
 const open=!suggestions.hidden&&suggestions.childElementCount>0;
 box.classList.toggle("has-search-results",open);
 box.closest(".compact-home-header")?.classList.toggle("search-suggestions-open",open);
}
teamSearch.oninput=()=>{
 const q=normalizeTradeName(teamSearch.value);
 if(!q){suggestions.hidden=true;syncMainSearchSpace();return}
 const matches=filterTeamsByQuery(q).slice(0,8);
 const searchType=inferCollectionType(projects?.[activeProjectId]);const isLiga=searchType==="liga-este-2026-27";const isMega=searchType==="megacracks-2026-27";
 const worldMatch=!isLiga&&!isMega&&["todo","todos","mundo","global","selecciones"].some(word=>word.includes(q)||q.includes(word));
 suggestions.innerHTML=(worldMatch?`<button class="suggestion" data-team="all"><span>🌍</span><strong>Todas las selecciones</strong></button>`:"")
   +matches.map(team=>{const source=isLiga?(LIGA_ESTE_TEAM_INFO?.[team]||LIGA_ESTE_INSERT_INFO?.[team]||{}):isMega?(MEGACRACKS_ITEM_INFO?.[team]||MEGACRACKS_SPECIAL_INFO?.[team]||{}):{};const hit=(isLiga||isMega)?Object.entries(source).find(([code,[name,pos]])=>normalizeTradeName(`${code} ${name} ${pos||""}`).includes(q)):null;return `<button class="suggestion" data-team="${team}">${flagHTML(team)}<strong>${team}</strong><small>${hit?`${hit[0]} · ${hit[1][0]}`:(TEAM_TO_PANINI_CODE[team]||"")}</small></button>`}).join("");
 suggestions.hidden=!(matches.length||worldMatch);
 syncMainSearchSpace();
 suggestions.querySelectorAll("button").forEach(button=>button.onclick=()=>selectTeam(button.dataset.team));
};
document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap")){suggestions.hidden=true;syncMainSearchSpace()}});
function syncTeamDialogViewport(){
 const vv=window.visualViewport;
 const root=document.documentElement;
 const height=vv?vv.height:window.innerHeight;
 const top=vv?vv.offsetTop:0;
 root.style.setProperty("--team-vv-height",`${Math.round(height)}px`);
 root.style.setProperty("--team-vv-top",`${Math.round(top)}px`);
 const dialog=$("#teamDialog");
 if(dialog?.open){
   const keyboardOpen=height<window.innerHeight-120;
   dialog.classList.toggle("keyboard-open",keyboardOpen);
   requestAnimationFrame(()=>$("#teamList")?.scrollTo({top:0,behavior:"auto"}));
 }
}
window.visualViewport?.addEventListener("resize",syncTeamDialogViewport);
window.visualViewport?.addEventListener("scroll",syncTeamDialogViewport);
window.addEventListener("orientationchange",()=>setTimeout(syncTeamDialogViewport,120));
$("#teamSelectorButton").onclick=()=>{
 $("#dialogSearch").value="";
 renderTeamList(currentTeamOrder());
 syncTeamDialogViewport();
 $("#teamDialog").showModal();
 requestAnimationFrame(syncTeamDialogViewport);
};
$("#closeTeamDialog").onclick=()=>$("#teamDialog").close();
$("#teamDialog").addEventListener("close",()=>$("#teamDialog").classList.remove("keyboard-open"));
$("#dialogSearch").addEventListener("focus",()=>{
 syncTeamDialogViewport();
 requestAnimationFrame(()=>$("#teamList")?.scrollTo({top:0,behavior:"auto"}));
});
$("#dialogSearch").oninput=e=>{
 renderTeamList(filterTeamsByQuery(e.target.value));
 syncTeamDialogViewport();
 requestAnimationFrame(()=>$("#teamList")?.scrollTo({top:0,behavior:"auto"}));
};
$("#targetLockButton").onclick=()=>{
 const value=prompt("Nuevo objetivo de álbumes:",targetInput.value);
 if(value!==null&&Number(value)>=1&&Number(value)<=20){
   targetInput.value=Number(value);targetValue.textContent=Number(value);saveAll("Objetivo actualizado");renderAll();renderProjectsList();
 }
};
undoButton.onclick=()=>{const last=history.at(-1);if(last)undoChange(last)};

// --------------------
// MODO INTERCAMBIO
// --------------------
function getExchangeQty(type,team,code){return Number(exchange[type][keyFor(team,code)]||0)}
function setExchangeQty(type,team,code,qty){
 const key=keyFor(team,code);
 if(qty<=0)delete exchange[type][key];else exchange[type][key]=qty;
 saveAll("Intercambio guardado");updateNavigationBadges();renderExchangeSummary();
 if(currentView==="exchange")renderCards();
}
function stageFromMainList(type,team,code,button){
 const current=getExchangeQty(type,team,code);
 if(type==="give"){
   const stock=Number(inventory[team][code])||0;
   if(current>=stock){showToast(`No puedes marcar más de x${stock} para dar`);return}
 }
 setExchangeQty(type,team,code,current+1);
 vibrate();
 const card=button.closest(".sticker-card");
 card?.classList.add(type==="give"?"flash-card-minus":"flash-card-plus");
 setTimeout(()=>card?.classList.remove("flash-card-minus","flash-card-plus"),430);
 renderCards();
 showToast(`${team} ${code} · ${type==="give"?"dar":"recibir"} x${current+1}`);
}


function exitManualExchange({clear=true,message="Intercambio cancelado"}={}){
 if(clear)exchange={give:{},receive:{}};
 currentView="inventory";
 currentFilter="all";
 collectionFilter="all";
 document.body.classList.remove("exchange-active");

 document.querySelectorAll(".tab").forEach(button=>{
   button.classList.toggle("active",button.dataset.filter==="all");
 });
 document.querySelectorAll(".collection-filter-button").forEach(button=>{
   button.classList.toggle("active",button.dataset.collectionFilter==="all");
 });

 saveAll(message);
 renderAll();
 showToast(message);
}


function enterManualExchange(){
 mainTab="collection";
 currentView="exchange";

 document.body.classList.remove("main-tab-statistics","main-tab-trade");
 document.body.classList.add("main-tab-collection","exchange-active");

 document.querySelectorAll(".bottom-nav-button").forEach(button=>{
   button.classList.toggle("active",button.dataset.mainView==="collection");
 });

 const inventoryView=$("#inventoryView");
 const statisticsView=$("#statisticsView");
 const tradeView=$("#tradeView");
 const collectionsView=$("#collectionsView");
 const missingView=$("#missingView");

 if(inventoryView)inventoryView.hidden=false;
 if(statisticsView)statisticsView.hidden=true;
 if(tradeView)tradeView.hidden=true;
 if(missingView)missingView.hidden=true;

 renderAll();

 const banner=$("#globalExchangeBanner");
 if(banner){
   banner.hidden=false;
   banner.style.display="flex";
 }

 requestAnimationFrame(()=>{
   document.querySelector(".collection-sticky-controls")?.scrollIntoView({
     behavior:"auto",
     block:"start"
   });
 });
}

function exchangeTotals(){
 return {
   give:Object.values(exchange.give).reduce((a,b)=>a+Number(b),0),
   receive:Object.values(exchange.receive).reduce((a,b)=>a+Number(b),0)
 };
}
function renderExchangeSummary(){
 const totals=exchangeTotals();
 $("#exchangeSummary").textContent=`${totals.give} para dar · ${totals.receive} para recibir`;
 $("#giveListCount").textContent=totals.give;$("#receiveListCount").textContent=totals.receive;
}
function groupedExchange(type){
 const groups={};
 Object.entries(exchange[type]).forEach(([key,qty])=>{
   const {team,code}=splitKey(key);
   (groups[team]??=[]).push({team,code,qty:Number(qty)});
 });
 Object.values(groups).forEach(items=>items.sort((a,b)=>Number(a.code)-Number(b.code)));
 return groups;
}
function exchangeItemDisplay(team,code){
 const type=inferCollectionType(projects?.[activeProjectId]);
 if(type==="liga-este-2026-27"){
   const info=ligaEsteStickerInfo(team,code)||ligaEsteInsertInfo(team,code);
   return {code:String(code),name:info?.[0]||stickerDisplayLabel(team,code)};
 }
 if(type==="megacracks-2026-27"){
   const info=globalThis.MEGACRACKS_ITEM_INFO?.[team]?.[code];
   return {code:String(code),name:info?.[0]||info?.name||stickerDisplayLabel(team,code)};
 }
 return {code:String(code),name:""};
}
function renderExchangeList(){
 const groups=groupedExchange(exchangeListType);
 const teams=currentTeamOrder().filter(team=>groups[team]);
 if(!teams.length){$("#exchangeList").innerHTML="<p>No has marcado ningún cromo en esta lista.</p>";return}
 $("#exchangeList").innerHTML=teams.map(team=>`<section class="exchange-team-group">
   <div class="exchange-team-title">${flagHTML(team)}<span>${team}</span></div>
   ${groups[team].map(item=>{const display=exchangeItemDisplay(team,item.code);return `<div class="exchange-item">
     <div class="exchange-item-label"><strong>${collectionSafeText(display.code)}</strong>${display.name?`<span>${collectionSafeText(display.name)}</span>`:""}</div>
     <div class="exchange-item-controls"><button data-action="minus" data-team="${team}" data-code="${item.code}">−</button><b>x${item.qty}</b><button data-action="plus" data-team="${team}" data-code="${item.code}">+</button></div>
     <button class="exchange-remove" data-action="remove" data-team="${team}" data-code="${item.code}">Quitar</button>
   </div>`}).join("")}
 </section>`).join("");
 $("#exchangeList").querySelectorAll("button").forEach(button=>button.onclick=()=>{
   const {team,code,action}=button.dataset,current=getExchangeQty(exchangeListType,team,code);
   if(action==="remove")setExchangeQty(exchangeListType,team,code,0);
   if(action==="minus")setExchangeQty(exchangeListType,team,code,current-1);
   if(action==="plus"){
     const max=exchangeListType==="give"?Number(inventory[team][code])||0:99;
     setExchangeQty(exchangeListType,team,code,Math.min(max,current+1));
   }
   renderExchangeList();
 });
}
$("#openExchangeListButton").onclick=()=>{exchangeListType="give";renderExchangeDialogTabs();renderExchangeList();$("#exchangeDialog").showModal()};
$("#closeExchangeDialog").onclick=()=>$("#exchangeDialog").close();
document.querySelectorAll(".exchange-list-tab").forEach(button=>button.onclick=()=>{
 exchangeListType=button.dataset.listType;renderExchangeDialogTabs();renderExchangeList();
});
function renderExchangeDialogTabs(){
 document.querySelectorAll(".exchange-list-tab").forEach(button=>button.classList.toggle("active",button.dataset.listType===exchangeListType));
 renderExchangeSummary();
}
$("#cancelExchangeButton").onclick=()=>{
 if(!confirm("¿Cancelar este intercambio? El inventario no cambiará."))return;
 $("#exchangeDialog").close();
 exitManualExchange();
};
$("#confirmExchangeButton").onclick=()=>{
 const totals=exchangeTotals();
 if(!totals.give&&!totals.receive){showToast("La lista está vacía");return}
 for(const [key,qty] of Object.entries(exchange.give)){
   const {team,code}=splitKey(key),stock=Number(inventory[team][code])||0;
   if(stock<Number(qty)){alert(`No hay suficiente stock de ${team} ${code}.`);return}
 }
 if(!confirm(`Confirmar intercambio: dar ${totals.give} y recibir ${totals.receive}.`))return;
 const now=new Date().toISOString();
 Object.entries(exchange.give).forEach(([key,qty])=>{
   const {team,code}=splitKey(key),previous=Number(inventory[team][code])||0,next=previous-Number(qty);
   inventory[team][code]=next;markPendingSync(team,code,previous,next,"intercambio");history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta:-Number(qty),at:now});
   sessionStats.minus+=Number(qty);
 });
 Object.entries(exchange.receive).forEach(([key,qty])=>{
   const {team,code}=splitKey(key),previous=Number(inventory[team][code])||0,next=previous+Number(qty);
   inventory[team][code]=next;markPendingSync(team,code,previous,next,"intercambio");history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta:Number(qty),at:now});
   sessionStats.plus+=Number(qty);
 });
 exchange={give:{},receive:{}};
 currentView="inventory";
 currentFilter="all";
 collectionFilter="all";
 document.body.classList.remove("exchange-active");
 document.querySelectorAll(".tab").forEach(button=>button.classList.toggle("active",button.dataset.filter==="all"));
 document.querySelectorAll(".collection-filter-button").forEach(button=>button.classList.toggle("active",button.dataset.collectionFilter==="all"));
 saveAll("Intercambio confirmado");
 $("#exchangeDialog").close();
 renderAll();
 showToast("✓ Intercambio aplicado al inventario");
};

// --------------------
// TODOS LOS QUE FALTAN
// --------------------
function missingCountries(){
 return currentTeamOrder().map(team=>[team,inventory[team]]).map(([team,stickers])=>{
   const missing=Object.entries(stickers)
   .filter(([,qty])=>Number(qty)<getTarget())
   .map(([code,qty])=>({code,qty:Number(qty),need:getTarget()-Number(qty)}))
   .sort((a,b)=>Number(a.code)-Number(b.code));
   return {team,missing,distinct:missing.length,units:missing.reduce((sum,item)=>sum+item.need,0)};
 }).filter(country=>country.distinct>0);
}
function renderMissing(){
 const sort=$("#missingSort").value;
 const countries=missingCountries();
 if(sort==="album"){
   const order=new Map(currentTeamOrder().map((team,index)=>[team,index]));
   countries.sort((a,b)=>(order.get(a.team)??999)-(order.get(b.team)??999));
 }
 if(sort==="most")countries.sort((a,b)=>b.distinct-a.distinct||b.units-a.units||a.team.localeCompare(b.team,"es"));
 if(sort==="least")countries.sort((a,b)=>a.distinct-b.distinct||a.units-b.units||a.team.localeCompare(b.team,"es"));
 if(sort==="az")countries.sort((a,b)=>a.team.localeCompare(b.team,"es"));
 if(sort==="za")countries.sort((a,b)=>b.team.localeCompare(a.team,"es"));
 const distinct=countries.reduce((sum,c)=>sum+c.distinct,0),units=countries.reduce((sum,c)=>sum+c.units,0);
 $("#missingTotals").textContent=`${distinct} cromos · ${units} unidades`;
 $("#missingList").innerHTML=countries.map(country=>`<section class="missing-country">
   <div class="missing-country-header">
     <div class="missing-country-name">${flagHTML(country.team)}<span>${country.team}</span></div>
     <div class="missing-country-stats"><strong>${country.distinct}/20 cromos pendientes</strong><br>${country.units} unidades</div>
   </div>
   <div class="missing-stickers">${country.missing.map(item=>`
     <div class="missing-chip">
       <strong>${item.code}</strong>
       <span>faltan ${item.need}</span>
       <div class="missing-direct-controls">
         <button class="missing-direct-minus" data-team="${country.team}" data-code="${item.code}" ${item.qty<=0?"disabled":""}>−</button>
         <b>x${item.qty}</b>
         <button class="missing-direct-plus" data-team="${country.team}" data-code="${item.code}">RECIBIR +1</button>
       </div>
     </div>`).join("")}</div>
 </section>`).join("");

 $("#missingList").querySelectorAll(".missing-direct-plus").forEach(button=>button.onclick=()=>{
   const team=button.dataset.team,code=button.dataset.code;
   const current=Number(inventory[team][code])||0;
   const target=getTarget();
   if(current>=target){
     showToast(`${team} ${code} ya está completo`);
     renderMissing();
     return;
   }
   const next=current+1;
   inventory[team][code]=next;
   markPendingSync(team,code,current,next,"me-faltan");
   history.push({
     id:crypto.randomUUID?.()||String(Date.now()+Math.random()),
     team,code,previous:current,next,delta:1,at:new Date().toISOString()
   });
   sessionStats.plus+=1;
   saveAll("✓ Guardado ahora");
   renderAll();
   setView("missing");
   showToast(`✓ ${team} ${code} recibido · x${next}`);
 });

 $("#missingList").querySelectorAll(".missing-direct-minus").forEach(button=>button.onclick=()=>{
   const team=button.dataset.team,code=button.dataset.code;
   const current=Number(inventory[team][code])||0;
   if(current<=0)return;
   const next=current-1;
   inventory[team][code]=next;
   markPendingSync(team,code,current,next,"me-faltan");
   history.push({
     id:crypto.randomUUID?.()||String(Date.now()+Math.random()),
     team,code,previous:current,next,delta:-1,at:new Date().toISOString()
   });
   sessionStats.minus+=1;
   saveAll("✓ Guardado ahora");
   renderAll();
   setView("missing");
   showToast(`✓ ${team} ${code} corregido · x${next}`);
 });
}
$("#missingSort").onchange=renderMissing;

function updateNavigationBadges(){
 const totals=exchangeTotals();
 $("#exchangeBadge").textContent=totals.give+totals.receive;
 $("#missingBadge").textContent=missingCountries().reduce((sum,c)=>sum+c.distinct,0);
 renderExchangeSummary();
}

// Historial y finalización.
function renderHistory(){
 const list=$("#historyList");
 if(!history.length){list.innerHTML="<p>No hay movimientos en la jornada actual.</p>";return}
 list.innerHTML=[...history].reverse().map(c=>`<article class="history-row"><div><strong>${c.delta>0?"+":"−"}${Math.abs(c.delta)} · ${c.team} ${c.code}</strong>${isPendingSync(c.team,c.code)?'<span class="history-sync-badge">Pendiente</span>':""}<br><small>${formatTime(c.at)} · ${c.previous} → ${c.next}</small></div><button data-id="${c.id}">Deshacer</button></article>`).join("");
 list.querySelectorAll("button").forEach(button=>button.onclick=()=>{const change=history.find(x=>x.id===button.dataset.id);if(change)undoChange(change)});
}
$("#historyButton").onclick=()=>{renderHistory();$("#historyDialog").showModal()};
$("#closeHistoryButton").onclick=()=>$("#historyDialog").close();
function sessionSnapshot(){return{startedAt:sessionStats.startedAt,finishedAt:new Date().toISOString(),plus:sessionStats.plus,minus:sessionStats.minus,balance:sessionStats.plus-sessionStats.minus,movements:[...history]}}
function renderFinish(s){$("#finishSummary").innerHTML=`<article><strong>Conseguidos: +${s.plus}</strong></article><article><strong>Entregados: −${s.minus}</strong></article><article><strong>Balance: ${s.balance>0?"+":""}${s.balance}</strong></article><article><strong>Movimientos: ${s.movements.length}</strong></article>`}
$("#finishButton").onclick=()=>{const s=sessionSnapshot();renderFinish(s);$("#finishDialog").dataset.snapshot=JSON.stringify(s);$("#finishDialog").showModal()};
$("#closeFinishButton").onclick=()=>$("#finishDialog").close();
function downloadJSON(data,name){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
$("#downloadFinishButton").onclick=()=>downloadJSON(JSON.parse($("#finishDialog").dataset.snapshot),"resumen-mercat.json");
$("#confirmFinishButton").onclick=()=>{finishedSessions.push(JSON.parse($("#finishDialog").dataset.snapshot));history=[];sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};saveAll("Nueva jornada preparada");$("#finishDialog").close();renderAll()};
$("#resetSessionButton").onclick=()=>{if(confirm("¿Reiniciar estadísticas e historial?")){history=[];sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};saveAll("Estadísticas reiniciadas");renderAll()}};
$("#exportButton").onclick=()=>downloadJSON({exportedAt:new Date().toISOString(),target:getTarget(),sessionStats,history,finishedSessions,exchange,inventory},"panini-mercat-backup.json");

function csvEscape(value){const text=String(value??"");return /[;"\n]/.test(text)?`"${text.replaceAll('"','""')}"`:text}

function xmlEscape(value){
 return String(value??"")
  .replaceAll("&","&amp;")
  .replaceAll("<","&lt;")
  .replaceAll(">","&gt;")
  .replaceAll('"',"&quot;")
  .replaceAll("'","&apos;");
}
function excelColumnName(number){
 let result="";
 while(number>0){
   const remainder=(number-1)%26;
   result=String.fromCharCode(65+remainder)+result;
   number=Math.floor((number-1)/26);
 }
 return result;
}
function xlsxCell(ref,value,styleId=0){
 if(typeof value==="number"&&Number.isFinite(value)){
   return `<c r="${ref}" s="${styleId}" t="n"><v>${value}</v></c>`;
 }
 return `<c r="${ref}" s="${styleId}" t="inlineStr"><is><t>${xmlEscape(value)}</t></is></c>`;
}
function buildInventorySheetXml(){
 const teams=currentTeamOrder();
 const headers=["Grupo","Selección",...Array.from({length:20},(_,i)=>String(i+1).padStart(2,"0"))];
 const rows=[];

 rows.push(`<row r="1" ht="24" customHeight="1">${headers.map((value,index)=>
   xlsxCell(`${excelColumnName(index+1)}1`,value,1)
 ).join("")}</row>`);

 teams.forEach((team,teamIndex)=>{
   const rowNumber=teamIndex+2;
   const stickers=Object.entries(inventory[team]).sort(([a],[b])=>Number(a)-Number(b));
   const cells=[
     xlsxCell(`A${rowNumber}`,teamGroups[team]||"",2),
     xlsxCell(`B${rowNumber}`,team,2)
   ];
   stickers.forEach(([code,quantity],stickerIndex)=>{
     const column=excelColumnName(stickerIndex+3);
     const style=isPendingSync(team,code)?3:4;
     cells.push(xlsxCell(`${column}${rowNumber}`,Number(quantity)||0,style));
   });
   rows.push(`<row r="${rowNumber}" ht="20" customHeight="1">${cells.join("")}</row>`);
 });

 const lastRow=teams.length+1;
 return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
 <sheetViews>
  <sheetView workbookViewId="0">
   <pane xSplit="2" ySplit="1" topLeftCell="C2" activePane="bottomRight" state="frozen"/>
  </sheetView>
 </sheetViews>
 <cols>
  <col min="1" max="1" width="10" customWidth="1"/>
  <col min="2" max="2" width="25" customWidth="1"/>
  <col min="3" max="22" width="7" customWidth="1"/>
 </cols>
 <sheetData>${rows.join("")}</sheetData>
 <autoFilter ref="A1:V${lastRow}"/>
 <pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/>
</worksheet>`;
}
function buildStylesXml(){
 return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
 <fonts count="3">
  <font><sz val="11"/><name val="Calibri"/><family val="2"/></font>
  <font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Calibri"/><family val="2"/></font>
  <font><b/><color rgb="FF17202A"/><sz val="11"/><name val="Calibri"/><family val="2"/></font>
 </fonts>
 <fills count="4">
  <fill><patternFill patternType="none"/></fill>
  <fill><patternFill patternType="gray125"/></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FF173A59"/><bgColor indexed="64"/></patternFill></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FFFFEB3B"/><bgColor indexed="64"/></patternFill></fill>
 </fills>
 <borders count="2">
  <border><left/><right/><top/><bottom/><diagonal/></border>
  <border>
   <left style="thin"><color rgb="FFD9E0E7"/></left>
   <right style="thin"><color rgb="FFD9E0E7"/></right>
   <top style="thin"><color rgb="FFD9E0E7"/></top>
   <bottom style="thin"><color rgb="FFD9E0E7"/></bottom>
   <diagonal/>
  </border>
 </borders>
 <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
 <cellXfs count="5">
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
   <alignment horizontal="center" vertical="center"/>
  </xf>
  <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
   <alignment vertical="center"/>
  </xf>
  <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
   <alignment horizontal="center" vertical="center"/>
  </xf>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1">
   <alignment horizontal="center" vertical="center"/>
  </xf>
 </cellXfs>
 <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;
}
async function exportProjectXlsx(){
 showLoading("Creando Excel…");
 if(typeof JSZip==="undefined"){
   alert("No se ha podido cargar el generador de Excel.");
   hideLoading();
   return;
 }
 const project=projects[activeProjectId];
 const zip=new JSZip();

 zip.file("[Content_Types].xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
 <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
 <Default Extension="xml" ContentType="application/xml"/>
 <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
 <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
 <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
 <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
 <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`);

 zip.folder("_rels").file(".rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
 <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
 <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`);

 zip.folder("docProps").file("core.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
 xmlns:dc="http://purl.org/dc/elements/1.1/"
 xmlns:dcterms="http://purl.org/dc/terms/"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <dc:title>Inventario Panini — ${xmlEscape(project.name)}</dc:title>
 <dc:creator>Panini Mercat</dc:creator>
 <cp:lastModifiedBy>Panini Mercat</cp:lastModifiedBy>
 <dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created>
 <dcterms:modified xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:modified>
</cp:coreProperties>`);
 zip.folder("docProps").file("app.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
 xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
 <Application>Panini Mercat</Application>
</Properties>`);

 const xl=zip.folder("xl");
 xl.file("workbook.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
 <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="24000" windowHeight="12000"/></bookViews>
 <sheets><sheet name="Inventario" sheetId="1" r:id="rId1"/></sheets>
</workbook>`);
 xl.folder("_rels").file("workbook.xml.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
 <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`);
 xl.file("styles.xml",buildStylesXml());
 xl.folder("worksheets").file("sheet1.xml",buildInventorySheetXml());

 const blob=await zip.generateAsync({
   type:"blob",
   mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
   compression:"DEFLATE",
   compressionOptions:{level:6}
 });
 const safeName=project.name.replace(/[\\/:*?"<>|]+/g,"-").trim()||"colección";
 const url=URL.createObjectURL(blob);
 const anchor=document.createElement("a");
 anchor.href=url;
 anchor.download=`Inventario-${safeName}.xlsx`;
 anchor.click();
 setTimeout(()=>URL.revokeObjectURL(url),1500);
 showToast(`Excel creado · ${pendingSyncCount()} celdas amarillas`);
 hideLoading();
}
$("#excelButton").onclick=exportProjectXlsx;

$("#resetButton").onclick=()=>{if(confirm("¿Restaurar esta colección con el inventario cargado desde el último Excel maestro?")){inventory=getMasterInventoryForProject(projects[activeProjectId]);history=[];sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};exchange={give:{},receive:{}};pendingSync={};saveAll("Inventario restaurado");renderAll()}};


function projectStats(p){
 const total=Object.values(p.inventory).reduce((sum,stickers)=>sum+Object.values(stickers).reduce((a,b)=>a+Number(b),0),0);
 return {total,changes:(p.history||[]).length,pending:Object.keys(p.pendingSync||{}).length};
}
function albumWord(value){return Number(value)===1?"álbum":"álbumes"}
function collectionProgress(p){
 const target=Math.max(1,Number(p.target)||1);
 const teams=projectTeamOrder(p,p?.inventory||{}).filter(team=>teamVisibleForProject(team,p));
 let useful=0,total=0,different=0,pending=0,required=0;
 teams.forEach(team=>{
   const stickers=p?.inventory?.[team]||{};
   Object.values(stickers).forEach(q=>{
     const qty=Math.max(0,Number(q)||0);
     total+=qty;
     required+=target;
     if(qty>0)different++;
     useful+=Math.min(qty,target);
     pending+=Math.max(0,target-qty);
   });
 });
 const roundedProgress=required?Math.round(useful/required*100):0;
 const progress=pending>0?Math.min(99,roundedProgress):Math.min(100,roundedProgress);
 return {total,different,pending,progress};
}
function collectionSafeText(value){
 return String(value??"").replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}
function renderCollections(){
 const list=$("#collectionsList");if(!list)return;
 const items=orderedProjects();
 list.innerHTML=items.map((p,index)=>{
   const s=collectionProgress(p),active=p.id===activeProjectId,def=collectionDefinition(p);
   return `<article class="collection-library-card clean-library-card collection-card-${def.theme} ${active?"active":""}" data-collection-id="${p.id}">
    <button type="button" class="collection-card-main" data-open-collection="${p.id}" aria-label="Abrir ${collectionSafeText(p.name)}">
      <div class="collection-album-icon" aria-hidden="true"><span>${def.icon}</span></div>
      <div class="collection-library-copy">
        <div class="collection-title-line"><h3>${collectionSafeText(p.name)}</h3>${active?'<span class="collection-active-badge">Activa</span>':''}</div>
        <span class="collection-type-chip">${collectionSafeText(def.label)}</span>
        <span class="collection-brief">${s.progress}% completado · Objetivo ${p.target} ${albumWord(p.target)}</span>
        <div class="collection-progress-track"><div class="collection-progress-fill" style="width:${s.progress}%"></div></div>
      </div>
      <span class="collection-card-chevron">›</span>
    </button>
    <div class="collection-card-order" aria-label="Ordenar ${collectionSafeText(p.name)}">
      <button type="button" data-move-collection="${p.id}" data-direction="-1" aria-label="Subir ${collectionSafeText(p.name)}" ${index===0?"disabled":""}>↑</button>
      <button type="button" data-move-collection="${p.id}" data-direction="1" aria-label="Bajar ${collectionSafeText(p.name)}" ${index===items.length-1?"disabled":""}>↓</button>
    </div>
    <button type="button" class="collection-card-menu" data-edit-collection="${p.id}" aria-label="Editar ${collectionSafeText(p.name)}">•••</button>
   </article>`;
 }).join("");
 list.querySelectorAll("[data-open-collection]").forEach(button=>button.onclick=()=>{
   const id=button.dataset.openCollection;
   if(id!==activeProjectId)switchProject(id);
   setMainTab("collection");
 });
 list.querySelectorAll("[data-edit-collection]").forEach(button=>button.onclick=event=>{
   event.stopPropagation();openEditCollection(button.dataset.editCollection);
 });
 list.querySelectorAll("[data-move-collection]").forEach(button=>button.onclick=event=>{
   event.stopPropagation();
   moveCollectionInLibrary(button.dataset.moveCollection,Number(button.dataset.direction));
 });
}
function moveCollectionInLibrary(id,direction){
 if(!id||![1,-1].includes(direction))return;
 const ordered=orderedProjects();
 const index=ordered.findIndex(project=>project.id===id);
 const target=index+direction;
 if(index<0||target<0||target>=ordered.length)return;
 const current=ordered[index],other=ordered[target];
 const currentOrder=current.collectionOrder;
 current.collectionOrder=other.collectionOrder;
 other.collectionOrder=currentOrder;
 persistProjects();
 renderCollections();
 renderProjectsList();
 navigator.vibrate?.(15);
 showToast(direction<0?"Colección movida hacia arriba":"Colección movida hacia abajo");
}
function openEditCollection(id){
 const p=projects[id],dialog=$("#editCollectionDialog");if(!p||!dialog)return;
 $("#editCollectionId").value=id;
 $("#editCollectionName").value=p.name||"Colección";
 $("#editCollectionTarget").value=Math.max(1,Number(p.target)||1);
 $("#deleteCollectionButton").hidden=Object.keys(projects).length<=1;
 dialog.showModal();
 setTimeout(()=>$("#editCollectionName")?.focus(),80);
}
function closeEditCollection(){const dialog=$("#editCollectionDialog");if(dialog?.open)dialog.close()}
function changeEditTarget(delta){
 const input=$("#editCollectionTarget");if(!input)return;
 input.value=String(Math.min(20,Math.max(1,(Number(input.value)||1)+delta)));
}
function saveEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 const name=$("#editCollectionName").value.trim();
 const target=Math.min(20,Math.max(1,Number($("#editCollectionTarget").value)||1));
 if(!name){$("#editCollectionName").focus();return}
 if(id===activeProjectId)commitProjectState();
 p.name=name;p.target=target;
 persistProjects();
 if(id===activeProjectId)loadProjectState();
 renderAll();renderProjectsList();closeEditCollection();showToast("Colección actualizada");
}
function duplicateEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 if(id===activeProjectId)commitProjectState();
 const copy=structuredClone(p);copy.id=makeId();copy.name=`${p.name} · copia`;
 copy.createdAt=new Date().toISOString();copy.updatedAt=copy.createdAt;
 projects[copy.id]=copy;persistProjects();renderCollections();renderProjectsList();closeEditCollection();showToast("Colección duplicada");
}
function deleteEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p||Object.keys(projects).length<=1)return;
 if(!confirm(`¿Eliminar la colección "${p.name}"? Esta acción no se puede deshacer.`))return;
 createAutomaticBackup("antes-de-eliminar-colección");
 if(id===activeProjectId){
   const replacement=Object.keys(projects).find(projectId=>projectId!==id);
   delete projects[id];activeProjectId=replacement;persistProjects();loadProjectState();
 }else{delete projects[id];persistProjects()}
 renderAll();renderProjectsList();closeEditCollection();showToast("Colección eliminada");
}

function emptyEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 if(!confirm(`¿Vaciar todo el stock de “${p.name}”? Se pondrán a 0 todas las referencias, incluidas las colecciones opcionales ocultas.`))return;
 createAutomaticBackup("antes-de-vaciar-colección");
 if(id===activeProjectId)commitProjectState();
 Object.values(p.inventory||{}).forEach(stickers=>Object.keys(stickers||{}).forEach(code=>stickers[code]=0));
 p.history=[];p.pendingSync={};p.exchange={give:{},receive:{}};p.sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};
 persistProjects();if(id===activeProjectId)loadProjectState();renderAll();renderProjectsList();closeEditCollection();showToast("Colección vaciada");
}
function completeOneAlbumEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 const visibleTeams=projectTeamOrder(p,p.inventory||{}).filter(team=>teamVisibleForProject(team,p));
 const missing=visibleTeams.reduce((sum,team)=>sum+Object.values(p.inventory[team]||{}).filter(q=>Number(q)<1).length,0);
 if(!missing){showToast("Este álbum ya tiene al menos una unidad de cada referencia activa");return;}
 if(!confirm(`¿Completar 1 álbum de “${p.name}”? Se añadirá una unidad a las ${missing} referencias activas que estén a 0. Las repetidas actuales se conservarán.`))return;
 createAutomaticBackup("antes-de-completar-un-álbum");
 if(id===activeProjectId)commitProjectState();
 visibleTeams.forEach(team=>Object.keys(p.inventory[team]||{}).forEach(code=>{if(Number(p.inventory[team][code])<1)p.inventory[team][code]=1;}));
 persistProjects();if(id===activeProjectId)loadProjectState();renderAll();renderProjectsList();closeEditCollection();showToast("Álbum completado con 1 unidad por referencia");
}

function adjustAllEditedCollection(delta){
 const id=$("#editCollectionId").value,p=projects[id];if(!p||![1,-1].includes(delta))return;
 if(id===activeProjectId)commitProjectState();
 const references=Object.values(p.inventory||{}).reduce((sum,stickers)=>sum+Object.keys(stickers||{}).length,0);
 const positive=Object.values(p.inventory||{}).reduce((sum,stickers)=>sum+Object.values(stickers||{}).filter(q=>Number(q)>0).length,0);
 const affected=delta>0?references:positive;
 if(!affected){showToast("No hay unidades que restar");return;}
 const action=delta>0?"sumar una unidad a":"restar una unidad de";
 const detail=delta>0?`${affected} referencias`:`${affected} referencias con stock`;
 if(!confirm(`¿${delta>0?"Añadir +1 a todo":"Aplicar −1 a todo"} en “${p.name}”? Se va a ${action} ${detail}.`))return;
 createAutomaticBackup(delta>0?"antes-de-sumar-uno-a-todo":"antes-de-restar-uno-a-todo");
 const at=new Date().toISOString();
 p.history=Array.isArray(p.history)?p.history:[];
 p.pendingSync=p.pendingSync&&typeof p.pendingSync==="object"?p.pendingSync:{};
 p.sessionStats=p.sessionStats||{plus:0,minus:0,startedAt:at};
 let changed=0;
 Object.entries(p.inventory||{}).forEach(([team,stickers])=>{
   Object.keys(stickers||{}).forEach(code=>{
     const previous=Math.max(0,Number(stickers[code])||0);
     const next=Math.max(0,previous+delta);
     if(next===previous)return;
     stickers[code]=next;changed++;
     const key=syncKey(team,code),existing=p.pendingSync[key];
     p.pendingSync[key]={team,code,firstPrevious:existing?existing.firstPrevious:previous,latestValue:next,updatedAt:at,source:"ajuste-global"};
     p.history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta,at});
   });
 });
 p.history=p.history.slice(-300);
 if(delta>0)p.sessionStats.plus=(Number(p.sessionStats.plus)||0)+changed;
 else p.sessionStats.minus=(Number(p.sessionStats.minus)||0)+changed;
 p.updatedAt=at;
 persistProjects();
 if(id===activeProjectId)loadProjectState();
 renderAll();renderProjectsList();closeEditCollection();
 navigator.vibrate?.(25);
 showToast(`${delta>0?"+1":"−1"} aplicado a ${changed} referencias`);
}

function inventorySummary(project){
 let references=0,units=0,positive=0;
 Object.values(project?.inventory||{}).forEach(stickers=>Object.values(stickers||{}).forEach(raw=>{
   references++;const qty=Math.max(0,Number(raw)||0);units+=qty;if(qty>0)positive++;
 }));
 return {references,units,positive};
}
function closeTransferInventory(){const dialog=$("#transferInventoryDialog");if(dialog?.open)dialog.close()}
function openTransferInventory(){
 const sourceId=$("#editCollectionId")?.value,source=projects[sourceId],dialog=$("#transferInventoryDialog");
 if(!source||!dialog)return;
 if(sourceId===activeProjectId)commitProjectState();
 const destinations=orderedProjects().filter(project=>project.id!==sourceId);
 if(!destinations.length){showToast("Necesitas otra colección para hacer un traspaso");return;}
 $("#transferSourceCollectionId").value=sourceId;
 const summary=inventorySummary(source);
 $("#transferSourceSummary").innerHTML=`<strong>Origen · ${collectionSafeText(source.name)}</strong>${summary.units} unidades registradas · ${summary.positive} referencias con stock`;
 const select=$("#transferDestinationCollection");
 select.innerHTML=destinations.map(project=>`<option value="${project.id}">${collectionSafeText(project.name)}</option>`).join("");
 const copy=dialog.querySelector('input[name="transferAction"][value="copy"]');if(copy)copy.checked=true;
 const sum=dialog.querySelector('input[name="transferMode"][value="sum"]');if(sum)sum.checked=true;
 closeEditCollection();
 updateTransferInventoryPreview();
 dialog.showModal();
}
function transferInventorySelection(){
 const dialog=$("#transferInventoryDialog");
 return {
   sourceId:$("#transferSourceCollectionId")?.value||"",
   destinationId:$("#transferDestinationCollection")?.value||"",
   action:dialog?.querySelector('input[name="transferAction"]:checked')?.value||"copy",
   mode:dialog?.querySelector('input[name="transferMode"]:checked')?.value||"sum"
 };
}
function updateTransferInventoryPreview(){
 const box=$("#transferInventoryPreview");if(!box)return;
 const {sourceId,destinationId,action,mode}=transferInventorySelection();
 const source=projects[sourceId],destination=projects[destinationId];
 if(!source||!destination){box.innerHTML="<strong>Selecciona una colección destino.</strong>";return;}
 const src=inventorySummary(source),dst=inventorySummary(destination);
 let resultUnits=src.units;
 if(mode==="sum")resultUnits=dst.units+src.units;
 const actionLabel=action==="move"?"Mover":"Copiar";
 const modeLabel=mode==="replace"?"Reemplazar":"Sumar";
 box.innerHTML=`<strong>Resumen antes de confirmar</strong><div class="transfer-preview-grid"><span>Operación<b>${actionLabel}</b></span><span>Aplicación<b>${modeLabel}</b></span><span>Origen<b>${src.units} unidades</b></span><span>Destino tras operación<b>${resultUnits} unidades</b></span></div>${action==="move"?'<p class="transfer-preview-warning">Al mover, el inventario del origen quedará a cero después de completar el traspaso.</p>':""}${mode==="replace"?'<p class="transfer-preview-warning">Reemplazar eliminará el inventario que tenga actualmente la colección destino y usará la misma estructura y cantidades del origen.</p>':""}`;
}
function zeroProjectInventory(project){
 Object.values(project?.inventory||{}).forEach(stickers=>Object.keys(stickers||{}).forEach(code=>stickers[code]=0));
}
function addInventories(destinationInventory,sourceInventory){
 const result=structuredClone(destinationInventory||{});
 Object.entries(sourceInventory||{}).forEach(([team,stickers])=>{
   if(!result[team])result[team]={};
   Object.entries(stickers||{}).forEach(([code,raw])=>{
     result[team][code]=Math.max(0,Number(result[team][code])||0)+Math.max(0,Number(raw)||0);
   });
 });
 return result;
}
function registerTransferHistory(project,beforeInventory,source="traspaso-inventario"){
 const at=new Date().toISOString();
 project.history=Array.isArray(project.history)?project.history:[];
 project.pendingSync=project.pendingSync&&typeof project.pendingSync==="object"?project.pendingSync:{};
 const teams=new Set([...Object.keys(beforeInventory||{}),...Object.keys(project.inventory||{})]);
 teams.forEach(team=>{
   const codes=new Set([...Object.keys(beforeInventory?.[team]||{}),...Object.keys(project.inventory?.[team]||{})]);
   codes.forEach(code=>{
     const previous=Math.max(0,Number(beforeInventory?.[team]?.[code])||0),next=Math.max(0,Number(project.inventory?.[team]?.[code])||0);
     if(previous===next)return;
     project.history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta:next-previous,at,source});
     const key=syncKey(team,code),existing=project.pendingSync[key];
     project.pendingSync[key]={team,code,firstPrevious:existing?existing.firstPrevious:previous,latestValue:next,updatedAt:at,source};
   });
 });
 project.history=project.history.slice(-300);project.updatedAt=at;
}
function executeTransferInventory(){
 const {sourceId,destinationId,action,mode}=transferInventorySelection();
 const source=projects[sourceId],destination=projects[destinationId];
 if(!source||!destination||sourceId===destinationId){showToast("Selecciona una colección destino válida");return;}
 if(sourceId===activeProjectId)commitProjectState();
 const src=inventorySummary(source),dst=inventorySummary(destination);
 const actionLabel=action==="move"?"MOVER":"COPIAR",modeLabel=mode==="replace"?"REEMPLAZAR":"SUMAR";
 const message=`${actionLabel} inventario\n\nOrigen: ${source.name}\nDestino: ${destination.name}\nUnidades origen: ${src.units}\nUnidades actuales destino: ${dst.units}\nModo: ${modeLabel}\n\n${action==="move"?"El origen quedará a cero.\n":""}${mode==="replace"?"El inventario actual del destino será reemplazado.\n":""}\n¿Confirmar la operación?`;
 if(!confirm(message))return;
 createAutomaticBackup("antes-de-traspasar-inventario");
 const beforeSource=structuredClone(source.inventory||{}),beforeDestination=structuredClone(destination.inventory||{});
 destination.inventory=mode==="replace"?structuredClone(source.inventory||{}):addInventories(destination.inventory,source.inventory);
 ensureProjectInventorySchema(destination);ensureProjectTeamOrder(destination);
 if(action==="move")zeroProjectInventory(source);
 registerTransferHistory(destination,beforeDestination,"traspaso-inventario-destino");
 if(action==="move")registerTransferHistory(source,beforeSource,"traspaso-inventario-origen");
 persistProjects();
 if(activeProjectId===sourceId||activeProjectId===destinationId)loadProjectState();
 renderAll();renderProjectsList();renderCollections();closeTransferInventory();
 navigator.vibrate?.([25,30,25]);
 showToast(`${action==="move"?"Inventario movido":"Inventario copiado"} a ${destination.name}`);
}

function renderProjectsList(){
 const list=$("#projectsList");
 if(!list)return;
 list.innerHTML=orderedProjects().map(p=>{
   const stats=projectStats(p);
   return `<article class="project-item ${p.id===activeProjectId?"active":""}">
    <div class="project-item-copy"><strong>${p.name}</strong><small>Objetivo ${p.target} · ${stats.total} cromos · ${stats.pending} pendientes</small></div>
    <div class="project-item-actions">
      <button class="project-open" data-id="${p.id}">${p.id===activeProjectId?"Activo":"Abrir"}</button>
      ${Object.keys(projects).length>1?`<button class="project-delete" data-delete="${p.id}">Eliminar</button>`:""}
    </div>
   </article>`;
 }).join("");
 list.querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>switchProject(b.dataset.id));
 list.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>deleteProject(b.dataset.delete));
}
function switchProject(id){
 if(!projects[id])return;
 commitProjectState();activeProjectId=id;persistProjects();loadProjectState();renderProjectsList();
 if($("#projectsDialog")?.open)$("#projectsDialog").close();showToast(`Colección: ${projects[id].name}`);
}
function deleteProject(id){
 if(id===activeProjectId){alert("Cambia primero a otra colección.");return}
 if(!confirm(`¿Eliminar la colección "${projects[id].name}"?`))return;
 createAutomaticBackup("antes-de-eliminar-colección");
 delete projects[id];persistProjects();renderProjectsList();
}
function createEmptyInventoryFrom(sourceInventory){
 return Object.fromEntries(Object.entries(sourceInventory||{}).map(([team,stickers])=>[
   team,Object.fromEntries(Object.keys(stickers||{}).map(code=>[code,0]))
 ]));
}
function selectedNewCollectionType(){return document.querySelector('#createProjectDialog input[name="newCollectionType"]:checked')?.value||"world-cup-2026";}
function refreshCreateProjectSources(){
 const type=selectedNewCollectionType();
 const select=$("#sourceProjectSelect");
 const repeatRadio=document.querySelector('#createProjectDialog input[name="projectSource"][value="repeats"]');
 const eligible=Object.values(projects).filter(p=>inferCollectionType(p)===type);
 if(select)select.innerHTML=eligible.map(p=>`<option value="${p.id}">${collectionSafeText(p.name)}</option>`).join("");
 if(repeatRadio){repeatRadio.disabled=!eligible.length;repeatRadio.closest("label")?.classList.toggle("disabled-option",!eligible.length);}
 const repeatOptions=$("#repeatOptions");
 if(!eligible.length&&repeatRadio?.checked){document.querySelector('#createProjectDialog input[name="projectSource"][value="empty"]').checked=true;if(repeatOptions)repeatOptions.hidden=true;}
 updateTransferPreview();
}
function openCreateProject(){
 const dialog=$("#createProjectDialog");
 if(!dialog)return;
 $("#newProjectName").value="";
 $("#newProjectTarget").value="2";
 const defaultType=inferCollectionType(projects?.[activeProjectId]);
 const typeRadio=dialog.querySelector(`input[name="newCollectionType"][value="${defaultType}"]`)||dialog.querySelector('input[name="newCollectionType"]');
 if(typeRadio)typeRadio.checked=true;
 const emptyOption=dialog.querySelector('input[name="projectSource"][value="empty"]');
 if(emptyOption)emptyOption.checked=true;
 const targetMode=dialog.querySelector('input[name="repeatMode"][value="target"]');
 if(targetMode)targetMode.checked=true;
 $("#repeatOptions").hidden=true;
 refreshCreateProjectSources();
 dialog.showModal();
}
function calculateTransfer(source,target,mode){
 if(!source?.inventory)return {inventory:{},units:0,refs:0};
 const transferred=createEmptyInventoryFrom(source.inventory);
 let units=0,refs=0;
 Object.entries(source.inventory).forEach(([team,stickers])=>{
   Object.entries(stickers||{}).forEach(([code,qty])=>{
     const available=Math.max(0,(Number(qty)||0)-(Number(source.target)||1));
     const move=mode==="all"?available:Math.min(available,target);
     transferred[team][code]=move;
     if(move>0){units+=move;refs++}
   });
 });
 return {inventory:transferred,units,refs};
}
function updateTransferPreview(){
 const repeatOptions=$("#repeatOptions"),preview=$("#transferPreview");
 if(!repeatOptions||!preview||repeatOptions.hidden)return;
 const source=projects[$("#sourceProjectSelect")?.value];
 const target=Math.max(1,Number($("#newProjectTarget")?.value)||1);
 const mode=document.querySelector('#createProjectDialog input[name="repeatMode"]:checked')?.value||"target";
 if(!source){preview.textContent="Selecciona una colección de origen.";return}
 const result=calculateTransfer(source,target,mode);
 preview.innerHTML=result.units
   ? `Se transferirán <strong>${result.units}</strong> cromos de <strong>${result.refs}</strong> referencias.`
   : "Esta colección no tiene repetidas disponibles.";
}
function createProject(){
 const dialog=$("#createProjectDialog");
 if(!dialog)return;
 const name=$("#newProjectName").value.trim();
 const target=Math.max(1,Number($("#newProjectTarget").value)||1);
 if(!name){alert("Escribe un nombre para la colección.");return}
 const sourceType=dialog.querySelector('input[name="projectSource"]:checked')?.value||"empty";
 const collectionType=selectedNewCollectionType();

 // Captura el estado más reciente antes de calcular o transferir unidades.
 commitProjectStateLocalOnly();
 const currentProject=projects[activeProjectId];
 let source=null,transfer=null;
 let newInventory=collectionInventoryTemplate(collectionType);

 if(sourceType==="repeats"){
   source=projects[$("#sourceProjectSelect").value];
   if(!source||inferCollectionType(source)!==collectionType){alert("Selecciona una colección de origen del mismo tipo.");return}
   const mode=dialog.querySelector('input[name="repeatMode"]:checked')?.value||"target";
   transfer=calculateTransfer(source,target,mode);
   if(!transfer.units){alert("La colección elegida no tiene repetidas disponibles para transferir.");return}
   if(!confirm(`Crear "${name}" transfiriendo ${transfer.units} cromos de la colección "${source.name}"? Las unidades se descontarán del proyecto de origen.`))return;
   newInventory=transfer.inventory;
 }

 // La operación se prepara completa antes de modificar projects, evitando estados parciales.
 const newProject=defaultProject(name,target,newInventory,source?.seedType||seedTypeForCollection(collectionType));
 newProject.collectionType=collectionType;
 newProject.collectionOptions=collectionType==="world-cup-2026"
   ? structuredClone(source?.collectionOptions||currentProject?.collectionOptions||{collaborationEnabled:true,extra:{epic:false,bronze:false,silver:false,gold:false}})
   : {};
 ensureProjectTeamOrder(newProject);

 createAutomaticBackup(sourceType==="repeats"?"antes-de-transferir-repetidas":"antes-de-crear-coleccion");
 if(sourceType==="repeats"&&source){
   const updatedSource=structuredClone(source);
   Object.entries(newInventory).forEach(([team,stickers])=>{
     Object.entries(stickers||{}).forEach(([code,qty])=>{
       const moved=Math.max(0,Number(qty)||0);
       if(!moved)return;
       updatedSource.inventory[team][code]=Math.max(0,(Number(updatedSource.inventory[team]?.[code])||0)-moved);
     });
   });
   updatedSource.updatedAt=new Date().toISOString();
   projects[source.id]=updatedSource;
 }
 projects[newProject.id]=newProject;
 activeProjectId=newProject.id;
 persistProjects();
 dialog.close();
 loadProjectState();
 renderProjectsList();
 renderCollections();
 renderAll();
 showToast(sourceType==="repeats"?`Colección creada · ${transfer.units} cromos transferidos`:`Colección creada: ${name}`);
}
$("#projectSelectorButton").onclick=()=>{renderProjectsList();$("#projectsDialog").showModal()};
$("#newProjectQuickButton").onclick=openCreateProject;
$("#createCollectionFromLibraryButton").onclick=openCreateProject;
$("#closeProjectsDialog").onclick=()=>$("#projectsDialog").close();
$("#createProjectButton").onclick=()=>{$("#projectsDialog").close();openCreateProject()};
$("#closeCreateProjectDialog").onclick=()=>$("#createProjectDialog").close();
$("#confirmCreateProjectButton").onclick=createProject;
document.querySelectorAll('#createProjectDialog input[name="newCollectionType"]').forEach(radio=>radio.onchange=refreshCreateProjectSources);
document.querySelectorAll('#createProjectDialog input[name="projectSource"]').forEach(radio=>radio.onchange=()=>{
 $("#repeatOptions").hidden=radio.value!=="repeats"||!radio.checked;
 updateTransferPreview();
});
document.querySelectorAll('#createProjectDialog input[name="repeatMode"]').forEach(radio=>radio.onchange=updateTransferPreview);
$("#sourceProjectSelect").onchange=updateTransferPreview;
$("#newProjectTarget").oninput=updateTransferPreview;

function buildFullBackup(reason="manual"){
 commitProjectState();
 return {
   format:"panini-mercat-backup",
   version:APP_VERSION,
   createdAt:new Date().toISOString(),
   reason,
   activeProjectId,
   projects:structuredClone(projects),
   metadata:{
     projectCount:Object.keys(projects).length,
     totalStickers:Object.values(projects).reduce((sum,project)=>
       sum+Object.values(project.inventory||{}).reduce((teamSum,stickers)=>
         teamSum+Object.values(stickers).reduce((a,b)=>a+Number(b||0),0)
       ,0)
     ,0)
   }
 };
}
function downloadBackup(data,fileName){
 const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob);
 const anchor=document.createElement("a");
 anchor.href=url;
 anchor.download=fileName;
 anchor.click();
 setTimeout(()=>URL.revokeObjectURL(url),1200);
}
function createAutomaticBackup(reason){
 const backup=buildFullBackup(reason);
 const snapshots=readJSON("panini-mercat-auto-backups-v5",[]);
 snapshots.push(backup);
 while(snapshots.length>5)snapshots.shift();
 localStorage.setItem("panini-mercat-auto-backups-v5",JSON.stringify(snapshots));
 return backup;
}
function validateBackup(data){
 if(!data||data.format!=="panini-mercat-backup"||!data.projects||typeof data.projects!=="object"){
   throw new Error("El archivo no es una copia válida de Panini Mercat.");
 }
 const projectValues=Object.values(data.projects);
 if(!projectValues.length)throw new Error("La copia no contiene colecciones.");
 for(const project of projectValues){
   if(!project.id||!project.name||!project.inventory)throw new Error("La copia contiene un colección incompleto.");
 }
 return data;
}
function backupSummaryHtml(data){
 const projectsCount=Object.keys(data.projects).length;
 const total=data.metadata?.totalStickers??Object.values(data.projects).reduce((sum,project)=>
   sum+Object.values(project.inventory||{}).reduce((teamSum,stickers)=>
     teamSum+Object.values(stickers).reduce((a,b)=>a+Number(b||0),0)
   ,0)
 ,0);
 return `<strong>${projectsCount} colecciones</strong><br>
 <span>${total} cromos · copia del ${new Date(data.createdAt).toLocaleString("es-ES")}</span>`;
}
async function readBackupFile(file){
 const text=await file.text();
 return validateBackup(JSON.parse(text));
}
function restoreBackup(data,mode){
 showLoading("Restaurando copia…");
 createAutomaticBackup("antes-de-restaurar");
 if(mode==="replace"){
   projects=structuredClone(data.projects);
   activeProjectId=data.activeProjectId&&projects[data.activeProjectId]
     ?data.activeProjectId:Object.keys(projects)[0];
 }else{
   const idMap={};
   Object.values(data.projects).forEach(project=>{
     const copy=structuredClone(project);
     const oldId=copy.id;
     copy.id=makeId();
     copy.name=`${copy.name} · restaurado`;
     copy.createdAt=new Date().toISOString();
     idMap[oldId]=copy.id;
     projects[copy.id]=copy;
   });
 }
 persistProjects();
 loadProjectState();
 renderProjectsList();
 hideLoading();
}
$("#exportBackupButton").onclick=()=>{
 const backup=buildFullBackup("manual");
 const stamp=new Date().toISOString().slice(0,10);
 downloadBackup(backup,`Panini-Mercat-Backup-${stamp}.json`);
 showToast("Copia completa exportada");
};
$("#restoreBackupButton").onclick=()=>$("#backupFileInput").click();
$("#backupFileInput").onchange=async event=>{
 const file=event.target.files?.[0];
 if(!file)return;
 try{
   pendingBackupRestore=await readBackupFile(file);
   $("#restoreBackupSummary").innerHTML=backupSummaryHtml(pendingBackupRestore);
   $("#restoreBackupDialog").showModal();
 }catch(error){
   console.error(error);
   alert(error.message||"No se ha podido leer la copia.");
 }finally{
   event.target.value="";
 }
};
$("#closeRestoreBackupDialog").onclick=()=>$("#restoreBackupDialog").close();
$("#cancelRestoreBackupButton").onclick=()=>$("#restoreBackupDialog").close();
$("#confirmRestoreBackupButton").onclick=()=>{
 if(!pendingBackupRestore)return;
 const mode=document.querySelector('input[name="restoreMode"]:checked')?.value||"replace";
 const message=mode==="replace"
   ?"Se reemplazarán todos los colecciones actuales. ¿Continuar?"
   :"Los colecciones de la copia se añadirán como colecciones nuevos. ¿Continuar?";
 if(!confirm(message))return;
 restoreBackup(pendingBackupRestore,mode);
 $("#restoreBackupDialog").close();
 pendingBackupRestore=null;
 showToast("✓ Copia restaurada");
};


function parseCellReference(ref){
 const match=String(ref||"").match(/^([A-Z]+)(\d+)$/i);
 if(!match)return null;
 let column=0;
 for(const char of match[1].toUpperCase()){
   column=column*26+(char.charCodeAt(0)-64);
 }
 return {column,row:Number(match[2])};
}
function decodeXmlEntities(text){
 const node=document.createElement("textarea");
 node.innerHTML=text||"";
 return node.value;
}
function normaliseImportedTeam(name){
 const wanted=normalize(String(name||""));
 return Object.keys(originalInventory).find(team=>normalize(team)===wanted)||null;
}
async function readInventoryWorkbook(file){
 const bytes=await file.arrayBuffer();
 const zip=await JSZip.loadAsync(bytes);

 const workbookFile=zip.file("xl/workbook.xml");
 const relsFile=zip.file("xl/_rels/workbook.xml.rels");
 if(!workbookFile||!relsFile)throw new Error("El archivo no parece un Excel válido.");

 const workbookXml=await workbookFile.async("string");
 const relsXml=await relsFile.async("string");
 const parser=new DOMParser();
 const workbookDoc=parser.parseFromString(workbookXml,"application/xml");
 const relsDoc=parser.parseFromString(relsXml,"application/xml");

 const relTargets={};
 relsDoc.querySelectorAll("Relationship").forEach(rel=>{
   relTargets[rel.getAttribute("Id")]=rel.getAttribute("Target");
 });

 let inventoryTarget=null;
 workbookDoc.querySelectorAll("sheet").forEach(sheet=>{
   if(normalize(sheet.getAttribute("name"))==="inventario"){
     const relId=sheet.getAttribute("r:id")||sheet.getAttributeNS(
       "http://schemas.openxmlformats.org/officeDocument/2006/relationships","id"
     );
     inventoryTarget=relTargets[relId];
   }
 });
 if(!inventoryTarget)throw new Error('No se encontró una hoja llamada "Inventario".');

 const cleanTarget=inventoryTarget.replace(/^\/?/,"").replace(/^xl\//,"");
 const sheetFile=zip.file(`xl/${cleanTarget}`);
 if(!sheetFile)throw new Error("No se pudo leer la hoja Inventario.");

 let sharedStrings=[];
 const sharedFile=zip.file("xl/sharedStrings.xml");
 if(sharedFile){
   const sharedXml=await sharedFile.async("string");
   const sharedDoc=parser.parseFromString(sharedXml,"application/xml");
   sharedStrings=[...sharedDoc.querySelectorAll("si")].map(si=>
     [...si.querySelectorAll("t")].map(t=>t.textContent||"").join("")
   );
 }

 const sheetXml=await sheetFile.async("string");
 const sheetDoc=parser.parseFromString(sheetXml,"application/xml");
 const cells=new Map();

 sheetDoc.querySelectorAll("c").forEach(cell=>{
   const ref=cell.getAttribute("r");
   const type=cell.getAttribute("t");
   let value="";
   if(type==="s"){
     const index=Number(cell.querySelector("v")?.textContent||0);
     value=sharedStrings[index]??"";
   }else if(type==="inlineStr"){
     value=[...cell.querySelectorAll("is t")].map(t=>t.textContent||"").join("");
   }else{
     value=cell.querySelector("v")?.textContent??"";
   }
   cells.set(ref,value);
 });

 const imported=emptyInventory();
 const groups={};
 const foundTeams=new Set();

 for(let row=2;row<=300;row++){
   const rawTeam=cells.get(`B${row}`);
   if(rawTeam===undefined||String(rawTeam).trim()==="")continue;
   const team=normaliseImportedTeam(rawTeam);
   if(!team)continue;
   foundTeams.add(team);
   groups[team]=String(cells.get(`A${row}`)||"").trim();

   for(let index=1;index<=20;index++){
     const code=team==="FWC"?String(index-1).padStart(2,"0"):String(index).padStart(2,"0");
     const column=excelColumnName(index+2);
     const raw=cells.get(`${column}${row}`);
     const quantity=Math.max(0,Math.round(Number(raw)||0));
     imported[team][code]=quantity;
   }
 }
 if(foundTeams.size!==49){
   throw new Error(`Se encontraron ${foundTeams.size} de las 49 categorías esperadas.`);
 }
 return {inventory:imported,groups,teams:foundTeams.size,fileName:file.name};
}
function buildImportComparison(importedResult){
 const differences=[];
 Object.entries(importedResult.inventory).forEach(([team,stickers])=>{
   Object.entries(stickers).forEach(([code,excelValue])=>{
     const appValue=Number(inventory[team][code])||0;
     if(appValue===Number(excelValue))return;
     differences.push({
       team,code,appValue,excelValue:Number(excelValue),
       conflict:isPendingSync(team,code)
     });
   });
 });
 return {
   ...importedResult,
   differences,
   conflicts:differences.filter(item=>item.conflict)
 };
}
function renderImportReview(){
 if(!pendingExcelImport)return;
 $("#importFileTeams").textContent=pendingExcelImport.teams;
 $("#importChangedCells").textContent=pendingExcelImport.differences.length;
 $("#importConflictCells").textContent=pendingExcelImport.conflicts.length;
 $("#importConflictHelp").innerHTML=pendingExcelImport.conflicts.length
   ? `<strong>${pendingExcelImport.conflicts.length} conflictos:</strong> esas celdas tienen cambios pendientes en la app y un valor diferente en el Excel.`
   : "No hay conflictos con cambios pendientes de la app.";

 $("#importDifferencesList").innerHTML=pendingExcelImport.differences.length
   ? pendingExcelImport.differences.slice(0,300).map(item=>`<article class="import-difference-row ${item.conflict?"conflict":""}">
      <div><strong>${item.team} ${item.code}</strong>${item.conflict?'<span class="import-conflict-badge">Conflicto</span>':""}<small>App → Excel</small></div>
      <div class="import-difference-values">x${item.appValue} → x${item.excelValue}</div>
     </article>`).join("")
   : "<p>El colección y el Excel ya tienen las mismas cantidades.</p>";
}
function openImportExcel(){
 pendingExcelImport=null;
 $("#excelFileInput").value="";
 $("#importExcelStart").hidden=false;
 $("#importExcelReview").hidden=true;
 $("#importExcelDialog").showModal();
}
async function handleExcelFile(file){
 if(!file)return;
 showLoading("Leyendo Excel…");
 try{
   $("#chooseExcelFileButton").disabled=true;
   $("#chooseExcelFileButton").textContent="Leyendo Excel…";
   const imported=await readInventoryWorkbook(file);
   pendingExcelImport=buildImportComparison(imported);
   renderImportReview();
   $("#importExcelStart").hidden=true;
   $("#importExcelReview").hidden=false;
   hideLoading();
 }catch(error){
   console.error(error);
   hideLoading();
   alert(error.message||"No se ha podido importar el Excel.");
 }finally{
   $("#chooseExcelFileButton").disabled=false;
   $("#chooseExcelFileButton").textContent="Seleccionar Excel";
 }
}
function applyExcelImport(){
 if(!pendingExcelImport)return;
 createAutomaticBackup("antes-de-importar-excel");
 const resolution=$("#importConflictResolution").value;
 const now=new Date().toISOString();
 let applied=0,kept=0;

 pendingExcelImport.differences.forEach(item=>{
   if(item.conflict&&resolution==="app"){
     kept++;
     return;
   }
   const previous=Number(inventory[item.team][item.code])||0;
   const next=Number(item.excelValue)||0;
   if(previous===next)return;
   inventory[item.team][item.code]=next;
   history.push({
     id:makeId(),team:item.team,code:item.code,
     previous,next,delta:next-previous,at:now,source:"import-excel"
   });
   if(item.conflict&&resolution==="excel"){
     delete pendingSync[syncKey(item.team,item.code)];
   }
   applied++;
 });

 Object.entries(pendingExcelImport.groups||{}).forEach(([team,group])=>{
   if(group)teamGroups[team]=group;
 });

 saveAll("Excel importado");
 renderAll();renderProjectsList();
 $("#importExcelDialog").close();
 showToast(`Excel aplicado · ${applied} cambios${kept?` · ${kept} mantenidos`:""}`);
 pendingExcelImport=null;
}
$("#importExcelButton").onclick=openImportExcel;
$("#closeImportExcelDialog").onclick=()=>$("#importExcelDialog").close();
$("#chooseExcelFileButton").onclick=()=>$("#excelFileInput").click();
$("#excelFileInput").onchange=e=>handleExcelFile(e.target.files?.[0]);
$("#cancelExcelImportButton").onclick=()=>$("#importExcelDialog").close();
$("#applyExcelImportButton").onclick=applyExcelImport;


$("#markSyncedButton").onclick=()=>{
 const count=pendingSyncCount();
 if(!count){showToast("No hay cambios pendientes");return}
 if(!confirm(`Marcar ${count} cambios como sincronizados en la colección activa?`))return;
 pendingSync={};
 lastSyncedAt=new Date().toISOString();
 saveAll("Colección sincronizada");
 renderAll();
 renderProjectsList();
 showToast("✓ Colección marcada como sincronizado");
};


function tradeItemFromKey(key){
 const [officialCode,displayCode]=String(key||"").split("|");
 const type=inferCollectionType(projects?.[activeProjectId]);
 if(type!=="world-cup-2026"){
   const team=officialCode,internalCode=Object.keys(inventory?.[team]||{}).find(code=>String(code).toUpperCase()===String(displayCode||"").toUpperCase());
   if(!team||!internalCode)return null;
   return {team,officialCode:team,displayCode:internalCode,internalCode};
 }
 const team=PANINI_TEAM_CODES[officialCode];
 if(!team||!inventory?.[team])return null;
 const internalCode=paniniInternalCode(team,Number(displayCode));
 if(!internalCode)return null;
 return {team,officialCode,displayCode:String(displayCode).padStart(2,"0"),internalCode};
}
function tradeItemInfo(item){
 const type=inferCollectionType(projects?.[activeProjectId]);
 if(type==="liga-este-2026-27")return ligaEsteStickerInfo(item.team,item.internalCode)||ligaEsteInsertInfo(item.team,item.internalCode)||null;
 if(type==="megacracks-2026-27")return megacracksItemInfo(item.team,item.internalCode)||null;
 return null;
}
function tradeItemName(item){return tradeStarName(item)||tradeItemInfo(item)?.[0]||`${item.team} ${item.displayCode}`;}
function setTradeMark(key,type,enabled){
 const prefs=currentTradePreferences(),isDefault=Boolean(DEFAULT_TOP_STARS[key]);
 if(type==="stars"){
   if(isDefault){prefs.disabledDefaultStars[key]=!enabled;if(enabled)delete prefs.disabledDefaultStars[key]}
   else {if(enabled)prefs.stars[key]=true;else delete prefs.stars[key]}
 }else{
   if(isDefault){prefs.disabledDefaultProtected[key]=!enabled;if(enabled)delete prefs.disabledDefaultProtected[key]}
   else {if(enabled)prefs.protected[key]=true;else delete prefs.protected[key]}
 }
 persistProjects();
}
function allManagedTradeKeys(){
 const prefs=currentTradePreferences();
 return [...new Set([...Object.keys(DEFAULT_TOP_STARS),...Object.keys(prefs.stars||{}),...Object.keys(prefs.protected||{})])];
}
function renderTradeProtectionSettings(){
 const root=$("#tradeProtectionSettings");if(!root)return;
 const total=allManagedTradeKeys().filter(key=>{const item=tradeItemFromKey(key);return item&&(isTradeStar(item)||isTradeProtected(item))}).length;
 root.innerHTML=`<button id="manageTradeProtection" class="trade-settings-row" type="button"><span><strong>Protegidos para intercambios</strong><small>${total} cromos configurados</small></span><b>Gestionar ›</b></button>`;
 $("#manageTradeProtection")?.addEventListener("click",openTradeProtectionManager);
}
function renderCollectionModuleSettings(){
 const root=$("#collectionModuleSettings");if(!root)return;
 const type=inferCollectionType(projects?.[activeProjectId]);
 const options=currentCollectionOptions();
 const worldControls=type==="world-cup-2026"
   ? `<label class="settings-toggle-row"><span><strong>Coca-Cola · CC</strong><small>Mostrar CC01–CC12</small></span><input id="toggleCollaborationCollection" type="checkbox" ${collaborationEnabled()?"checked":""}></label>
      <div class="optional-collection-group">${EXTRA_VARIANTS.map(v=>`<label class="settings-toggle-row extra-toggle-row"><span><strong>${v.icon} ${v.label}</strong><small>20 futbolistas</small></span><input type="checkbox" data-extra-variant="${v.key}" ${options.extra[v.key]?"checked":""}></label>`).join("")}</div>`
   : `<div class="collection-settings-inactive">Entra en un proyecto del Mundial para configurar Coca-Cola y Extra Stickers.</div>`;
 const ligaState=type==="liga-este-2026-27"
   ? `<div class="collection-settings-status active">✓ 20 clubes y ${Object.keys(LIGA_ESTE_INSERTS).length} apartados especiales activos</div>`
   : `<div class="collection-settings-inactive">Configuración disponible al entrar en Liga Este 26/27.</div>`;
 root.innerHTML=`<section class="collection-settings-family ${type==="world-cup-2026"?"is-active":""}">
   <header><span>🌍</span><div><strong>World Cup 2026</strong><small>Selecciones, FWC, colaboraciones y extras</small></div></header>${worldControls}
 </section>
 <section class="collection-settings-family ${type==="liga-este-2026-27"?"is-active":""}">
   <header><span>🟣</span><div><strong>Liga Este 2026/27</strong><small>Clubes y cromos especiales</small></div></header>${ligaState}
 </section>
 <section class="collection-settings-family ${type==="megacracks-2026-27"?"is-active":""}">
   <header><span>⚡</span><div><strong>Megacracks 2026/27</strong><small>Se habilitará con su checklist</small></div></header>
   <div class="collection-settings-status active">✓ 20 clubes y especiales/paralelas de primera edición activos</div>
 </section>`;
 $("#toggleCollaborationCollection")?.addEventListener("change",event=>{
   currentCollectionOptions().collaborationEnabled=event.currentTarget.checked;
   if(!event.currentTarget.checked&&collectionTeamFilter==="Coca-Cola")collectionTeamFilter="all";
   persistProjects();populateTeams();renderAll();renderCollectionModuleSettings();updateOptionalCollectionVisibility();
   showToast(event.currentTarget.checked?"Coca-Cola activada":"Coca-Cola ocultada");
 });
 root.querySelectorAll("[data-extra-variant]").forEach(input=>input.addEventListener("change",event=>{
   const key=event.currentTarget.dataset.extraVariant;currentCollectionOptions().extra[key]=event.currentTarget.checked;
   const team=EXTRA_VARIANTS.find(v=>v.key===key)?.team;if(!event.currentTarget.checked&&collectionTeamFilter===team)collectionTeamFilter="all";
   persistProjects();populateTeams();renderAll();renderCollectionModuleSettings();updateOptionalCollectionVisibility();
   showToast(`${EXTRA_VARIANTS.find(v=>v.key===key)?.label} ${event.currentTarget.checked?"activado":"ocultado"}`);
 }));
}
function updateOptionalCollectionVisibility(){document.body.classList.toggle("collaboration-disabled",!collaborationEnabled())}
function tradeManagerTeamOptions(){return currentTeamOrder().map(team=>`<option value="${escapeTradeHtml(team)}">${escapeTradeHtml(team)}</option>`).join("")}
function tradeManagerNumberOptions(team){return Object.keys(inventory?.[team]||{}).sort((a,b)=>String(a).localeCompare(String(b),"es",{numeric:true})).map(code=>{const item={team,officialCode:TEAM_TO_PANINI_CODE[team]||team,displayCode:paniniDisplayCode(team,code),internalCode:code},name=tradeItemInfo(item)?.[0];return `<option value="${code}">${paniniDisplayCode(team,code)}${name?` · ${escapeTradeHtml(name)}`:""}</option>`}).join("")}
function renderTradeProtectionManager(){
 const dialog=$("#tradeProtectionManagerDialog"),list=$("#tradeProtectionManagerList");if(!dialog||!list)return;
 const query=normalizeTradeName($("#tradeProtectionSearch")?.value||"");
 const rows=allManagedTradeKeys().map(key=>({key,item:tradeItemFromKey(key)})).filter(x=>x.item).filter(({key,item})=>{
   const label=tradeItemName(item),info=tradeItemInfo(item);
   return !query||normalizeTradeName(`${label} ${info?.[1]||""} ${item.team} ${item.officialCode} ${item.displayCode}`).includes(query);
 }).sort((a,b)=>currentTeamOrder().indexOf(a.item.team)-currentTeamOrder().indexOf(b.item.team)||String(a.item.displayCode).localeCompare(String(b.item.displayCode),"es",{numeric:true}));
 list.innerHTML=rows.length?rows.map(({key,item})=>{
   const star=isTradeStar(item),locked=isTradeProtected(item),name=tradeItemName(item);
   return `<article class="trade-protection-row" data-key="${key}"><div>${flagHTML(item.team)}<span><strong>${escapeTradeHtml(name)}</strong><small>${escapeTradeHtml(item.team)} · ${escapeTradeHtml(item.displayCode)}</small></span></div><div class="trade-protection-actions"><button type="button" data-mark="stars" class="${star?"active":""}" aria-label="Favorito">★</button><button type="button" data-mark="protected" class="${locked?"active":""}" aria-label="Nunca intercambiar">🔒</button><button type="button" data-remove aria-label="Quitar marcas">✕</button></div></article>`;
 }).join(""):'<div class="trade-manager-empty">No hay cromos configurados con esta búsqueda.</div>';
 list.querySelectorAll("[data-mark]").forEach(button=>button.onclick=()=>{const row=button.closest("[data-key]"),key=row.dataset.key,item=tradeItemFromKey(key),type=button.dataset.mark;setTradeMark(key,type,!button.classList.contains("active"));renderTradeProtectionManager();renderTradeProtectionSettings();});
 list.querySelectorAll("[data-remove]").forEach(button=>button.onclick=()=>{const key=button.closest("[data-key]").dataset.key;setTradeMark(key,"stars",false);setTradeMark(key,"protected",false);renderTradeProtectionManager();renderTradeProtectionSettings();});
}
function openTradeProtectionManager(){
 const dialog=$("#tradeProtectionManagerDialog");if(!dialog)return;
 const teamSelect=$("#tradeProtectionTeam");teamSelect.innerHTML=tradeManagerTeamOptions();
 const refreshNumbers=()=>{$("#tradeProtectionNumber").innerHTML=tradeManagerNumberOptions(teamSelect.value)};
 teamSelect.onchange=refreshNumbers;refreshNumbers();
 $("#tradeProtectionSearch").value="";renderTradeProtectionManager();
 if($("#settingsDialog")?.open)$("#settingsDialog").close();
 dialog.showModal();
}
function addTradeProtectionFromManager(type,button){
 const team=$("#tradeProtectionTeam")?.value,internalCode=$("#tradeProtectionNumber")?.value;if(!team||!internalCode)return;
 const item={team,officialCode:TEAM_TO_PANINI_CODE[team]||team,displayCode:paniniDisplayCode(team,internalCode),internalCode};
 setTradeMark(tradeStickerKey(item),type,true);renderTradeProtectionManager();renderTradeProtectionSettings();
 if(button){button.classList.remove("is-confirmed");void button.offsetWidth;button.classList.add("is-confirmed");setTimeout(()=>button.classList.remove("is-confirmed"),500);}
 if(navigator.vibrate)navigator.vibrate(18);
 showToast(type==="stars"?"Añadido a favoritos":"Protegido para intercambios");
}

$("#closeTradeProtectionManager")?.addEventListener("click",()=>$("#tradeProtectionManagerDialog")?.close());
$("#tradeProtectionSearch")?.addEventListener("input",renderTradeProtectionManager);
$("#addTradeFavorite")?.addEventListener("click",event=>addTradeProtectionFromManager("stars",event.currentTarget));
$("#addTradeProtected")?.addEventListener("click",event=>addTradeProtectionFromManager("protected",event.currentTarget));
$("#openTradeProtectionManagerButton")?.addEventListener("click",openTradeProtectionManager);
$("#openQrCompareButton")?.addEventListener("click",openQrCompare);
$("#closeQrCompareDialog")?.addEventListener("click",closeQrCompare);
$("#startQrCompareScanner")?.addEventListener("click",startQrScanner);
$("#qrCompareDialog")?.addEventListener("close",stopQrScanner);
$("#downloadQrCompare")?.addEventListener("click",downloadQrCompareImage);
$("#pickQrCompareImage")?.addEventListener("click",()=>$("#qrCompareImageInput")?.click());
$("#qrCompareImageInput")?.addEventListener("change",event=>{const file=event.currentTarget.files?.[0];if(file)readQrCompareImage(file);event.currentTarget.value=""});


const QR_COLLECTION_CODE={"world-cup-2026":"W","liga-este-2026-27":"L","megacracks-2026-27":"M"};
const QR_CODE_COLLECTION={W:"world-cup-2026",L:"liga-este-2026-27",M:"megacracks-2026-27"};
let qrCompareStream=null,qrCompareScanTimer=null;
function qrInventoryLayout(type){const template=collectionInventoryTemplate(type),rows=Object.entries(template).flatMap(([team,stickers])=>Object.keys(stickers).map(code=>[team,code]));if(type==="world-cup-2026")EXTRA_TEAMS.forEach(team=>{for(let n=1;n<=20;n++)rows.push([team,String(n).padStart(2,"0")])});return rows;}
function bytesToBase64Url(bytes){let binary="";for(let i=0;i<bytes.length;i++)binary+=String.fromCharCode(bytes[i]);return btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");}
function base64UrlToBytes(text){let raw=String(text||"").replace(/-/g,"+").replace(/_/g,"/");while(raw.length%4)raw+="=";const binary=atob(raw),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);return bytes;}
function qrLayoutSignature(layout){let h=2166136261;for(const [team,code] of layout){const text=`${team}|${code};`;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}}return (h>>>0).toString(36);}
function createQrComparePayload(){
 const type=inferCollectionType(projects?.[activeProjectId]),layout=qrInventoryLayout(type),bytes=new Uint8Array(Math.ceil(layout.length/2));
 layout.forEach(([team,code],i)=>{const value=Math.max(0,Math.min(15,Number(inventory?.[team]?.[code])||0)),idx=Math.floor(i/2);if(i%2===0)bytes[idx]=value<<4;else bytes[idx]|=value;});
 return `SB1.${QR_COLLECTION_CODE[type]}.${Math.max(1,Math.min(15,Number(getTarget())||1))}.${layout.length}.${qrLayoutSignature(layout)}.${bytesToBase64Url(bytes)}`;
}
function parseQrComparePayload(raw){
 let value=String(raw||"").trim();try{const url=new URL(value);value=url.searchParams.get("sbcompare")||value}catch{}
 const parts=value.split(".");if(parts.length!==6||parts[0]!=="SB1")throw new Error("Código QR de StickerBase no válido.");
 const type=QR_CODE_COLLECTION[parts[1]],target=Number(parts[2]),length=Number(parts[3]),signature=parts[4],bytes=base64UrlToBytes(parts[5]);if(!type)throw new Error("Colección no reconocida.");
 const layout=qrInventoryLayout(type);if(layout.length!==length||qrLayoutSignature(layout)!==signature)throw new Error("La otra persona usa una estructura de colección diferente. Actualizad StickerBase y probad de nuevo.");
 const quantities=layout.map((_,i)=>{const byte=bytes[Math.floor(i/2)]||0;return i%2===0?(byte>>4)&15:byte&15});return {type,target,layout,quantities};
}
function qrCompareUrl(){const url=new URL(location.href);url.search="";url.hash="";url.searchParams.set("sbcompare",createQrComparePayload());return url.toString();}
function qrComparePngBlob(){
 return new Promise((resolve,reject)=>{try{
  const text=qrCompareUrl(),matrix=StickerBaseQRCode.matrix(text,"M"),quiet=5,n=matrix.length,total=n+quiet*2;
  const canvas=document.createElement("canvas"),W=1080,H=1260;canvas.width=W;canvas.height=H;const ctx=canvas.getContext("2d");
  ctx.fillStyle="#ffffff";ctx.fillRect(0,0,W,H);ctx.fillStyle="#071018";ctx.fillRect(0,0,W,170);
  ctx.textAlign="center";ctx.fillStyle="#ffffff";ctx.font="700 54px -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif";ctx.fillText("StickerBase",W/2,74);
  ctx.fillStyle="#b8c2cc";ctx.font="600 27px -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif";ctx.fillText("COMPARAR COLECCIONES",W/2,124);
  const label=collectionTypeLabel(inferCollectionType(projects?.[activeProjectId]));ctx.fillStyle="#071018";ctx.font="700 35px -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif";ctx.fillText(label,W/2,235);
  const qrSize=850,module=qrSize/total,x0=(W-qrSize)/2,y0=285;ctx.fillStyle="#fff";ctx.fillRect(x0,y0,qrSize,qrSize);ctx.fillStyle="#071018";
  matrix.forEach((row,y)=>row.forEach((dark,x)=>{if(dark)ctx.fillRect(x0+(x+quiet)*module,y0+(y+quiet)*module,Math.ceil(module+.25),Math.ceil(module+.25))}));
  ctx.fillStyle="#59636f";ctx.font="500 27px -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif";ctx.fillText("Importa esta imagen desde StickerBase para comparar",W/2,1190);
  canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("No se pudo generar la imagen")),"image/png",1);
 }catch(error){reject(error)}});
}
async function downloadQrCompareImage(event){
 const button=event?.currentTarget||$("#downloadQrCompare"),original=button?.textContent||"Descargar QR";if(button){button.disabled=true;button.textContent="Generando…"}
 try{
  const blob=await qrComparePngBlob(),file=new File([blob],`StickerBase-QR-${Date.now()}.png`,{type:"image/png"});
  if(navigator.share&&navigator.canShare?.({files:[file]}))await navigator.share({files:[file],title:"StickerBase · Mi QR"});
  else{const href=URL.createObjectURL(blob),a=document.createElement("a");a.href=href;a.download=file.name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),2500)}
  if(button){button.textContent="QR listo ✓";button.classList.add("is-success")}if(navigator.vibrate)navigator.vibrate(18);showToast("QR preparado para guardar o compartir ✓");
 }catch(error){if(error?.name!=="AbortError"){if(button){button.textContent="Error";button.classList.add("is-error")}showToast("No se pudo generar el QR")}}
 finally{if(button){setTimeout(()=>{button.disabled=false;button.textContent=original;button.classList.remove("is-success","is-error")},1500)}}
}
function renderQrMatrix(container,text){if(!container||!globalThis.StickerBaseQRCode)return;const matrix=StickerBaseQRCode.matrix(text,"M"),n=matrix.length,quiet=4,size=n+quiet*2,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("viewBox",`0 0 ${size} ${size}`);svg.setAttribute("role","img");svg.setAttribute("aria-label","QR de comparación StickerBase");svg.classList.add("trade-qr-svg");const bg=document.createElementNS(svg.namespaceURI,"rect");bg.setAttribute("width",size);bg.setAttribute("height",size);bg.setAttribute("fill","white");svg.appendChild(bg);matrix.forEach((row,y)=>row.forEach((dark,x)=>{if(!dark)return;const r=document.createElementNS(svg.namespaceURI,"rect");r.setAttribute("x",x+quiet);r.setAttribute("y",y+quiet);r.setAttribute("width",1);r.setAttribute("height",1);r.setAttribute("fill","#071018");svg.appendChild(r)}));container.replaceChildren(svg);}
function qrCompareItemLabel(team,code){const type=inferCollectionType(projects?.[activeProjectId]);if(type==="liga-este-2026-27")return ligaEsteStickerInfo(team,code)?.[0]||ligaEsteInsertInfo(team,code)?.[0]||code;if(type==="megacracks-2026-27")return megacracksItemInfo(team,code)?.[0]||code;return `${TEAM_TO_PANINI_CODE[team]||team}${paniniDisplayCode(team,code)}`;}
function compareQrInventory(peer){
 const type=inferCollectionType(projects?.[activeProjectId]);if(peer.type!==type)throw new Error(`Ese QR pertenece a ${collectionTypeLabel(peer.type)}. Abre una colección del mismo tipo.`);
 const myTarget=Math.max(1,Number(getTarget())||1),give=[],receive=[];peer.layout.forEach(([team,code],i)=>{const mine=Number(inventory?.[team]?.[code])||0,theirs=peer.quantities[i]||0;if(mine>myTarget&&theirs<peer.target)give.push({team,code,units:Math.min(mine-myTarget,peer.target-theirs)});if(theirs>peer.target&&mine<myTarget)receive.push({team,code,units:Math.min(theirs-peer.target,myTarget-mine)});});return {give,receive};
}
function renderQrCompareRows(items){if(!items.length)return '<div class="trade-qr-empty">Ninguna coincidencia.</div>';const groups={};items.forEach(item=>(groups[item.team]||=[]).push(item));return Object.entries(groups).map(([team,rows])=>`<section class="trade-qr-team"><header>${flagHTML(team)}<strong>${escapeTradeHtml(team)}</strong></header>${rows.map(item=>`<div><span><b>${escapeTradeHtml(item.code)}</b> · ${escapeTradeHtml(qrCompareItemLabel(item.team,item.code))}</span><strong>x${item.units}</strong></div>`).join("")}</section>`).join("");}
function showQrComparison(raw){
 try{const peer=parseQrComparePayload(raw),result=compareQrInventory(peer),root=$("#qrCompareResult");root.hidden=false;root.innerHTML=`<div class="trade-qr-summary"><div><span>Tú puedes darle</span><strong>${result.give.reduce((a,b)=>a+b.units,0)}</strong></div><div><span>Puede darte</span><strong>${result.receive.reduce((a,b)=>a+b.units,0)}</strong></div></div><div class="trade-qr-columns"><section><h3>Para dar</h3>${renderQrCompareRows(result.give)}</section><section><h3>Para recibir</h3>${renderQrCompareRows(result.receive)}</section></div>`;$("#qrCompareIntro").hidden=true;stopQrScanner();
 }catch(error){showToast(error.message||"No se ha podido leer el QR");}
}
function stopQrScanner(){if(qrCompareScanTimer){cancelAnimationFrame(qrCompareScanTimer);qrCompareScanTimer=null}if(qrCompareStream){qrCompareStream.getTracks().forEach(t=>t.stop());qrCompareStream=null}const video=$("#qrCompareVideo");if(video){video.srcObject=null;video.hidden=true}}
async function startQrScanner(){
 if(!("BarcodeDetector" in window)){showToast("En este iPhone usa la app Cámara: escanea el QR y abre el enlace de StickerBase.");return;}
 try{const formats=await BarcodeDetector.getSupportedFormats();if(!formats.includes("qr_code"))throw new Error();const detector=new BarcodeDetector({formats:["qr_code"]}),video=$("#qrCompareVideo");qrCompareStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false});video.srcObject=qrCompareStream;video.hidden=false;await video.play();const scan=async()=>{if(!qrCompareStream)return;try{const codes=await detector.detect(video);if(codes[0]?.rawValue){showQrComparison(codes[0].rawValue);return}}catch{}qrCompareScanTimer=requestAnimationFrame(scan)};scan();}catch{stopQrScanner();showToast("No se pudo abrir el lector. Usa la Cámara del móvil y abre el enlace del QR.");}
}
async function qrImageSource(file){
 if("createImageBitmap" in window){try{return await createImageBitmap(file)}catch{}}
 return await new Promise((resolve,reject)=>{const url=URL.createObjectURL(file),img=new Image();img.onload=()=>{URL.revokeObjectURL(url);resolve(img)};img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error("No se pudo abrir la imagen"))};img.src=url});
}
async function decodeQrFromImageFile(file){
 const source=await qrImageSource(file),width=source.naturalWidth||source.width,height=source.naturalHeight||source.height;if(!width||!height)throw new Error("Imagen no válida");
 const maxSide=1800,scale=Math.min(1,maxSide/Math.max(width,height)),canvas=document.createElement("canvas");canvas.width=Math.max(1,Math.round(width*scale));canvas.height=Math.max(1,Math.round(height*scale));const ctx=canvas.getContext("2d",{willReadFrequently:true});ctx.drawImage(source,0,0,canvas.width,canvas.height);if(source.close)try{source.close()}catch{}
 if("BarcodeDetector" in window){try{const formats=await BarcodeDetector.getSupportedFormats();if(formats.includes("qr_code")){const codes=await new BarcodeDetector({formats:["qr_code"]}).detect(canvas);if(codes[0]?.rawValue)return codes[0].rawValue}}catch{}}
 if(typeof globalThis.jsQR==="function"){const image=ctx.getImageData(0,0,canvas.width,canvas.height),result=globalThis.jsQR(image.data,image.width,image.height,{inversionAttempts:"attemptBoth"});if(result?.data)return result.data}
 throw new Error("No se ha encontrado ningún QR legible en la captura");
}
async function readQrCompareImage(file){
 const button=$("#pickQrCompareImage"),status=$("#qrCompareImageStatus"),original=button?.textContent||"Elegir captura";if(button){button.disabled=true;button.textContent="Analizando…"}if(status)status.textContent="Buscando el QR en la imagen…";
 try{const raw=await decodeQrFromImageFile(file);if(status)status.textContent="QR detectado ✓";if(button){button.textContent="QR detectado ✓";button.classList.add("is-success")}showQrComparison(raw);showToast("QR de la captura leído correctamente ✓");}
 catch(error){if(status)status.textContent=error.message||"No se pudo leer el QR";if(button){button.textContent="Probar otra captura";button.classList.add("is-error")}showToast(error.message||"No se pudo leer el QR de la imagen");}
 finally{if(button){button.disabled=false;setTimeout(()=>{button.textContent=original;button.classList.remove("is-success","is-error")},1800)}}
}
function openQrCompare(){
 const dialog=$("#qrCompareDialog");if(!dialog)return;$("#qrCompareIntro").hidden=false;$("#qrCompareResult").hidden=true;const status=$("#qrCompareImageStatus");if(status)status.textContent="";stopQrScanner();const url=qrCompareUrl();renderQrMatrix($("#qrCompareCode"),url);$("#qrCompareCollection").textContent=collectionTypeLabel(inferCollectionType(projects?.[activeProjectId]));if(!dialog.open)dialog.showModal();
}
function closeQrCompare(){stopQrScanner();$("#qrCompareDialog")?.close();}
function handleIncomingQrCompare(){const url=new URL(location.href),payload=url.searchParams.get("sbcompare");if(!payload)return;url.searchParams.delete("sbcompare");history.replaceState({},"",url.toString());setTimeout(()=>{openQrCompare();showQrComparison(payload)},180);}
function setupSettingsCenter(){
 const dialog=$("#settingsDialog");
 if(!dialog)return;
 const versionNode=$("#appInfoVersion");
 if(versionNode)versionNode.textContent=`Build ${APP_VERSION} · Multicolección`;
 const versionSubtitle=$("#appInfoSubtitle");
 if(versionSubtitle)versionSubtitle.textContent=`Build ${APP_VERSION}`;

 const projectBar=document.querySelector(".project-bar");
 const syncCard=document.querySelector(".sync-card");
 const backupCard=document.querySelector(".backup-card");
 const actions=document.querySelector(".actions");

 const syncSlot=$("#settingsSyncSlot");
 const backupSlot=$("#settingsBackupSlot");
 const actionsSlot=$("#settingsActionsSlot");
 if(syncCard&&syncSlot&&!syncSlot.contains(syncCard))syncSlot.appendChild(syncCard);
 if(backupCard&&backupSlot&&!backupSlot.contains(backupCard))backupSlot.appendChild(backupCard);
 if(actions&&actionsSlot&&!actionsSlot.contains(actions))actionsSlot.appendChild(actions);

 const openSettings=()=>{
   if(dialog.open)return;
   renderTradeProtectionSettings();renderCollectionModuleSettings();updateOptionalCollectionVisibility();
   document.body.classList.add("settings-overlay-open");
   dialog.showModal();
   const scrollArea=dialog.querySelector(".settings-groups");
   if(scrollArea)scrollArea.scrollTop=0;
 };

 const closeSettings=()=>{
   if(!dialog.open)return;
   dialog.close();
 };

 const headerButton=$("#settingsButton");
 if(headerButton)headerButton.onclick=openSettings;

 document.querySelectorAll('.bottom-nav-button[data-main-view="settings"]').forEach(button=>{
   button.onclick=openSettings;
 });

 const closeButton=$("#closeSettingsDialog");
 if(closeButton)closeButton.onclick=closeSettings;

 dialog.addEventListener("close",()=>{
   document.body.classList.remove("settings-overlay-open");
 });

 dialog.addEventListener("cancel",event=>{
   event.preventDefault();
   closeSettings();
 });

 dialog.addEventListener("click",event=>{
   if(event.target===dialog)closeSettings();
 });
}


const settingsTargetButton=$("#settingsTargetButton");
if(settingsTargetButton)settingsTargetButton.onclick=()=>{
 const current=getTarget();
 const value=prompt("Objetivo de álbumes para esta colección:",String(current));
 if(value===null)return;
 const next=Math.max(1,Math.min(20,Number(value)||current));
 targetInput.value=String(next);
 targetValue.textContent=String(next);
 saveAll("Objetivo actualizado");
 renderAll();
 renderProjectsList();
 showToast(`Objetivo actualizado a ${next}`);
};


document.querySelectorAll(".bottom-nav-button").forEach(button=>button.onclick=()=>setMainTab(button.dataset.mainView));
$("#shareCollectionListButton")?.addEventListener("click",shareActiveCollectionList);
$("#shareOptionsClose")?.addEventListener("click",closeShareOptions);
$("#shareOptionsBackdrop")?.addEventListener("click",closeShareOptions);
document.querySelectorAll("[data-share-option]").forEach(button=>button.addEventListener("click",()=>runShareOption(button.dataset.shareOption)));
$("#openTradeAnalyzerButton")?.addEventListener("click",openTradeAnalyzer);
$("#closeTradeAnalyzerDialog")?.addEventListener("click",closeTradeAnalyzer);
$("#runTradeAnalyzerButton")?.addEventListener("click",event=>{const fb=actionFeedback(event.currentTarget,{busy:"Analizando…",done:"Lista analizada ✓"});try{renderTradeAnalyzerResult();fb.success();}catch(error){console.error(error);fb.fail("No se pudo analizar");}});
$("#clearTradeAnalyzerButton")?.addEventListener("click",()=>{const input=$("#tradeAnalyzerInput");if(input)input.value="";const dialog=$("#tradeAnalyzerDialog");dialog?.classList.remove("analyzed");const result=$("#tradeAnalyzerResult");if(result){result.hidden=true;result.innerHTML="";}input?.focus();});
$("#tradeAnalyzerDialog")?.addEventListener("click",event=>{if(event.target===$("#tradeAnalyzerDialog"))closeTradeAnalyzer();});

document.querySelectorAll(".collection-filter-button").forEach(button=>button.onclick=()=>{
 document.querySelectorAll(".collection-filter-button").forEach(x=>x.classList.remove("active"));
 button.classList.add("active");
 collectionFilter=button.dataset.collectionFilter;
 currentFilter=collectionFilter==="missing"?"need":collectionFilter==="repeats"?"offer":"all";
 document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.filter===currentFilter));
 renderGlobalCollection();
});
$("#openClassicExchangeButton").onclick=()=>{
 $("#settingsDialog").close();
 enterManualExchange();
 showToast("Modo intercambio manual activado");
};



$("#openGlobalExchangeListButton").onclick=()=>{
 exchangeListType="give";
 renderExchangeDialogTabs();
 renderExchangeList();
 $("#exchangeDialog").showModal();
};


$("#cancelGlobalExchangeButton").onclick=()=>{
 const totals=exchangeTotals();
 if((totals.give||totals.receive)&&!confirm("¿Cancelar este intercambio? Las selecciones marcadas se descartarán."))return;
 exitManualExchange();
};


$("#collectionSort").onchange=event=>{
 collectionSort=event.target.value;
 renderGlobalCollection();
};

let scrollSaveTimer=null;
window.addEventListener("scroll",()=>{
 clearTimeout(scrollSaveTimer);
 scrollSaveTimer=setTimeout(()=>{
   const p=projects?.[activeProjectId];if(!p)return;
   p.ui={...(p.ui||{}),scrollY:Math.max(0,Math.round(window.scrollY||0))};
   localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));
 },180);
},{passive:true});

const PUBLIC_BUILD_VERSION=globalThis.WC26_CONFIG?.version||APP_VERSION;
let serviceWorkerRegistration=null;
let updateReloadStarted=false;

function showAppUpdate(version=PUBLIC_BUILD_VERSION){
 const banner=document.getElementById("appUpdateBanner");
 const message=document.getElementById("appUpdateMessage");
 if(!banner)return;
 if(message)message.textContent=`La versión ${version} está lista para instalar.`;
 banner.hidden=false;
}

function hideAppUpdate(){
 const banner=document.getElementById("appUpdateBanner");
 if(banner)banner.hidden=true;
}

function versionParts(value){
 return String(value||"").match(/\d+/g)?.map(Number)||[];
}

function isNewerVersion(remote,current){
 const a=versionParts(remote),b=versionParts(current);
 const length=Math.max(a.length,b.length);
 for(let i=0;i<length;i++){
   const delta=(a[i]||0)-(b[i]||0);
   if(delta!==0)return delta>0;
 }
 return false;
}

async function checkPublishedVersion(){
 try{
   const response=await fetch(`./version.json?check=${Date.now()}`,{cache:"no-store"});
   if(!response.ok)return;
   const info=await response.json();
   if(isNewerVersion(info.version,PUBLIC_BUILD_VERSION)){
     showAppUpdate(info.version);
     serviceWorkerRegistration?.update().catch(()=>{});
   }
 }catch(error){
   console.debug("No se pudo comprobar la versión publicada",error);
 }
}

function watchInstallingWorker(worker){
 if(!worker)return;
 worker.addEventListener("statechange",()=>{
   // An installed worker is not enough to announce an update: old/stale
   // registrations can remain waiting. Confirm against version.json first.
   if(worker.state==="installed"&&navigator.serviceWorker.controller){
     checkPublishedVersion();
   }
 });
}

async function installAvailableUpdate(){
 const button=document.getElementById("appUpdateButton");
 if(button){button.disabled=true;button.textContent="Actualizando…";}
 try{
   const registration=serviceWorkerRegistration||await navigator.serviceWorker.getRegistration();
   if(registration){
     serviceWorkerRegistration=registration;
     await registration.update().catch(()=>{});
     const worker=registration.waiting||registration.installing;
     if(worker){
       worker.postMessage({type:"SKIP_WAITING"});
       setTimeout(()=>{
         const url=new URL(location.href);
         url.searchParams.set("updated",Date.now());
         location.replace(url.toString());
       },1800);
       return;
     }
   }
   if("caches" in window){
     const keys=await caches.keys();
     await Promise.all(keys.filter(key=>key.startsWith("wc26-build-")).map(key=>caches.delete(key)));
   }
   const url=new URL(location.href);
   url.searchParams.set("updated",Date.now());
   location.replace(url.toString());
 }catch(error){
   console.error("No se pudo aplicar la actualización",error);
   if(button){button.disabled=false;button.textContent="Reintentar";}
 }
}

function initialiseAppUpdates(){
 const button=document.getElementById("appUpdateButton");
 if(button)button.addEventListener("click",installAvailableUpdate);
 if(!("serviceWorker" in navigator))return;

 navigator.serviceWorker.addEventListener("controllerchange",()=>{
   if(updateReloadStarted)return;
   updateReloadStarted=true;
   hideAppUpdate();
   location.reload();
 });

 window.addEventListener("load",async()=>{
   try{
     const registration=await navigator.serviceWorker.register("./service-worker.js",{updateViaCache:"none"});
     serviceWorkerRegistration=registration;
     // Do not show the banner merely because a worker is waiting. The
     // published version check below is the source of truth.
     watchInstallingWorker(registration.installing);
     registration.addEventListener("updatefound",()=>watchInstallingWorker(registration.installing));
     await registration.update().catch(()=>{});
     await checkPublishedVersion();
   }catch(error){
     console.error("No se pudo registrar el sistema de actualización",error);
   }
 });

 document.addEventListener("visibilitychange",()=>{
   if(document.visibilityState==="visible"){
     serviceWorkerRegistration?.update().catch(()=>{});
     checkPublishedVersion();
   }
 });
 setInterval(checkPublishedVersion,5*60*1000);
}

initialiseAppUpdates();
loadData().then(()=>handleIncomingQrCompare()).catch(error=>{console.error(error);hideLoading();document.body.innerHTML="<main class='app-main'><h1>Error al cargar</h1><p>Comprueba que todos los archivos estén subidos.</p></main>"});


/* Build 703.2 · formatos de compartir y copiar + recuperación al volver a primer plano */
document.addEventListener("DOMContentLoaded",()=>{
 $("#onboardingForm")?.addEventListener("submit",createFirstCloudCollection);
 $("#onboardingStartButton")?.addEventListener("click",()=>{closeFirstCollectionOnboarding();switchMainView?.("collection");window.scrollTo({top:0,behavior:"auto"});showToast("Colección creada y sincronizada ✓")});
 const form=$("#editCollectionForm");
 if(form)form.addEventListener("submit",event=>{event.preventDefault();saveEditedCollection()});
 $("#closeEditCollectionDialog")?.addEventListener("click",closeEditCollection);
 $("#editTargetMinus")?.addEventListener("click",()=>changeEditTarget(-1));
 $("#editTargetPlus")?.addEventListener("click",()=>changeEditTarget(1));
 $("#duplicateCollectionButton")?.addEventListener("click",duplicateEditedCollection);
 $("#emptyCollectionButton")?.addEventListener("click",emptyEditedCollection);
 $("#completeOneAlbumButton")?.addEventListener("click",completeOneAlbumEditedCollection);
 $("#addOneToAllButton")?.addEventListener("click",()=>adjustAllEditedCollection(1));
 $("#removeOneFromAllButton")?.addEventListener("click",()=>adjustAllEditedCollection(-1));
 $("#transferInventoryButton")?.addEventListener("click",openTransferInventory);
 $("#closeTransferInventoryDialog")?.addEventListener("click",closeTransferInventory);
 $("#transferInventoryForm")?.addEventListener("submit",event=>{event.preventDefault();executeTransferInventory()});
 $("#transferDestinationCollection")?.addEventListener("change",updateTransferInventoryPreview);
 $("#transferInventoryDialog")?.addEventListener("change",event=>{if(event.target.matches('input[name="transferAction"],input[name="transferMode"]'))updateTransferInventoryPreview()});
 $("#transferInventoryDialog")?.addEventListener("click",event=>{if(event.target===$("#transferInventoryDialog"))closeTransferInventory()});
 $("#exportCollectionAlbumButton")?.addEventListener("click",exportEditedCollectionAlbum);
 $("#deleteCollectionButton")?.addEventListener("click",deleteEditedCollection);
 $("#editCollectionDialog")?.addEventListener("click",event=>{if(event.target===$("#editCollectionDialog"))closeEditCollection()});
});

// BUILD 704.3.6 — Ajustes en acordeón: una sección abierta cada vez.
document.addEventListener("toggle",event=>{
 const item=event.target;
 if(!(item instanceof HTMLDetailsElement)||!item.matches(".settings-accordion")||!item.open)return;
 document.querySelectorAll(".settings-accordion[open]").forEach(other=>{if(other!==item)other.open=false;});
},true);

$("#closeAlbumComplete")?.addEventListener("click",()=>{const overlay=$("#albumCompleteOverlay");if(overlay){overlay.classList.remove("show");overlay.hidden=true;}});
