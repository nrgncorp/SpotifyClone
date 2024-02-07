var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();