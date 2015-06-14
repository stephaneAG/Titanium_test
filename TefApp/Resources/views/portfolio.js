/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;

//estion des images


var views = [];

for ( var i=1 ; i<=4 ; i++ ){
	
	var imageView = Titanium.UI.createImageView({
		image: '../img/portfolio/image' + i + '.jpg'
	});
	views.push(imageView);
	
}


var scrollView = Titanium.UI.createScrollableView({
	showPagingControl: true,
	currentPage: 0,
	pagingControlHeight: 30,
	//views: [imageView]
	views: views
});

win.add(scrollView);
