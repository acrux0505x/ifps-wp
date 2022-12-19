(function ($) {
  "use strict";

  var pt_banner = function ($scope, $) {

    var banner = $scope.find('.banner.banner-items'),
      banner_categories = $scope.find('.banner-wrapper'),
      circle_nav = $scope.find('.banner-circle-nav'),
      banner_id = banner.attr('id');

    if (!banner.length) {
      return false;
    }

    yprm_init_banner();

    $('#' + banner_id).each(function () {
      if (banner_categories.find('.banner-categories').length) {
        banner_categories.find('.banner-categories').each(function () {
          jQuery(this).on('initialize.owl.carousel', function (property) {
            jQuery(this).find('.item').each(function () {
              var num = leadZero(jQuery(this).index() + 1);
              jQuery(this).find('.num').text(num);
            });
          });

          if (jQuery(this).find('.item').length > 1) {
            if (jQuery(this).find('.item').length > 4) {
              var count = 4;
              var mob = 2;
              var table = 3;
            } else {
              var count = jQuery(this).find('.item').length;
              var mob = 2;
              var table = 2;
            }

            jQuery(this).addClass('owl-carousel').owlCarousel({
              loop: true,
              items: 1,
              nav: true,
              dots: false,
              autoplay: false,
              navClass: ['owl-prev basic-ui-icon-left-arrow', 'owl-next basic-ui-icon-right-arrow'],
              navText: false,
              responsive: {
                0: {
                  nav: false,
                },
                480: {
                  items: 1
                },
                768: {
                  nav: true,
                  items: mob
                },
                980: {
                  items: table
                },
                1200: {
                  items: count
                },
              },
            });
          }
        });
      }
    });

    $(window).trigger('resize');

    
      banner_categories.find('.banner-right-buttons div.category').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (jQuery(this).hasClass('active')) {
          jQuery(this).parents('.banner-area').find('.banner-categories').removeClass('active');
          jQuery(this).removeClass('active');
        } else {
          jQuery(this).parents('.banner-area').find('.banner-categories').addClass('active');
          jQuery(this).addClass('active').siblings().removeClass('active');
          jQuery(this).parents('.banner-area').find('.banner-about').removeClass('active');
        }
      });

      banner_categories.find('.banner-right-buttons div.about').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (jQuery(this).hasClass('active')) {
          jQuery(this).parents('.banner-area').find('.banner-about').removeClass('active');
          jQuery(this).removeClass('active');
        } else {
          jQuery(this).parents('.banner-area').find('.banner-about').addClass('active');
          jQuery(this).addClass('active').siblings().removeClass('active');
          jQuery(this).parents('.banner-area').find('.banner-categories').removeClass('active');
        }
      });
    

    banner.find('.words').each(function () {
      var typed2 = new Typed(this, {
        strings: jQuery(this).attr('data-array').split(','),
        typeSpeed: 100,
        backSpeed: 0,
        fadeOut: true,
        loop: true
      });
    });

    jQuery(window).on("load resize", function () {
      jQuery('.header-space').css('height', jQuery('.site-header').outerHeight() + jQuery('.header + .navigation').outerHeight() + jQuery('.ypromo-site-bar').outerHeight());

      jQuery('main.main-row').css('min-height', jQuery(window).outerHeight() - jQuery('.site-footer').outerHeight() - jQuery('.footer-social-button').outerHeight() - jQuery('.header-space:not(.hide)').outerHeight() - jQuery('.ypromo-site-bar').outerHeight() - jQuery('#wpadminbar').outerHeight());

      jQuery('.protected-post-form .cell').css('height', jQuery(window).outerHeight() - jQuery('.site-footer').outerHeight() - jQuery('.footer-social-button').outerHeight() - jQuery('.header-space:not(.hide)').outerHeight() - jQuery('.ypromo-site-bar').outerHeight() - jQuery('#wpadminbar').outerHeight());

      jQuery('.banner:not(.fixed-height)').each(function () {
        var coef = 0;
        if (jQuery(this).parents('.banner-area').hasClass('external-indent') && !jQuery(this).parents('.banner-area').hasClass('with-carousel-nav')) {
          coef = 70;
        }

        if ( jQuery('#wpadminbar').length ) {
          jQuery(this).css('height', jQuery(window).outerHeight() - jQuery('.header-space:not(.hide)').outerHeight() - jQuery('#wpadminbar').outerHeight() - coef);
        } else {
          jQuery(this).css('height', jQuery(window).outerHeight() - jQuery('.header-space:not(.hide)').outerHeight() - coef);
        }
        
        jQuery(this).find('.cell').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-categories .item').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-about .cell').css('height', jQuery(this).height() - 20);
        jQuery(this).parent().find('.banner-about .image').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-about .text').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-right-buttons .cell').css('height', jQuery(this).height());
      });

      jQuery('.banner.fixed-height').each(function () {
        jQuery(this).find('.cell').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-categories .item').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-about .cell').css('height', jQuery(this).height() - 20);
        jQuery(this).parent().find('.banner-about .image').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-about .text').css('height', jQuery(this).height());
        jQuery(this).parent().find('.banner-right-buttons .cell').css('height', jQuery(this).height());
      });

      if ( jQuery('#wpadminbar').length ) {
        jQuery('.full-screen-nav .cell').css('height', jQuery(window).height() - 20 - jQuery('#wpadminbar').height());
      } else {
        jQuery('.full-screen-nav .cell').css('height', jQuery(window).height() - 20 );
      }

      jQuery('.side-header .cell').css('height', jQuery('.side-header .wrap').height());
    });
  }

  // Make sure you run this code under Elementor.
  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/yprm_banner.default', pt_banner);
  });

})(jQuery);