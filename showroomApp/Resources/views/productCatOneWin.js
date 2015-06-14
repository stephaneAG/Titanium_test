/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;
/* old school way, no thaaat dynamic ...
var newsWebView = Titanium.UI.createWebView({
	url: 'http://twitter.com/#!/StephaneAG' ,
});

//win.add(newsWebView);

*/

////////////////////////////////// LOAD PRODUCTS FORM CATEGORY ONE //////////////////////////////////////////////////////////////
var fileToLoad;


//la function qui charge les tweets
function loadOnlineProdList(){
	//array vide pour notre table View
	var rowData = [];
	
	//on crée notre client http et on le nomme "loader"
	var loader = Titanium.Network.createHTTPClient();
	
	//on spécifie l'adresse online du fichier a charger
	var onlineJSONfile = "http://stephaneadamgarnier.com/porpoise/config/GeolocsForRowsJSON.php?realJSON";
	
	//on spécifie l'url de la copie locale du fichier que l'on va télécharger
	//var offlineJSONfileToUpdate = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + '/localJSON/local.json');
	
	//on spécfifie la requete http et l url des datas
	//loader.open( "GET" , "http://stephaneadamgarnier.com/porpoise/config/GeolocsForRowsJSON.php?fakeJSON2" ); // marche !! ^^
	//loader.open( "GET" , "http://stephaneadamgarnier.com/porpoise/config/geolocalisations.json" ); // marche aussi !!!! ^^ 
	//loader.open( "GET" , "http://stephaneadamgarnier.com/porpoise/config/GeolocsForRowsJSON.php?realJSON" );
	//loader.open( onlineJSONfile );
	
	loader.open( "GET" , onlineJSONfile );
	
	// nb: srait à tenter/tester : fichier php qui,avec des requetes GET , vient fetcher les differentes sections de l'app en pointant des $vars vers les fichiers JSON gen par WP
	//on lance notre function quand les data sont pretes pr le process
	loader.onload = function(){
		
		//on met a jour le JSON local
		//offlineJSONfile.write(this.responseData);
		//on spécifie l'url de la copie locale du fichier que l'on va télécharger
		var offlineJSONfileToUpdate = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + '/localJSON/goodlocal.json');
		
		if ( offlineJSONfileToUpdate.exists() ) {
                
                var fileExistsDial = Titanium.UI.createAlertDialog({
		
					title: 'Ancienne bdd présente',
					message: "L'application a trouvé une version antérieure",
					buttonNames: ['mais what ?!']
				});
				// .. puis on display notre alert box
				fileExistsDial.show();
 				
 				
 				//on update notre fichier JSON local
 				var fetchedJSONData = JSON.parse(offlineJSONfileToUpdate.read().text);
 				//resources.apple.Mac = e.value;
   				offlineJSONfileToUpdate.write(JSON.stringify(fetchedJSONData));
 				
				//offlineJSONfileToUpdate.write(  );
				//on informe l'utilisateur que le fichier à été mis à jour
				var fileUpdatedDial = Titanium.UI.createAlertDialog({
		
					title: 'Mise à jour',
					message: "L'application vient de finir sa mise à jour",
					buttonNames: ['yippy!']
				});
				// .. puis on display notre alert box
				fileUpdatedDial.show();
 				
 				
        }
		
		
		//on evalue le JSON
		var tweets = eval( '(' + this.responseText + ')' );
		
		for ( var i=0; i < tweets.length; i++ ){
			
			var tweet = tweets[i].poi.text.description; //le message du tweet
			var user = tweets[i].poi.text.title; //le nom du user
			var avatar = tweets[i].poi.imageURL; //l'image du profil
			
			var latitude = tweets[i].poi.anchor.geolocation.lat; //la latitude
			
			
			var latitude = tweets[i].poi.anchor.geolocation.lat; //la latitude
			var longitude = tweets[i].poi.anchor.geolocation.lon; //la longitude
			var altitude = tweets[i].poi.anchor.geolocation.alt; //l altitude
			
			var id = tweets[i].poi.id; // l id
			var imageUrl = tweets[i].poi.imageURL; // l'url de l'icone associée
			var description = tweets[i].poi.text.description; //la description associée
			var title = tweets[i].poi.text.title; // le titrel
			
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
			
			row.Ctitle = tweets[i].poi.text.title;
			row.Cid = tweets[i].poi.id;
			row.CimageUrl = tweets[i].poi.imageUrl;
			row.Cdescription = tweets[i].poi.text.description;
			
			row.Clatitude = tweets[i].poi.anchor.geolocation.lat;
			row.Clongitude = tweets[i].poi.anchor.geolocation.lon;
			row.Caltitude = tweets[i].poi.anchor.geolocation.alt;
			
			//on crée la vue qui contiendra le texte et l'avatar
			var post_view = Titanium.UI.createView({ height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5 });
			
			// TEST DE VARS PRATIQUES ICI
			
			//post_view.title = tweets[i].poi.text.title;
			
			
			
			
			
			
			
			
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
		
	//on est sortit de notre boucle for(...)
	
	//on crée une table view et on spécifie sa source > notre "rowData" array
	var tableView = Titanium.UI.createTableView({ 
		data: rowData , 
		backgroundColor: '#333333' 
	});
  
	tableView.addEventListener('click',function(e){
		
		
		Titanium.API.info(e.rowData); // gets triggered ,so fct works
		//Titanium.API.info(e.rowData.rowData);
		//Titanium.API.info(e.source);
		//Titanium.API.info(e.rowData.path);
		Titanium.API.info(e.row.Ctitle);
		
		var newwin = Titanium.UI.createWindow({
			backgroundColor: '#ffffff',
			url:e.rowData.path,
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
		
		
		
		Titanium.UI.currentTab.open(newwin,{animated:true});
		
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
	
	//on ajoute notre tableView la la fenetre
	win.add(tableView);

	}
	
	//on envoie notre rerquete http
	loader.send();
	
}

// la fction suivante est maintenant déclenchée après un test de connectivité au réseau
//loadOnlineProdList();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








function loadOfflineProdList(){
	//array vide pour notre table View
	var rowData = [];
	
	//on crée notre client http et on le nomme "loader"
	//var loader = Titanium.Network.createHTTPClient();
	
	//on spécifie l'adresse du fichier a charger
	var offlineJSONfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + '/localJSON/goodlocal.json');
	
	//on spécfifie la requete http et l url des datas
	//loader.open( "GET" , "http://stephaneadamgarnier.com/porpoise/config/GeolocsForRowsJSON.php?fakeJSON2" ); // marche !! ^^
	//loader.open( "GET" , "http://stephaneadamgarnier.com/porpoise/config/geolocalisations.json" ); // marche aussi !!!! ^^ 
	//loader.open( "GET" , "http://stephaneadamgarnier.com/porpoise/config/GeolocsForRowsJSON.php?realJSON" );
	//loader.open( "GET" , offlineJSONfile );
	//loader.open( offlineJSONfile );
	// nb: srait à tenter/tester : fichier php qui,avec des requetes GET , vient fetcher les differentes sections de l'app en pointant des $vars vers les fichiers JSON gen par WP
	//on lance notre function quand les data sont pretes pr le process
	
	//on evalue le JSON
	
	//var JSONreadResult = offlineJSONfile.read();
    //var strngReadResult =JSON.stringify(JSONreadResult);
	//var tweets = eval ( strngReadResult);
   	
   	//offlineJSONfileToUpdate.write(JSON.stringify(jsonData));			
	    //var toBeTweet = JSON.parse(offlineJSONfile); // PB MAIS MARCHE AV LATRE
	    
	    
	    var testFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + '/localJSON/aInJson.json');
	    var content = testFile.read();
		scontent = JSON.stringify(content); // <--- pay attention to this line
		parsedContent = JSON.parse(scontent);
		Ti.API.log(parsedContent);
		
		
		//var tweets = eval( '(' + toBeTweet + ')' ); // PB MAIS MARCHE AV LATRE
		//var tweets = eval( '(' + this.responseText + ')' );
		var a = '[{"true":true,"false":false,"foo":"bar"}]';
		var b = '[{"poi":{"anchor":{"geolocation":{"lat":"bli","lon":"blaa","alt":"gdfgdfg"}},"id":96,"imageURL":null,"text":{"description":"C est ... le quatrieme ! et j espere qu il va se copier ne local parceque sinon ... ^^","title":"le quatrieme"}}},{"poi":{"anchor":{"geolocation":{"lat":"48.8569407747","lon":"2.34125843356","alt":""}},"id":90,"imageURL":"http:\/\/stephaneadamgarnier.com\/STEPHANEADAMGARNIER\/wp-content\/uploads\/2011\/11\/GeoPoint3.jpg","text":{"description":"...o\u00f9 \u00e7a ne ch\u00f4me pas la nuit !\r\n\r\n  ( o\u00f9 tous les cons sont gris ? )","title":"Paris..."}}},{"poi":{"anchor":{"geolocation":{"lat":"52.36752912658409","lon":"4.892692565917969","alt":""}},"id":87,"imageURL":"http:\/\/stephaneadamgarnier.com\/STEPHANEADAMGARNIER\/wp-content\/uploads\/2011\/11\/GeoPoint21.jpg","text":{"description":"I wish i could go there again ...","title":"Crazy Town"}}},{"poi":{"anchor":{"geolocation":{"lat":"48.8387704452","lon":"2.3145532608","alt":""}},"id":85,"imageURL":"http:\/\/stephaneadamgarnier.com\/STEPHANEADAMGARNIER\/wp-content\/uploads\/2011\/11\/GeoPoint1.jpg","text":{"description":"This will be i hope the description of my first geolocation point from my custom WP custom type admin panel ... quite nice ,uh ? ^^","title":"Home sweet home"}}}]'
		var c = JSON.stringify(b);
		Ti.API.log(b);
		
		//var fetchedJSONData = JSON.parse(offlineJSONfile.read());
		
		//var tweets = JSON.parse(c);
    	var tweets = eval( '(' + c + ')' );
		
		for ( var i=0; i < tweets.length; i++ ){
			
			var tweet = tweets[i].poi.text.description; //le message du tweet
			var user = tweets[i].poi.text.title; //le nom du user
			var avatar = tweets[i].poi.imageURL; //l'image du profil
			
			var latitude = tweets[i].poi.anchor.geolocation.lat; //la latitude
			
			
			var latitude = tweets[i].poi.anchor.geolocation.lat; //la latitude
			var longitude = tweets[i].poi.anchor.geolocation.lon; //la longitude
			var altitude = tweets[i].poi.anchor.geolocation.alt; //l altitude
			
			var id = tweets[i].poi.id; // l id
			var imageUrl = tweets[i].poi.imageURL; // l'url de l'icone associée
			var description = tweets[i].poi.text.description; //la description associée
			var title = tweets[i].poi.text.title; // le titrel
			
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
			
			row.Ctitle = tweets[i].poi.text.title;
			row.Cid = tweets[i].poi.id;
			row.CimageUrl = tweets[i].poi.imageUrl;
			row.Cdescription = tweets[i].poi.text.description;
			
			row.Clatitude = tweets[i].poi.anchor.geolocation.lat;
			row.Clongitude = tweets[i].poi.anchor.geolocation.lon;
			row.Caltitude = tweets[i].poi.anchor.geolocation.alt;
			
			//on crée la vue qui contiendra le texte et l'avatar
			var post_view = Titanium.UI.createView({ height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5 });
			
			// TEST DE VARS PRATIQUES ICI
			
			//post_view.title = tweets[i].poi.text.title;
			
			
			
			
			
			
			
			
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
		
	//on est sortit de notre boucle for(...)
	
	//on crée une table view et on spécifie sa source > notre "rowData" array
	var tableView = Titanium.UI.createTableView({ 
		data: rowData , 
		backgroundColor: '#333333' 
	});
  
	tableView.addEventListener('click',function(e){
		
		
		Titanium.API.info(e.rowData); // gets triggered ,so fct works
		//Titanium.API.info(e.rowData.rowData);
		//Titanium.API.info(e.source);
		//Titanium.API.info(e.rowData.path);
		Titanium.API.info(e.row.Ctitle);
		
		var newwin = Titanium.UI.createWindow({
			backgroundColor: '#ffffff',
			url:e.rowData.path,
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
		
		
		
		Titanium.UI.currentTab.open(newwin,{animated:true});
		
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
	
	//on ajoute notre tableView la la fenetre
	win.add(tableView);

	}
	
	




// la fction suivante est maintenant déclenchée après un test de connectivité au réseau
//loadOfflineProdList();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










///////////////////////////////// NETWORK CONNECTIVITY TEST ///////////////////////////////////////////////////////////////


//check > pas de connectivité ?
if ( Titanium.Network.networkType == Titanium.Network.NETWORK_NONE ){
	//aucune connectivité n'a été détectée
	
	//on crée une alter box et on alerte le user
	//on la crée ..
	var noConnAlertDial = Titanium.UI.createAlertDialog({
		
		title: 'ATTENTION!',
		message: "L'application n'a pû se mettre à jour car aucune connection réseau n'as été détectée.",
		buttonNames: ['et merde!']
	});
	// .. puis on display notre alert box
	noConnAlertDial.show();
	
	//on pointe le loader vers la version locale de notre JSON ( >must: la version précédement sauvegardée )
	//fileToLoad = Ti.Filesystem.resourcesDirectory + Ti.Filesystem.separator + 'localJSON' + Ti.Filesystem.separator + 'local.json';

	//on charge & montre la liste des produits de la catégorie en cours de visualisation
	loadOfflineProdList();

//check > connectivité détectée ?	
} else if ( Titanium.Network.networkType != Titanium.Network.NETWORK_NONE ) {
	//une connectivité a été détectée
	
	//on crée une alter box et on alerte le user
	//on la crée ..
	var goodConnAlertDial = Titanium.UI.createAlertDialog({
		
		title: 'CONNECT:GOOD',
		message: "L'application a pû se connecter à internet",
		buttonNames: ['continuer']
	});
	// .. puis on display notre alert box
	goodConnAlertDial.show();
	
	////////////////////////////////////// MISE A JOUR DU FICHIER HEBERGE EN LOCAL ICI //////////////////////////////////////////////////////
	//fileToLoad = "http://stephaneadamgarnier.com/porpoise/config/GeolocsForRowsJSON.php?realJSON";
	
	//var fileToLoad = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + '/localJSON/local.json');
	
	//fileToLoad = file;
	//var localJSONFullPath = Ti.Filesystem.resourcesDirectory + Ti.Filesystem.separator + 'localJSON' + Ti.Filesystem.separator + 'userImgs';
	//var localJSONFullPath = Titanium.Filesystem.resourcesDirectory;
	//var dir = Titanium.Filesystem.getFile(localJSONFullPath);

	//var dirItems = dir.getDirectoryListing();
	//Ti.API.info( 'Directory listing: ' + dirItems );
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//on charge & montre la liste des produits de la catégorie en cours de visualisation
	loadOnlineProdList();
	//loadOfflineProdList();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



