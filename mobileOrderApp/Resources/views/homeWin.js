/**
 * @author Stéphane ADAM-GARNIER
 */

////CURRENT WINDOW DEFINITION /////////////////////////////////////////////////////////////////////////////////////
var win = Titanium.UI.currentWindow;

///// WINDOW CONTENT ////////////////////////////////////////////////////////////////////////////////////////////
var homeSlides = []; // array qui va contenir les slides ( images ) de la homeScrollableView
for ( var i=1 ; i<=3 ; i++ ){ // boucle de recup des images ( a améliorer avec un count() si dispo )
	
	var imageView = Titanium.UI.createImageView({ // on crée une imageView
		image: '../images/homeSlides/slide' + i + '.jpg'
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
win.add(homeScrollableView); // on l'ajoute à la homeWindow