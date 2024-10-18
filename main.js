import './style.css'

function fetchPopData_NotAsync()
{
	// Loading Pop Datas
	let popList = [ 
		{	"Numero":"SE  ",	"CodeBarre":"60100",	"Estimation":" 010.90",	"TypeDePop":"Pops!           ",	"NomComplet":"Yara Flor (Future State)"                 },
		{	"Numero":"2P  ",	"CodeBarre":"14355",	"Estimation":"B089.90",	"TypeDePop":"Pop! Heroes     ",	"NomComplet":"Wonder Woman & Steve Trevor"              },
		{	"Numero":"2P  ",	"CodeBarre":"60162",	"Estimation":" 017.99",	"TypeDePop":"Pop! Movies     ",	"NomComplet":"Superman & Lois Flying [Special Edition]" },
		{	"Numero":"0002",	"CodeBarre":"26002",	"Estimation":"B019.64",	"TypeDePop":"Pop! GPK        ",	"NomComplet":"Ghastly Ashley"                           },
		{	"Numero":"0003",	"CodeBarre":"03012",	"Estimation":" 039.99",	"TypeDePop":"Pop!            ",	"NomComplet":"Daenerys Targaryen"                       },
		{	"Numero":"0003",	"CodeBarre":"05860",	"Estimation":" 010.00",	"TypeDePop":"Pop!            ",	"NomComplet":"Hermione Granger"                         },
		{	"Numero":"0003",	"CodeBarre":"55010",	"Estimation":" 014.90",	"TypeDePop":"Pop! Comic Cover",	"NomComplet":"Wonder Woman"                             },
		{	"Numero":"0003",	"CodeBarre":"60661",	"Estimation":" 040.99",	"TypeDePop":"Pop! Comic Cover",	"NomComplet":"Scarlet Witch [Special Edition]"          },
		{	"Numero":"0003",	"CodeBarre":"60663",	"Estimation":" 012.95",	"TypeDePop":"Pop! Comic Cover",	"NomComplet":"Captain Marvel (Monica Rambeau)"          },
		{	"Numero":"0003",	"CodeBarre":"65606",	"Estimation":" 009.99",	"TypeDePop":"Pop!            ",	"NomComplet":"Alicent Hightower"                        },
		{	"Numero":"0004",	"CodeBarre":"57870",	"Estimation":" 074.90",	"TypeDePop":"Pop! Die-Cast   ",	"NomComplet":"Wonder Woman [Exclusive] "                },
		{	"Numero":"0006",	"CodeBarre":"03849",	"Estimation":"B030.40",	"TypeDePop":"Pop! Magic      ",	"NomComplet":"Chandra Nalaar"                           },
		{	"Numero":"0006",	"CodeBarre":"65604",	"Estimation":" 012.99",	"TypeDePop":"Pop!            ",	"NomComplet":"Rhaenyra Targaryen"                       },
		{	"Numero":"0008",	"CodeBarre":"04570",	"Estimation":"B100.33",	"TypeDePop":"Pop! Magic      ",	"NomComplet":"Elspeth Tirel"                            },
		{	"Numero":"0008",	"CodeBarre":"27412",	"Estimation":" 006.00",	"TypeDePop":"Pop! Comics     ",	"NomComplet":"Alana"                                    },
		{	"Numero":"0008",	"CodeBarre":"33412",	"Estimation":" 010.39",	"TypeDePop":"Pop!            ",	"NomComplet":"Shank"                                    },
		{	"Numero":"0009",	"CodeBarre":"03089",	"Estimation":"B017.89",	"TypeDePop":"Pop!            ",	"NomComplet":"Arya Stark"                               },
		{	"Numero":"0010",	"CodeBarre":"02351",	"Estimation":" 015.95",	"TypeDePop":"Pop!            ",	"NomComplet":"Tinker Bell"                              },
		{	"Numero":"0010",	"CodeBarre":"04572",	"Estimation":"B018.99",	"TypeDePop":"Pop! Magic      ",	"NomComplet":"Kiora Atua"                               },
		{	"Numero":"0011",	"CodeBarre":"63305",	"Estimation":" 043.49",	"TypeDePop":"Pop! Comic Cover",	"NomComplet":"Shuri"                                    },
		{	"Numero":"0014",	"CodeBarre":"65742",	"Estimation":" 014.80",	"TypeDePop":"Pop! Comic Cover",	"NomComplet":"Elektra"                                  },
		{	"Numero":"0015",	"CodeBarre":"57768",	"Estimation":" 012.79",	"TypeDePop":"Pop! Albums     ",	"NomComplet":"Mariah Carey"                             },
		{	"Numero":"0016",	"CodeBarre":"63963",	"Estimation":" 007.96",	"TypeDePop":"Pop!            ",	"NomComplet":"Sally"                                    },
		{	"Numero":"0025",	"CodeBarre":"61427",	"Estimation":" 006.21",	"TypeDePop":"Pop! Icons      ",	"NomComplet":"Whitney Houston"                          },
		{	"Numero":"0025",	"CodeBarre":"04048",	"Estimation":"B029.99",	"TypeDePop":"Pop!            ",	"NomComplet":"Daenerys Targaryen"                       },
		{	"Numero":"0027",	"CodeBarre":"02553",	"Estimation":" 013.52",	"TypeDePop":"Pop!            ",	"NomComplet":"Ariel"                                    },
		{	"Numero":"0028",	"CodeBarre":"04075",	"Estimation":" 076.96",	"TypeDePop":"Pop!            ",	"NomComplet":"Sansa Stark"                              },
		{	"Numero":"0038",	"CodeBarre":"57486",	"Estimation":" 014.44",	"TypeDePop":"Pop! Art Series ",	"NomComplet":"Sally [Special Edition]"                  },
		{	"Numero":"0043",	"CodeBarre":"05763",	"Estimation":" 056.68",	"TypeDePop":"Pop! Games      ",	"NomComplet":"Mad Moxxi"                                },
		{	"Numero":"0045",	"CodeBarre":"29955",	"Estimation":" 017.00",	"TypeDePop":"Pop! Rides      ",	"NomComplet":"Elasticgirl on Elasticycle"               }
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
	// Loading Pop File
	let popDatas = fetchPopData_NotAsync();
	//let popDatas = fetchPopData_Async();

	// Empty starting table
	let str = '<table border="1" width="100%"><tbody>';

	// Add it to the list
	str += '<tr>';
	str += '<td>Numéro</td>';
	str += '<td>Code Barre</td>';
	str += '<td>Estimation</td>';
	str += '<td>Type de Pop</td>';
	str += '<td>Nom complet</td>';
	str += '</tr>';

	// loop on all the item of the Pop List
	for (let i = 0; i < popDatas.length; i++)
	{
		// Get a Item
		//let item = popList[i];
		let item = popDatas[i];

		// If it's the good Number
		//if ( (item[0].includes(value) == true) || (item[1].includes(value) == true) || (item[4].includes(value) == true) || (item[4].toUpperCase().includes(value.toUpperCase()) == true))
		if ( (item["Numero"].includes(value) == true) || (item["CodeBarre"].includes(value) == true) || (item["NomComplet"].includes(value) == true) || (item["NomComplet"].toUpperCase().includes(value.toUpperCase()) == true))
		{
			// Add it to the list
			str += '<tr>';
			str += '<td>' + item["Numero"] + '</td>';
			str += '<td>' + item["CodeBarre"] + '</td>';
			str += '<td>' + item["Estimation"] + '</td>';
			str += '<td>' + item["TypeDePop"] + '</td>';
			str += '<td>' + item["NomComplet"] + '</td>';
			str += '</tr>';
			str += '</tr>';
		}
	}

	// Add it to the list
	str += '<tr>';
	str += '<td><img src="/ViteProject/images/60100.webp" width="32" height="32" /></td>';
	str += '</tr>';

	// End of the Table
	str += '</tbody></table>';

	// Send it to the HTML of the DIV
	document.getElementById(divHtmlItem).innerHTML = str;
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
