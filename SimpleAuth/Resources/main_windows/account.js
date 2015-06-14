/**
 * @author Stéphane GARNIER
 */

var win = Titanium.UI.currentWindow;  
  
/* 
* Interface 
*/  
var scrollView = Titanium.UI.createScrollView({  
    contentWidth:'auto',  
    contentHeight:'auto',  
    top:0,  
    showVerticalScrollIndicator:true,  
    showHorizontalScrollIndicator:false  
});  
win.add(scrollView);  
  
var username = Titanium.UI.createTextField({  
    color:'#336699',  
    top:10,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Username',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
scrollView.add(username);  
  
var password1 = Titanium.UI.createTextField({  
    color:'#336699',  
    top:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Password',  
    passwordMask:true,  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
scrollView.add(password1);  
  
var password2 = Titanium.UI.createTextField({  
    color:'#336699',  
    top:110,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Password Again',  
    passwordMask:true,  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
scrollView.add(password2);  
  
var names = Titanium.UI.createTextField({  
    color:'#336699',  
    top:160,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Name',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
scrollView.add(names);  
  
var email = Titanium.UI.createTextField({  
    color:'#336699',  
    top:210,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'email',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
scrollView.add(email);  
  
var createBtn = Titanium.UI.createButton({  
    title:'Create Account',  
    top:260,  
    width:130,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
scrollView.add(createBtn);  





var testresults;  
  
function checkemail(emailAddress)  
{  
    var str = emailAddress;  
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;  
    if (filter.test(str))  
    {  
        testresults = true;  
    }  
    else  
    {  
        testresults = false;  
    }  
    return (testresults);  
};  
  
var createReq = Titanium.Network.createHTTPClient();  
createReq.onload = function()  
{  
    if (this.responseText == "Insert failed" || this.responseText == "That username or email already exists")  
    {  
        createBtn.enabled = true;  
        createBtn.opacity = 1;  
        alert(this.responseText);  
    }  
    else  
    {  
        var alertDialog = Titanium.UI.createAlertDialog({  
            title: 'Alert',  
            message: this.responseText,  
            buttonNames: ['OK']  
        });  
        alertDialog.show();  
        alertDialog.addEventListener('click',function(e)  
        {  
            win.tabGroup.setActiveTab(0);  
        });  
    }  
};  




createReq.onload = function()  
{  
    if (this.responseText == "Nous n'avons pu donner suite â votre inscription" || this.responseText == "Ce nom d'utilisateur et cette  adresse email sont déja utilisés")  
    {  
        win.remove(overlay);  
        alert(this.responseText);  
    }  
    else  
    {  
        var alertDialog = Titanium.UI.createAlertDialog({  
            title: 'Alert',  
            message: this.responseText,  
            buttonNames: ['OK']  
        });  
        alertDialog.show();  
        alertDialog.addEventListener('click',function(e)  
        {  
            win.tabGroup.setActiveTab(0);  
        });  
    }  
};  




createBtn.addEventListener('click',function(e)  
{  
    if (username.value != '' && password1.value != '' && password2.value != '' && names.value != '' && email.value != '')  
    {  
        if (password1.value != password2.value)  
        {  
            alert("Les mots de passe ne correspondent pas");  
        }  
        else  
        {  
            if (!checkemail(email.value))  
            {  
                alert("Veuillez entrer une adresse email valide");  
            }  
            else  
            {  
                //alert("Everything looks good so send the data");  //done ! > and working !! ^
                
                
                createBtn.enabled = false;  
                createBtn.opacity = 0.3;  
                createReq.open("POST","http://localhost:8888/post_register.php");  
                var params = {  
                    username: username.value,  
                    password: Ti.Utils.md5HexDigest(password1.value),  
                    names: names.value,  
                    email: email.value  
                };  
                createReq.send(params);
                
                
            }  
        }  
    }  
    else  
    {  
        alert("Tous les champs sont obligatoires");  
    }  
});  



