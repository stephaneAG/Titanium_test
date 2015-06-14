/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;


////////////////////////////// HOME VIEW CONTENT ///////////////////////////////////////////////////////////////////////////////

var homeSlides = [];

for ( var i=1 ; i<=3 ; i++ ){
	
	var imageView = Titanium.UI.createImageView({
		image: 'homeImgs/images' + i + '.jpg'
	});
	homeSlides.push(imageView);
	
}


var homeScrollableView = Titanium.UI.createScrollableView({
	//width: 1024 ,
	//height: 768 ,
	width: 320 ,
	height: 'auto' ,
	showPagingControl: true,
	currentPage: 0,
	backgroundColor: '#333333' ,
	//pagingControlHeight: 30,
	views: homeSlides
});



win.add(homeScrollableView);
