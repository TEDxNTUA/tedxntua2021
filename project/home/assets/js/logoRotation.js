import $ from 'jquery'

window.addEventListener('scroll', function() {
    var $mainLogo = $("#summary-totem");
    rotate(window.pageYOffset * 0.7 % 360);

    function rotate(degree) {
    // For webkit browsers: e.g. Chrome
        $mainLogo.css({ WebkitTransform: 'rotateY(' + degree + 'deg)'});
    // For Mozilla browser: e.g. Firefox
        $mainLogo.css({ '-moz-transform': 'rotateY(' + degree + 'deg)'});
    }
});