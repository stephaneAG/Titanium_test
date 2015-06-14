/**
 * @author Stéphane ADAM-GARNIER
 */

var currentWin = Titanium.UI.currentWindow;

var homeLabel = Titanium.UI.createLabel({
	color:'#999',
	height: 30,
	top: 20,
	text:'Welcome to myGallery App !',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

currentWin.add(homeLabel);

var button = Titanium.UI.createButton({
	//top: 200,
	height: 200,
	width: 200,
   title: 'Shoot!'
});

currentWin.add(button);

button.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
   showCaptureUI();
});











function showCaptureUI(){
	
	
	Titanium.Media.showCamera({
    success:function(event) {
        // called when media returned from the camera
        Ti.API.debug('Our type was: '+event.mediaType);
        if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
            var imageView = Ti.UI.createImageView({
                width:currentWin.width,
                height:currentWin.height,
                image:event.media
            });
            currentWin.add(imageView);
			
			var closeImgViewBtn = Titanium.UI.createButton({
				top: 20,
				left: 10,
				height: 30,
				width: 50,
   				title: 'Close'
			});
			
			closeImgViewBtn.addEventListener('click',function(e) {
   				Titanium.API.info("You clicked the close media button");
   				imageView.hide();
   				//closeImgViewBtn.hide();
   				//currentWin.remove(movieView);
			});
			
            imageView.add(closeImgViewBtn);
            //closeImgViewBtn.show();
            
        } else if(event.mediaType == Ti.Media.MEDIA_TYPE_VIDEO) {
           
           var movieView = Titanium.Media.createVideoPlayer({
    		  media:event.media,
    	      movieControlStyle: Titanium.Media.VIDEO_CONTROL_EMBEDDED
		   });
		   
		   Titanium.Media.saveToPhotoGallery(event.media);
           currentWin.add(movieView);
			
		   var closeMovieViewBtn = Titanium.UI.createButton({
				top: 20,
				left: 10,
				height: 30,
				width: 50,
   				title: 'Close'
			});
			
			closeMovieViewBtn.addEventListener('click',function(e) {
   				Titanium.API.info("You clicked the close media button");
   				//movieView.hide();
   				//closeMovieViewBtn.hide();
   				currentWin.remove(movieView);
			});
		   
           movieView.add(closeMovieViewBtn);
           //closeMovieViewBtn.show();
           
           
        } else {
            alert("got the wrong type back ="+event.mediaType);
        }
        
        
    },
    cancel:function() {
        // called when user cancels taking a picture
    },
    error:function(error) {
        // called when there's an error
        var a = Titanium.UI.createAlertDialog({title:'Camera'});
        if (error.code == Titanium.Media.NO_CAMERA) {
            a.setMessage('Please run this test on device');
        } else {
            a.setMessage('Unexpected error: ' + error.code);
        }
        a.show();
    },
    saveToPhotoGallery:true,
    allowEditing:false,
    mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]

	});

	galleryWin.show();

}
