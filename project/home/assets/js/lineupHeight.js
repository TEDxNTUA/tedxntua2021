import $ from "jquery";

var $lineup = $(".info:not(:last)");

var maxHeight = Math.max.apply(null, $lineup.map(function ()
{
    return $(this).height();
}).get());

$lineup.height(maxHeight);