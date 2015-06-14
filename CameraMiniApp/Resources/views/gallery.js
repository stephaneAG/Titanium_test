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


var imagesArray = [];
/////////////////////////
var dirFullPath = Ti.Filesystem.resourcesDirectory + Ti.Filesystem.separator + 'Images' + Ti.Filesystem.separator + 'userImgs';
var dir = Titanium.Filesystem.getFile(dirFullPath);

var dirItems = dir.getDirectoryListing();
Ti.API.info( 'Directory listing: ' + dirItems );

/*
for ( var i=0; i<dirItems.length; i++ ) 
{
    var itemFullPath = dirFullPath + Titanium.Filesystem.separator + dirItems[i].toString();

    var item = Ti.Filesystem.getFile(itemFullPath);

    if(IsImage(item.name))
        {imagesArray.push(item);}
}
/////////////////////////
*/



//openPhotoGallery({animated:true});

//on definit le dossier contenant les images du user ( elles ne sont pas dans la gallerie ;p )
//var testDir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'myTestDir');
//testDir.createDirectory(); // this creates the directory

//var userPicsFolder = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory,'userPictures' );
//userPicsFolder.createDirectory();
//Ti.API.info( 'Directory listing: ' + userPicsFolder.getDirectoryListing() );

