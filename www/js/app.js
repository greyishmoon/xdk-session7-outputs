/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    
    // Listener for button
    $('#randomButton').on("click", function(){
        output();
    });
    
}
document.addEventListener("app.Ready", onAppReady, false) ;


function output()
{
    result = random();
    $("#randomResult").text("Result was: " + result);
    
    if (result)
        {
            navigator.notification.beep(1);	//beep once
            //vibrate for 2000 milliseconds
            navigator.vibrate(500);

        } else {
            navigator.notification.beep(2);	//beep twice
            //vibrate for 200 milliseconds
            //wait for 300 milliseconds
            //wait for 500 milliseconds
            navigator.vibrate([200, 300, 200, 300, 500]);

        }
    
//    alert("CLICKED");
}

function random() {
	return !Math.round(Math.random());
}
