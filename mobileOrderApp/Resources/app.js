/**
 * @author Stéphane ADAM-GARNIER
 */

/* mobileOrderApp v1a by Stéphane Adam Garnier  2011 */

// On définit le Bckgrnd Coor de la master UIView (when there are no windows/tab groups on it)
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
// MAIN TABGROUP CREATION ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mainTabGroup = Titanium.UI.createTabGroup(); // on crée le group de tabs

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HOME WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var homeWindow = Titanium.UI.createWindow({ // créa de la win de home
    title:'Home',
    url: 'views/homeWin.js' ,
    backgroundColor:'#fff'
});
var homeTab = Titanium.UI.createTab({  // créa de la tab de home
    icon:'KS_nav_views.png',
    title:'Home',
    window:homeWindow
});

// END HOME WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PRODUCTS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var productsWindow = Titanium.UI.createWindow({ // créa de la win de products
    title:'Products',
    url: 'views/productsWin.js' ,
    backgroundColor:'#fff'
});
var productsTab = Titanium.UI.createTab({  // créa de la tab de products
    icon:'KS_nav_views.png',
    title:'Products',
    window:productsWindow
});

// END PRODUCTS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FAVS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var favsWindow = Titanium.UI.createWindow({ // créa de la win de favs
    title:'Favs',
    url: 'views/favsWin.js' ,
    backgroundColor:'#fff'
});
var favsTab = Titanium.UI.createTab({  // créa de la tab de favs
    icon:'KS_nav_views.png',
    title:'Favs',
    window:favsWindow
});

// END FAVS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BAG WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var bagWindow = Titanium.UI.createWindow({ // créa de la win de bag
    title:'Bag',
    url: 'views/bagWin.js' ,
    backgroundColor:'#fff'
});
var bagTab = Titanium.UI.createTab({  // créa de la tab de bag
    icon:'KS_nav_views.png',
    title:'Bag',
    window:bagWindow
});

// END BAG WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN TABGROUP ADDED TABS //////////////////////////////////////////////////////////////////////////////////////////////////
mainTabGroup.addTab(homeTab); 
mainTabGroup.addTab(productsTab);  
mainTabGroup.addTab(favsTab);  
mainTabGroup.addTab(bagTab);  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN TABGROUP OPENING //////////////////////////////////////////////////////////////////////////////////////////////////////
mainTabGroup.open();