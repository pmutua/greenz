(function($) { 'use strict';

	 // Calculate clients viewport
		function viewport() {
			var e = window, a = 'inner';
			if(!('innerWidth' in window )) {
				a = 'client';
				e = document.documentElement || document.body;
			}
			return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}

		var w=window,d=document,
			e=d.documentElement,
			g=d.getElementsByTagName('body')[0],
			x=w.innerWidth||e.clientWidth||g.clientWidth, // Viewport Width
			y=w.innerHeight||e.clientHeight||g.clientHeight; // Viewport Height

	 // Checkbox and Radio buttons

	//if buttons are inside label
	function radio_checkbox_animation() {
		var checkBtn = $('label').find('input[type="checkbox"]');
		var checkLabel = checkBtn.parent('label');
		var radioBtn = $('label').find('input[type="radio"]');

		checkLabel.addClass('checkbox');

		checkLabel.click(function(){
			var $this = $(this);
			if($this.find('input').is(':checked')){
				$this.addClass('checked');
			}
			else{
				$this.removeClass('checked');
			}
		});

		var checkBtnAfter = $('label + input[type="checkbox"]');
		var checkLabelBefore = checkBtnAfter.prev('label');

		checkLabelBefore.click(function(){
			var $this = $(this);
			$this.toggleClass('checked');
		});

		radioBtn.change(function(){
			var $this = $(this);
			if($this.is(':checked')){
				$this.parent('label').siblings().removeClass('checked');
				$this.parent('label').addClass('checked');
			}
			else{
				$this.parent('label').removeClass('checked');
			}
		});
	}

	// Format image

	function formatImg(){
		// find post format image link
		var post_image_link = $('.masonry .format-image figure.featured-image').find('a');

		if(x < 768 && post_image_link.length){
			// remove thickbox class and replace href with post permalink
			post_image_link.removeClass('thickbox');

			post_image_link.each(function(){

				var $this = $(this);

				// Get permalink from data attr and content class
				var post_permalink = $this.data('post_url');
				var post_content_class = $this.attr('class');

				if(post_content_class.indexOf("no-content") >= 0){
					$this.find('img').unwrap();
				}
				else {
					$this.attr('href', post_permalink);
				}
			});

		}

		// set link on image post format for tablets
		if(x > 767 && x <= 1024){
			// remove thickbox class and replace href with post permalink
			post_image_link.each(function(){

				var $this = $(this);

				// Get permalink from data attr and content class
				var post_permalink = $this.data('post_url');
				var post_content_class = $this.attr('class');

				if(post_content_class.indexOf("no-content") < 0){
					$this.attr('href', post_permalink).removeClass('thickbox');
				}
			});
		}
	}

	// Format Video

	function videoFormat(){
		var entryVideo = $('div.entry-video');

		if(entryVideo.length){
			entryVideo.each(function(){
				var $this = $(this);

				$this.find('.featured-image').closest('.entry-video').addClass('has-img');
			});
		}
	}

	// Thickbox

	var videoThickbox = function (){
		var thickboxVideo = $('.format-video a.thickbox');

		if(thickboxVideo.length){
			thickboxVideo.on('click touchstart', function(){
				setTimeout(function(){
					$('#TB_window').addClass('format-video');
				}, 200);
			});
		}
	};

	$(document).ready(function($){

		// Calculate clients viewport
		function viewport() {
			var e = window, a = 'inner';
			if(!('innerWidth' in window )) {
				a = 'client';
				e = document.documentElement || document.body;
			}
			return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}

		var w=window,d=document,
			e=d.documentElement,
			g=d.getElementsByTagName('body')[0],
			x=w.innerWidth||e.clientWidth||g.clientWidth, // Viewport Width
			y=w.innerHeight||e.clientHeight||g.clientHeight; // Viewport Height

		// Global Vars

		var $window = $(window);
		var htmlOffsetTop = parseInt($('html').css('margin-top'));
		var wScrollTop = $window.scrollTop();
		var body = $('body');
		var mainHeader = $('#masthead');
		var mainContent = $('#content');
		var mainHeaderHeight = mainHeader.outerHeight();
		var sidebar = $('#secondary');

		// Demo iFrame fix

		if( window.self !== window.top ) {
			if(x > 1024){
				body.css({width: 'calc(100vw - 15px)'});
			}
			else{
				body.css({width: '100vw'});
			}
		}

		// Outline none on mousedown for focused elements

		body.on('mousedown', '*', function(e) {
			if(($(this).is(':focus') || $(this).is(e.target)) && $(this).css('outline-style') == 'none') {
				$(this).css('outline', 'none').on('blur', function() {
					$(this).off('blur').css('outline', '');
				});
			}
		});

		// Retina Logo

		if($('.retina-logo img').length){
			var retinaImage = $('.retina-logo img');

			var imageLoaded = function () {
				var theImage = new Image();

				theImage.src = retinaImage.attr('src');

				var imageWidth = theImage.width;

				retinaImage.width(imageWidth / 2);
			};

			retinaImage.each(function() {
				if( this.complete ) {
					imageLoaded.call( this );
				} else {
					$(this).one('load', imageLoaded);
				}
			});
		}

		// Disable search submit if input empty
		$( '.search-submit' ).prop( 'disabled', true );
		$( '.search-field' ).keyup( function() {
			$('.search-submit').prop( 'disabled', this.value == "" ? true : false );
		});

		// Main Header

		// sticky

		if(body.hasClass('sticky-header') && x > 767){
			mainContent = $('body:not(.fullwidth-slider):not(.carousel-slider) #content');

			mainContent.css({marginTop: (mainHeaderHeight)});

			var stickyHeaderBgColor = function(){
				var headerBgColor = mainHeader.data('bg-color');
				var mainHeaderSubMenu = mainHeader.find('.sub-menu');
				var mainHeaderAll = mainHeader.add(mainHeaderSubMenu);

				if($window.scrollTop() > 80 && !body.hasClass('fullwidth-slider')){
					mainHeaderAll.css({backgroundColor: headerBgColor});
				}
				else if($window.scrollTop() > (y - mainHeaderHeight - htmlOffsetTop) && body.hasClass('fullwidth-slider')){
					mainHeaderAll.css({backgroundColor: headerBgColor});
				}
				else{
					mainHeaderAll.css({backgroundColor: ''});
				}
			};
			stickyHeaderBgColor();

			$window.scroll(function(){
				setTimeout(function(){
					stickyHeaderBgColor();
				}, 200);
			});

			if(body.hasClass('carousel-slider')){
				if(x > 767){
					body.css({'marginTop': mainHeaderHeight});
				}
				else{
					body.css({'marginTop': ''});
				}
			}
		}

		// show content

		body.css({opacity: 1});

		// dropdown button

		var mainMenuDropdownLink = $('.nav-menu .menu-item-has-children > a, .nav-menu .page_item_has_children > a');
		var dropDownArrow = $('<a href="#" class="dropdown-toggle"><span class="screen-reader-text">toggle child menu</span><i class="icon-drop-down"></i></a>');

		mainMenuDropdownLink.after(dropDownArrow);

		// dropdown open on click

		var dropDownButton = mainMenuDropdownLink.next('a.dropdown-toggle');

		dropDownButton.on('click', function(e){
			e.preventDefault();
			var $this = $(this);
			$this.parent('li').toggleClass('toggle-on').find('.toggle-on').removeClass('toggle-on');
			$this.parent('li').siblings().removeClass('toggle-on');
		});

		// Featured Slider

		var slider;
		var direction;

		if(body.hasClass('rtl')){
			direction = true;
		}
		else{
			direction = false;
		}

		if(body.hasClass('fullwidth-slider')){

			slider = $('div.featured-slider');
			var sliderWrap = slider.parent('.featured-slider-wrap');
			var slide = slider.find('article');

			sliderWrap.css({top: htmlOffsetTop});

			if(x > 768){
				slide.height(y - htmlOffsetTop);
			}
			else{
				slide.height('360px');
			}

			if(x > 1024){
				if(body.hasClass('sticky-header')){
					mainContent.css({marginTop: (y - htmlOffsetTop)});
				}
				else{
					mainContent.css({marginTop: (y - mainHeaderHeight - htmlOffsetTop)});
				}

				var sliderHeader = slider.find('.slide-text .entry-title, .slide-text .entry-meta');

				sliderHeader.hover(
					function(){
						$(this).closest('.featured-slider').addClass('opaque');
					},
					function() {
						$(this).closest('.featured-slider').removeClass('opaque');
					});
			}
			else{
				mainContent.css({marginTop: ''});
			}

			slide.each(function(){
				var slideImgSrc = $(this).find('img').attr('src');
				$(this).find('.featured-image').css('background-image', 'url('+slideImgSrc+')');
			});

			slider.slick({
				slide: 'article',
				infinite: true,
				speed: 600,
				fade: true,
				useTransform: true,
				centerMode: true,
				centerPadding: 0,
				initialSlide: 0,
				dots: false,
				touchThreshold: 20,
				slidesToShow: 1,
				cssEase: 'cubic-bezier(0.28, 0.12, 0.22, 1)',
				rtl: direction,
				responsive: [
					{
						breakpoint: 769,
						settings: {
							draggable: true,
							centerPadding: 0,
							arrows: false,
							dots: true
						}
					}
				]
			});

			// show slider after init
			setTimeout(function(){
				slider.closest('.featured-slider-wrap').css({opacity: 1});
			}, 2000);

			var fullwidthSlider = function() {
				var sliderHeight = slider.outerHeight();
				if(x > 1024){
					if(wScrollTop > 0){
						slider.css({opacity: (sliderHeight - wScrollTop) / sliderHeight});
					}
					else{
						slider.css({opacity: 1});
					}
				}
			};
			fullwidthSlider();

			$window.scroll(function(){
				setTimeout(function(){
					wScrollTop = $(window).scrollTop();
					fullwidthSlider();
				}, 200);
			});
		}
		else if(body.hasClass('carousel-slider')){
			slider = $('div.featured-slider');

			slider.slick({
				slide: 'article',
				infinite: true,
				speed: 500,
				useTransform: true,
				centerMode: true,
				centerPadding: '20%',
				draggable: true,
				initialSlide: 0,
				dots: false,
				touchThreshold: 20,
				slidesToShow: 1,
				cssEase: 'cubic-bezier(0.28, 0.12, 0.22, 1)',
				rtl: direction,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							draggable: true,
							centerPadding: 0,
							arrows: false,
							dots: true
						}
					}
				]
			});

			// show slider after init
			setTimeout(function(){
				slider.closest('.featured-slider-wrap').css({opacity: 1});
			}, 1000);
		}

		// Checkbox and Radio buttons

		radio_checkbox_animation();

		// Template Headline

		if(body.hasClass('page-template-template-headline')){
			var headline = $('div.headline-content-container');
			mainContent.prepend(headline);
			setTimeout(function(){
				headline.addClass('show-headline');
			}, 800);
		}

		// Format image

		formatImg();

		// big search field

		var bigSearchWrap = $('div.search-wrap');
		var bigSearchField = bigSearchWrap.find('.search-field');
		var bigSearchTrigger = $('#big-search-trigger');
		var bigSearchClose = $('#big-search-close');

		bigSearchClose.on('touchend click', function(e){
			e.preventDefault();
			var $this = $(this);
			if(body.hasClass('big-search')){
				body.removeClass('big-search');
				setTimeout(function(){
					$this.siblings('.search-wrap').find('.search-field').blur();
				}, 100);
			}
		});

		bigSearchTrigger.on('touchend click', function(e){
			e.preventDefault();
			e.stopPropagation();
			var $this = $(this);
			body.addClass('big-search');
			setTimeout(function(){
				$this.siblings('.search-wrap').find('.search-field').focus();
			}, 100);
		});

		bigSearchField.on('touchend click', function(e){
			e.stopPropagation();
		});

		// Featured image - Portrait / Remove Post Navigation on scroll

		if(body.hasClass('single-post')){

			var portraitImg = $('.featured-portrait');
			var postNav = $('.posts-navigation');

			if(portraitImg.length){
				var portraitSibling = $('.entry-header');

				if(x > 767){
					portraitSibling.after(portraitImg);
					portraitImg.parent().addClass('portrait-wrap');
					portraitImg.css({opacity: 1});
				}
			}

			var hidePostNav = function() {
				var siteFooterOffsetTop = $('#colophon').offset().top;
				if(x > 1024){
					if(wScrollTop > (siteFooterOffsetTop - y - 100)){
						postNav.addClass('hide-nav');
					}
					else{
						postNav.removeClass('hide-nav');
					}
				}
			};
			hidePostNav();

			$window.scroll(function(){
				setTimeout(function(){
					wScrollTop = $(window).scrollTop();
					hidePostNav();
				}, 200);
			});

		}

		// Dropcaps

		if(body.hasClass('single-post') || body.hasClass('page')){

			var dropcap = $('span.dropcap');
			if(dropcap.length){
				dropcap.each(function(){
					var $this = $(this);
					$this.attr('data-dropcap', $this.text());
				});
			}

		}

		// Sharedaddy

		function shareDaddy(){
			var shareTitle = $('.sd-title');

			if(shareTitle.length){
				shareTitle.on('click', function(){
					$(this).closest('.sd-social').toggleClass('sd-open');
				});
			}
		}

		shareDaddy();

		// Back to top

		if(x > 1024){
			var toTopArrow = $('a.back-to-top');

			toTopArrow.on('click touchstart', function (e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: 0}, 800, 'swing');
				return false;
			});

			$(window).scroll(function () {
				var $this = $(this);
				if($this.scrollTop() > 600) {
					toTopArrow.fadeIn();
				}
				else{
					toTopArrow.fadeOut();
				}
			});
		}

		// Gallery with full size images

		function galleryFullSizeImg(){
			var fullSizeThumbGallery = $('div.gallery-size-full');

			if(fullSizeThumbGallery.length){
				fullSizeThumbGallery.each(function(){
					var $this = $(this);
					var galleryItemCount = $this.find('.gallery-item').length;
					if(body.hasClass('single')){
						$this.append('<span class="gallery-count">01 / 0'+galleryItemCount+'</span>');
					}
					else{
						$this.parent().addClass('fullsize-gallery').siblings().find('.edit-link').append('<span class="gallery-count">01 / 0'+galleryItemCount+'</span>');
					}
				});
			}
		}

		galleryFullSizeImg();

		// Format Video

		videoFormat();

		// Thickbox

		if(!body.hasClass('single')){

			videoThickbox();

		}

		// If single has sidebar

		if(sidebar.length){
			$('#primary').addClass('has-sidebar');
		}

	}); // End Document Ready

	$(window).load(function(){

		// Calculate clients viewport
		function viewport() {
			var e = window, a = 'inner';
			if(!('innerWidth' in window )) {
				a = 'client';
				e = document.documentElement || document.body;
			}
			return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}

		var w=window,d=document,
			e=d.documentElement,
			g=d.getElementsByTagName('body')[0],
			x=w.innerWidth||e.clientWidth||g.clientWidth, // Viewport Width
			y=w.innerHeight||e.clientHeight||g.clientHeight; // Viewport Height

		// Global Vars

		var body = $('body');

		body.addClass('page-loaded');

		// Center aligned images

		if(body.hasClass('single-post') || body.hasClass('page') && !body.hasClass('page-template-template-headline') && !body.hasClass('page-template-template-portfolio')){

			var centerAlignImg = $('.content-area.col-sm-12 .aligncenter');

			if(centerAlignImg.length){
				centerAlignImg.each(function(){
					var $this = $(this);

					var centerAlignImgWidth = $this.width();
					var entryContentWidth = $('.entry-content').width();

					if(x > 1280){
						if(centerAlignImgWidth > entryContentWidth){
							$this.css({marginLeft: -((centerAlignImgWidth - entryContentWidth) / 2), opacity: 1});
						}
						else{
							$this.css({opacity: 1});
						}
					}
					else{
						$this.css({marginLeft: ''});
					}
				});

			}

		}

		// Masonry call

		var $container = $('div.masonry');

		$container.imagesLoaded( function() {
			$container.masonry({
				columnWidth: '.grid-sizer',
				itemSelector: '.masonry article',
				transitionDuration: 0
			}).masonry('layout');

			var infiniteHandle = $('#infinite-handle');

			var masonryChild = $container.find('article.hentry');

			infiniteHandle.css({opacity: 1});

			masonryChild.each(function(i){
				setTimeout(function(){
					masonryChild.eq(i).addClass('post-loaded animate');
				}, 200 * (i+1));
			});
		});

		// On Infinite Scroll Load

		var $container     = $('div.masonry'),
			infiniteHandle = $('#infinite-handle'),
			loadingImg     = js_vars.url + '/assets/img/spinner.gif',
			no_more_posts  = js_vars.no_more_text,
			loadNumber     = 1;

		if(infiniteHandle.length){

			if(x > 1024){
				infiniteHandle.parent().css('margin-bottom', 250);
			}
			else{
				infiniteHandle.parent().css('margin-bottom', 110);
			}
		}

		var opts = {
			lines: 7 // The number of lines to draw
			, length: 10 // The length of each line
			, width: 4 // The line thickness
			, radius: 10 // The radius of the inner circle
			, scale: 0.5 // Scales overall size of the spinner
			, corners: 1 // Corner roundness (0..1)
			, color: '#000' // #rgb or #rrggbb or array of colors
			, opacity: 0.1 // Opacity of the lines
			, rotate: 13 // The rotation offset
			, direction: 1 // 1: clockwise, -1: counterclockwise
			, speed: 1 // Rounds per second
			, trail: 74 // Afterglow percentage
			, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
			, zIndex: 2e9 // The z-index (defaults to 2000000000)
			, className: 'spinner' // The CSS class to assign to the spinner
			, top: 'auto' // Top position relative to parent
			, left: 'auto' // Left position relative to parent
			, shadow: false // Whether to render a shadow
			, hwaccel: false // Whether to use hardware acceleration
		};

		var target = document.getElementById('loading-is');
		var spinner = new Spinner(opts).spin(target);

		function spinnerShow(){
			$('#loading-is').show();
		}

		function spinnerHide(){
			$('#loading-is').hide();
		}

		$container.infinitescroll({
			navSelector  : '#infinite-handle',    // selector for the paged navigation
			nextSelector : '#infinite-handle .nav-next a',  // selector for the NEXT link (to page 2)
			itemSelector : 'div.masonry .hentry',
			loading: {
				finishedMsg: no_more_posts,
				msgText: '',
				//img: loadingImg,
				selector: '#loading-is'
			}
		},
		function(){

			// Reactivate masonry on post load

			var newEl = $container.children().not('article.post-loaded, span.infinite-loader, div.grid-sizer').addClass('post-loaded');

			newEl.hide();
			newEl.imagesLoaded(function () {

				// Reactivate masonry on post load

				$container.masonry('appended', newEl, true).masonry('reloadItems').masonry('layout');

				setTimeout(function(){
					newEl.each(function(i){
						var $this = $(this);

						if($this.find('iframe').length){
							var $iframe = $this.find('iframe');
							var $iframeSrc = $iframe.attr('src');

							$iframe.load($iframeSrc, function(){
								$container.masonry('layout');
							});
						}

						// Gallery with full size images

						var fullSizeThumbGallery = $this.find('div.gallery-size-full');

						if(fullSizeThumbGallery.length){
							fullSizeThumbGallery.each(function(){
								var $this = $(this);
								var galleryItemCount = $this.find('.gallery-item').length;
								if(body.hasClass('single')){
									$this.append('<span class="gallery-count">01 / 0'+galleryItemCount+'</span>');
								}
								else{
									$this.parent().addClass('fullsize-gallery').siblings().find('.edit-link').append('<span class="gallery-count">01 / 0'+galleryItemCount+'</span>');
								}
							});
						}

						setTimeout(function(){
							newEl.eq(i).addClass('animate');
						}, 200 * (i+1));
					});
				}, 150);

				// Checkbox and Radio buttons

				radio_checkbox_animation();

				// Format image

				formatImg();

				// Format Video

				videoFormat();

				// Thickbox

				videoThickbox();

			});

			// The maximum number of pages the current query can return.
			var max = parseInt( js_vars.maxPages );
			loadNumber++;
			spinnerHide();

			if ( js_vars.is_type == 'click' && loadNumber < max ) {
				// Display Load More button
				$('#infinite-handle').show();
			}

		});

		if ( 'infinite-scroll' == js_vars.paging_type && js_vars.is_type == 'scroll' ) {
			spinnerShow();
		}

		// If Infinite Scroll on click is choosen
		if ( 'infinite-scroll' == js_vars.paging_type && js_vars.is_type == 'click' ) {

			//Onclick InfiniteScroll
			$(window).unbind('.infscr');

			$("#infinite-handle .nav-next a").on('click', function(e){
				e.preventDefault();

				$container.infinitescroll('retrieve');
				spinnerShow();
				return false;
			});

		}

		if(body.hasClass('neverending')){
			var pagePaddingTop = parseInt($('#page').css('padding-top'));
			$container.css({minHeight: $('#main').height() + htmlOffsetTop + pagePaddingTop});
		}

	}); // End Window Load

	$(window).resize(function(){

		// Calculate clients viewport

		function viewport() {
			var e = window, a = 'inner';
			if(!('innerWidth' in window )) {
				a = 'client';
				e = document.documentElement || document.body;
			}
			return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}

		var w=window,d=document,
			e=d.documentElement,
			g=d.getElementsByTagName('body')[0],
			x=w.innerWidth||e.clientWidth||g.clientWidth, // Viewport Width
			y=w.innerHeight||e.clientHeight||g.clientHeight; // Viewport Height

		// Global Vars

		var $window = $(window);
		var body = $('body');
		var htmlOffsetTop = parseInt($('html').css('margin-top'));
		var wScrollTop = $window.scrollTop();
		var mainHeader = $('#masthead');
		var mainHeaderHeight = mainHeader.outerHeight();
		var mainContent = $('#content');

		// Demo iFrame fix

		if( window.self !== window.top ) {
			body.css({width: '100vw'});
		}

		// Center aligned images

		if(body.hasClass('single-post') || body.hasClass('page')){

			var centerAlignImg = $('.content-area.col-sm-12 .aligncenter');

			if(centerAlignImg.length){
				centerAlignImg.each(function(){
					var $this = $(this);

					var centerAlignImgWidth = $this.width();
					var entryContentWidth = $('.entry-content').width();

					if(x > 1280){
						if(centerAlignImgWidth > entryContentWidth){
							$this.css({marginLeft: -((centerAlignImgWidth - entryContentWidth) / 2), opacity: 1});
						}
						else{
							$this.css({opacity: 1});
						}
					}
					else{
						$this.css({marginLeft: ''});
					}
				});

			}

		}

		// Main Header

		// sticky

		if(body.hasClass('sticky-header')){
			mainContent = $('body:not(.fullwidth-slider):not(.carousel-slider) #content');
			if(x > 767){
				mainContent.css({marginTop: (mainHeaderHeight)});
			}
			else{
				mainContent.css({marginTop: ''});
			}


			if(body.hasClass('carousel-slider')){
				if(x > 767){
					body.css({'marginTop': mainHeaderHeight});
				}
				else{
					body.css({'marginTop': ''});
				}
			}
		}

		// Featured Slider

		var slider;

		if(body.hasClass('fullwidth-slider')){

			slider = $('div.featured-slider');
			var slide = slider.find('article');

			if(x > 768){
				slide.height(y - htmlOffsetTop);
			}
			else{
				slide.height('360px').width(x);
			}

			if(x > 1024){
				if(body.hasClass('sticky-header')){
					mainContent.css({marginTop: (y - htmlOffsetTop)});
				}
				else{
					mainContent.css({marginTop: (y - mainHeaderHeight - htmlOffsetTop)});
				}
			}
			else{
				mainContent.css({marginTop: ''});
			}
			var sliderHeight = slider.outerHeight();

			var fullwidthSlider = function() {
				if(x > 1024){
					if(wScrollTop > 0){
						slider.css({opacity: (sliderHeight - wScrollTop) / sliderHeight});
					}
					else{
						slider.css({opacity: 1});
					}
				}
			};
			fullwidthSlider();

			$window.scroll(function(){
				wScrollTop = $(window).scrollTop();
				fullwidthSlider();
			});

		}

		if(body.hasClass('carousel-slider')){
			if(x > 767){
				body.css({'marginTop': mainHeaderHeight});
			}
			else{
				body.css({'marginTop': ''});
			}
		}

		// Featured image - Portrait

		if(body.hasClass('single-post')){

			var portraitImg = $('.featured-portrait');

			if(portraitImg.length){
				var portraitSibling = $('.entry-header');

				if(x > 767){
					portraitSibling.after(portraitImg);
					portraitImg.parent().addClass('portrait-wrap');
				}
				else{
					portraitSibling.before(portraitImg);
					portraitImg.parent().removeClass('portrait-wrap');
				}
			}

		}

		// On Infinite Scroll Load

		var infiniteHandle = $('#infinite-handle');

		if(infiniteHandle.length){

			if(x > 1024){
				infiniteHandle.parent().css('margin-bottom', 250);
			}
			else{
				infiniteHandle.parent().css('margin-bottom', 110);
			}
		}

	}); // End Window Resize

})(jQuery);
