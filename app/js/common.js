$(function () {





	//animations

	//	$(document).ready(function () {
	//
	//		$('.first').addClass('visible');
	//		$('.main').on('focus load resize scroll', function () {
	//			$('.animated').each(function () {
	//				var elementTop = $(this).position().top + $('.main').scrollTop();
	//				var elementBot = $(this).position().top + $('.main').scrollTop() + $(this).height();
	//				var windowTop = $('.main').scrollTop();
	//				var windowBot = $('.main').scrollTop() + $(window).innerHeight();
	//
	//				if (((elementTop + $(this).height() * 0.7) <= windowBot) && (elementBot > windowTop)) {
	//					$(this).addClass('visible');
	//				} else if ((elementTop > windowBot) || (elementBot < windowTop)) {
	//					$(this).removeClass('visible');
	//				}
	//			});
	//		});
	//
	//	});


	$(document).ready(function () {
						if (window.matchMedia("(max-width: 1200px)").matches) {
							$('.choose__item').removeClass('active');
						}

		$(".choose__text").on("click", function (event) {

			if (!$(this).parent().hasClass("active") ) {
				$('.choose').addClass('active');
				event.preventDefault();
				$("[hash~='" + $(this).parent().attr("hash") + "']").addClass("active").siblings().removeClass("active");

				if (window.matchMedia("(max-width: 1200px)").matches) {
					$('.trade__tab').hide();
					$($(this).parent().attr("hash")).appendTo($(this).parent()).slideDown(300);
				} else {
					$($(this).parent().attr("hash")).fadeIn(300).siblings().hide();
				};
			} else {
				$(this).parent().removeClass('active');
				$('.choose').removeClass('active');
				$($(this).parent().attr("hash")).removeClass("active").hide();
			}

		});
		$(".trade__link").on("click", function (event) {
			if (!$(this).hasClass("active") ) {
				event.preventDefault();
				$("[hash~='" + $(this).attr("hash") + "']").addClass("active").siblings().removeClass("active");
					$($(this).attr("hash")).fadeIn(300).siblings().hide();
				
			} else {
				$(this).removeClass('active');
				$($(this).attr("hash")).removeClass("active").hide();
			}
		});
//		$(window).on("resize", function (event) {
//			document.location.reload(true);
//		});


	});



});
