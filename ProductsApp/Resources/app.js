// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// TESTS SUR LES DATAS LOCALES //////////////////////////////////////
var appDataDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory);
//on print un listing du directory
Ti.API.log('appDataDir listing = ' + appDataDir.getDirectoryListing());


//on test la présence d'un fichier products.json dans le dossier local > localDatas
if ( appDataDir.exists() ) {
	alert('le dossier de l application existe bel et bien');
	//var localJSONData = JSON.parse(localProdJSON.read().text);
	//Ti.API.info(JSON.stringify(localJSONData));
}

var localDatasDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory +'/localDatas/');
if ( appDataDir.exists() ) {
	alert('le dossier des localDatas existe bel et bien');
}


var localDatasProdDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory +'/localDatas/productsJSON');
if ( localDatasProdDir.exists() ) {
	alert('le dossier productsJSON, sous dossier du dossier localDatas existe bel et bien');
}


var bliblibli = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'file.json');
var fileInRoot =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'texte.txt');
if ( bliblibli.exists() ) {
	alert('le bliblibli existe bel et bien');
	var bliblijson = JSON.parse(bliblibli.read().text);
	Ti.API.info(bliblijson);
	
}






// create tab group
var tabGroup = Titanium.UI.createTabGroup();




//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Custom Rows',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Custom Rows',
    window:win1
});


var RegData = [
{ leftImage:'es.png', title:"Spain", hasChild:true },
{ leftImage:'gb.png', title:"United Kingdom", hasChild:true },
{ leftImage:'us.png', title:"United States", hasChild:true },
{ leftImage:'fr.png', title:"France", hasChild:true }

];

var TheTable = Titanium.UI.createTableView({});



var CustomData = [
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
};


TheTable.setData(data);

win1.add(TheTable);

//
//  add tabs
//
tabGroup.addTab(tab1);  


// open tab group
tabGroup.open();
