// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

////////////////////////////////////////////////////////////////////////////////////////////

/*

Ti.Filesystem.applicationDataDirectory: 
	A read/write directory accessible by your app.
 	Place your application-specific files in this directory. 
 	The contents of this directory persist until you remove the files or until the user uninstalls the application.
 	
Ti.Filesystem.resourcesDirectory: 
	A read-only directory where your application resources are located; 
	this directory corresponds to the project/Resources directory in Titanium Studio. 
	The contents of this directory persist until the user uninstalls the application.
	
Ti.Filesystem.tempDirectory: 
	A read-write directory where your application can place temporary files. 
	The contents of this directory persist until your application fully closes, at which time the operating system could delete your files.
	
Ti.Filesystem.externalStorageDirectory: 
	A read-write directory on the external storage device (SD card) accessible by your app, 
	if such a location exists. Check first with Ti.Filesystem.isExternalStoragePresent() (which returns a Boolean).


	R : 	The Ti.Filesystem.resourcesDirectory is read-only on a device, but is read/write in the simulator/emulator.

 */

////////////////////////////// TESTS SUR LES DATAS LOCALES //////////////////////////////////////

/*
 
//getting a simple file handle
var myFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'fichiertexte');

//reading from simple file handle
var myFileContents = myFile.read();
Ti.API.info('Output as a blob: '+myFileContents); // returns a blob , useful if contents are binary
Ti.API.info('Output text of the file: '+myFileContents.text); //  grab text prop. of blob to get the plain text contents file
Ti.API.info('Output the file\'s MIME type: '+myFileContents.mimeType); // use mimeType prop. to determine file's MIME type

var fileName = 'fichiertexte.txt';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,fileName);
*/

//var documentDir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'downloadDir');

/*

var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'glokblibli.txt');
if(f.exists()===false) {
    // you don't need to do this, but you could...
    alert('le fichier existe pas');
    f.createFile();
}
//f.write('gloria is da key');

var filecontent = f.read();
Ti.API.info('Output as a blob: '+filecontent); // returns a blob , useful if contents are binary
Ti.API.info('Output text of the file: '+filecontent.text); //  grab text prop. of blob to get the plain text contents file
Ti.API.info('Output the file\'s MIME type: '+filecontent.mimeType); // use mimeType prop. to determine file's MIME type




//RessourcesDirectory

var jork = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'jork.txt');
if(jork.exists()===false) {
    // you don't need to do this, but you could...
    alert('le fichier jork existe pas');
    jork.createFile();
}

var jorkContent = jork.read();
Ti.API.info('Output as a blob: '+jorkContent); // returns a blob , useful if contents are binary
Ti.API.info('Output text of the file: '+jorkContent.text); //  grab text prop. of blob to get the plain text contents file
Ti.API.info('Output the file\'s MIME type: '+jorkContent.mimeType); // use mimeType prop. to determine file's MIME type

//ApplicationDataDirectory

//var localDatasDir =  Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory +'/localJSON/');
//test on directory
var localJSONDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'localJSON');
if(localJSONDir.exists()===false) {
    // you don't need to do this, but you could...
    alert('le dossier localJSON existe pas');
    localJSONDir.createDirectory();
}

Ti.API.info('localJSON dir items: ' + localJSONDir.getDirectoryListing()); // it's empty
jork.move('localJSON/jork.txt');
Ti.API.info('localJSON dir items: ' + localJSONDir.getDirectoryListing());


//test on file > still not working as it keeps a programatically created file in memory / not loading the real one // maybe not good but ... let's see ...'
//var sisi = Ti.Filesystem.getFile('../sisiimperatrice.txt'); // marche dans l editeur mais pas sur la device
var sisi = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'sisiimperatrice.txt'); //la version normale qui ne marche pas ds le diteur (..) a voir 
if(sisi.exists()===false) {
    // you don't need to do this, but you could...
    alert('le fichier fichiertexte existe pas');
    //fichiertexte.createFile();
}

var sisiContent = sisi.read();
Ti.API.info('sisiContent as a blob: '+sisiContent); // returns a blob , useful if contents are binary
Ti.API.info('sisiContent text of the file: '+sisiContent.text); //  grab text prop. of blob to get the plain text contents file
Ti.API.info('sisiContent the file\'s MIME type: '+sisiContent.mimeType); // use mimeType prop. to determine file's MIME type


*/



/*
//another test on file
var goodLocalJSON = Ti.Filesystem.getFile('../localJSON/goodLocal.json');
if(goodLocalJSON.exists()===false) {
    // you don't need to do this, but you could...
    alert('le fichier goodLocalJSON existe pas');
    //fichiertexte.createFile();
}

var goodLocalJSONContent = goodLocalJSON.read();
Ti.API.info('goodLocalJSONContent as a blob: '+goodLocalJSONContent); // returns a blob , useful if contents are binary
Ti.API.info('goodLocalJSONContent text of the file: '+goodLocalJSONContent.text); //  grab text prop. of blob to get the plain text contents file
Ti.API.info('goodLocalJSONContent the file\'s MIME type: '+goodLocalJSONContent.mimeType); // use mimeType prop. to determine file's MIME type



//sachant que mon test porte sur du JSON:
var parsedJSON =  JSON.parse(goodLocalJSONContent.text);
Ti.API.info('JSON parsed content: '+parsedJSON); // result : [object Object],[object Object],[object Object],[object Object]

var stringifiedJSON =  JSON.stringify(goodLocalJSONContent.text);
Ti.API.info('JSON stringified content: '+stringifiedJSON); // result :


*/


//test ultime: 
// sil le fichier n'existe pas dans applciationDataDirectory, alors one va cherche sa version située dans le dossier ressources
// pour finalement la copier vers le dossier applicationDataDirectory
// pour au final l'ouvrir a partir de son nouvel emplacement
var DataDir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory);
Ti.API.info('fichiers et dossiers présents dans le dossier applicationDataDirectory: ' +DataDir.getDirectoryListing());

//file handler du dossier existant ( ou pas ) localJsonData
var localJsonDataDir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'localJsonData');
//localJsonDataDir.createDirectory();

//file handler du fichier JSON LOCAL existant ( ou pas) dans localJsonData
//var localJsonFileInAppDataDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,+'localJsonData/localJsonFile.txt');
var localJsonFileInAppDataDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,+'localJsonFile.txt');

//file handler du dossier existant localRessourcesData
var localRessourcesDataDir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'localRessourcesData');
//file handler du fichier JSON LOCAL existant dans localRessourcesData
var localJsonFileInResDir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory+'localRessourcesData/localJsonFile.txt');


//tests multiples d existence ...
/*
if(localJsonDataDir.exists()===false) {
    alert('il n existe pas de dossier nommé localJsonData dans l applicationDataDirectory');
} else if(localJsonDataDir.exists()===true)  {
	alert('il existe un dossier nommé localJsonData dans l applicationDataDirectory');
	Ti.API.info('fichiers et dossiers présents dans le dossier localJsonData: ' + localJsonDataDir.getDirectoryListing());
}

if(localJsonFileInAppDataDir.exists()===false) {
    alert('il n existe pas de fichier nommé localJsonFile.txt dans le dossier localJsonData de l applicationDataDirectory');
} else if(localJsonFileInAppDataDir.exists()===true)  {
	alert('il existe un fichier nommé localJsonFile.txt dans le dossier localJsonData de l applicationDataDirectory');
}

if(localRessourcesDataDir.exists()===false) {
    alert('il n existe pas de dossier nommé localRessourcesData dans le ressourcesDirectory');
} else if(localRessourcesDataDir.exists()===true)  {
	alert('il existe un dossier nommé localRessourcesData dans le ressourcesDirectory');
	Ti.API.info('fichiers et dossiers présents dans le dossier localRessourcesData: ' + localRessourcesDataDir.getDirectoryListing());
}

if(localJsonFileInResDir.exists()===false) {
    alert('il n existe pas de fichier nommé localJsonFile.txt dans le dossier localRessourcesData de ressourcesDirectory');
} else if(localJsonFileInResDir.exists()===true)  {
	alert('il existe un fichier nommé localJsonFile.txt dans le dossier localRessourcesData de ressourcesDirectory');
}

*/


//////////////////////// MISE EN PRATIQUE ////////////////////////////////////////////////////////////////////////////////////
//si le dossier localJsonData n'existe pas, on le crée
if(localJsonDataDir.exists()===false) {
    alert('il n existe pas de dossier nommé localJsonData dans l applicationDataDirectory');
    localJsonDataDir.createDirectory();
    alert('Un dossier nommé localJsonData a été créé dans l applicationDataDirectory');
} else if(localJsonDataDir.exists()===true)  {
	alert('il existe un dossier nommé localJsonData dans l applicationDataDirectory');
	Ti.API.info('fichiers et dossiers présents dans le dossier localJsonData: ' +localJsonDataDir.getDirectoryListing());
}


// du coup le fichier que l'on cherche n'existait forcement pas dans localJsonData, mais au cas ou, 
// on check si il existerait quand même ( on a déja crée un file handler pour son futur lui ici )
if(localJsonFileInAppDataDir.exists()===false) {
    alert('il n existe pas de fichier nommé localJsonFile.txt dans le dossier localJsonData de l applicationDataDirectory');
    //localJsonFileInAppDataDir.createFile();
    //alert('un fichier nommé localJsonFile.txt a été céé dans le dossier localJsonData de l applicationDataDirectory');
} else if(localJsonFileInAppDataDir.exists()===true)  {
	alert('il existe un fichier nommé localJsonFile.txt dans le dossier localJsonData de l applicationDataDirectory');
}


//  ( vu que le dossier n'existe pas ) ,alors on duplique le contenu du fichier de même nom présent dans localRessourcesData
//on recup le contenu du fichier présent dans le dossier ressources
var localJsonFileInResDirContent = localJsonFileInResDir.read();
//quelques checks sur le type de contenu
Ti.API.info('resDir local Json Content as a blob: '+localJsonFileInResDirContent); // returns a blob , useful if contents are binary
//Ti.API.info('resDir local Json Content .text: '+localJsonFileInResDirContent.text); //  grab text prop. of blob to get the plain text contents file
//Ti.API.info('resDir local Json Content\'s MIME type: '+localJsonFileInResDirContent.mimeType); // use mimeType prop. to determine file's MIME type

//on remplit le premier fichier avec le contenu du fichier du même nom récupéré dans le ressourceDirectory ( celui la ligne juste au dessus )
//var localJsonToUpdate = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,+'localJsonData/localJsonFile.txt');
//localJsonFileInAppDataDir.write(localJsonFileInResDirContent.text);
localJsonFileInAppDataDir.write(localJsonFileInResDirContent.text);

var localJsonFileInAppDataDirContent = localJsonFileInAppDataDir.read();
Ti.API.info('AppDir local Json Content as a blob: '+localJsonFileInAppDataDirContent); // returns a blob , useful if contents are binary
Ti.API.info('AppDir local Json Content .text: '+localJsonFileInAppDataDirContent.text); //  grab text prop. of blob to get the plain text contents file
Ti.API.info('AppDir local Json Content\'s MIME type: '+localJsonFileInAppDataDirContent.mimeType); // use mimeType prop. to determine file's MIME type

//je teste la même chose sur un fichier pour le moment non existant de le dossier de ressources
var generatedFileInResDir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory+'localRessourcesData/ProgGeneratedJsonFile.txt');
generatedFileInResDir.write(localJsonFileInResDir.read());
Ti.API.info('ResDur local generated Json Content as a blob: '+generatedFileInResDir.read());
//on extrait les infos que l'o souhaite de notre ficher ( si c'est un json, on peux peux le parser/ le stringifier ^ )




/*
var goodLocalJSON = Ti.Filesystem.getFile('../localJSON/goodLocal.json');
if(goodLocalJSON.exists()===false) {
    // you don't need to do this, but you could...
    alert('le fichier goodLocalJSON existe pas');
    //fichiertexte.createFile();
}

var goodLocalJSONContent = goodLocalJSON.read();
Ti.API.info('goodLocalJSONContent as a blob: '+goodLocalJSONContent); // returns a blob , useful if contents are binary
Ti.API.info('goodLocalJSONContent text of the file: '+goodLocalJSONContent.text); //  grab text prop. of blob to get the plain text contents file
Ti.API.info('goodLocalJSONContent the file\'s MIME type: '+goodLocalJSONContent.mimeType); // use mimeType prop. to determine file's MIME type

*/



//Tweety Like !

var win = Ti.UI.createWindow();
win.open();

function formatDate()
{
	var date = new Date();
	var datestr = date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear();
	if (date.getHours()>=12)
	{
		datestr+=' '+(date.getHours()==12 ? date.getHours() : date.getHours()-12)+':'+date.getMinutes()+' PM';
	}
	else
	{
		datestr+=' '+date.getHours()+':'+date.getMinutes()+' AM';
	}
	return datestr;
}

var data = [
	{title:"Row 1"},
	{title:"Row 2"},
	{title:"Row 3"}
];

var lastRow = 4;

var tableView = Ti.UI.createTableView({
	data: data
});

win.add(tableView);

var border = Ti.UI.createView({
	backgroundColor:"#576c89",
	height:2,
	bottom:0
});

var tableHeader = Ti.UI.createView({
	backgroundColor:"#e2e7ed",
	width:320,
	height:60
});

// fake it til ya make it..  create a 2 pixel
// bottom border
tableHeader.add(border);

var arrow = Ti.UI.createView({
	backgroundImage:"images/whiteArrow.png",
	width:23,
	height:60,
	bottom:10,
	left:20
});

var statusLabel = Ti.UI.createLabel({
	text:"Pull to reload",
	left:55,
	width:200,
	bottom:30,
	height:"auto",
	color:"#576c89",
	textAlign:"center",
	font:{fontSize:13,fontWeight:"bold"},
	shadowColor:"#999",
	shadowOffset:{x:0,y:1}
});

var lastUpdatedLabel = Ti.UI.createLabel({
	text:"Last Updated: "+formatDate(),
	left:55,
	width:200,
	bottom:15,
	height:"auto",
	color:"#576c89",
	textAlign:"center",
	font:{fontSize:12},
	shadowColor:"#999",
	shadowOffset:{x:0,y:1}
});

var actInd = Titanium.UI.createActivityIndicator({
	left:20,
	bottom:13,
	width:30,
	height:30
});

tableHeader.add(arrow);
tableHeader.add(statusLabel);
tableHeader.add(lastUpdatedLabel);
tableHeader.add(actInd);

tableView.headerPullView = tableHeader;


var pulling = false;
var reloading = false;

function beginReloading()
{
	// just mock out the reload
	setTimeout(endReloading,2000);
}

function endReloading()
{
	// simulate loading
	for (var c=lastRow;c<lastRow+10;c++)
	{
		tableView.appendRow({title:"Row "+c});
	}
	lastRow += 10;

	// when you're done, just reset
	tableView.setContentInsets({top:0},{animated:true});
	reloading = false;
	lastUpdatedLabel.text = "Last Updated: "+formatDate();
	statusLabel.text = "Pull down to refresh...";
	actInd.hide();
	arrow.show();
}

tableView.addEventListener('scroll',function(e)
{
	var offset = e.contentOffset.y;
	if (offset <= -65.0 && !pulling)
	{
		var t = Ti.UI.create2DMatrix();
		t = t.rotate(-180);
		pulling = true;
		arrow.animate({transform:t,duration:180});
		statusLabel.text = "Release to refresh...";
	}
	else if (pulling && offset > -65.0 && offset < 0)
	{
		pulling = false;
		var t = Ti.UI.create2DMatrix();
		arrow.animate({transform:t,duration:180});
		statusLabel.text = "Pull down to refresh...";
	}
});

tableView.addEventListener('scrollEnd',function(e)
{
	if (pulling && !reloading && e.contentOffset.y <= -65.0)
	{
		reloading = true;
		pulling = false;
		arrow.hide();
		actInd.show();
		statusLabel.text = "Reloading...";
		tableView.setContentInsets({top:60},{animated:true});
		arrow.transform=Ti.UI.create2DMatrix();
		beginReloading();
	}
});

