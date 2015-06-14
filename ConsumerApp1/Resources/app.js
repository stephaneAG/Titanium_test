// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// NETWORK CONNECTIVITY TEST ///////////////////////////////////////////////////////////////

if ( Titanium.Network.networkType == Titanium.Network.NETWORK_NONE ){ // check > pas de connectivité ?

	var noConnAlertDial = Titanium.UI.createAlertDialog({ // on crée une alter box et on alerte le user
		title: 'ATTENTION!',
		message: "L'application n'a pû se mettre à jour car aucune connection réseau n'as été détectée.",
		buttonNames: ['et merde!']
	});
	noConnAlertDial.show(); // on display notre alert box
	
} else if ( Titanium.Network.networkType != Titanium.Network.NETWORK_NONE ) { // check > connectivité détectée ?

	var goodConnAlertDial = Titanium.UI.createAlertDialog({ // on crée une alter box et on alerte le user	
		title: 'CONNECT:GOOD',
		message: "L'application a pû se connecter à internet",
		buttonNames: ['sweet!']
	});
	goodConnAlertDial.show(); // on display notre alert box
	
	//ON LANCERA LA FUNCTION D UPDATE DE JSON ICI
	updateLocalJson();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// END NETWORK CONNECTIVITY TEST ///////////////////////////////////////////////////////////







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// UPDATING LOCALJSON ///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// TESTS SUR LES DATAS LOCALES //////////////////////////////////////

// définition du dossier  application data directory
var appDataDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory);
//on print un listing du directory
if ( appDataDir.exists() ) { // alert de la présence du dosier racine
	alert('le dossier racine de l application existe bel et bien');
	Ti.API.log('appDataDir listing = ' + appDataDir.getDirectoryListing());
	//var localJSONData = JSON.parse(localProdJSON.read().text);
	//Ti.API.info(JSON.stringify(localJSONData));
}

var localJsonDirInAppDataDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory +'/localJSON/');
if ( localJsonDirInAppDataDir.exists() ) {
	alert('le dossier localJSON existe bel et bien dans applicationDataDirectory');
}

var localJsonInAppDataDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory +'/localJSON/products.json');
if ( localJsonDirInAppDataDir.exists() ) {
	alert('le fichier products.json existe bel et bien dans applicationDataDirectory/localJSON');
}
if ( !localJsonDirInAppDataDir.exists() ) {
	alert('le fichier products.json n\'existe pas dans applicationDataDirectory/localJSON');
}



// définition du dossier ressourcesDir
var ressourcesDir = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory);

if ( ressourcesDir.exists() ) { // alert de la présence du dosier ressources ( 2nd root dans notre app )
	alert('le dossier racine ressources existe bel et bien');
	Ti.API.log('ressourcesDir listing = ' + ressourcesDir.getDirectoryListing());
	//var localJSONData = JSON.parse(localProdJSON.read().text);
	//Ti.API.info(JSON.stringify(localJSONData));
}

var localJsonDirInRessourcesDir =  Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory +'/localJSON/');
if ( localJsonDirInRessourcesDir.exists() ) {
	alert('le dossier localJSON existe bel et bien dans resourcesDirectory');
}

var localJsonInRessourcesDir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'/localJSON/products.json');
if ( localJsonInRessourcesDir.exists() ) {
	alert('le fichier products.json existe bel et bien dans resourcesDirectory/localJSON');
	var localJsonAfterParsing = JSON.parse(localJsonInRessourcesDir.read().text);
	Ti.API.info(localJsonAfterParsing);
}

///////////// > stef, je te laisse ca ici, ca sera utile pr le parsage . le stringify du futur json ^^

//var fileInRoot =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'texte.txt');
//var bliblijson = JSON.parse(bliblibli.read().text);
//Ti.API.info(bliblijson);


/*

if ( localJsonDirInAppDataDir.exists() ) {
	alert('le bliblibli existe bel et bien');
	var bliblijson = JSON.parse(bliblibli.read().text);
	Ti.API.info(bliblijson);
	
}

 */

// FUNCTION D UPDATE DU JSON LOCAL

// 1 : crea d'une requete http
// 2 : open de la requete http
// 3 : fwrite des datas recup sur le fichier json local

function updateLocalJson(){
	
	//on crée notre client http
	var loader = Titanium.Network.createHTTPClient();
	
	//on spécifie l'adresse online du fichier a charger
	var onlineJSONfile = "http://stephaneadamgarnier.com/porpoise/config/GeolocsForRowsJSON.php?realJSON";
	//var onlineJSONfile = "http://stephaneadamgarnier.com/WORDPRESSJQUERYMOBILE/post_app_wp_ljson_linker.php?get_wp_posts_json";
	
	//on ance notre client http configuré sur un fichier php et on utilise la mthd GET
	loader.open( "GET" , onlineJSONfile );
	
	// on définit les actions a effectuer loers du load de notre client http
	loader.onload = function(){
		
		//on met a jour le JSON local
		//offlineJSONfile.write(this.responseData);
		//on spécifie l'url de la copie locale du fichier que l'on va télécharger
		
		if ( localJsonDirInAppDataDir.exists() ) {
        //le fichier json existe bien en local
                
                //on informe l'utilisateur que le fichier existe déja en local
                var fileExistsDial = Titanium.UI.createAlertDialog({
		
					title: 'Mise à jour',
					message: "L'application a trouvé une version locale antérieure",
					buttonNames: ['mettre à jour']
				});
				// .. puis on display notre alert box
				fileExistsDial.show();
 				
 				//on update notre fichier JSON local
 				localJsonDirInAppDataDir.write(this.responseData);
 				
 				//DEBUG:
 				Ti.API.info('localJsonDirInAppDataDir: '+localJsonDirInAppDataDir.read());
 				
				//on informe l'utilisateur que le fichier à été mis à jour
				var fileUpdatedDial = Titanium.UI.createAlertDialog({
		
					title: 'Mise à jour',
					message: "L'application vient de finir sa mise à jour",
					buttonNames: ['ok!']
				});
				// .. puis on display notre alert box
				fileUpdatedDial.show();
 				
 				
       } else {
       // le fichier json n'existe pas en local	
       		
       			//on informe l'utilisateur que le fichier n'existe pas en local
                var fileExistsDial = Titanium.UI.createAlertDialog({
					title: 'Mise à jour',
					message: "L'application n'a pas trouvé de base de donnée en local",
					buttonNames: ['mettre à jour']
				});
				// .. puis on display notre alert box
				fileExistsDial.show();
 				
 				//on crée notre fichier JSON local
 				localJsonDirInAppDataDir.write(this.responseData);
 				
 				//DEBUG:
 				Ti.API.info('localJsonDirInAppDataDir: '+localJsonDirInAppDataDir.read());

 				
				//on informe l'utilisateur que le fichier à été créé
				var fileUpdatedDial = Titanium.UI.createAlertDialog({
		
					title: 'Mise à jour',
					message: "L'application vient de finir sa mise à jour",
					buttonNames: ['ok!']
				});
				// .. puis on display notre alert box
				fileUpdatedDial.show();
       	
       }
		//on evaluAIT le JSON ici (...)
		
	

	}
	
	//on envoie notre rerquete http
	loader.send();
	
	
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// END UPDATING LOCALJSON ///////////////////////////////////////////////////////////








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mainTabGroup = Titanium.UI.createTabGroup(); // on crée le group de tabs

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HOME WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var homeWindow = Titanium.UI.createWindow({ // créa de la win de home
    title:'Home',
    backgroundColor:'#fff'
});
var homeTab = Titanium.UI.createTab({  // créa de la tab de home
    icon:'KS_nav_views.png',
    title:'Home',
    window:homeWindow
});

// contenu de la home window
var homeSlides = []; // array qui va contenir les slides ( images ) de la homeScrollableView
for ( var i=1 ; i<=3 ; i++ ){ // boucle de recup des images ( a améliorer avec un count() si dispo )
	
	var imageView = Titanium.UI.createImageView({ // on crée une imageView
		image: 'images/homeSlides/slide' + i + '.jpg'
	});
	homeSlides.push(imageView); // on l'ajoute à notre array homeSlides
	
}

var homeScrollableView = Titanium.UI.createScrollableView({ // on crée la scrollableView qui hold nos homeSlides en tant que views
	//width: 1024 ,
	//height: 768 ,
	width: 320 ,
	height: 370 ,
	showPagingControl: false,
	currentPage: 0,
	backgroundColor: '#333333' ,
	//pagingControlHeight: 30,
	views: homeSlides
});
homeWindow.add(homeScrollableView); // on l'ajoute à la homeWindow

// END HOME WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PRODUCTS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var productsWindow = Titanium.UI.createWindow({ // créa de la win de products
    title:'Products',
    backgroundColor:'#fff'
});
var productsTab = Titanium.UI.createTab({  // créa de la tab de products
    icon:'KS_nav_views.png',
    title:'Products',
    window:productsWindow
});

// contenu de la products window
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPL TWEETIE LIKE /////////////////////////////////////////////////////////////////////////////////////////////////////

// function de format de la date
function formatDate()
{
	var date = new Date();
	var datestr = date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear();
	if (date.getHours()>=12)
	{
		datestr+=' '+(date.getHours()==12 ? date.getHours() : date.getHours()-12)+':'+date.getMinutes()+' PM';
	}
	else
	{
		datestr+=' '+date.getHours()+':'+date.getMinutes()+' AM';
	}
	return datestr;
}

///////////////////////////////////////////////////////////////////////////
/// PARTIE OVERTURE DU JSON / STYLING & LAYOUT DES TABLEROWS ////////////////////////////////////

// IMPLEMENTATION DU PARSAGE DU JSON LOCAL ICI /////////////////////

//on parse le json
		//array vide pour notre table View
		var rowData = [];
		
		var products = JSON.parse(localJsonDirInAppDataDir.read().text);
		Ti.API.info(products);
		
		//var products = eval( '(' + this.responseText + ')' );
		
		for ( var i=0; i < products.length; i++ ){
			
			var tweet = products[i].poi.text.description; //le message du tweet
			var user = products[i].poi.text.title; //le nom du user
			var avatar = products[i].poi.imageURL; //l'image du profil
			
			var latitude = products[i].poi.anchor.geolocation.lat; //la latitude
			
			
			var latitude = products[i].poi.anchor.geolocation.lat; //la latitude
			var longitude = products[i].poi.anchor.geolocation.lon; //la longitude
			var altitude = products[i].poi.anchor.geolocation.alt; //l altitude
			
			var id = products[i].poi.id; // l id
			var imageUrl = products[i].poi.imageURL; // l'url de l'icone associée
			var description = products[i].poi.text.description; //la description associée
			var title = products[i].poi.text.title; // le titrel
			
			var path = 'new_file.js';
			
			//petit ajout : un spacer qui permet un affichage propre même avec peu de texte..
			var tweetInnerSpacer = Titanium.UI.createView({ height: 15 })
			
			///////////////////////////////////////////////
			//on crée une row et on spécifie sa hauteur en "auto"
			var row = Titanium.UI.createTableViewRow({
				height:'auto',
				//title:'',
				//backgroundColor: '#191919' // version sombre
				backgroundColor: '#f2f2f2',
				hasChild: true
			});
			
			//variables nécessaires a la subview de chaque node
			
			row.Ctitle = products[i].poi.text.title;
			row.Cid = products[i].poi.id;
			row.CimageUrl = products[i].poi.imageUrl;
			row.Cdescription = products[i].poi.text.description;
			
			row.Clatitude = products[i].poi.anchor.geolocation.lat;
			row.Clongitude = products[i].poi.anchor.geolocation.lon;
			row.Caltitude = products[i].poi.anchor.geolocation.alt;
			
			//on crée la vue qui contiendra le texte et l'avatar
			var post_view = Titanium.UI.createView({ height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5 });
			
			// TEST DE VARS PRATIQUES ICI
			
			//post_view.title = products[i].poi.text.title;
			
			
			
			//on crée une imageView pour contenir l image de profil
			var av_image = Titanium.UI.createImageView({
				//url: avatar, //l'image de notre imageView
				image: avatar, //l'image de notre imageView
				top:0 ,
				left: 0 ,
				height: 48 ,
				width: 48
			});
			
			post_view.add(av_image);
			
			//on crée un label qui contiendra le username de nos post view
			var user_lbl = Titanium.UI.createLabel({
				text: user ,
				left: 54 ,
				width: 120 ,
				top: -48 ,
				//top: 48 ,
				bottom: 2 ,
				height: 16 ,
				textAlign: 'left' ,
				color: '#444444' , //bright version
				//color: '#FFFFFF' ,
				font: {
					fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
				}
			});
			
			post_view.add(user_lbl);
			
			//élément final du post view :
			//on crée un label qui contiendra le mesage du tweet et qui le formattera prprement ds le post view
			var tweet_lbl = Titanium.UI.createLabel({
				text: tweet,
				left: 54 ,
				top: 0 ,
				bottom: 2 ,
				height: 'auto' ,
				width: 236 , // iphone base width for the tweet msg
				//width: 556 , // ipad base width for the tweet msg > in portrait mode
				//width: 755 , // ipad base width for the tweet msg > in landscape mode
				textAlign: 'left' ,
				//color: '#E6E6E6' , // dark version
				font: {
					fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
				}
			});
			
			post_view.add(tweet_lbl);
			
			
			
			//label contenant la longitude
			var longitude_lbl = Titanium.UI.createLabel({
				text: 'longitude: ' + longitude,
				right: 54 ,
				top: 10 ,
				//bottom: 2 ,
				height: 'auto' ,
				width: 200 , // iphone base width for the tweet msg
				//width: 556 , // ipad base width for the tweet msg > in portrait mode
				//width: 755 , // ipad base width for the tweet msg > in landscape mode
				textAlign: 'right' ,
				//color: '#E6E6E6' , // dark version
				font: {
					fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
				}
			});
			
			post_view.add(longitude_lbl);
			
			
			
			
			
			//ajout du "petit ajout" ^^( > le fameux tweetInnerSpacer qui est en fait une simple view )
			post_view.add(tweetInnerSpacer);
			
			//Last but not least, on ajoute le post view complets au row:
			row.add(post_view);
			
			//on donne a chaque row un nom de classe
			row.className = "item" + i;
			
			//on ajoute le row a notre rowData array
			rowData[i] = row;
			  
		}

////////////////////////////////////////////////////////////////////



// data fetchées > au final, à remplacer par le result du JSON

/*

var data = [
	{title:"Row 1"},
	{title:"Row 2"},
	{title:"Row 3"}
];
var lastRow = 4; // a remplacer par le result d'un count + 1

var dataLength = ( data.length + 1 );
alert('la table view contient ' + dataLength + ' éléments' );

*/

//////////////////base de custom data pour les tablerows
var CustomData = [
{ flag:'images/flags/es.png', country:"Spain", trend:'images/UI/up.png', percent:'28%' ,hasChild:true },
{ flag:'images/flags/gb.png', country:"United Kingdom", trend:'images/UI/down.png', percent:'-3%', hasChild:true },
{ flag:'images/flags/us.png', country:"United States", trend:'images/UI/up.png', percent:'8%', hasChild:true },
{ flag:'images/flags/fr.png', country:"France", trend:'images/UI/down.png', percent:'-40%', hasChild:true }

];

//var dataLength = ( CustomData.length + 1 );
alert('la table view contient ' + dataLength + ' éléments' );


var dataLength = ( rowData.length + 1 ); // utilisé par notre rowData
var lastRow = dataLength; // a remplacer par le result d'un count + 1

////////////////construction & layout des custom rows
var data=[];

for (var i = CustomData.length - 1; i >= 0; i--){

	var row = Titanium.UI.createTableViewRow();

	var flag =  Titanium.UI.createImageView({
		image:CustomData[i].flag,
		width:32,
		height:32,
		left:4,
		top:2
	});


	var country = Titanium.UI.createLabel({
		text:CustomData[i].country,
		font:{fontSize:16,fontWeight:'bold'},
		width:'auto',
		textAlign:'left',
		top:2,
		left:40,
		height:16
	});

	var percent =  Titanium.UI.createLabel({
		text:CustomData[i].percent,
		font:{fontSize:12,fontWeight:'bold'},
		width:'auto',
		textAlign:'left',
		bottom:0,
		left:60,
		height:12
	});

	var trend =  Titanium.UI.createImageView({
		image:CustomData[i].trend,
		width:16,
		height:16,
		right:10
	});

	row.add(flag);
	row.add(country);
	row.add(percent);
	row.add(trend);
	row.hasChild=CustomData[i].hasChild;
	row.className = 'coutry_row';


	data.push(row);
};


// je crée la table view et je l'ajoute a la window
var tableView = Ti.UI.createTableView({
	//data: data							//a remplacer par le result du JSON fetché
});

//////////////partie utile pour les custo data et les custom rows, on utilise la mthd setData sur notre tableview
//tableView.setData(data);
tableView.setData(rowData);


// AJOUT D'UNE SUBWINDOW POUR CHACUN DES PRODUITS //////////////////

tableView.addEventListener('click',function(e){
		
		
		Titanium.API.info(e.rowData); // gets triggered ,so fct works
		//Titanium.API.info(e.rowData.rowData);
		//Titanium.API.info(e.source);
		//Titanium.API.info(e.rowData.path);
		Titanium.API.info(e.row.Ctitle);
		
		var newwin = Titanium.UI.createWindow({
			backgroundColor: '#ffffff',
			//url:e.rowData.path, // DEBUUUUUUUUUUG
			title:e.rowData.Ctitle
		});
		
		//JE DECLARE ICI LES ELEMENTS QUI COMPOSENT LA SUBWINDOW
		
		var newWinCTitle = Titanium.UI.createLabel({
			text: e.row.Ctitle ,
			left: 10 ,
			width: 'auto' ,
			top: 20 ,
			//top: 48 ,
			//bottom: 2 ,
			height: 16 ,
			textAlign: 'left' ,
			color: 'blue' , //bright version
			//color: '#FFFFFF' ,
			font: {
				fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
			}
		});
			
		newwin.add(newWinCTitle);
		
		
		var newWinCDescription = Titanium.UI.createLabel({
			text: e.row.Cdescription ,
			left: 54 ,
			width: 120 ,
			top: 35 ,
			//top: 48 ,
			//bottom: 2 ,
			height: 16 ,
			textAlign: 'left' ,
			color: 'green' , //bright version
			//color: '#FFFFFF' ,
			font: {
				fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
			}
		});
			
		newwin.add(newWinCDescription);
		
		
		
		//Titanium.UI.currentTab.open(newwin,{animated:true});
		//newwin.open({animated:true}); // DEBUUUUUUUUUUUUG > nb: marche mais pas comme prevu ( pas de btn back et tt ... )
		//productsWindow.open(newwin,{animated:true});
		
		var debugWin = Titanium.UI.currentWindow;
		debugWin.open(newwin,{animated:true});
		
		/*
		 
		 // create table view event listener
tableview.addEventListener(‘click’, function(e)
{
var newwin = Titanium.UI.createWindow({
url:e.rowData.test,
title:e.rowData.date
});
Titanium.UI.currentTab.open(newwin,{animated:true});
});
		
		*/
		
	});

////////////////////////////////////////////////////////////////////


productsWindow.add(tableView);

////////////////////////////////////////////////////////////////////////////

// layout des différents éléments
var border = Ti.UI.createView({
	backgroundColor:"#576c89",
	height:2,
	bottom:0
});

var tableHeader = Ti.UI.createView({
	backgroundColor:"#e2e7ed",
	width:320,
	height:60
});

// fake it til ya make it..  create a 2 pixel
// bottom border
tableHeader.add(border);

var arrow = Ti.UI.createView({
	backgroundImage:"images/UI/whiteArrow.png",
	width:23,
	height:60,
	bottom:10,
	left:20
});

var statusLabel = Ti.UI.createLabel({
	text:"Pull to reload",
	left:55,
	width:200,
	bottom:30,
	height:"auto",
	color:"#576c89",
	textAlign:"center",
	font:{fontSize:13,fontWeight:"bold"},
	shadowColor:"#999",
	shadowOffset:{x:0,y:1}
});

var lastUpdatedLabel = Ti.UI.createLabel({
	text:"Last Updated: "+formatDate(),
	left:55,
	width:200,
	bottom:15,
	height:"auto",
	color:"#576c89",
	textAlign:"center",
	font:{fontSize:12},
	shadowColor:"#999",
	shadowOffset:{x:0,y:1}
});

var actInd = Titanium.UI.createActivityIndicator({
	left:20,
	bottom:13,
	width:30,
	height:30
});

tableHeader.add(arrow);
tableHeader.add(statusLabel);
tableHeader.add(lastUpdatedLabel);
tableHeader.add(actInd);

tableView.headerPullView = tableHeader;


// fonctionnement du pull to reload & implementation ///////////////////////////

var pulling = false;
var reloading = false;

function beginReloading()
{
	// just mock out the reload /////////////////////////////// insérer le fetching des éléments ici
	
	//petit fake pour le moment ;p
	setTimeout(endReloading,2000);
}

function endReloading()
{
	// simulate loading
	for (var c=lastRow;c<lastRow+10;c++) // a remplacer par ue function de recup & d'ajout des éléments suivant dans l'array de data[] recup après le fetch
	{
		tableView.appendRow({ // le append row sera a remplacer par une update pure et simple du fichier json local, et après par sa réouverture
			title:"Row "+c,
			height: 100,
			backgroundColor: '#191919'
			});
	}
	lastRow += 10;

	// when you're done, just reset
	tableView.setContentInsets({top:0},{animated:true});
	reloading = false;
	lastUpdatedLabel.text = "Last Updated: "+formatDate();
	statusLabel.text = "Pull down to refresh...";
	actInd.hide();
	arrow.show();
}

// event listeners du scroll inversé pour le reload
tableView.addEventListener('scroll',function(e)
{
	var offset = e.contentOffset.y;
	if (offset <= -65.0 && !pulling)
	{
		var t = Ti.UI.create2DMatrix();
		t = t.rotate(-180);
		pulling = true;
		arrow.animate({transform:t,duration:180});
		statusLabel.text = "Release to refresh...";
	}
	else if (pulling && offset > -65.0 && offset < 0)
	{
		pulling = false;
		var t = Ti.UI.create2DMatrix();
		arrow.animate({transform:t,duration:180});
		statusLabel.text = "Pull down to refresh...";
	}
});

tableView.addEventListener('scrollEnd',function(e)
{
	if (pulling && !reloading && e.contentOffset.y <= -65.0)
	{
		reloading = true;
		pulling = false;
		arrow.hide();
		actInd.show();
		statusLabel.text = "Reloading...";
		tableView.setContentInsets({top:60},{animated:true});
		arrow.transform=Ti.UI.create2DMatrix();
		beginReloading();
	}
});

// end fonctionnement du pull to reload & implementation ///////////////////////////

// END PRODUCTS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FAVS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var favsWindow = Titanium.UI.createWindow({ // créa de la win de favs
    title:'Favs',
    backgroundColor:'#fff'
});
var favsTab = Titanium.UI.createTab({  // créa de la tab de favs
    icon:'KS_nav_views.png',
    title:'Favs',
    window:favsWindow
});

// contenu de la favs window
var favsLbl = Titanium.UI.createLabel({ // description de la window
	color:'#999',
	top: 0,
	height: 'auto',
	text:'Vos favoris resteront sur cette page, pour votre plus grand plaisir',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
favsWindow.add(favsLbl); // on l'ajoute a la window

// END FAVS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BAG WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var bagWindow = Titanium.UI.createWindow({ // créa de la win de bag
    title:'Bag',
    backgroundColor:'#fff'
});
var bagTab = Titanium.UI.createTab({  // créa de la tab de bag
    icon:'KS_nav_views.png',
    title:'Bag',
    window:bagWindow
});

// contenu de la bag window
var bagLbl = Titanium.UI.createLabel({ // description de la window
	color:'#999',
	top: 0,
	height: 'auto',
	text:'Les éléments ajoutés à votre panier apparaissent ci-dessous',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
bagWindow.add(bagLbl); // on l'ajoute a la window

// END BAG WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//ajout des différentes tabs au group de tabs
mainTabGroup.addTab(homeTab); 
mainTabGroup.addTab(productsTab);  
mainTabGroup.addTab(favsTab);  
mainTabGroup.addTab(bagTab);  

// on voure le gorupe de tabs
mainTabGroup.open();
