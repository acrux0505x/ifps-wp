(function ($) {
  "use strict";

  var pt_video_banner = function ($scope, $) {
    var video_banner = $scope.find('.banner-area.video-banner .banner-items');

    if (!video_banner.length) {
      return false;
    }

    yprm_init_banner();

    jQuery(window).on("load resize", function () {
      jQuery('.header-space').css('height', jQuery('.site-header').outerHeight() + jQuery('.header + .navigation').outerHeight() + jQuery('.ypromo-site-bar').outerHeight());

      jQuery('main.main-row').css('min-height', jQuery(window).outerHeight() - jQuery('.site-footer').outerHeight() - jQuery('.footer-social-button').outerHeight() - jQuery('.header-space:not(.hide)').outerHeight() - jQuery('.ypromo-site-bar').outerHeight() - jQuery('#wpadminbar').outerHeight());

      jQuery('.protected-post-form .cell').css('height', jQuery(window).outerHeight() - jQuery('.site-footer').outerHeight() - jQuery('.footer-social-button').outerHeight() - jQuery('.header-space:not(.hide)').outerHeight() - jQuery('.ypromo-site-bar').outerHeight() - jQuery('#wpadminbar').outerHeight());

      jQuery('.banner:not(.fixed-height)').each(function () {
        var coef = 0;
        if (jQuery(this).parents('.banner-area').hasClass('external-indent') && !jQuery(this).parents('.banner-area').hasClass('with-carousel-nav')) {
          coef = 70;
        }
        jQuery(this).css('height', jQuery(window).outerHeight() - jQuery('.header-space:not(.hide)').outerHeight() - jQuery('#wpadminbar').outerHeight() - coef);
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

      jQuery('.full-screen-nav .cell').css('height', jQuery(window).height() - 20 - jQuery('#wpadminbar').height());

      jQuery('.side-header .cell').css('height', jQuery('.side-header .wrap').height());
    });
  }

  // Make sure you run this code under Elementor.
  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/yprm_video_banner.default', pt_video_banner);
  });

})(jQuery);