/**
 * @author Stéphane ADAM-GARNIER
 */

////CURRENT WINDOW DEFINITION /////////////////////////////////////////////////////////////////////////////////////
var win = Titanium.UI.currentWindow;

///// WINDOW CONTENT ////////////////////////////////////////////////////////////////////////////////////////////
var bagLbl = Titanium.UI.createLabel({ // description de la window
	color:'#999',
	top: 0,
	height: 'auto',
	text:'Les éléments ajoutés à votre panier apparaissent ci-dessous',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win.add(bagLbl); // on l'ajoute a la window