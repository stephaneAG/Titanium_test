/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;


////////////////////////////// HOME VIEW CONTENT ///////////////////////////////////////////////////////////////////////////////
var homeScrollView = Titanium.UI.createScrollView({
	backgroundColor: 'black' ,
	//contentWidth: 'auto' ,
	contentWidth: 960 ,
	//contentHeight: 'auto' ,
	contentHeight: 370 ,
	showVerticalScrollIndicator: false ,
	showHorizontalScrollIndicator: false ,
	//horizontalBounce: false ,
	//verticalBoune: false ,
	
});


////////////////////////////// HOME SCROLLVIEW CONTENT ///////////////////////////////////////////////////////////////////////////////
var firstDiv = Titanium.UI.createView({
	//backgroundColor: 'red' ,
	backgroundImage : '../images/home/woodBckgrnd1.jpg' ,
	height: 370 ,
	width: 320 ,
	left: 0 ,
	top: 0
});

var secondDiv = Titanium.UI.createView({
	backgroundImage : '../images/home/woodBckgrnd2.jpg' ,
	height: 370 ,
	width: 320 ,
	left: 320 ,
	top: 0
});

var thirdDiv = Titanium.UI.createView({
	backgroundImage : '../images/home/woodBckgrnd3.jpg' ,
	height: 370 ,
	width: 320 ,
	left: 640 ,
	top: 0
});




////////////////////////////// HOME SCROLLVIEW CONTENT ANIMATIONS ///////////////////////////////////////////////////////////////////////////////

//apparement les anims se font comme ceci ...
var animation = Titanium.UI.createAnimation();
//animation.backgroundColor = 'black';
animation.duration = 10500;
//animation.opacity = 0.5 ;
animation.curve= Ti.UI.ANIMATION_CURVE_EASE_IN ; // ANIMATION_CURVE_EASE_IN, ANIMATION_CURVE_EASE_IN_OUT, ANIMATION_CURVE_EASE_OUT, ANIMATION_CURVE_LINEAR

var animation2 = Titanium.UI.createAnimation();
//animation.backgroundColor = 'black';
animation2.duration = 18500;
//animation2.opacity = 0.5 ;
animation2.curve = Ti.UI.ANIMATION_CURVE_EASE_IN ; // ANIMATION_CURVE_EASE_IN, ANIMATION_CURVE_EASE_IN_OUT, ANIMATION_CURVE_EASE_OUT, ANIMATION_CURVE_LINEAR



////////////////////////////// HOME SCROLLVIEW CONTENT EVENT LISTNENERS ///////////////////////////////////////////////////////////////////////////////

firstDiv.addEventListener('dblclick', function (evt) {
	firstDiv.animate(animation);
	homeScrollView.scrollTo(320,0);
	//alert('you clicked me !');
})

secondDiv.addEventListener('dblclick', function (evt) {
	firstDiv.animate(animation);
	homeScrollView.scrollTo(640,0);
	//alert('you clicked me !');
})

thirdDiv.addEventListener('dblclick', function (evt) {
	firstDiv.animate(animation2);
	homeScrollView.scrollTo(0,0);
	//alert('you clicked me !');
})


homeScrollView.add(firstDiv);
homeScrollView.add(secondDiv);
homeScrollView.add(thirdDiv);


win.add(homeScrollView);
