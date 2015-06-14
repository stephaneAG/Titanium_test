/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;

/*
var homeWebView = Titanium.UI.createWebView({
	url: '../htmlContent/homeWebViewHtmlContent.html'
});
*/

//win.add(homeWebView);

//un peu d'expérimentation...
/*
var view1 = Ti.UI.createScrollView({
 backgroundColor:'green',
 contentHeight:'auto',
 showHorizontalScrollIndicator: false, // le scroll que je veux est uniquement vertical
 horizontalBounce: false, // idem
 showVerticalScrollIndicator:true
});

var l1 = Ti.UI.createLabel({
 text:"Lorem ipsum [.dgdgdfgdfgdfgdgdfgdfgdfgddfgggggggggggggggggggggggg..] ligula venenatis.", // long texte, en fait...
 color:'#fff',
 width:'auto',
 height: 900
});
view1.add(l1);
*/

//my version ...
var homeScrollView = Titanium.UI.createScrollView({
	backgroundColor: 'blue' ,
	//contentWidth: 'auto' ,
	contentWidth: 900 ,
	contentHeight: 'auto' ,
	showVerticalScrollIndicator: false ,
	showHorizontalScrollIndicator: false ,
	horizontalBounce: true ,
});

var firstDiv = Titanium.UI.createView({
	backgroundColor: 'red' ,
	backgroundImage : '../imgs/home/image1.jpg' ,
	height: 345 ,
	width: 300 ,
	left: 0 ,
	top: 10
});

var secondDiv = Titanium.UI.createView({
	backgroundColor: 'green' ,
	height: 345 ,
	width: 300 ,
	left: 300 ,
	top: 10
});

var thirdDiv = Titanium.UI.createView({
	backgroundColor: 'yellow' ,
	height: 345 ,
	width: 300 ,
	left: 600 ,
	top: 10
});

//apparement les anims se font comme ceci ...
var animation = Titanium.UI.createAnimation();
//animation.backgroundColor = 'black';
animation.duration = 1000;
animation.opacity = 0.5 ;

//ajoutos donc quelques event listeners ...
secondDiv.addEventListener('dblclick', function (evt) {
	secondDiv.animate(animation);
	//alert('you clicked me !');
})


homeScrollView.add(firstDiv);
homeScrollView.add(secondDiv);
homeScrollView.add(thirdDiv);

win.add(homeScrollView);
