/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;

//création de la view header de la page de contact
var headerView = Titanium.UI.createView({
	//backgroundColor: 'black' ,
	backgroundImage: 'contactStuff/contactHeaderBckgrnd.png' ,
	height: 100 ,
	top: -100 ,
	zIndex: 100 
});

win.add(headerView);

//animating the headerView
function animateHeaderView()
{
        //headerView.animate({center:{x:0,y:200},curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,duration:1500}, function()
        headerView.animate({top: 0 ,curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,duration:1200}, function()
        {
               //alert('animation done');
        });
};

animateHeaderView();

//création de la view footer de la page de contact
var footerView = Titanium.UI.createView({
	//backgroundColor: 'black' ,
	backgroundImage: 'contactStuff/contactFooterBckgrnd.png' ,
	height: 40 ,
	bottom: -40 ,
	zIndex: 100 
});

win.add(footerView);

//animating the footerView
function animateFooterView()
{
        //headerView.animate({center:{x:0,y:200},curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,duration:1500}, function()
        footerView.animate({bottom: 0 ,curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,duration:1200}, function()
        {
               //alert('animation done');
        });
};

animateFooterView();



//création de la mapView affichant la localisation  de l'entreprise
var mapView = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	animate: true,
	region: true,
	userLocation: false
});

win.add(mapView);

Titanium.Geolocation.forwardGeocoder('Paris France', function(evt){
	//on recupère les coordonnées
	//Titanium.API.debug(evt);
	
	//on spécifie ou on veut centrer la map
	mapView.region = {
		//latitude : evt.latitude,
		//latitude: 48.841783 , //un peut moins que le point que l'on veut centrer ...
		latitude: 48.840351 ,
		//longitude: evt.longitude,
		longitude: 2.314596 ,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	}
	
	//tant que l'on y est , on y ajoute une annotation
	//nb : peut se faire e ndehors de la boucle de création de map ()
	var companyMainAnnotation = Titanium.Map.createAnnotation({
		latitude: 48.838919 ,
		longitude: 2.314596 ,
		animate: false ,
		title: 'A# Company' ,
		subtitle: 'feel free to contact us' ,
		leftView: 'http://www.google.fr' , 
		//image: format 48x48
		image: 'contactStuff/companyMainAnnotation.png'
	});
	
	mapView.addAnnotation(companyMainAnnotation);
	
});





