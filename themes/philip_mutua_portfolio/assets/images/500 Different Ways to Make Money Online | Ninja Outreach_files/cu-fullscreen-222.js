document.addEventListener('DOMContentLoaded', function(){
	    var code = '<style>.vyper-222-lower{cursor: pointer;}.vyper-222-lower:hover{cursor: pointer;}input#vyperop222 {display:none;}.vyper-222-lower label{text-transform:uppercase;text-align:center;}.vyper-222-lower label:hover{cursor:pointer;}.vyper-222-overlay{position: fixed;width: 100%;height: 100%;top: 0;left: 0;background: #0d6182;font-size: 20px;z-index: 99999999;}.vyper-222-overlay label{width: 58px;height:58px;cursor:pointer;z-index: 99999999;position: absolute;top: 60px;right: 60px;transition: all 200ms;font-size: 40px;font-weight: bold;text-decoration: none;color: #10a350;border: none !important;}.vyper-222-overlay nav {text-align: center;position: relative;top: 50%;height: 60%;font-size: 45px;-webkit-transform: translateY(-50%);transform: translateY(-50%);z-index: 99999999;}.vyper-222-overlay ul {list-style: none;padding: 0;margin: 0 auto;display: inline-block;height: 100%;position: relative;}.vyper-222-overlay ul li {display: block;height: 20%;height: calc(100% / 5);min-height: 54px;}.vyper-222-overlay ul li a {font-weight: 300;display: block;color: white;text-decoration:none;-webkit-transition: color 0.2s;transition: color 0.2s;font-family: Lato;text-transform:uppercase;}.vyper-222-overlay ul li a:hover,.vyper-222-overlay ul li a:focus {color: #849368;}.vyper-222-lower~.vyper-222-overlay-vyper{opacity: 0;visibility: hidden;-webkit-transition: opacity 0.5s, visibility 0s 0.5s;transition: opacity 0.5s, visibility 0s 0.5s;}#vyperop222:checked~.vyper-222-overlay-vyper{opacity: 1;visibility: visible;-webkit-transition: opacity 0.5s;transition: opacity 0.5s;}.vyper-222-overlay-vyper nav {-moz-perspective: 300px;}.vyper-222-overlay-vyper nav ul {opacity: 0.4;-webkit-transform: translateY(-25%) rotateX(35deg);transform: translateY(-25%) rotateX(35deg);-webkit-transition: -webkit-transform 0.5s, opacity 0.5s;transition: transform 0.5s, opacity 0.5s;}#vyperop222:checked~.vyper-222-overlay-vyper nav ul {opacity: 1;-webkit-transform: rotateX(0deg);transform: rotateX(0deg);}#vyperop222:not(:checked)~.vyper-222-overlay-vyper nav ul {-webkit-transform: translateY(25%) rotateX(-35deg);transform: translateY(25%) rotateX(-35deg);}.vyper-222-input1 {padding: 15px;font-size: 15px !important;display: inline-block !important;width: 60% !important;border: none !important;height: 60px !important;-webkit-appearance: none;-webkit-border-radius: 0;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;vertical-align: text-top !important;}.vyper-222-submitbutton {box-shadow: inset 0 -3px 0 0 rgba(0,0,0,.27);-moz-box-shadow: inset 0 -3px 0 0 rgba(0,0,0,.27);-webkit-box-shadow: inset 0 -3px 0 0 rgba(0,0,0,.27);border: none;display: inline-block;padding: 15px;background-color: #10a350;width: 40% !important;height: 60px !important;font-size: 15px;font-weight: bold;color: #FFF;-webkit-appearance: none;-webkit-border-radius: 0;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;vertical-align: text-top;}.vyper-222-h2 {color: #ffffff;font-family: Lato;}.vyper-222-text {color: #75a0a8 !important;font-family: Lato !important;}.vyper-222-credit {position: fixed; bottom: 20px; left: 20px; background-color: #10a350; font-size: 13px; padding: 5px; border-radius: 3px;}.vyper-cta-top-bar {width: 100%;top: 0px;left: 0px;position: fixed;height: 100px;z-index: 99999998;box-shadow: 0px 6px 24.19px 2px rgba(2, 27, 68, 0.11);background-color: #ffffff;}.vyper-cta-top-center {padding: 20px; margin: auto; text-align: center; width: 100%;}.vyper-cta-top-left {padding: 20px; text-align: left; width: 100%;}.vyper-cta-image {width: 140px; padding-right: 20px; display: inline-block;}.vyper-right-text-cta-top {display: inline-block;vertical-align: top;text-align: left;font-size: 17px;margin-top: 20px;margin-left: 0px;color: #333333;}.vyper-cta-notification {position: fixed;width: 500px;bottom: 30px;left: 30px;box-shadow: 0px 6px 24.19px 2px rgba(2, 27, 68, 0.11);background-color: #ffffff;border-radius: 12px;z-index: 99999998;color: #333333;}.vyper-cta-notification-rightside {position: fixed;width: 500px;bottom: 30px;right: 30px;box-shadow: 0px 6px 24.19px 2px rgba(2, 27, 68, 0.11);background-color: #ffffff;border-radius: 12px;z-index: 99999998;color: #333333;}.vyper-cta-notification-left {padding: 20px;	padding-bottom: 10px;}.vyper-right-text-cta-notification {display: inline-block; vertical-align: top; text-align: left; font-size: 18px; width: 300px;}.vyper-cta-button {white-space: nowrap; margin-top: 0px; font-size: 16px; margin-bottom: 0px; margin: 0px; border-radius: 6px !important; color: #ffffff; border: 0px; padding: 10px; margin-top: 20px;background-color: #dddddd;}.vyper-right-text-cta-notification .vyper-cta-button{margin: auto;margin-top: 15px;text-align: center;display: block;}.vyper-cta-button a:hover {color: #FFF;}@media screen and (min-width: 769px) and (max-width: 1128px) {.vyper-right-text-cta-top {display: inline-block;vertical-align: top;text-align: left;font-size: 14px;max-width: 600px;margin-top: 20px;margin-left: 0px;color: #333333;}}@media screen and (min-width: 120px) and (max-width: 768px) {.vyper-222-input1 {display: block !important;width: 100% !important;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;margin-bottom: 0px !important;}.vyper-222-submitbutton {box-shadow: inset 0 -3px 0 0 rgba(0,0,0,.27);-moz-box-shadow: inset 0 -3px 0 0 rgba(0,0,0,.27);-webkit-box-shadow: inset 0 -3px 0 0 rgba(0,0,0,.27);border: none;display: block;padding: 15px;float: none !important;background-color: #10a350 !important;width: 100% !important;height: 60px !important;font-size: 15px;font-weight: bold;color: #FFF;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;margin-top: 0px !important;}#vyper-222-lead_magnet_image {max-height: 400px;max-width: 100%;float: none;}.vyper-222-inner {width: 100%;}.vyper-222-overlay label{width: 20px;height:20px;cursor:pointer;z-index: 99999999;position: absolute;top: 20px;right: 20px;transition: all 200ms;font-size: 40px;font-weight: bold;text-decoration: none;color: #10a350;border: none !important;}.vyper-222-credit {background-color: #10a350; font-size: 13px; padding: 5px; border-radius: 3px;}.vyper-cta-notification {position: fixed;width: 94%;bottom: 3%;right: 3%;left: 3%;box-shadow: 0px 6px 24.19px 2px rgba(2, 27, 68, 0.11);text-align: center;font-size: 13px;font-family: Lato, sans-serif;border-radius: 6px;}.vyper-cta-notification-rightside {position: fixed;width: 94%;bottom: 3%;right: 3%;left: 3%;box-shadow: 0px 6px 24.19px 2px rgba(2, 27, 68, 0.11);background-color: #FFF;text-align: center;font-size: 13px;font-family: Lato, sans-serif;border-radius: 6px;}.vyper-right-text-cta-notification {width: 100%; font-size: 16px;}.vyper-right-text-cta-top {margin-top: 0px; margin-left: 0px; width: 100%; font-size: 16px;}.vyper-cta-top-bar {position: fixed;width: 94%;top: initial;height: initial;bottom: 3%;right: 3%;left: 3%;box-shadow: 0px 6px 24.19px 2px rgba(2, 27, 68, 0.11);background-color: #FFF;font-size: 13px;font-family: Lato, sans-serif;border-radius: 6px;}.vyper-cta-top-center {width: initial;}.vyper-cta-top-left {width: initial; text-align: center;}.vyper-right-text-cta-top .vyper-cta-button{margin-top: 15px;text-align: center;display: block;}.vyper-cta-image {padding-bottom: 20px;}}.vyper-x a{position: absolute;right: 14px;top: 10px;font-family: Helvetica Neue, sans-serif;font-size: 15px;color: #333333;}.vyper-slideDown{animation-name: vyper-slideDown;-webkit-animation-name: vyper-slideDown;animation-duration: 1s;-webkit-animation-duration: 1s;animation-timing-function: ease;-webkit-animation-timing-function: ease;visibility: visible !important;}@keyframes vyper-slideDown {0% {transform: translateY(-100%);}50%{transform: translateY(8%);}65%{transform: translateY(-4%);}80%{transform: translateY(4%);}95%{transform: translateY(-2%);}100% {transform: translateY(0%);}}@-webkit-keyframes vyper-slideDown {0% {-webkit-transform: translateY(-100%);}50%{-webkit-transform: translateY(8%);}65%{-webkit-transform: translateY(-4%);}80%{-webkit-transform: translateY(4%);}95%{-webkit-transform: translateY(-2%);}100% {-webkit-transform: translateY(0%);}}.vyper-slideRight{animation-name: vyper-lideRight;-webkit-animation-name: vyper-slideRight;animation-duration: 1s;-webkit-animation-duration: 1s;animation-timing-function: ease-in-out;-webkit-animation-timing-function: ease-in-out;visibility: visible !important;}@keyframes vyper-slideRight {0% {transform: translateX(-150%);}50%{transform: translateX(8%);}65%{transform: translateX(-4%);}80%{transform: translateX(4%);}95%{transform: translateX(-2%);}100% {transform: translateX(0%);}}@-webkit-keyframes vyper-slideRight {0% {-webkit-transform: translateX(-150%);}50%{-webkit-transform: translateX(8%);}65%{-webkit-transform: translateX(-4%);}80%{-webkit-transform: translateX(4%);}95%{-webkit-transform: translateX(-2%);}100% {-webkit-transform: translateX(0%);}}.vyper-slideLeft{animation-name: vyper-slideLeft;-webkit-animation-name: vyper-slideLeft;animation-duration: 1s;-webkit-animation-duration: 1s;animation-timing-function: ease-in-out;-webkit-animation-timing-function: ease-in-out;visibility: visible !important;}@keyframes vyper-slideLeft {0% {transform: translateX(150%);}50%{transform: translateX(-8%);}65%{transform: translateX(4%);}80%{transform: translateX(-4%);}95%{transform: translateX(2%);}100% {transform: translateX(0%);}}@-webkit-keyframes vyper-slideLeft {0% {-webkit-transform: translateX(150%);}50%{-webkit-transform: translateX(-8%);}65%{-webkit-transform: translateX(4%);}80%{-webkit-transform: translateX(-4%);}95%{-webkit-transform: translateX(2%);}100% {-webkit-transform: translateX(0%);}}</style><link href="//fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"><link href="//fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"><input type="checkbox" id="vyperop222"></input><a class="vyper-222-lower" href="#vypervyper-222-overlay" style="display: none"><label for="vyperop222">click here to check the box</label></a><div class="vyper-222-overlay vyper-222-overlay-vyper" style="z-index: 99999999"><label for="vyperop222">&times;</label><nav><div style="position: fixed !important; top: 50% !important; left: 50% !important; -webkit-transform: translate(-50%, -50%) !important; transform: translate(-50%, -50%); width: 700px; max-width: 95%; text-align: center"><style> .vyper-222-inner { width: 100%; }</style><div class="vyper-222-inner" style="margin: auto; display: inline-block; " ><h1 class="vyper-222-headline" style="color: #ffffff; font-family: Lato; margin-top: 10px; margin-bottom: 10px; font-size: 30px; font-weight: bold; line-height: 120%">Which email should we send it to?</h2><p class="vyper-222-subheading" style="color: #75a0a8; font-family: Lato; line-height: 120%; margin: 0; margin-bottom: 20px; margin-top: 15px; font-size: 18px; ">You&#039;re gonna love this free guide.</p><form id="w0" class="vyper-222-preview-form" action="https://vyper.io/cu/222/2" method="post" style=""><input type="hidden" name="_csrf" value="M2x4eFdHcFlqWTFAPiwYIHIgTy0/DDcxdwJIETY1GzNAJ00Xeh8xKQ=="><input type="text" name="email" class="vyper-222-input1" placeholder="Your email address" style="border-radius: 0px !important; margin: 0px; font-size: 15px"><input type="submit" class="vyper-222-submitbutton" name="submit" value="Send It To Me!" style="margin-top: 0px; margin-bottom: 0px; margin: 0px; background-color: #10a350; border-radius: 0px !important; color: #ffffff"><p class="vyper-222-text vyper-222-disclaimer" style="font-size: 13px; margin-top: 20px; ">No spam, unsubscribe any time.</p></form></div></div></nav><div class="vyper-222-credit"><a href="http://vyper.io/?utm_source=cu_222" style="color: #ffffff;">Powered by VYPER Content Upgrades</a></div></div><div id="vyper-cta-type" class="vyper-cta-top-bar vyper-slideDown" style="display: none; background-color: #ffffff, color: #333333 "><div id="vyper-cta-position" class="vyper-cta-top-center"><div id="vyper-cta-image" class="vyper-cta-image"><img src="" style="width: 100%; "></div><div id="vyper-cta-text" class="vyper-right-text-cta-top">Grab my awesome content upgrade! &nbsp; <a href="#vyperpopup" class="vyper-cta-button vyper-triggers-222" style="color: #ffffff">Download</a> &nbsp; <br /><div class="vyper-x" id="vyper-x"><a href="" onClick="vypercloseCTA(); return false;" style="color: #333333">&times;</a></div></div></div></div>';
	    document.body.insertAdjacentHTML('afterbegin', code);
	}, false);
	
	
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
	
	
	
	
	function vyperpop222(){
	    // do something
		
        var anchors222 = document.getElementsByClassName("vyper-triggers-222");
        for(var i = 0; i < anchors222.length; i++) {
            var anchor222 = anchors222[i];
		  
                anchor222.onclick = function() {
                    
				  
				  
				  
			  	if( isMobile.any() ) 
			  	{
			  		window.open("https://vyper.io/content-upgrades/view?id=222");
			      }
			  	else
			  	{
			        document.getElementById("vyperop222").click();
			  	}



			    var xhttp = new XMLHttpRequest();
			    xhttp.onreadystatechange = function() {
			      if (this.readyState == 4 && this.status == 200) {
			        document.getElementById("demo").innerHTML = this.responseText;
			      }
			    };
			    xhttp.open("GET", "https://vyper.io/content-upgrades/increment?cu_id=222", true);
			    xhttp.send();

                }
            
        }
		
		

		
		
		
	}



	var addFunctionOnWindowLoad222 = function(callback){
	      if(window.addEventListener){
	          window.addEventListener('load',callback,false);
	      }else{
	          window.attachEvent('onload',callback);
	      }
	}

	addFunctionOnWindowLoad222(vyperpop222);
	  
	document.addEventListener('DOMContentLoaded', function(){
		var vyperInlineElement = document.querySelector('#vyperInlineElement');
		var vyperX = document.querySelector('#vyper-x');
	})
	
	

	
		function vypercloseCTA(){
			
			var removeCTA = document.getElementById("vyper-cta-type");
			removeCTA.parentNode.removeChild(removeCTA);
		
		
		}
	 
	 
	window.onscroll = function() {vyperctaFunction()};

	function vyperctaFunction() {
	    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
	        document.getElementById("vyper-cta-type").style.display = "none";
	    } else {
	       document.getElementById("vyper-cta-type").style.display = "none";
	    }
	}
	
	
	
	

	
	