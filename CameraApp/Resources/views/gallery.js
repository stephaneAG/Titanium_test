/**
 * @author Stéphane ADAM-GARNIER
 */
var currentWin = Titanium.UI.currentWindow;

var galleryTitle = Titanium.UI.createLabel({
	color:'#999',
	text:'My Gallery',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

currentWin.add(galleryTitle);