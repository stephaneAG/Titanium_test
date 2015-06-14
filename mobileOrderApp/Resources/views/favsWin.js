/**
 * @author Stéphane ADAM-GARNIER
 */

////CURRENT WINDOW DEFINITION /////////////////////////////////////////////////////////////////////////////////////
var win = Titanium.UI.currentWindow;

///// WINDOW CONTENT ////////////////////////////////////////////////////////////////////////////////////////////
var favsLbl = Titanium.UI.createLabel({ // description de la window
	color:'#999',
	top: 0,
	height: 'auto',
	text:'Vos favoris resteront sur cette page, pour votre plus grand plaisir',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win.add(favsLbl); // on l'ajoute a la window