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
	
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// END NETWORK CONNECTIVITY TEST ///////////////////////////////////////////////////////////









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
var productsWindow = Titanium.UI.createWindow({ // créa de la win de home
    title:'Products',
    backgroundColor:'#fff'
});
var productsTab = Titanium.UI.createTab({  // créa de la tab de home
    icon:'KS_nav_views.png',
    title:'Products',
    window:productsWindow
});

// contenu de la products window


// END PRODUCTS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FAVS WINDOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var favsWindow = Titanium.UI.createWindow({ // créa de la win de home
    title:'Favs',
    backgroundColor:'#fff'
});
var favsTab = Titanium.UI.createTab({  // créa de la tab de home
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
var bagWindow = Titanium.UI.createWindow({ // créa de la win de home
    title:'Bag',
    backgroundColor:'#fff'
});
var bagTab = Titanium.UI.createTab({  // créa de la tab de home
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
