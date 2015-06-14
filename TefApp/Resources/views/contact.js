/**
 * @author Stéphane ADAM-GARNIER
 */
var win = Titanium.UI.currentWindow;

var mapView = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	animate: true,
	region: true,
	userLocation: false
});

win.add(mapView);

Titanium.Geolocation.forwardGeocoder('Paris France', function(evt){
	//Titanium.API.debug(evt);
	mapView.region = {
		latitude : evt.latitude,
		longitude: evt.longitude,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	}
	
	var annotation = Titanium.Map.createAnnotation({
		latitude: evt.latitude,
		longitude: evt.longitude,
		animate: true,
		title: 'Notre Société'
		//image: format 48x48
	});
	
	mapView.addAnnotation(annotation);
});

