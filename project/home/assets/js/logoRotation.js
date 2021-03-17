import $ from 'jquery'

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$(window).on("scroll", debounce(function() {
    var $mainLogo = $("#summary-totem");
    rotate(window.pageYOffset * 0.7 % 360);

    function rotate(degree) {
    // For webkit browsers: e.g. Chrome
        $mainLogo.css({ WebkitTransform: 'rotateY(' + degree + 'deg)'});
    // For Mozilla browser: e.g. Firefox
        $mainLogo.css({ '-moz-transform': 'rotateY(' + degree + 'deg)'});
    }
}, 10))