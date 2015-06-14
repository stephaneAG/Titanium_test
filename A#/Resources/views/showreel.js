/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;

var showreelSlides = [];

for ( var i=1 ; i<=7 ; i++ ){
	
	var imageView = Titanium.UI.createImageView({
		image: 'showreelStuff/image' + i + '.png'
	});
	showreelSlides.push(imageView);
	
}


var scrollView = Titanium.UI.createScrollableView({
	width: 1024 ,
	height: 768 ,
	showPagingControl: false,
	currentPage: 0,
	backgroundColor: '#333333' ,
	//pagingControlHeight: 30,
	views: showreelSlides
});

win.add(scrollView);
