(function() {

	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { href: 'css/style.css', lockViewport: true },
			'normal': { href: 'css/style-normal.css' }
		}
	});
			window.onload = function() {
				document.body.className = '';
		}
})();