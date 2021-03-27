var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'vertical',
    }
  }
});


// Board member tab animation
var tabs = $(".tabs");
var selector = $(".tabs").find("a").length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
$(".selector").css({
	left: activeItem.position.left + "px",
	width: activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
	e.preventDefault();
	$(".tabs a").removeClass("active");
	$(this).addClass("active");
	var activeWidth = $(this).innerWidth();
	var itemPos = $(this).position();
	$(".selector").css({
		left: itemPos.left + "px",
		width: activeWidth + "px"
	});
});


// TODO:Improve below code i.e., use function and pass element to be displayed in that
$("#title-current-board-desktop").on("click", function (e) {
	$('#current-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-ex-board-desktop").on("click", function (e) {
	$('#ex-board').fadeIn('slow');
	$("#current-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-advisory-board-mobile").on("click", function (e) {
	$('#advisory-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#current-board").fadeOut('fast');
});

$("#title-current-board-mobile").on("click", function (e) {
	$('#current-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-ex-board-mobile").on("click", function (e) {
	$('#ex-board').fadeIn('slow');
	$("#current-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
});

$("#title-advisory-board-desktop").on("click", function (e) {
	$('#advisory-board').fadeIn('slow');
	$("#ex-board").fadeOut('fast');
	$("#current-board").fadeOut('fast');
});

$(document).ready(function () {
	keepCurrentBoardDiv();

	if ($('#content-desktop').css('display') == 'block') {
		$("#title-current-board-desktop").click();

	} else {
		$("#title-current-board-mobile").click();
	}
})

function keepCurrentBoardDiv() {
	$("#ex-board").fadeOut('fast');
	$("#advisory-board").fadeOut('fast');
}