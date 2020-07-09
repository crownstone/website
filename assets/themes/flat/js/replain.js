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

			/*
			var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
			s1.async=true;
			s1.src='https://embed.replain.to/565d82718c0c22d759259aee/default';
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
			*/
			console.log("Embed replain script");
			if (replain_autoclick == false) {
				return;
			}

			setTimeout(
				function() {
					var div_containing_iframe = document.querySelectorAll('[title="Re:plain"]');
					var i;
					for (i = 0; i < div_containing_iframe.length; ++i) {
						var chat_frame = div_containing_iframe[i];
						console.log("Widget frame", chat_frame);
						var widgets = chat_frame.contentDocument.querySelectorAll('[title="Chat with the operator"]');
						if (widgets) {
							console.log("Click widget 0", widgets);
							widgets[0].click();
							break;
						}
					}
					console.log("Done");
					replain_loaded = true;
				}, 1000);

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

