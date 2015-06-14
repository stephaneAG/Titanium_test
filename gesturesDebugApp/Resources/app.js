
//ceci est une simple app de test des différents event listeners et des gestures

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var mainWin = Titanium.UI.createWindow({
	title: 'main'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'main',
    window:mainWin
});

var subViews = [];

var subView1 = Titanium.UI.createView({
	width: 320,
	height: 430,
	backgroundColor: '#CCCCCC'
});

var subViewHeader1 = Titanium.UI.createView({
	width: 320,
	height: 50,
	backgroundColor: '#333333',
	top: 30
});

var subViewHeaderLbl1 = Titanium.UI.createLabel({
	text: 'SectionName',
	color: 'white',
	textAlign: 'center'
})

subViewHeader1.add(subViewHeaderLbl1);
subView1.add(subViewHeader1);




var subViewTableView1 = Titanium.UI.createTableView({
	height: 330,
	top: 80
});

var subViewTableViewSection = Titanium.UI.createTableViewSection({
	headerTitle: 'subsectionName'
});

/////////////// PARTIE CREA DES TABLE VIEW CUSTOM ROWS A PARTIR DE CUSTOM DATA /////////////////////////////////

var CustomData = [
{ flag:'es.png', country:"Spain", trend:'up.png', percent:'28%' ,hasChild:true },
{ flag:'gb.png', country:"United Kingdom", trend:'down.png', percent:'-3%', hasChild:true },
{ flag:'us.png', country:"United States", trend:'up.png', percent:'8%', hasChild:true },
{ flag:'fr.png', country:"France", trend:'down.png', percent:'-40%', hasChild:true },
{ flag:'es.png', country:"Spain", trend:'up.png', percent:'28%' ,hasChild:true },
{ flag:'gb.png', country:"United Kingdom", trend:'down.png', percent:'-3%', hasChild:true },
{ flag:'us.png', country:"United States", trend:'up.png', percent:'8%', hasChild:true },
{ flag:'fr.png', country:"France", trend:'down.png', percent:'-40%', hasChild:true },
{ flag:'es.png', country:"Spain", trend:'up.png', percent:'28%' ,hasChild:true },
{ flag:'gb.png', country:"United Kingdom", trend:'down.png', percent:'-3%', hasChild:true },
{ flag:'us.png', country:"United States", trend:'up.png', percent:'8%', hasChild:true },
{ flag:'fr.png', country:"France", trend:'down.png', percent:'-40%', hasChild:true },
{ flag:'es.png', country:"Spain", trend:'up.png', percent:'28%' ,hasChild:true },
{ flag:'gb.png', country:"United Kingdom", trend:'down.png', percent:'-3%', hasChild:true },
{ flag:'us.png', country:"United States", trend:'up.png', percent:'8%', hasChild:true },
{ flag:'fr.png', country:"France", trend:'down.png', percent:'-40%', hasChild:true },
{ flag:'es.png', country:"Spain", trend:'up.png', percent:'28%' ,hasChild:true },
{ flag:'gb.png', country:"United Kingdom", trend:'down.png', percent:'-3%', hasChild:true },
{ flag:'us.png', country:"United States", trend:'up.png', percent:'8%', hasChild:true },
{ flag:'fr.png', country:"France", trend:'down.png', percent:'-40%', hasChild:true }

];




var data=[];

for (var i = CustomData.length - 1; i >= 0; i--){

	var row = Titanium.UI.createTableViewRow();

	var flag =  Titanium.UI.createImageView({
		image:CustomData[i].flag,
		width:32,
		height:32,
		left:4,
		top:2
	});


	var country = Titanium.UI.createLabel({
		text:CustomData[i].country,
		font:{fontSize:16,fontWeight:'bold'},
		width:'auto',
		textAlign:'left',
		top:2,
		left:40,
		height:16
	});

	var percent =  Titanium.UI.createLabel({
		text:CustomData[i].percent,
		font:{fontSize:12,fontWeight:'bold'},
		width:'auto',
		textAlign:'left',
		bottom:0,
		left:60,
		height:12
	});

	var trend =  Titanium.UI.createImageView({
		image:CustomData[i].trend,
		width:16,
		height:16,
		right:10
	});

	row.add(flag);
	row.add(country);
	row.add(percent);
	row.add(trend);
	row.hasChild=CustomData[i].hasChild;
	row.className = 'coutry_row';


	data.push(row);
	
	row.trend = CustomData[i].trend;
};



subViewTableView1.setData(data);
subView1.add(subViewTableView1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////// PARTIE DEFINITION DE LA SOUS VIEW DE CHACUNES DES ROWS DE LA TABLE VIEW 1 ///////////////

subViewTableView1.addEventListener('click',function(e){
		
		
		//Titanium.API.info(e.row); // gets triggered ,so fct works
		//Titanium.API.info(e.rowData.rowData);
		//Titanium.API.info(e.source);
		//Titanium.API.info(e.rowData.path);
		//Titanium.API.info(e.data);
		
		var newwin = Titanium.UI.createWindow({
			backgroundColor: '#ffffff',
			url: 'new_file.js'
			//title:e.rowData.Ctitle
		});
		
		//JE DECLARE ICI LES ELEMENTS QUI COMPOSENT LA SUBWINDOW
		
		var newWinCTitle = Titanium.UI.createLabel({
			text:  e.row.trend ,
			left: 10 ,
			width: 'auto' ,
			top: 20 ,
			//top: 48 ,
			//bottom: 2 ,
			height: 16 ,
			textAlign: 'left' ,
			color: 'blue' , //bright version
			//color: '#FFFFFF' ,
			font: {
				fontFamily:'Helvetica Neue', fontSize: 14, fontWeight: 'UltraLight'
			}
		});
			
		newwin.add(newWinCTitle);
		
		subView1.open(newwin,{animated:true});
		
		//subView1.open(newwin,{animated:true});
		
		
		
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var subView2 = Titanium.UI.createView({
	width: 320,
	height: 430,
	backgroundColor: '#B3B3B3'
});
var subView3 = Titanium.UI.createView({
	width: 320,
	height: 430,
	backgroundColor: '#999999'
});

subViews.push(subView1);
subViews.push(subView2);
subViews.push(subView3);


var scrollableView = Titanium.UI.createScrollableView({
	height: 450 ,
	showPagingControl: true,
	currentPage: 0,
	//backgroundColor: '#333333' ,
	//pagingControlHeight: 30,
	views: subViews
});


mainWin.add(scrollableView);

//mainWin.open({});


tabGroup.addTab(tab1);  


// open tab group
tabGroup.open();
