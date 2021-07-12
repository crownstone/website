var replain_loaded = false;

// when loading on demand, people have to click twice, after loading the iframe, click automatically
var replain_autoclick = true;

// load replain chat window only on demand
function load_replain() {
	if (!replain_loaded) {

		document.getElementById("chat-widget-no-tracking-large").style.display = "none";
		document.getElementById("chat-widget-no-tracking-small").style.display = "none";

		window.replainSettings = { id: '5f60c83a-5450-458a-ae49-064e0c376f67' };

		(function(u){

			var s=document.createElement('script');
			s.type='text/javascript';
			s.async=true;
			s.src=u;
			var x=document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s,x);

			console.log("Embed replain script");
			if (replain_autoclick == false) {
				return;
			}

			function evokeChat() {
				console.log("Evoke chat window");
				var div_containing_iframe = document.querySelectorAll('[title="Re:plain"]');
				var i;
				for (i = 0; i < div_containing_iframe.length; ++i) {
					var chat_frame = div_containing_iframe[i];
					// console.log("Widget frame", chat_frame);
					var widgets = chat_frame.contentDocument.querySelectorAll('[title="Chat with the operator"]');
					if (widgets) {
						console.log("Click widget 0");
						if (widgets[0]) {
							widgets[0].click();
							replain_loaded = true;
						}
						break;
					}
				}
				if (replain_loaded) {
					console.log("Done");
				} else {
					console.log("Try again");
					setTimeout(evokeChat, 1000);
				}
			}

			setTimeout(evokeChat, 1000);

		})('https://widget.replain.cc/dist/client.js');

		/*
		Tawk_API.onLoad = function(){
			replain_loaded = true;

			console.log("Loaded replain widget (only now)");
			var pageStatus = Tawk_API.getStatus();

			if (pageStatus === 'away') {
				var s2 = document.getElementById("short-message");
				s2.value = "Not there! Email us please!";
			}

			Tawk_API.maximize();
		};
		*/
	}
}

