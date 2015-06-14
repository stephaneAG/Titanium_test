/**
 * @author Stéphane ADAM-GARNIER
 */

////CURRENT WINDOW DEFINITION /////////////////////////////////////////////////////////////////////////////////////
var win = Titanium.UI.currentWindow;

var localJsonInAppDataDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory +'/localJSON/products.json');
var localJsonInRessourcesDir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'/localJSON/products.json');
///// WINDOW CONTENT ////////////////////////////////////////////////////////////////////////////////////////////

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

	//on parse le json:

		//array vide pour notre table View
		var rowData = [];
		
		//var products = JSON.parse(localJsonDirInAppDataDir.read().text); // le normal
		var products = JSON.parse(localJsonInRessourcesDir.read().text); // le debug
		Ti.API.info(products);
		
		//var products = eval( '(' + this.responseText + ')' ); // ancienne methode > depreciated
		
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
			
			////////TEST POUR LE SWIPE ////////////////////////
			row.swipableView = row[0];
			
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

////////////////////////////////////////////////////////////////////
// AJOUT DE FONCTION D AJOUT RAPIDE AUX FAVS / BAG ////////////////
//tableView.addEventListener('swipe', function(eventObject){     
 //   Titanium.API.info("huzzah, a row was swiped");
 //   Titanium.API.info(eventObject.row.Ctitle);
//});


/* .animate({
			left:300, 
			backgroundColor:'#00f', 
			duration:3000, 
			//curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
*/

tableView.addEventListener("swipe", function(e){

    if (e.direction == "left"){
        //e.source.url = "images/face-left.png";
        //caption.text = "... and I'm facing left & lookin' left";
        Titanium.API.info( e.row.Ctitle + "row was swiped left");
        e.row.swipableView.animate({
        	left: 20
        });
    
    } else if (e.direction == "right"){
        //e.source.url = "images/face-right.png";
        //caption.text = "... and I'm facing left & lookin' right";
        Titanium.API.info("a row was swiped right");
    }
});


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
		
		
		
		Titanium.UI.currentTab.open(newwin,{animated:true}); // j'ouvre la subWindow
		
		//newwin.open({animated:true}); // DEBUUUUUUUUUUUUG > nb: marche mais pas comme prevu ( pas de btn back et tt ... )
		//productsWindow.open(newwin,{animated:true});
		
		//var debugWin = Titanium.UI.currentWindow;
		//debugWin.open(newwin,{animated:true});
		
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


win.add(tableView);

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
	backgroundImage:"../images/UI/whiteArrow.png",
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