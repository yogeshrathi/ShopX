$(document).ready(function () {
	usertoggleBox();
	if ((".select-menu").length == 1) {
		$('.select-menu').select2();
	}

	$('.m-menu').click(function () {
		$('.nav-wrapper').addClass('nav-open');
		$('body').addClass('body-overlay');
	});

	$('.nav-close').click(function () {
		$('.nav-wrapper').removeClass('nav-open');
		$('body').removeClass('body-overlay');
	});

});

function usertoggleBox() {
	$(document).click(function (e) {
		if ($(e.target).closest('.user-menu, .user-dropdown').length == 0) {
			if ($('.user-dropdown').is(':visible')) {
				$('.user-dropdown').slideUp();
			}
		}
	});
	$(".user-menu").click(function () {
		if ($(this).next(".user-dropdown").is(":visible")) {
			$(this).next().slideUp();
		} else {
			$(".user-dropdown").slideUp();
			$(this).next().slideDown();
		}
	});
}


$(".header-rightcol .theme-button-icon").on("click", function () {
	if ($(this).hasClass("light-theme")) {
		$("#switch_style").attr("href", "assets/css/dark-theme.css");
		$(this).addClass("dark-theme").removeClass("light-theme");
	}
	else {
		$("#switch_style").attr("href", "assets/css/light-theme.css");
		$(this).addClass("light-theme").removeClass("dark-theme");
	}
});

