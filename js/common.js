$(function() {

	$('.top-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav:true,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  }
                }
  })

  $('.goods-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  768: {
                    items: 3
                  },
                  1200: {
                    items: 4
                  },
                  1440: {
                    items: 5
                  }
                }
  })

  $('.review-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  992: {
                    items: 3
                  },
                  1440: {
                    items: 4
                  }
                }
  })

  $('.gallary-slider').owlCarousel({
                loop: true,
                margin: 20,
                nav:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  768: {
                    items: 3
                  }
                }
  })

  $('.action-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  992: {
                    items: 2
                  }
                }
  })

  $('.news-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  992: {
                    items: 3
                  }
                }
  })

	$(".phone-mask").mask("+7 (999) 999-99-99");

  $('.nav-toggle').click(function(){
    $('.cat-mnu-bx').toggle();
    $(this).toggleClass('act');
  })

  $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
  });
  $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
  });

  $('.pop-call').on('click', function(event){
    event.preventDefault()
    $('.overlay, .popup-call').fadeIn();
  })
  $('.pop-enter').on('click', function(event){
    event.preventDefault()
    $('.overlay, .popup-enter').fadeIn();
  })
  $('.overlay, .popup .close').on('click', function(event){
    $('.overlay, .popup').fadeOut();
  })

  $('.pop-lk').on('click', function(event){
    event.preventDefault()
    $('.overlay, .popup-lk').fadeIn();
  })
  $('.pop-rega').on('click', function(event){
    event.preventDefault()
    $('.overlay, .popup-rega').fadeIn();
  })
  $('.pop-thx1').on('click', function(event){
    event.preventDefault()
    $('.overlay, .popup-thx1').fadeIn();
  })
  $('.pop-thx2').on('click', function(event){
    event.preventDefault()
    $('.overlay, .popup-thx2').fadeIn();
  })

  $('.enter-tab-sw .opener').on('click', function(){
    $('.enter-tab-sw .opener').removeClass('act');
    $(this).addClass('act');
    $('.enter-tab').hide();
  })
  $('.enter-tab-sw .tab1-opener').on('click', function(){
    $('.enter-tab1').show();
  })
  $('.enter-tab-sw .tab2-opener').on('click', function(){
    $('.enter-tab2').show();
  })

  $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
    $(this).toggleClass("active");
    $('.nav-bx').toggle();
  });

  $(".filter-bx .bx").children('.hh').click(function() {
      let cc = $(this).parent();
      if(cc.hasClass('opened')){
       cc.removeClass('opened');
      }else{
       cc.addClass('opened');
      }
  });

  $("#price-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 15000,
      grid: true,
    from: 3000,
    to: 10000,
    /*onChange: function (data) {
      $('#slider-from').val($('.irs-from').text())
      $('#slider-to').val($('.irs-to').text())
    }*/
  });

  $(".filter-opener").click(function() {
    $('.filter-bx').toggle();
    $(this).toggleClass('act');
  });

  $('.how-tabs-sw .opener').not('.disabled').on('click', function(){
    $('.how-tabs-sw .opener').removeClass('act');
    $(this).addClass('act');
    $('.how-tab-bx').hide();
  })
  $('.how-tab1-opener').on('click', function(){
    $('.how-tab1').show();
  })
  $('.how-tab2-opener').on('click', function(){
    $('.how-tab2').show();
  })
  $('.how-tab3-opener').on('click', function(){
    $('.how-tab3').show();
  })
  $('.how-tab4-opener').on('click', function(){
    $('.how-tab4').show();
  })
  $('.how-tab5-opener').on('click', function(){
    $('.how-tab5').show();
  })

  $(".order-item").children('.hh').click(function() {
      let cc = $(this).parent();
      if(cc.hasClass('opened')){
       cc.removeClass('opened');
      }else{
       cc.addClass('opened');
      }
  });

  $('.with-delivary').on('change', function(){
    $('.with-deliv-bx').show();
    $('.no-deliv-bx').hide();
    $('.basket-inf-bx .del-price').addClass('act')
  })
  $('.no-delivary').on('change', function(){
    $('.with-deliv-bx').hide();
    $('.no-deliv-bx').show();
    $('.basket-inf-bx .del-price').removeClass('act')
  })

  $('.no-popup .btn').on('click', function(event){
    event.preventDefault()
  })

	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
		   $('.header').addClass('scrolling_down');
		   $('.header').removeClass('scrolling_up');
	   } else {
		   $('.header').addClass('scrolling_up');
		   $('.header').removeClass('scrolling_down');
	   }
	   lastScrollTop = st;
	});

	var header = $(".header");
	var scrollChange = 1;
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop() > 140;

	    if (scroll >= scrollChange) {
	        header.addClass('hide-head-line');
	    } else {
	        header.removeClass("hide-head-line");
	    }
	});

});
//cart slider
$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

  sync2.on('initialized.owl.carousel', function() {
    sync2.find(".owl-item.center").eq(0).addClass("current");
  })

  /* centered items */
  sync2.find('.owl-item').each(function(index) {
    var item = $(this).attr('data-position', index);
  })

  sync2.owlCarousel({
    items: slidesPerPage,
    dots: false,
    nav: false,
    loop: true,
    margin:20,
    smartSpeed: 200,
    slideSpeed: 1000,
    slideBy: slidesPerPage,
    responsiveRefreshRate: 100
  }).on('click', '.owl-item', function(e) {
        var carouselSync1 = $('#sync1').data('owl.carousel');
        e.preventDefault();

        var current = $(this).index();
        carouselSync1.to(carouselSync1.relative(current));

        /* centered items */
        sync2.trigger('to.owl-carousel', $(this).data('position'));
      });

    function syncPosition(el) {

        var current = el.item.index;

        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        console.log('currentSync1: ' + current)

        if (current > end) {
          sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
          sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
});
