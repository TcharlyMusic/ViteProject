import './style.css'

function fetchPopData()
{
	// Loading Pop Datas
	let popList2 = [ 
		['0003','03012',' 039.99','Pop!            ','Daenerys Targaryen'                       ],
		['0003','05860',' 010.00','Pop!            ','Hermione Granger'                         ],
		['0003','55010',' 014.90','Pop! Comic Cover','Wonder Woman'                             ],
		['0003','60661',' 040.99','Pop! Comic Cover','Scarlet Witch [Special Edition]'          ],
		['0003','60663',' 012.95','Pop! Comic Cover','Captain Marvel (Monica Rambeau)'          ],
		['0003','65606',' 009.99','Pop!            ','Alicent Hightower'                        ],
		['0004','57870',' 074.90','Pop! Die-Cast   ','Wonder Woman [Exclusive] '                ],
		['0006','03849','B030.40','Pop! Magic      ','Chandra Nalaar'                           ],
		['0006','65604',' 012.99','Pop!            ','Rhaenyra Targaryen'                       ],
		['0008','04570','B100.33','Pop! Magic      ','Elspeth Tirel'                            ],
		['0008','27412',' 006.00','Pop! Comics     ','Alana'                                    ],
		['0008','33412',' 010.39','Pop!            ','Shank'                                    ],
		['0009','03089','B017.89','Pop!            ','Arya Stark'                               ],
		['0010','02351',' 015.95','Pop!            ','Tinker Bell'                              ],
		['0010','04572','B018.99','Pop! Magic      ','Kiora Atua'                               ],
		['0011','63305',' 043.49','Pop! Comic Cover','Shuri'                                    ],
		['0014','65742',' 014.80','Pop! Comic Cover','Elektra'                                  ],
		['0015','57768',' 012.79','Pop! Albums     ','Mariah Carey'                             ],
		['0016','63963',' 007.96','Pop!            ','Sally'                                    ],
		['0025','61427',' 006.21','Pop! Icons      ','Whitney Houston'                          ],
		['0025','04048','B029.99','Pop!            ','Daenerys Targaryen'                       ],
		['0027','02553',' 013.52','Pop!            ','Ariel'                                    ],
		['0028','04075',' 076.96','Pop!            ','Sansa Stark'                              ],
		['0038','57486',' 014.44','Pop! Art Series ','Sally [Special Edition]'                  ],
		['0043','05763',' 056.68','Pop! Games      ','Mad Moxxi'                                ],
		['0045','29955',' 017.00','Pop! Rides      ','Elasticgirl on Elasticycle'               ],
	]

	let popList = [ 
		{	"Numero":"SE  ",	"CodeBarre":"60100",	"Estimation":" 010.90",	"TypeDePop":"Pops!           ",	"NomComplet":"Yara Flor (Future State)"                 },
		{	"Numero":"2P  ",	"CodeBarre":"14355",	"Estimation":"B089.90",	"TypeDePop":"Pop! Heroes     ",	"NomComplet":"Wonder Woman & Steve Trevor"              },
		{	"Numero":"2P  ",	"CodeBarre":"60162",	"Estimation":" 017.99",	"TypeDePop":"Pop! Movies     ",	"NomComplet":"Superman & Lois Flying [Special Edition]" },
		{	"Numero":"0002",	"CodeBarre":"26002",	"Estimation":"B019.64",	"TypeDePop":"Pop! GPK        ",	"NomComplet":"Ghastly Ashley"                           }
	]

	// Fetch the data file
	//let response = await fetch('./ViteProject/datas/datas.json');

	// Get the response data as JSON
	//let jsonDatas = await response.json();
	
	//return jsonDatas;
	//return response;
	return popList;
}

// Creating the Results Table
function CreateTableWithValue(divHtmlItem, value)
{
	// Loading Pop File
	let popDatas = fetchPopData();

	// Empty starting table
	let str = '<table border="1" width="100%"><tbody>';

	// Add it to the list
	str += '<tr>';
	str += '<td>Numéro</td>';
	str += '<td>Code Barre</td>';
	str += '<td>Sur le marché</td>';
	str += '<td>Type de Pop</td>';
	str += '<td>Nom complet</td>';
	str += '<td>Image</td>';
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
			str += '<td><img src="/ViteProject/images/' + item["CodeBarre"] + '.webp" width="32" height="32" /></td>';
			str += '</tr>';
		}
	}

	// End of the Table
	str += '</tbody></table>';

	// Send it to the HTML of the DIV
	document.getElementById(divHtmlItem).innerHTML = str;
}

// Keypress event ? 
document.getElementById('inputPopInfo').addEventListener("keyup", function(event)
{
	// Get the valueof the Input
	let value = document.getElementById('inputPopInfo').value;

	// Create the table with the infos
	CreateTableWithValue('divall', value);
});
