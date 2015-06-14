/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;

//création de la view header de la page de contact


var user_lbl = Titanium.UI.createLabel({
				text: title ,
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
			
			win.add(user_lbl);



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
			
			win.add(longitude_lbl);




