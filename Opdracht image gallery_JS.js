
window.onload = function() {
	var noScript = document.getElementById('noscript');
    noScript.style.display = "none";
	var button = document.getElementById('hoofdknop');
	var visible = 0;
    button.addEventListener("click", function() {
		var a = document.querySelectorAll('.screenshot');
		var b = a.length;
		if (visible == 0) {
			for (i = 0; i<b; i++) {
				a[i].style.display = "none";
				var show = document.createElement('a');
				if (show[i]) { }
				else {
					show.innerHTML = "Toon foto";
					var pad = a[i].getAttribute('src');
					show.href = pad;
					document.getElementsByClassName('toggle')[i].appendChild(show);
					show.addEventListener("click", function(c) {
						c.preventDefault();
					});
					show.addEventListener("mouseover", function() {
						show[i].style.display = "block";
					});
				}
			}				
			visible = 1;
		}
		else {
			for (i = 0; i<b; i++) {
				a[i].style.display = "block";
			}
			visible = 0;
		}
	});
}
