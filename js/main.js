 (function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	// Fix full-height behavior on all mobile browsers (especially Safari)
    var fullHeight = function() {
      function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          $('.js-fullheight').css({
            'min-height': `calc(var(--vh, 1vh) * 100)`,
            'height': 'auto'
          });
        } else {
          $('.js-fullheight').css({
            'height': `calc(var(--vh, 1vh) * 100)`,
            'min-height': 'auto'
          });
        }
      }
    
      // Run once and on resize/orientation change
      setHeight();
      $(window).on('resize orientationchange', function() {
        setTimeout(setHeight, 100); // delay to handle Safari UI animation
      });
    };
    fullHeight();





	// Disable Scrollax and Stellar only on mobile
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      if (typeof $.Scrollax === 'function') {
        try { $.Scrollax().destroy(); } catch (e) {}
      }
      if (typeof $(window).stellar === 'function') {
        try { $(window).stellar('destroy'); } catch (e) {}
      }
    }



	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

    

    // Burger Menu
    var burgerMenu = function() {
      $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
        event.preventDefault();
    
        if ($('#ftco-nav').is(':visible')) {
          $(this).removeClass('active');
        } else {
          $(this).addClass('active');
        }
      });
    };
    burgerMenu();
    
    // Smooth scroll for menu links (fixed version)
    var onePageClick = function() {
      $(document).on('click', '#ftco-nav a[href^="#"]', function(event) {
        // Only trigger on real clicks, not on page load or hash focus
        event.preventDefault();
    
        var target = $(this).attr('href');
        if ($(target).length) {
          $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 70
          }, 500);
        }
      });
    };
    
    // Initialize smooth scroll only after full page load
    $(window).on('load', onePageClick);

	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			autoplaySpeed:2000,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// Navbar scroll behavior
        /*var scrollWindow = function () {
          // Run only on screens wider than 768px (desktop/tablet)
          if ($(window).width() > 768) {
            $(window).on('scroll', function () {
              var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');
        
              if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                  navbar.addClass('scrolled');
                }
              }
        
              if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                  navbar.removeClass('scrolled sleep');
                }
              }
        
              if (st > 350) {
                if (!navbar.hasClass('awake')) {
                  navbar.addClass('awake');
                }
                if (sd.length > 0) {
                  sd.addClass('sleep');
                }
              }
        
              if (st < 350) {
                if (navbar.hasClass('awake')) {
                  navbar.removeClass('awake');
                  navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                  sd.removeClass('sleep');
                }
              }
            });
          }
        };
        
        // Delay the initialization slightly to avoid early layout jumps
        setTimeout(scrollWindow, 600);*/


	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


    // Fix: allow scrolling when touching hero image on mobile
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      (function($){
        var restorePointer = function(el) {
          // restore with a slight delay for safety
          setTimeout(function(){ el.css('pointer-events','auto'); }, 300);
        };
    
        $('.hero .one-third.img').each(function(){
          var $imgLayer = $(this);
    
          $imgLayer.on('touchstart', function(e){
            // allow scroll to pass through this layer
            $imgLayer.css('pointer-events','none');
          });
    
          $imgLayer.on('touchend touchcancel', function(e){
            restorePointer($imgLayer);
          });
    
          // fallback: restore automatically in case touchend doesn't trigger
          $imgLayer.on('touchstart', function(){
            setTimeout(function(){ restorePointer($imgLayer); }, 1000);
          });
        });
      })(jQuery);
    }


})(jQuery);



$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

