import $ from "jquery";

var $win = $(window);
var $summary = $('.summary-text');
var $lineup = $('.tab-content');
var $totems = $('.totem-container');
var $logoContent = $('.content');

// Start animations when all assets are loaded
$logoContent.ready(function() {
    setTimeout(function() {
        $totems.each(function() {
            $(this).css('transform', 'translate(0,0)')
            $(this).css('opacity', '1')
        })
    }, 500);
    
    setTimeout(function() {
        $logoContent.each(function() {
            $(this).css('transform', 'scale(1)')
            $(this).css('opacity', '1')
        })
    }, 100);
});
console.log($summary);
$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();
    
    if ($summary.length != 0) {
        if ((scrollTop - $summary[0].offsetTop) > -600) {
            $summary.css('transform', 'translate(0,0)')
            $summary.css('opacity', '1')
        }
    }
    if ((scrollTop - $lineup[0].offsetTop) > -600) {
        $lineup.css('opacity', '1')
    }

}).scroll();