import './style.css'

function fetchPopData_NotAsync()
{
	// Loading Pop Datas
	let popList =
	[
		{ "Numero":"SE",   "CodeBarre":"60100", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pops!",            "NomComplet":"Yara Flor (Future State)" },
		{ "Numero":"2P",   "CodeBarre":"14355", "Abime":"OUI","Estimation":"089.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman & Steve Trevor" },
		{ "Numero":"2P",   "CodeBarre":"60162", "Abime":"",   "Estimation":"017.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Superman & Lois Flying [Special Edition]" },
		{ "Numero":"0002", "CodeBarre":"26002", "Abime":"OUI","Estimation":"019.64", "Genre":"F", "TypeDePop":"Pop! GPK",         "NomComplet":"Ghastly Ashley" },
		{ "Numero":"0003", "CodeBarre":"03012", "Abime":"",   "Estimation":"039.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Daenerys Targaryen" },
		{ "Numero":"0003", "CodeBarre":"05860", "Abime":"",   "Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Hermione Granger" },
		{ "Numero":"0003", "CodeBarre":"55010", "Abime":"",   "Estimation":"014.90", "Genre":"F", "TypeDePop":"Pop! Comic Cover", "NomComplet":"Wonder Woman" },
		{ "Numero":"0003", "CodeBarre":"60661", "Abime":"",   "Estimation":"040.99", "Genre":"F", "TypeDePop":"Pop! Comic Cover", "NomComplet":"Scarlet Witch [Special Edition]" },
		{ "Numero":"0003", "CodeBarre":"60663", "Abime":"",   "Estimation":"012.95", "Genre":"F", "TypeDePop":"Pop! Comic Cover", "NomComplet":"Captain Marvel (Monica Rambeau)" },
		{ "Numero":"0003", "CodeBarre":"65606", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Alicent Hightower" },
		{ "Numero":"0004", "CodeBarre":"57870", "Abime":"",   "Estimation":"074.90", "Genre":"F", "TypeDePop":"Pop! Die-Cast",    "NomComplet":"Wonder Woman [Exclusive]" },
		{ "Numero":"0006", "CodeBarre":"03849", "Abime":"OUI","Estimation":"030.40", "Genre":"F", "TypeDePop":"Pop! Magic",       "NomComplet":"Chandra Nalaar" },
		{ "Numero":"0006", "CodeBarre":"65604", "Abime":"",   "Estimation":"012.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rhaenyra Targaryen" },
		{ "Numero":"0008", "CodeBarre":"04570", "Abime":"OUI","Estimation":"100.33", "Genre":"F", "TypeDePop":"Pop! Magic",       "NomComplet":"Elspeth Tirel" },
		{ "Numero":"0008", "CodeBarre":"27412", "Abime":"",   "Estimation":"006.00", "Genre":"F", "TypeDePop":"Pop! Comics",      "NomComplet":"Alana" },
		{ "Numero":"0008", "CodeBarre":"33412", "Abime":"",   "Estimation":"010.39", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Shank" },
		{ "Numero":"0009", "CodeBarre":"03089", "Abime":"OUI","Estimation":"017.89", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Arya Stark" },
		{ "Numero":"0010", "CodeBarre":"02351", "Abime":"",   "Estimation":"015.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Tinker Bell" },
		{ "Numero":"0010", "CodeBarre":"04572", "Abime":"OUI","Estimation":"018.99", "Genre":"F", "TypeDePop":"Pop! Magic",       "NomComplet":"Kiora Atua" },
		{ "Numero":"0011", "CodeBarre":"63305", "Abime":"",   "Estimation":"043.49", "Genre":"F", "TypeDePop":"Pop! Comic Cover", "NomComplet":"Shuri" },
		{ "Numero":"0014", "CodeBarre":"65742", "Abime":"",   "Estimation":"014.80", "Genre":"F", "TypeDePop":"Pop! Comic Cover", "NomComplet":"Elektra" },
		{ "Numero":"0015", "CodeBarre":"57768", "Abime":"",   "Estimation":"012.79", "Genre":"F", "TypeDePop":"Pop! Albums",      "NomComplet":"Mariah Carey" },
		{ "Numero":"0016", "CodeBarre":"63963", "Abime":"",   "Estimation":"007.96", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Sally" },
		{ "Numero":"0025", "CodeBarre":"61427", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop! Icons",       "NomComplet":"Whitney Houston" },
		{ "Numero":"0025", "CodeBarre":"04048", "Abime":"OUI","Estimation":"029.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Daenerys Targaryen" },
		{ "Numero":"0027", "CodeBarre":"02553", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ariel" },
		{ "Numero":"0028", "CodeBarre":"04075", "Abime":"",   "Estimation":"076.96", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Sansa Stark" },
		{ "Numero":"0038", "CodeBarre":"57486", "Abime":"",   "Estimation":"014.44", "Genre":"F", "TypeDePop":"Pop! Art Series",  "NomComplet":"Sally [Special Edition]" },
		{ "Numero":"0043", "CodeBarre":"05763", "Abime":"",   "Estimation":"056.68", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Mad Moxxi" },
		{ "Numero":"0045", "CodeBarre":"29955", "Abime":"",   "Estimation":"017.00", "Genre":"F", "TypeDePop":"Pop! Rides",       "NomComplet":"Elasticgirl on Elasticycle" },
		{ "Numero":"0050", "CodeBarre":"70588", "Abime":"",   "Estimation":"024.99", "Genre":"F", "TypeDePop":"Pop! Albums",      "NomComplet":"Go-Go's" },
		{ "Numero":"0051", "CodeBarre":"12219", "Abime":"",   "Estimation":"038.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Cersei Lannister" },
		{ "Numero":"0059", "CodeBarre":"28888", "Abime":"OUI","Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Daenerys Targaryen" },
		{ "Numero":"0063", "CodeBarre":"29165", "Abime":"",   "Estimation":"027.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Daenerys Targaryen (on Dragonstone Throne)" },
		{ "Numero":"0066", "CodeBarre":"34617", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Yara Greyjoy" },
		{ "Numero":"0073", "CodeBarre":"60932", "Abime":"",   "Estimation":"007.00", "Genre":"F", "TypeDePop":"Pop! Icons",       "NomComplet":"Whitney Houston" },
		{ "Numero":"0073", "CodeBarre":"37796", "Abime":"OUI","Estimation":"030.04", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Cersei Lannister (on Iron Throne)" },
		{ "Numero":"0074", "CodeBarre":"55783", "Abime":"OUI","Estimation":"011.19", "Genre":"F", "TypeDePop":"Pop! Retro Toys",  "NomComplet":"Scarlett" },
		{ "Numero":"0075", "CodeBarre":"55784", "Abime":"OUI","Estimation":"011.11", "Genre":"F", "TypeDePop":"Pop! Retro Toys",  "NomComplet":"The Baroness" },
		{ "Numero":"0077", "CodeBarre":"40353", "Abime":"",   "Estimation":"018.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Missandei" },
		{ "Numero":"0079", "CodeBarre":"44819", "Abime":"",   "Estimation":"013.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Arya Stark" },
		{ "Numero":"0086", "CodeBarre":"06027", "Abime":"",   "Estimation":"022.46", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0089", "CodeBarre":"56793", "Abime":"OUI","Estimation":"013.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Arya Stark" },
		{ "Numero":"0093", "CodeBarre":"55752", "Abime":"CMD","Estimation":"015.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Donutella" },
		{ "Numero":"0097", "CodeBarre":"08401", "Abime":"",   "Estimation":"014.36", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn" },
		{ "Numero":"0108", "CodeBarre":"09508", "Abime":"",   "Estimation":"015.95", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Raven (Orange)" },
		{ "Numero":"0108", "CodeBarre":"08658", "Abime":"",   "Estimation":"057.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn (gown)" },
		{ "Numero":"0115", "CodeBarre":"09769", "Abime":"OUI","Estimation":"008.89", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Carrie Kelley Robin" },
		{ "Numero":"0115", "CodeBarre":"10635", "Abime":"",   "Estimation":"025.13", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Kait Diaz" },
		{ "Numero":"0123", "CodeBarre":"67454", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Retro Toys",  "NomComplet":"Totally Hair Barbie" },
		{ "Numero":"0128", "CodeBarre":"10782", "Abime":"",   "Estimation":"039.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Poison Ivy Impopster" },
		{ "Numero":"0131", "CodeBarre":"07232", "Abime":"",   "Estimation":"008.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Agent 13" },
		{ "Numero":"0133", "CodeBarre":"07231", "Abime":"OUI","Estimation":"115.38", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Scarlet Witch" },
		{ "Numero":"0150", "CodeBarre":"65653", "Abime":"",   "Estimation":"009.89", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Hermione Granger" },
		{ "Numero":"0152", "CodeBarre":"12132", "Abime":"",   "Estimation":"149.99", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Yennefer" },
		{ "Numero":"0161", "CodeBarre":"68381", "Abime":"",   "Estimation":"015.89", "Genre":"F", "TypeDePop":"Pop! Asia",        "NomComplet":"Lumine" },
		{ "Numero":"0162", "CodeBarre":"68382", "Abime":"",   "Estimation":"015.92", "Genre":"F", "TypeDePop":"Pop! Asia",        "NomComplet":"Paimon" },
		{ "Numero":"0166", "CodeBarre":"58500", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pops!",            "NomComplet":"Harley Quinn" },
		{ "Numero":"0167", "CodeBarre":"58503", "Abime":"",   "Estimation":"012.89", "Genre":"F", "TypeDePop":"Pops!",            "NomComplet":"Wonder Woman" },
		{ "Numero":"0167", "CodeBarre":"12853", "Abime":"",   "Estimation":"046.01", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman [Chase]" },
		{ "Numero":"0167", "CodeBarre":"12853", "Abime":"",   "Estimation":"065.30", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0172", "CodeBarre":"12545", "Abime":"",   "Estimation":"042.46", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0174", "CodeBarre":"12541", "Abime":"",   "Estimation":"042.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Hippolyta" },
		{ "Numero":"0180", "CodeBarre":"13085", "Abime":"OUI","Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Mei" },
		{ "Numero":"0190", "CodeBarre":"14743", "Abime":"OUI","Estimation":"019.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rey" },
		{ "Numero":"0199", "CodeBarre":"12789", "Abime":"",   "Estimation":"069.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Gamora" },
		{ "Numero":"0203", "CodeBarre":"06141", "Abime":"CMD","Estimation":"014.49", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Regan" },
		{ "Numero":"0211", "CodeBarre":"14869", "Abime":"",   "Estimation":"038.71", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (and Motherbox) [Exclusive]" },
		{ "Numero":"0220", "CodeBarre":"11219", "Abime":"",   "Estimation":"020.59", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ariel" },
		{ "Numero":"0221", "CodeBarre":"11220", "Abime":"",   "Estimation":"016.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Belle" },
		{ "Numero":"0221", "CodeBarre":"58498", "Abime":"",   "Estimation":"014.99", "Genre":"F", "TypeDePop":"Pops!",            "NomComplet":"Batwoman [Exclusive]" },
		{ "Numero":"0222", "CodeBarre":"11221", "Abime":"OUI","Estimation":"015.64", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Cinderella" },
		{ "Numero":"0222", "CodeBarre":"22894", "Abime":"OUI","Estimation":"019.99", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Supergirl" },
		{ "Numero":"0223", "CodeBarre":"22892", "Abime":"",   "Estimation":"006.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Hawkgirl" },
		{ "Numero":"0225", "CodeBarre":"22893", "Abime":"",   "Estimation":"029.99", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Catwoman [Chase]" },
		{ "Numero":"0225", "CodeBarre":"58499", "Abime":"OUI","Estimation":"009.99", "Genre":"F", "TypeDePop":"Pops!",            "NomComplet":"Catwoman" },
		{ "Numero":"0228", "CodeBarre":"24972", "Abime":"",   "Estimation":"014.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Etta Candy" },
		{ "Numero":"0229", "CodeBarre":"24971", "Abime":"",   "Estimation":"039.99", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0238", "CodeBarre":"12256", "Abime":"",   "Estimation":"039.60", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Belle" },
		{ "Numero":"0238", "CodeBarre":"31664", "Abime":"",   "Estimation":"040.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (from Flashpoint)" },
		{ "Numero":"0241", "CodeBarre":"21843", "Abime":"",   "Estimation":"042.96", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Belle [Special Edition]" },
		{ "Numero":"0243", "CodeBarre":"13768", "Abime":"",   "Estimation":"033.84", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Hela" },
		{ "Numero":"0244", "CodeBarre":"13770", "Abime":"",   "Estimation":"019.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Valkyrie" },
		{ "Numero":"0246", "CodeBarre":"31178", "Abime":"OUI","Estimation":"025.19", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Mera" },
		{ "Numero":"0247", "CodeBarre":"12473", "Abime":"",   "Estimation":"070.66", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Belle (Celebration)" },
		{ "Numero":"0252", "CodeBarre":"34522", "Abime":"",   "Estimation":"049.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Dr. Harleen Quinzel" },
		{ "Numero":"0262", "CodeBarre":"61435", "Abime":"",   "Estimation":"012.26", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"Britney Spears" },
		{ "Numero":"0268", "CodeBarre":"14790", "Abime":"",   "Estimation":"032.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Valkyrie [Exclusive]" },
		{ "Numero":"0276", "CodeBarre":"64057", "Abime":"",   "Estimation":"009.89", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"Mariah Carey" },
		{ "Numero":"0276", "CodeBarre":"66332", "Abime":"",   "Estimation":"008.04", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Shuri [Special Edition]" },
		{ "Numero":"0280", "CodeBarre":"54989", "Abime":"",   "Estimation":"023.99", "Genre":"F", "TypeDePop":"Pop! Rides",       "NomComplet":"Wonder Woman (on Pegasus)" },
		{ "Numero":"0282", "CodeBarre":"36311", "Abime":"",   "Estimation":"XXXXXX", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman [Special Edition]" },
		{ "Numero":"0282", "CodeBarre":"39775", "Abime":"",   "Estimation":"091.95", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman [Special Edition]" },
		{ "Numero":"0285", "CodeBarre":"43377", "Abime":"",   "Estimation":"108.25", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Huntress" },
		{ "Numero":"0289", "CodeBarre":"66454", "Abime":"",   "Estimation":"007.00", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"Bella Poarch" },
		{ "Numero":"0291", "CodeBarre":"67839", "Abime":"",   "Estimation":"011.53", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"Bella Poarch" },
		{ "Numero":"0295", "CodeBarre":"65699", "Abime":"",   "Estimation":"009.55", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"H.E.R" },
		{ "Numero":"0297", "CodeBarre":"43009", "Abime":"",   "Estimation":"016.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Batwoman [Special Edition]" },
		{ "Numero":"0301", "CodeBarre":"44802", "Abime":"",   "Estimation":"013.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn [Special Edition]" },
		{ "Numero":"0302", "CodeBarre":"44367", "Abime":"",   "Estimation":"068.81", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn (Caution Tape)" },
		{ "Numero":"0304", "CodeBarre":"29182", "Abime":"",   "Estimation":"139.90", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Mercy" },
		{ "Numero":"0304", "CodeBarre":"44372", "Abime":"",   "Estimation":"009.40", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Black Canary (Boobytrap Battle)" },
		{ "Numero":"0305", "CodeBarre":"44373", "Abime":"",   "Estimation":"006.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Huntress" },
		{ "Numero":"0305", "CodeBarre":"76490", "Abime":"",   "Estimation":"029.66", "Genre":"F", "TypeDePop":"Pop! Rides",       "NomComplet":"Queen Rhaenyra (with Syrax) " },
		{ "Numero":"0306", "CodeBarre":"29048", "Abime":"",   "Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Zarya" },
		{ "Numero":"0307", "CodeBarre":"39882", "Abime":"",   "Estimation":"013.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rey" },
		{ "Numero":"0308", "CodeBarre":"44378", "Abime":"OUI","Estimation":"029.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn (and Beaver)" },
		{ "Numero":"0311", "CodeBarre":"39890", "Abime":"",   "Estimation":"011.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Zorii Bliss" },
		{ "Numero":"0315", "CodeBarre":"30861", "Abime":"",   "Estimation":"008.80", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Domino" },
		{ "Numero":"0315", "CodeBarre":"39884", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Jannah" },
		{ "Numero":"0316", "CodeBarre":"39888", "Abime":"",   "Estimation":"012.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rose" },
		{ "Numero":"0317", "CodeBarre":"30857", "Abime":"",   "Estimation":"012.39", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Negasonic Teenage Warhead" },
		{ "Numero":"0319", "CodeBarre":"39906", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Lieutenant Connix" },
		{ "Numero":"0321", "CodeBarre":"46663", "Abime":"",   "Estimation":"015.99", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0322", "CodeBarre":"47373", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman Flying" },
		{ "Numero":"0323", "CodeBarre":"46658", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (Golden Armor)" },
		{ "Numero":"0323", "CodeBarre":"21194", "Abime":"",   "Estimation":"034.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mulan" },
		{ "Numero":"0324", "CodeBarre":"46660", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (Golden Armor Flying)" },
		{ "Numero":"0327", "CodeBarre":"46666", "Abime":"",   "Estimation":"008.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Barbara Minerva" },
		{ "Numero":"0328", "CodeBarre":"46667", "Abime":"",   "Estimation":"009.69", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"The Cheetah" },
		{ "Numero":"0332", "CodeBarre":"48220", "Abime":"",   "Estimation":"014.99", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (Golden Armor)" },
		{ "Numero":"0333", "CodeBarre":"29007", "Abime":"",   "Estimation":"XXXXXX", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Lara Croft" },
		{ "Numero":"0337", "CodeBarre":"30106", "Abime":"",   "Estimation":"012.90", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Hawthorne (with Louis)" },
		{ "Numero":"0338", "CodeBarre":"30107", "Abime":"",   "Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Amanda Holliday" },
		{ "Numero":"0339", "CodeBarre":"21716", "Abime":"",   "Estimation":"012.89", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Snow White" },
		{ "Numero":"0344", "CodeBarre":"09516", "Abime":"",   "Estimation":"XXXXXX", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Olivia Moore" },
		{ "Numero":"0345", "CodeBarre":"09517", "Abime":"",   "Estimation":"073.06", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Olivia Moore" },
		{ "Numero":"0346", "CodeBarre":"09518", "Abime":"",   "Estimation":"034.90", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Olivia Moore" },
		{ "Numero":"0347", "CodeBarre":"09519", "Abime":"",   "Estimation":"119.90", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Olivia Moore" },
		{ "Numero":"0350", "CodeBarre":"49989", "Abime":"",   "Estimation":"012.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0354", "CodeBarre":"50652", "Abime":"",   "Estimation":"042.40", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (with String Light Lasso)" },
		{ "Numero":"0355", "CodeBarre":"71066", "Abime":"",   "Estimation":"034.99", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"Amy Winehouse [Exclusive]" },
		{ "Numero":"0357", "CodeBarre":"32666", "Abime":"",   "Estimation":"016.63", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Karolina Dean" },
		{ "Numero":"0357", "CodeBarre":"50656", "Abime":"",   "Estimation":"039.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn (with Helper)" },
		{ "Numero":"0357", "CodeBarre":"72583", "Abime":"",   "Estimation":"012.39", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"Shakira" },
		{ "Numero":"0359", "CodeBarre":"32669", "Abime":"",   "Estimation":"024.58", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Molly Hernandez" },
		{ "Numero":"0366", "CodeBarre":"70596", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Rocks",       "NomComplet":"Amy Winehouse" },
		{ "Numero":"0371", "CodeBarre":"51726", "Abime":"",   "Estimation":"011.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn [Special Edition]" },
		{ "Numero":"0372", "CodeBarre":"33975", "Abime":"",   "Estimation":"013.99", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Vault Dweller (Female)" },
		{ "Numero":"0376", "CodeBarre":"52429", "Abime":"",   "Estimation":"011.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Harley Quinn" },
		{ "Numero":"0378", "CodeBarre":"52434", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0380", "CodeBarre":"33516", "Abime":"",   "Estimation":"021.24", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Black Widow" },
		{ "Numero":"0382", "CodeBarre":"54970", "Abime":"",   "Estimation":"005.25", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (Ultra Mod Secret Agent)" },
		{ "Numero":"0383", "CodeBarre":"54973", "Abime":"",   "Estimation":"034.00", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (Golden Age)" },
		{ "Numero":"0390", "CodeBarre":"54971", "Abime":"",   "Estimation":"014.99", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (Challenge of The Gods)" },
		{ "Numero":"0393", "CodeBarre":"33522", "Abime":"",   "Estimation":"014.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Shuri [Exclusive]" },
		{ "Numero":"0398", "CodeBarre":"31638", "Abime":"",   "Estimation":"016.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mrs. Whatsit" },
		{ "Numero":"0403", "CodeBarre":"50961", "Abime":"",   "Estimation":"039.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Cara Dune" },
		{ "Numero":"0412", "CodeBarre":"34471", "Abime":"",   "Estimation":"029.99", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Cala Maria" },
		{ "Numero":"0417", "CodeBarre":"35774", "Abime":"",   "Estimation":"039.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Young Gamora" },
		{ "Numero":"0421", "CodeBarre":"13318", "Abime":"",   "Estimation":"013.49", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Eleven (with Eggos)" },
		{ "Numero":"0422", "CodeBarre":"13320", "Abime":"",   "Estimation":"080.79", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Eleven Underwater" },
		{ "Numero":"0423", "CodeBarre":"54988", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (White lantern)" },
		{ "Numero":"0425", "CodeBarre":"36341", "Abime":"",   "Estimation":"013.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel" },
		{ "Numero":"0427", "CodeBarre":"36342", "Abime":"",   "Estimation":"012.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Vers" },
		{ "Numero":"0427", "CodeBarre":"36721", "Abime":"",   "Estimation":"035.30", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Brite Bomber" },
		{ "Numero":"0430", "CodeBarre":"54993", "Abime":"",   "Estimation":"008.89", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (The Fall of Sinestro)" },
		{ "Numero":"0430", "CodeBarre":"37585", "Abime":"",   "Estimation":"011.09", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Maria Rambeau" },
		{ "Numero":"0431", "CodeBarre":"54994", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman (Flashpoint)" },
		{ "Numero":"0432", "CodeBarre":"36358", "Abime":"",   "Estimation":"036.91", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel [Glows in the Dark] [Special Edition]" },
		{ "Numero":"0433", "CodeBarre":"36357", "Abime":"",   "Estimation":"XXXXXX", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel [Glows in the Dark] [Special Edition]" },
		{ "Numero":"0434", "CodeBarre":"34469", "Abime":"",   "Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Moonwalker" },
		{ "Numero":"0434", "CodeBarre":"36360", "Abime":"",   "Estimation":"012.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Vers [Special Edition]" },
		{ "Numero":"0435", "CodeBarre":"36359", "Abime":"",   "Estimation":"019.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel [Special Edition]" },
		{ "Numero":"0436", "CodeBarre":"36361", "Abime":"OUI","Estimation":"044.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Carol Danvers" },
		{ "Numero":"0437", "CodeBarre":"35149", "Abime":"",   "Estimation":"059.90", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Red-Nosed Raider" },
		{ "Numero":"0444", "CodeBarre":"37685", "Abime":"",   "Estimation":"014.97", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel [Glows in the Dark]" },
		{ "Numero":"0446", "CodeBarre":"64324", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Gingerbread Wonder Woman" },
		{ "Numero":"0451", "CodeBarre":"55498", "Abime":"",   "Estimation":"015.29", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rey (Jakku) [Limited Edition]" },
		{ "Numero":"0458", "CodeBarre":"36019", "Abime":"",   "Estimation":"011.90", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Zoey" },
		{ "Numero":"0459", "CodeBarre":"36675", "Abime":"",   "Estimation":"013.80", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel" },
		{ "Numero":"0460", "CodeBarre":"33586", "Abime":"",   "Estimation":"025.39", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Clara" },
		{ "Numero":"0463", "CodeBarre":"36025", "Abime":"",   "Estimation":"011.99", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Valor" },
		{ "Numero":"0464", "CodeBarre":"54527", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ahsoka" },
		{ "Numero":"0465", "CodeBarre":"14375", "Abime":"OUI","Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Gazelle" },
		{ "Numero":"0466", "CodeBarre":"26031", "Abime":"",   "Estimation":"024.90", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Rize" },
		{ "Numero":"0467", "CodeBarre":"20115", "Abime":"",   "Estimation":"064.75", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Carrie" },
		{ "Numero":"0467", "CodeBarre":"58285", "Abime":"",   "Estimation":"017.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ahsoka [Special Edition]" },
		{ "Numero":"0471", "CodeBarre":"39814", "Abime":"",   "Estimation":"024.04", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"MJ" },
		{ "Numero":"0476", "CodeBarre":"39055", "Abime":"OUI","Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Queen Myrrah" },
		{ "Numero":"0477", "CodeBarre":"35754", "Abime":"",   "Estimation":"015.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Jasmine" },
		{ "Numero":"0477", "CodeBarre":"35754", "Abime":"",   "Estimation":"034.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Jasmine [Chase]" },
		{ "Numero":"0480", "CodeBarre":"39741", "Abime":"",   "Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rescue" },
		{ "Numero":"0481", "CodeBarre":"60237", "Abime":"",   "Estimation":"007.84", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Fennec Shand" },
		{ "Numero":"0483", "CodeBarre":"54526", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Fennec Shand" },
		{ "Numero":"0486", "CodeBarre":"58391", "Abime":"",   "Estimation":"016.07", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Boba Fett and Fennec on Throne" },
		{ "Numero":"0490", "CodeBarre":"76221", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Heroes",      "NomComplet":"Wonder Woman" },
		{ "Numero":"0494", "CodeBarre":"75848", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Harlet Quinn" },
		{ "Numero":"0497", "CodeBarre":"30457", "Abime":"OUI","Estimation":"024.90", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Art3mis" },
		{ "Numero":"0499", "CodeBarre":"60123", "Abime":"",   "Estimation":"016.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Fennec Shand [Special Edition]" },
		{ "Numero":"0503", "CodeBarre":"40718", "Abime":"",   "Estimation":"006.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Marvel Girl" },
		{ "Numero":"0505", "CodeBarre":"14725", "Abime":"",   "Estimation":"049.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Dolores" },
		{ "Numero":"0507", "CodeBarre":"28034", "Abime":"",   "Estimation":"015.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Imperator Furiosa" },
		{ "Numero":"0507", "CodeBarre":"28034", "Abime":"",   "Estimation":"XXXXXX", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Imperator Furiosa [Chase]" },
		{ "Numero":"0510", "CodeBarre":"36798", "Abime":"",   "Estimation":"020.21", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Louise Jefferson" },
		{ "Numero":"0511", "CodeBarre":"14424", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Eleven (Hospital Gown)" },
		{ "Numero":"0511", "CodeBarre":"35526", "Abime":"",   "Estimation":"025.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Judy Jetson" },
		{ "Numero":"0513", "CodeBarre":"28026", "Abime":"",   "Estimation":"015.90", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Capable" },
		{ "Numero":"0514", "CodeBarre":"14427", "Abime":"",   "Estimation":"049.90", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Nancy" },
		{ "Numero":"0515", "CodeBarre":"41020", "Abime":"CMD","Estimation":"032.66", "Genre":"H", "TypeDePop":"Pop! Games",       "NomComplet":"P.A.N.D.A. Team Leader" },
		{ "Numero":"0516", "CodeBarre":"43964", "Abime":"",   "Estimation":"014.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel" },
		{ "Numero":"0524", "CodeBarre":"44208", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Lilith" },
		{ "Numero":"0524", "CodeBarre":"37391", "Abime":"",   "Estimation":"012.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Bo Peep (with Officer Giggle Mc Dimples)" },
		{ "Numero":"0527", "CodeBarre":"37395", "Abime":"",   "Estimation":"008.27", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Gabby Gabby" },
		{ "Numero":"0536", "CodeBarre":"45109", "Abime":"OUI","Estimation":"033.94", "Genre":"H", "TypeDePop":"Pop! Games",       "NomComplet":"Sub-Zero" },
		{ "Numero":"0537", "CodeBarre":"45110", "Abime":"OUI","Estimation":"021.90", "Genre":"H", "TypeDePop":"Pop! Games",       "NomComplet":"Scorpion" },
		{ "Numero":"0539", "CodeBarre":"29523", "Abime":"",   "Estimation":"059.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Berverly Marsh " },
		{ "Numero":"0541", "CodeBarre":"64560", "Abime":"",   "Estimation":"005.75", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Tala Durith" },
		{ "Numero":"0541", "CodeBarre":"37024", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Princess Jasmine" },
		{ "Numero":"0541", "CodeBarre":"43285", "Abime":"",   "Estimation":"011.68", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Lifeline" },
		{ "Numero":"0542", "CodeBarre":"64561", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Reva (Third Sister)" },
		{ "Numero":"0545", "CodeBarre":"43283", "Abime":"",   "Estimation":"015.91", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Wraith" },
		{ "Numero":"0546", "CodeBarre":"43290", "Abime":"",   "Estimation":"008.50", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Bangalore" },
		{ "Numero":"0553", "CodeBarre":"65048", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Merrin (NightSister) [Special Edition]" },
		{ "Numero":"0565", "CodeBarre":"29912", "Abime":"",   "Estimation":"029.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Lorraine" },
		{ "Numero":"0567", "CodeBarre":"45005", "Abime":"",   "Estimation":"015.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Invisible Girl" },
		{ "Numero":"0568", "CodeBarre":"40103", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ursula" },
		{ "Numero":"0569", "CodeBarre":"40107", "Abime":"",   "Estimation":"054.29", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ursula (25cm) [Glows in the Dark]" },
		{ "Numero":"0576", "CodeBarre":"45143", "Abime":"",   "Estimation":"014.80", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel" },
		{ "Numero":"0581", "CodeBarre":"40884", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Elsa" },
		{ "Numero":"0582", "CodeBarre":"40886", "Abime":"",   "Estimation":"015.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Anna" },
		{ "Numero":"0584", "CodeBarre":"42701", "Abime":"OUI","Estimation":"014.90", "Genre":"H", "TypeDePop":"Pop!",             "NomComplet":"Kristoff" },
		{ "Numero":"0587", "CodeBarre":"42133", "Abime":"",   "Estimation":"006.00", "Genre":"H", "TypeDePop":"Pop!",             "NomComplet":"Earth Giant" },
		{ "Numero":"0588", "CodeBarre":"40888", "Abime":"",   "Estimation":"006.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Young Elsa" },
		{ "Numero":"0588", "CodeBarre":"67614", "Abime":"",   "Estimation":"005.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rey" },
		{ "Numero":"0589", "CodeBarre":"40889", "Abime":"",   "Estimation":"006.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Young Anna" },
		{ "Numero":"0589", "CodeBarre":"67613", "Abime":"",   "Estimation":"005.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Princess Leia" },
		{ "Numero":"0591", "CodeBarre":"47510", "Abime":"",   "Estimation":"011.99", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"V-Female" },
		{ "Numero":"0595", "CodeBarre":"67535", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Princess Leia" },
		{ "Numero":"0599", "CodeBarre":"46456", "Abime":"",   "Estimation":"019.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Venomized Captain Marvel" },
		{ "Numero":"0605", "CodeBarre":"42935", "Abime":"OUI","Estimation":"006.00", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Momo Yaoyorozu" },
		{ "Numero":"0606", "CodeBarre":"70748", "Abime":"",   "Estimation":"010.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Princess Leia" },
		{ "Numero":"0607", "CodeBarre":"70747", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Princess Leia" },
		{ "Numero":"0626", "CodeBarre":"32483", "Abime":"",   "Estimation":"010.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Elisa (with Broom)" },
		{ "Numero":"0627", "CodeBarre":"44310", "Abime":"",   "Estimation":"013.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Maleficent" },
		{ "Numero":"0631", "CodeBarre":"47760", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Kamala Khan" },
		{ "Numero":"0645", "CodeBarre":"30775", "Abime":"",   "Estimation":"007.00", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Vanessa Kensington" },
		{ "Numero":"0676", "CodeBarre":"58397", "Abime":"",   "Estimation":"015.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mayhem (April Parker) [Glows in the Dark] [Exclusive]" },
		{ "Numero":"0676", "CodeBarre":"76214", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Princess Leia (Valentine)" },
		{ "Numero":"0684", "CodeBarre":"76540", "Abime":"",   "Estimation":"006.05", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Morgan Elsbeth" },
		{ "Numero":"0700", "CodeBarre":"36420", "Abime":"",   "Estimation":"013.52", "Genre":"H", "TypeDePop":"Pop! Movies",      "NomComplet":"Derek Zoolander" },
		{ "Numero":"0707", "CodeBarre":"44264", "Abime":"",   "Estimation":"010.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Bulma" },
		{ "Numero":"0710", "CodeBarre":"53872", "Abime":"",   "Estimation":"012.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"La Estrella Cosmica" },
		{ "Numero":"0713", "CodeBarre":"52042", "Abime":"",   "Estimation":"015.97", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Wanda 50s" },
		{ "Numero":"0715", "CodeBarre":"52044", "Abime":"",   "Estimation":"012.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Wanda (Halloween)" },
		{ "Numero":"0723", "CodeBarre":"32707", "Abime":"",   "Estimation":"019.91", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Selina Meyer" },
		{ "Numero":"0727", "CodeBarre":"43684", "Abime":"",   "Estimation":"012.81", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Bo Peep (D.I.Y.)" },
		{ "Numero":"0728", "CodeBarre":"49705", "Abime":"",   "Estimation":"007.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Sersi" },
		{ "Numero":"0729", "CodeBarre":"49706", "Abime":"",   "Estimation":"009.82", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Thena" },
		{ "Numero":"0730", "CodeBarre":"46629", "Abime":"",   "Estimation":"011.89", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Tsunade" },
		{ "Numero":"0732", "CodeBarre":"37748", "Abime":"",   "Estimation":"059.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Ripley in Spacesuit" },
		{ "Numero":"0738", "CodeBarre":"45649", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Cinderella" },
		{ "Numero":"0740", "CodeBarre":"46088", "Abime":"",   "Estimation":"XXXXXX", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ursula (as Vanessa)" },
		{ "Numero":"0743", "CodeBarre":"50567", "Abime":"",   "Estimation":"013.35", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Thena" },
		{ "Numero":"0790", "CodeBarre":"41967", "Abime":"CMD","Estimation":"013.95", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Annabelle" },
		{ "Numero":"0800", "CodeBarre":"35682", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"M (from Goldeneye)" },
		{ "Numero":"0800", "CodeBarre":"55164", "Abime":"",   "Estimation":"012.23", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Rogue [Special Edition]" },
		{ "Numero":"0818", "CodeBarre":"43502", "Abime":"",   "Estimation":"011.50", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Sarah Connor" },
		{ "Numero":"0823", "CodeBarre":"54323", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Scarlet Witch" },
		{ "Numero":"0824", "CodeBarre":"54324", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"The Vision" },
		{ "Numero":"0826", "CodeBarre":"39367", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Battle Eleven" },
		{ "Numero":"0826", "CodeBarre":"52867", "Abime":"",   "Estimation":"009.45", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Agatha Harkness" },
		{ "Numero":"0828", "CodeBarre":"54437", "Abime":"",   "Estimation":"055.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Scarlet Witch [Special Edition]" },
		{ "Numero":"0831", "CodeBarre":"48406", "Abime":"",   "Estimation":"017.32", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Princess Ariel [Limited Edition]" },
		{ "Numero":"0843", "CodeBarre":"40954", "Abime":"CMD","Estimation":"013.95", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Eleven" },
		{ "Numero":"0845", "CodeBarre":"40957", "Abime":"",   "Estimation":"059.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Joyce" },
		{ "Numero":"0845", "CodeBarre":"52878", "Abime":"",   "Estimation":"012.58", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Katy" },
		{ "Numero":"0846", "CodeBarre":"40956", "Abime":"CMD","Estimation":"013.99", "Genre":"H", "TypeDePop":"Pop! Television",  "NomComplet":"Mike" },
		{ "Numero":"0846", "CodeBarre":"52879", "Abime":"",   "Estimation":"012.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Xialing" },
		{ "Numero":"0862", "CodeBarre":"52010", "Abime":"",   "Estimation":"007.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Madame Hel" },
		{ "Numero":"0868", "CodeBarre":"49013", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Nezuko Kamado" },
		{ "Numero":"0873", "CodeBarre":"55814", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Gamora (Daughter of Thanos)" },
		{ "Numero":"0876", "CodeBarre":"64873", "Abime":"",   "Estimation":"XXXXXX", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Shuri [Glows in the Dark]" },
		{ "Numero":"0876", "CodeBarre":"45659", "Abime":"",   "Estimation":"008.00", "Genre":"H", "TypeDePop":"Pop! Movies",      "NomComplet":"Pennywise (without Make-up)" },
		{ "Numero":"0893", "CodeBarre":"57421", "Abime":"",   "Estimation":"013.95", "Genre":"F", "TypeDePop":"Pop! Games",       "NomComplet":"Batgirl" },
		{ "Numero":"0894", "CodeBarre":"52014", "Abime":"",   "Estimation":"012.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Penny" },
		{ "Numero":"0912", "CodeBarre":"43407", "Abime":"",   "Estimation":"014.75", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Joan Holloway" },
		{ "Numero":"0924", "CodeBarre":"57635", "Abime":"",   "Estimation":"012.22", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"MJ" },
		{ "Numero":"0926", "CodeBarre":"48024", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Lucly" },
		{ "Numero":"0940", "CodeBarre":"57129", "Abime":"",   "Estimation":"004.75", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Gingebread Scarlet Witch" },
		{ "Numero":"0941", "CodeBarre":"45175", "Abime":"OUI","Estimation":"011.90", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Kelly S03E04" },
		{ "Numero":"0952", "CodeBarre":"58799", "Abime":"",   "Estimation":"017.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Kate Pryde (with Lockheed)" },
		{ "Numero":"0968", "CodeBarre":"58653", "Abime":"",   "Estimation":"010.31", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Carter (Stealth Suit)" },
		{ "Numero":"0970", "CodeBarre":"58651", "Abime":"",   "Estimation":"012.49", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Gamora (with Blade of Thanos)" },
		{ "Numero":"0971", "CodeBarre":"39710", "Abime":"",   "Estimation":"010.98", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Great Saiyagirl [Exclusive!]" },
		{ "Numero":"0971", "CodeBarre":"58650", "Abime":"",   "Estimation":"011.19", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Queen General Ramonda" },
		{ "Numero":"0986", "CodeBarre":"62746", "Abime":"",   "Estimation":"010.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Scarlet Witch [Special Edition]" },
		{ "Numero":"0988", "CodeBarre":"62758", "Abime":"",   "Estimation":"011.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Sylvie" },
		{ "Numero":"1002", "CodeBarre":"50553", "Abime":"",   "Estimation":"007.44", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Noi" },
		{ "Numero":"1002", "CodeBarre":"60920", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"America Chavez" },
		{ "Numero":"1006", "CodeBarre":"61127", "Abime":"",   "Estimation":"004.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Sara" },
		{ "Numero":"1007", "CodeBarre":"60923", "Abime":"",   "Estimation":"013.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Scarlet Witch" },
		{ "Numero":"1010", "CodeBarre":"54262", "Abime":"",   "Estimation":"014.26", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Belle [Limited Edition]" },
		{ "Numero":"1011", "CodeBarre":"54741", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Aurora" },
		{ "Numero":"1013", "CodeBarre":"54743", "Abime":"",   "Estimation":"034.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Jasmine" },
		{ "Numero":"1014", "CodeBarre":"54744", "Abime":"",   "Estimation":"009.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Tiana" },
		{ "Numero":"1017", "CodeBarre":"55971", "Abime":"",   "Estimation":"019.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Pocahontas" },
		{ "Numero":"1027", "CodeBarre":"60915", "Abime":"",   "Estimation":"027.99", "Genre":"F", "TypeDePop":"Pop! Moment",      "NomComplet":"Dead Strange & The Scarlet Witch" },
		{ "Numero":"1031", "CodeBarre":"62406", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"America Chavez" },
		{ "Numero":"1033", "CodeBarre":"62408", "Abime":"",   "Estimation":"006.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Carter" },
		{ "Numero":"1033", "CodeBarre":"52038", "Abime":"OUI","Estimation":"012.89", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Rachael" },
		{ "Numero":"1038", "CodeBarre":"54466", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Cruella (Making Art)" },
		{ "Numero":"1041", "CodeBarre":"62422", "Abime":"",   "Estimation":"007.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mighty Thor" },
		{ "Numero":"1042", "CodeBarre":"62423", "Abime":"",   "Estimation":"007.91", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Valkyrie" },
		{ "Numero":"1050", "CodeBarre":"64257", "Abime":"",   "Estimation":"004.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Layla El-Faouly" },
		{ "Numero":"1053", "CodeBarre":"49277", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Ashi" },
		{ "Numero":"1060", "CodeBarre":"57646", "Abime":"",   "Estimation":"007.00", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mai Valentine" },
		{ "Numero":"1070", "CodeBarre":"65247", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"America Chavez [Limited Edition]" },
		{ "Numero":"1076", "CodeBarre":"65012", "Abime":"",   "Estimation":"007.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mighty Thor" },
		{ "Numero":"1077", "CodeBarre":"59495", "Abime":"",   "Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ms. Marvel" },
		{ "Numero":"1078", "CodeBarre":"59496", "Abime":"",   "Estimation":"004.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Kamala Khan" },
		{ "Numero":"1081", "CodeBarre":"59499", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Najma" },
		{ "Numero":"1082", "CodeBarre":"59568", "Abime":"",   "Estimation":"004.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Aisha" },
		{ "Numero":"1082", "CodeBarre":"60396", "Abime":"",   "Estimation":"012.39", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Maleficent [Special Edition]" },
		{ "Numero":"1083", "CodeBarre":"54004", "Abime":"",   "Estimation":"011.19", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Elaine" },
		{ "Numero":"1083", "CodeBarre":"57349", "Abime":"",   "Estimation":"007.96", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Cruella De Vil" },
		{ "Numero":"1093", "CodeBarre":"65332", "Abime":"",   "Estimation":"018.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Scarlet Scarab [Limited Edition]" },
		{ "Numero":"1095", "CodeBarre":"63939", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ironheart MK1" },
		{ "Numero":"1099", "CodeBarre":"63945", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Queen Ramonda" },
		{ "Numero":"1100", "CodeBarre":"59240", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Noelle" },
		{ "Numero":"1101", "CodeBarre":"66716", "Abime":"",   "Estimation":"011.17", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Nakia" },
		{ "Numero":"1107", "CodeBarre":"64331", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mantis" },
		{ "Numero":"1108", "CodeBarre":"56015", "Abime":"",   "Estimation":"014.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Harley Quinn" },
		{ "Numero":"1100", "CodeBarre":"63946", "Abime":"OUI","Estimation":"010.08", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Okoye" },
		{ "Numero":"1110", "CodeBarre":"64870", "Abime":"",   "Estimation":"016.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Nakia [Special Edition]" },
		{ "Numero":"1111", "CodeBarre":"56016", "Abime":"",   "Estimation":"012.39", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Harley Quinn" },
		{ "Numero":"1112", "CodeBarre":"55066", "Abime":"",   "Estimation":"010.90", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Allison" },
		{ "Numero":"1113", "CodeBarre":"61361", "Abime":"",   "Estimation":"009.00", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Nobara Kugisaki" },
		{ "Numero":"1116", "CodeBarre":"56013", "Abime":"",   "Estimation":"021.70", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Harley Quinn [Special Edition]" },
		{ "Numero":"1118", "CodeBarre":"55072", "Abime":"",   "Estimation":"005.25", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Vanya" },
		{ "Numero":"1121", "CodeBarre":"57690", "Abime":"",   "Estimation":"009.57", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Beth Harmon (with Trophies)" },
		{ "Numero":"1122", "CodeBarre":"57689", "Abime":"",   "Estimation":"011.77", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Beth Harmon" },
		{ "Numero":"1123", "CodeBarre":"57688", "Abime":"",   "Estimation":"013.00", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Beth Harmon (Final Game)" },
		{ "Numero":"1125", "CodeBarre":"57642", "Abime":"",   "Estimation":"006.00", "Genre":"H", "TypeDePop":"Pop! Animation",   "NomComplet":"Kuki Urie" },
		{ "Numero":"1126", "CodeBarre":"57643", "Abime":"",   "Estimation":"004.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Saiko Yonebayashi" },
		{ "Numero":"1126", "CodeBarre":"64196", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"She-Hulk" },
		{ "Numero":"1127", "CodeBarre":"57644", "Abime":"",   "Estimation":"006.00", "Genre":"H", "TypeDePop":"Pop! Animation",   "NomComplet":"Toru Mutsuki" },
		{ "Numero":"1127", "CodeBarre":"64197", "Abime":"",   "Estimation":"010.48", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"She-Hulk [Glitter]" },
		{ "Numero":"1128", "CodeBarre":"64198", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Jennifer" },
		{ "Numero":"1132", "CodeBarre":"64202", "Abime":"",   "Estimation":"011.19", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Titania" },
		{ "Numero":"1133", "CodeBarre":"64203", "Abime":"",   "Estimation":"008.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Nikki" },
		{ "Numero":"1145", "CodeBarre":"57599", "Abime":"",   "Estimation":"014.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mirabel Madrigal" },
		{ "Numero":"1158", "CodeBarre":"65239", "Abime":"",   "Estimation":"019.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Enmu [Limited Edition]" },
		{ "Numero":"1161", "CodeBarre":"67609", "Abime":"",   "Estimation":"008.75", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"MJ" },
		{ "Numero":"1164", "CodeBarre":"57126", "Abime":"",   "Estimation":"017.61", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Katy" },
		{ "Numero":"1173", "CodeBarre":"59254", "Abime":"",   "Estimation":"009.32", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Trinity" },
		{ "Numero":"1173", "CodeBarre":"63943", "Abime":"",   "Estimation":"006.37", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Shuri" },
		{ "Numero":"1173", "CodeBarre":"66823", "Abime":"OUI","Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Shuri [Diamond] [Special Edition]" },
		{ "Numero":"1174", "CodeBarre":"63944", "Abime":"",   "Estimation":"006.37", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Shuri" },
		{ "Numero":"1178", "CodeBarre":"57738", "Abime":"",   "Estimation":"006.00", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Olivier Mira Armstrong" },
		{ "Numero":"1184", "CodeBarre":"61531", "Abime":"",   "Estimation":"010.39", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Meilin Lee" },
		{ "Numero":"1197", "CodeBarre":"55802", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Ruth Langmore" },
		{ "Numero":"1198", "CodeBarre":"55803", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Wendy Byrde" },
		{ "Numero":"1202", "CodeBarre":"59298", "Abime":"OUI","Estimation":"010.80", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Marjora" },
		{ "Numero":"1205", "CodeBarre":"67511", "Abime":"",   "Estimation":"010.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Nebula" },
		{ "Numero":"1206", "CodeBarre":"59319", "Abime":"",   "Estimation":"013.90", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Angelica Pickles" },
		{ "Numero":"1208", "CodeBarre":"59321", "Abime":"",   "Estimation":"011.19", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Susie Carmichael" },
		{ "Numero":"1209", "CodeBarre":"55296", "Abime":"OUI","Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Claire Dearing" },
		{ "Numero":"1210", "CodeBarre":"62085", "Abime":"",   "Estimation":"015.98", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Yennefer [Special Edition]" },
		{ "Numero":"1212", "CodeBarre":"63950", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Izzy Hawthorne (Jr. Zap Patrol)" },
		{ "Numero":"1212", "CodeBarre":"59481", "Abime":"",   "Estimation":"013.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Kate Bishop (with Lucky The Pizza Dog)" },
		{ "Numero":"1212", "CodeBarre":"62745", "Abime":"",   "Estimation":"015.33", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Kate Bishop (with Lucky The Pizza Dog) [Special Edition]" },
		{ "Numero":"1214", "CodeBarre":"58021", "Abime":"",   "Estimation":"018.06", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Faye Valentine" },
		{ "Numero":"1214", "CodeBarre":"60087", "Abime":"",   "Estimation":"003.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Maya Lopez" },
		{ "Numero":"1214", "CodeBarre":"62225", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Dr. Ellie Sattler" },
		{ "Numero":"1215", "CodeBarre":"62226", "Abime":"",   "Estimation":"006.21", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Maisie" },
		{ "Numero":"1216", "CodeBarre":"58023", "Abime":"",   "Estimation":"014.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Julia" },
		{ "Numero":"1218", "CodeBarre":"58592", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Batwoman [Exclusive!]" },
		{ "Numero":"1224", "CodeBarre":"64797", "Abime":"",   "Estimation":"005.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Player 067:Kang Sae-byeok" },
		{ "Numero":"1228", "CodeBarre":"65727", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Spider-Woman" },
		{ "Numero":"1229", "CodeBarre":"65728", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Spider-Byte" },
		{ "Numero":"1234", "CodeBarre":"64191", "Abime":"",   "Estimation":"010.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Cyclone" },
		{ "Numero":"1238", "CodeBarre":"62388", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Eleven" },
		{ "Numero":"1244", "CodeBarre":"62397", "Abime":"",   "Estimation":"009.60", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Robin" },
		{ "Numero":"1249", "CodeBarre":"67595", "Abime":"",   "Estimation":"013.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel" },
		{ "Numero":"1250", "CodeBarre":"67596", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Photon" },
		{ "Numero":"1251", "CodeBarre":"67597", "Abime":"OUI","Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ms. Marvel" },
		{ "Numero":"1252", "CodeBarre":"67598", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Dar-Benn" },
		{ "Numero":"1257", "CodeBarre":"63994", "Abime":"",   "Estimation":"011.19", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Gertie" },
		{ "Numero":"1257", "CodeBarre":"68288", "Abime":"",   "Estimation":"018.99", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Captain Marvel [Special Edition]" },
		{ "Numero":"1263", "CodeBarre":"63291", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Setsuna Tokage [Special Edition]" },
		{ "Numero":"1279", "CodeBarre":"69122", "Abime":"",   "Estimation":"004.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Darla" },
		{ "Numero":"1280", "CodeBarre":"69123", "Abime":"",   "Estimation":"006.37", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Mary" },
		{ "Numero":"1282", "CodeBarre":"58017", "Abime":"",   "Estimation":"011.90", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Kale" },
		{ "Numero":"1283", "CodeBarre":"69125", "Abime":"",   "Estimation":"006.05", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Hespera" },
		{ "Numero":"1284", "CodeBarre":"69126", "Abime":"",   "Estimation":"006.37", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Kalypso" },
		{ "Numero":"1285", "CodeBarre":"69127", "Abime":"",   "Estimation":"006.37", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Anthea" },
		{ "Numero":"1293", "CodeBarre":"59292", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Carmela Soprano" },
		{ "Numero":"1299", "CodeBarre":"65635", "Abime":"",   "Estimation":"011.06", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Robin" },
		{ "Numero":"1306", "CodeBarre":"67570", "Abime":"",   "Estimation":"010.95", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Mera" },
		{ "Numero":"1306", "CodeBarre":"76702", "Abime":"",   "Estimation":"015.22", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mitsuri Kanroji [Glows in the Dark] [Special Edition]" },
		{ "Numero":"1307", "CodeBarre":"67571", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Atlanna" },
		{ "Numero":"1308", "CodeBarre":"67456", "Abime":"",   "Estimation":"049.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Enid Sinclair [Exclusive]" },
		{ "Numero":"1309", "CodeBarre":"67457", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Wednesday Addams" },
		{ "Numero":"1310", "CodeBarre":"68292", "Abime":"",   "Estimation":"039.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Wednesday Addams (with Cello) [Exclusive]" },
		{ "Numero":"1311", "CodeBarre":"68293", "Abime":"",   "Estimation":"018.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Wednesday Addams [Special Edition]" },
		{ "Numero":"1314", "CodeBarre":"65767", "Abime":"",   "Estimation":"007.96", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Sorsha" },
		{ "Numero":"1316", "CodeBarre":"67970", "Abime":"",   "Estimation":"012.90", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Aurora" },
		{ "Numero":"1318", "CodeBarre":"67426", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Yennefer" },
		{ "Numero":"1319", "CodeBarre":"67973", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Elsa" },
		{ "Numero":"1319", "CodeBarre":"67423", "Abime":"",   "Estimation":"004.95", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Ciri" },
		{ "Numero":"1323", "CodeBarre":"65643", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Battle Neytiri" },
		{ "Numero":"1326", "CodeBarre":"68080", "Abime":"OUI","Estimation":"005.37", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Holga" },
		{ "Numero":"1333", "CodeBarre":"70618", "Abime":"",   "Estimation":"015.00", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mt. Lady" },
		{ "Numero":"1334", "CodeBarre":"65593", "Abime":"",   "Estimation":"015.92", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Wonder Woman" },
		{ "Numero":"1339", "CodeBarre":"65599", "Abime":"",   "Estimation":"010.69", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Supergirl" },
		{ "Numero":"1340", "CodeBarre":"65600", "Abime":"",   "Estimation":"009.90", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Iris West" },
		{ "Numero":"1349", "CodeBarre":"71729", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Rita Repulsa" },
		{ "Numero":"1358", "CodeBarre":"72315", "Abime":"",   "Estimation":"013.85", "Genre":"F", "TypeDePop":"Pop! Deluxe",      "NomComplet":"Sally" },
		{ "Numero":"1363", "CodeBarre":"67982", "Abime":"",   "Estimation":"015.04", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Nebula Wade" },
		{ "Numero":"1351", "CodeBarre":"59260", "Abime":"",   "Estimation":"006.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Marion Ravenwood" },
		{ "Numero":"1358", "CodeBarre":"61387", "Abime":"",   "Estimation":"011.12", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Sarada (with Sharingan)" },
		{ "Numero":"1360", "CodeBarre":"61389", "Abime":"",   "Estimation":"010.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Sumire (with Nue)" },
		{ "Numero":"1362", "CodeBarre":"70732", "Abime":"",   "Estimation":"009.39", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ariel" },
		{ "Numero":"1364", "CodeBarre":"70733", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ursula" },
		{ "Numero":"1368", "CodeBarre":"72299", "Abime":"",   "Estimation":"003.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Becca" },
		{ "Numero":"1372", "CodeBarre":"72044", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mai Zen'in" },
		{ "Numero":"1372", "CodeBarre":"72303", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Mary" },
		{ "Numero":"1373", "CodeBarre":"72304", "Abime":"",   "Estimation":"011.14", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Sarah" },
		{ "Numero":"1390", "CodeBarre":"72420", "Abime":"",   "Estimation":"013.53", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Asha with Star" },
		{ "Numero":"1391", "CodeBarre":"72421", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Dahlia" },
		{ "Numero":"1404", "CodeBarre":"85289", "Abime":"",   "Estimation":"018.00", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Ladypool [Diamond] [Exclusive]" },
		{ "Numero":"1405", "CodeBarre":"72132", "Abime":"",   "Estimation":"010.79", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Makomo " },
		{ "Numero":"1408", "CodeBarre":"72612", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Tamayo" },
		{ "Numero":"1417", "CodeBarre":"72325", "Abime":"",   "Estimation":"007.96", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Claudia" },
		{ "Numero":"1421", "CodeBarre":"71632", "Abime":"",   "Estimation":"025.90", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Noelle (Valkyrie Armor) [Diamond] [Special Edition]" },
		{ "Numero":"1446", "CodeBarre":"67929", "Abime":"OUI","Estimation":"011.14", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mikasa Ackermann" },
		{ "Numero":"1448", "CodeBarre":"72638", "Abime":"",   "Estimation":"011.99", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"President Barbie" },
		{ "Numero":"1451", "CodeBarre":"76000", "Abime":"",   "Estimation":"015.40", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Joy" },
		{ "Numero":"1461", "CodeBarre":"72140", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Television",  "NomComplet":"Robin" },
		{ "Numero":"1454", "CodeBarre":"72411", "Abime":"",   "Estimation":"012.32", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Mrs. Cratchit" },
		{ "Numero":"1470", "CodeBarre":"72114", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mei Kamino (with Pelops II)" },
		{ "Numero":"1472", "CodeBarre":"72107", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Onami" },
		{ "Numero":"1475", "CodeBarre":"72110", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Orobi" },
		{ "Numero":"1477", "CodeBarre":"68088", "Abime":"",   "Estimation":"006.05", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Noodle" },
		{ "Numero":"1484", "CodeBarre":"75524", "Abime":"",   "Estimation":"009.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Burnin [Special Edition]" },
		{ "Numero":"1489", "CodeBarre":"71563", "Abime":"",   "Estimation":"021.17", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Kyoshi [Glows in the Dark] [Special Edition]" },
		{ "Numero":"1495", "CodeBarre":"72633", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop!",             "NomComplet":"Chani" },
		{ "Numero":"1506", "CodeBarre":"75528", "Abime":"",   "Estimation":"007.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Ino Yamanaka" },
		{ "Numero":"1525", "CodeBarre":"75560", "Abime":"",   "Estimation":"011.14", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mirko" },
		{ "Numero":"1533", "CodeBarre":"72624", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Kora" },
		{ "Numero":"1534", "CodeBarre":"75571", "Abime":"",   "Estimation":"010.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Daki" },
		{ "Numero":"1550", "CodeBarre":"73088", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Movies",      "NomComplet":"Neytiri" },
		{ "Numero":"1552", "CodeBarre":"72119", "Abime":"",   "Estimation":"005.95", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Mimosa" },
		{ "Numero":"1555", "CodeBarre":"74393", "Abime":"",   "Estimation":"007.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Fuegoleon [Glows in the Dark] [Special Edition]" },
		{ "Numero":"1573", "CodeBarre":"77622", "Abime":"",   "Estimation":"018.00", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Spider Demon Mother [Special Edition]" },
		{ "Numero":"1612", "CodeBarre":"75512", "Abime":"",   "Estimation":"011.99", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Yoruichi Shihoin" },
		{ "Numero":"1654", "CodeBarre":"75601", "Abime":"",   "Estimation":"013.52", "Genre":"F", "TypeDePop":"Pop! Animation",   "NomComplet":"Himawari Uzumaki" }
	]
	return popList;
}

async function fetchPopData_Async()
{
	// Fetch the data file
	let response = await fetch('./ViteProject/datas/datas.json');

	// Get the response data as JSON
	let jsonDatas = await response.json();
	
	// return the datas
	return jsonDatas;
}

// Creating the Results Table
function CreateTableWithValue(divHtmlItem, value)
{
	let popCounter = 0;
	
	// Loading Pop File
	//let popDatas = fetchPopData_NotAsync();
	let popDatas = fetchPopData_Async();

	// Empty starting table
	let str = '<br><table border="1" width="100%"><tbody>';

	// Add it to the list
	str += '<tr style="background-color:skyblue;">';
	str += '<td><b><font color="#000000">Numéro</b></td>';
	str += '<td><b><font color="#000000">Code Barre</b></td>';
	str += '<td><b><font color="#000000">Abime</b></td>';
	str += '<td><b><font color="#000000">Estimation</b></td>';
	str += '<td><b><font color="#000000">Genre</b></td>';
	str += '<td><b><font color="#000000">Type de Pop</b></td>';
	str += '<td><b><font color="#000000">Nom complet</b></td>';
	str += '</tr>';

	// loop on all the item of the Pop List
	for (let i = 0; i < popDatas.length; i++)
	{
		// Get a Item
		let item = popDatas[i];

		// If it's the good Number
		if ((item["Numero"].includes(value) == true) ||
			(item["CodeBarre"].includes(value) == true) ||
			(item["Abime"].includes(value) == true) ||
			(item["NomComplet"].includes(value) == true) ||
			(item["NomComplet"].toUpperCase().includes(value.toUpperCase()) == true))
		{
			// Add it to the list
			if (item["Abime"] == 'CMD')
			{
				str += '<tr style="background-color:skyblue;">';
			}
			else
			{
				str += '<tr>';
			}
			str += '<td>' + item["Numero"] + '</td>';
			str += '<td>' + item["CodeBarre"] + '</td>';
			str += '<td>' + item["Abime"] + '</td>';
			str += '<td>' + item["Estimation"] + '</td>';
			str += '<td>' + item["Genre"] + '</td>';
			str += '<td>' + item["TypeDePop"] + '</td>';
			str += '<td>' + item["NomComplet"] + '</td>';
			str += '</tr>';
			str += '</tr>';
			
			// One more Pop
			popCounter++;
		}
	}

	// Add it to the list
	//str += '<tr>';
	//str += '<td><img src="/ViteProject/images/60100.webp" width="32" height="32" /></td>';
	//str += '</tr>';

	// End of the Table
	str += '</tbody></table>';

	// Send it to the HTML of the DIV
	document.getElementById(divHtmlItem).innerHTML = str;

	// Update the number of Pops
	document.getElementById("numberOfPops").innerHTML = 'Liste des Pops (' + popCounter + '/' + popDatas.length + ')';
}

// Keypress event ? 
document.getElementById('inputPopInfo').addEventListener("keyup", function(event)
{
	// Get the value of the Input
	let value = document.getElementById('inputPopInfo').value;

	// Create the table with the infos
	CreateTableWithValue('divall', value);
});

// Focus on the Input
document.getElementById('inputPopInfo').focus();
