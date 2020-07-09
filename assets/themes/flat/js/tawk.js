var tawk_loaded = false;

// when loading on demand, people have to click twice, after loading the iframe, click automatically
var tawk_autoclick = true;

// load tawk chat window only on demand
function load_tawk() {
	if (!tawk_loaded) {

		document.getElementById("tawk-no-tracking-large").style.display = "none";
		document.getElementById("tawk-no-tracking-small").style.display = "none";

		var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
		(function(){
			var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
			s1.async=true;
			s1.src='https://embed.tawk.to/565d82718c0c22d759259aee/default';
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
			console.log("Embed tawk script");
			if (tawk_autoclick == false) {
				return;
			}

			setTimeout(
				function() {
					var chat_widgets = document.querySelectorAll('[title="chat widget"]');
					var i;
					for (i = 0; i < chat_widgets.length; ++i) {
						var chat_frame = chat_widgets[i];
						console.log("widget", chat_frame);
						var box = chat_frame.contentDocument.getElementById("tawkchat-minified-box");
						if (box) {
							console.log("Touch minified box", box);
							var event = new Event('touchstart');
							box.dispatchEvent(event);
							event = new Event('touchend');
							box.dispatchEvent(event);
							return;
						}
						var wrapper = chat_frame.contentDocument.getElementById("tawkchat-minified-wrapper");
						if (wrapper) {
							console.log("Click minified wrapper", wrapper);
							wrapper.click();
							return;
						}
					}
					console.log("Done");
				}, 1000);

		})();

		Tawk_API.onLoad = function(){
			tawk_loaded = true;

			console.log("Loaded tawk widget (only now)");
			var pageStatus = Tawk_API.getStatus();

			if (pageStatus === 'away') {
				var s2 = document.getElementById("short-message");
				s2.value = "Not there! Email us please!";
			}

			Tawk_API.maximize();
		};
	}
}

