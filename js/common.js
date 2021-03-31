// $(document).ready(function() {
// 	// open/close mobile navigation
// 	const $navHam = $('#nav-ham');
// 	const $overlay = $('#overlay');
// 	const $navMenu = $('#nav-menu');
// 	const $navLinks = $('.nav-item__link');
// 	const $productsMenu = $('#nav-menu-products');
// 	const $productsMenuList = $('#nav-menu-products-list');
//
// 	function toggleMenu() {
// 		if ($navMenu.hasClass('is-open')) {
// 			$overlay.removeClass('is-open');
// 			$navMenu.removeClass('is-open').slideUp(100, 'linear');
// 		} else {
// 			$overlay.addClass('is-open');
// 			$navMenu.addClass('is-open').slideDown(100, 'linear');
// 		}
// 	}
//
// 	function toggleSubMenu() {
// 		if ($productsMenuList.hasClass('is-open')) {
// 			$productsMenuList.removeClass('is-open').slideUp(100, 'linear');
// 		} else {
// 			$productsMenuList.addClass('is-open').slideDown(100, 'linear');
// 		}
// 	}
//
// 	$navHam.on('click', toggleMenu);
// 	$overlay.on('click', toggleMenu);
// 	$productsMenu.on('click', toggleSubMenu);
// 	$navLinks.on('click', toggleMenu); // close the nav menu
// });

// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// スムーススクロール

$(document).ready(function() {
	function scrollToTop() {
		$('html, body').animate({
			scrollTop: $('#scroll-to-top-anchor').offset().top
		}, 500);
	}

	function checkOffset() {
		const $scrollToTopBtn = $('#scroll-to-top-button');

		const footerHeight = $('#footer').offset().top;
		const scrollToTopBtnHeight = $scrollToTopBtn.height();
		const scrollPosition = $(document).scrollTop();

		if ((scrollPosition + window.innerHeight) < footerHeight) {
			$scrollToTopBtn.css({
				position: 'fixed',
				top: 'auto',
			});
		} else {
			const tmp_height = 0 - scrollToTopBtnHeight;
			$scrollToTopBtn.css({
				position: 'absolute',
				/*top: `${0 - scrollToTopBtnHeight}px`,*/
				top: tmp_height + 'px',
			});
		}
	}

	function showImages() {
		$('.image').each(function() {
			if ($(window).scrollTop() + $(window).height() - 50 > $(this).offset().top) {
				$(this).addClass('fadeIn');
			}
		})
	}

	showImages();

	$(document).on('scroll', function() {
		checkOffset();
		showImages();
	});

	$('#scroll-to-top-button').on('click', scrollToTop);
});
