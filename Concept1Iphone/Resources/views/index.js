/**
 * @author Stéphane ADAM-GARNIER
 */

var win = Titanium.UI.currentWindow;

//on crée le tableau qui accueilleras les différents contenus sous forme de views/webViews
// on récupère le contenu par php/sql
var views = [];

//n récupère le nombre de views a creer selon le Nb de contenus provenant de SQL
// au final, for ( var i=1 ; i<= vewsNb ; i++ )
for ( var i=1 ; i<=4 ; i++ ){
	
	//on crée nos scrollviews dans lesquelles on placera nos webViews
	var projectScrollView = Titanium.UI.createScrollView ({
		backgroundColor: '' ,
		//contentHeight: 'auto' ,
		//contentWidth: 900 ,
		contentHeight: 'auto' ,
		showVerticalScrollIndicator: true ,
		//showHorizontalScrollIndicator: false ,
		//horizontalBounce: true ,
	});
	
	//on crée nos différentes webViews dans la boucle
	var projectView = Titanium.UI.createWebView({
		html: 'this is projectView Number: ' + i ,
		url: 'htmlLocalContent/htmlContent' + i + '.html' ,
		height: 'auto',
		//height: 1200,
		//backgroundColor: 'blue'
	});
	
	//on ajoute nos différentes webViews aux différentes scrollViews
	projectScrollView.add(projectView);
	//on les ajoute a notre tableau de views
	views.push(projectScrollView);
	
}


var scrollView = Titanium.UI.createScrollableView({
	showPagingControl: true,
	currentPage: 0,
	//pagingControlHeight: 30,
	//on définit les views de la scrollableView
	//en l'occurence le tableau contenant les views crées dans la boucle
	backgroundColor: '' ,
	height: 350 ,
	views: views
});

win.add(scrollView);
