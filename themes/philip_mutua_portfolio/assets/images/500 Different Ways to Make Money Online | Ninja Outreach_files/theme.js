// delay function
jQuery.fn.delay = function(time,func) {
	this.each(function() {
		setTimeout(func,time);
	})
	return this;
};

function doThis() {
	var images = jQuery('.img_cont img, a.img img').length;
	if (i >= images) {
		clearInterval(int);
	}
	jQuery('.img_cont img:hidden, a.img img:hidden').eq(0).fadeIn(500);
	i++;//add 1 to the count
}

jQuery(function () {
	var tabContainers = jQuery('div.tabs > div');
	jQuery('div.tabs ul.tabNav a').click(function () {
		tabContainers.slideUp();
		tabContainers.filter(this.hash).slideDown();
		jQuery('div.tabs ul.tabNav a').removeClass('selected');
		jQuery(this).addClass('selected');
		return false;
	}).filter('ul.tabNav a:first').click();
});

(function($) {
$(document).ready( function() {
	var $is_monthly = 1;
	var $pricingContainer = $('div.pricing-container');

	$('a.toggle-monthly').on( 'click', function(e) {
		e.preventDefault();

		if( !$(this).hasClass('active') ) {
			if( $is_monthly == 1 ) {
				$is_monthly = 0;
				$pricingContainer.removeClass('monthly').addClass('annually');
			} else {
				$is_monthly = 1;
				$pricingContainer.removeClass('annually').addClass('monthly');
			}

			$('a.toggle-monthly').removeClass('active');
			$(this).addClass('active');
		}

		console.log( 'Is Monthly: ' + $is_monthly );

		return false;
	});

	$('#pricingModal').on('show.bs.modal', function(event) {
		var $button = $(event.relatedTarget);
		var $modal = $(this);
		var $plan = $button.attr('data-plan');
		var $version = $button.attr('data-version');
		var $plan_id = '';
		var $event = '';
		
		if(!$plan) { return; }

		console.log( '=== Is monthly: ' + $is_monthly );
		console.log( 'Plan Name: ' + $plan );
		
		switch($plan) {
			case 'Blogger':
				if( $is_monthly == 1 ) {
					if( $version && $version == 3 ) { $plan_id = 'bllogger_plan_month_v3';
					} else { $plan_id = 'bllogger_plan_month_c1';
					}
					$event = 'PAYPAL_Blogger_Monthly';
				} else {
					if( $version && $version == 3 ) { $plan_id = 'bllogger_plan_annual_v3';
					} else { $plan_id = 'bllogger_plan_annual_c1';
					}
					$event = 'PAYPAL_Blogger_Annually';
				}
				break;

			case 'Small_Agency':
				if( $is_monthly == 1 ) {
					if( $version && $version == 3 ) { $plan_id = 'small_agency_month_v3';
					} else { $plan_id = 'small_agency_month_c1';
					}
					$event = 'PAYPAL_Small_Agency_Monthly';
				} else {
					if( $version && $version == 3 ) { $plan_id = 'small_agency_annual_v3';
					} else { $plan_id = 'small_agency_annual_c1';
					}
					$event = 'PAYPAL_Small_Agency_Annually';
				}
				break;

			case 'Large_Agency':
				if( $is_monthly == 1 ) {
					if( $version && $version == 3 ) { $plan_id = 'large_agency_month_c1';
					} else { $plan_id = 'large_agency_month_c1';
					}
					$event = 'PAYPAL_Large_Agency_Monthly';
				} else {
					if( $version && $version == 3 ) { $plan_id = 'large_agency_annual_c1';
					} else { $plan_id = 'large_agency_annual_c1';
					}
					$event = 'PAYPAL_Large_Agency_Annually';
				}
				break;

			case 'Enterprise':
				if( $is_monthly == 1 ) {
					if( $version && $version == 3 ) { $plan_id = 'enterprise_month_c1';
					} else { $plan_id = 'enterprise_month_c1';
					}
					$event = 'PAYPAL_Enterprise_Monthly';
				} else {
					if( $version && $version == 3 ) { $plan_id = 'enterprise_annual_c1';
					} else { $plan_id = 'enterprise_annual_c1';
					}
					$event = 'PAYPAL_Enterprise_Annually';
				}
				break;
		}

		console.log( 'Plan ID: ' + $plan_id );

		$modal.find('.modal-body input[name="fields[monthly]"]').val($is_monthly);
		$modal.find('.modal-body input[name="fields[plan]"]').val($plan);

		if($plan_id) {
			$modal.find('.modal-body input[name="fields[plan_id]"]').val($plan_id);	
		}

		if($event) {
			ga('send', 'pageview', $event);
		}
	});

	$('#pricingModal').on('shown.bs.modal', function(event) {
		var $modal = $(this);
		$modal.find('.modal-body input[name="fields[email]"]').focus();
	});

	if( document.getElementById('post-sticky') ) {
        var $target = $('#post-sticky');

        if(metaJs.page_title) {
        	$target.prepend('<h2><em>Reading:</em> ' +metaJs.page_title+ '</h2>');
    	}

        $(document).scroll(function(){
            var currentPos = $(document).scrollTop();
            if( currentPos >= 240 ) {
                $target.addClass('sticky');
            } else {
                $target.removeClass('sticky');
            }
        });

        $('#post-sticky button[type=button], .ribbon-post-button a.tve_btnLink').click( function(e) {
        	e.preventDefault();
        	$('html,body').animate({ scrollTop: 0}, '400');
    	});

    	// $('#post-sticky form').on('submit', function(e) {
    	// 	e.preventDefault();
    	// 	var $email = $('#post-sticky input[type=email]').val();
    	// 	_dcq.push(["subscribe", {
    	// 		campaign_id: "6265591",
    	// 		fields: { email: $email },
    	// 		success: function() {
    	// 			$('#post-sticky form').css('opacity', 0);
    	// 		},
    	// 		failure: function() {
    	// 			$('#post-sticky form').css('opacity', 0);
    	// 		}
    	// 	}]);
    	// 	return false;
    	// });
    }

	if( !$('body').hasClass('tve_editor_page') ) {
		jQuery('.twitter-testimonials-container div.thrv_columns:eq(0)').addClass('show');
		jQuery('.view-more-tweet').click( function() {
			var $i = 1;
			jQuery('.twitter-testimonials-container div.thrv_columns').each( function() {
				var $this = jQuery(this);
				if( !$this.hasClass('show') ) {
					$this.addClass('show');
					return false;
				} else {
					$i++;
				}
			});
			if( $i == 5 ) {
				jQuery(this).hide();
			}
			return false;
		});
	}
});
})(jQuery)

jQuery( document).ready( function() {
	var extract_form = jQuery('#extract-form form');
	var extract_notify = jQuery('#extract-notify');
	var extract_result_url = jQuery('#extract-result-url');
	var extract_result_cmt = jQuery('#extract-result-cmt');
	var extract_buttom = jQuery('#extract-btn');
	var extract_ajax_flag = null;
	

	extract_form.submit( function() {
		var temp_html = jQuery('#html').val();
		var temp_url = jQuery('#url').val();
		var urls_str = '';
		var cmt_str = '<h3>View Commenters</h3>';

		if( !temp_html && !temp_url) {
			extract_notify.html('You must fill out a field').addClass('warning').fadeIn();
			jQuery('html, body').animate({
				scrollTop: extract_notify.offset().top-100
			}, 400);
			return false;
		}
		if ( extract_ajax_flag ) {
			extract_ajax_flag.abort();
		}
		extract_ajax_flag = jQuery.ajax({  
	        type: "POST",
	        dataType : "json",
	        url: metaJs.ajaxurl,  
	        data : {
	        	action: 'extract_url', 
	        	html : temp_html,
	        	url: temp_url
	        },
	        beforeSend: function(){
				extract_notify.empty().removeClass('warning').fadeOut();
				extract_result_url.empty();
				extract_result_cmt.empty();
				extract_buttom.val('Loading...');
			},
	        success:function(response) {
	        	if( response.urls_flag == "success") {
					jQuery.each( response.urls, function( index, value ){
						urls_str += '<p>'+value+'</p>';
					});
	        	} else {
	        		urls_str = '<p>Sorry. No results found</p>';
	        	}
	    //     	if( response.cmt_flag == "success") {
					// jQuery.each( response.comments, function( index, value ){
					// 	cmt_str += '<p><strong>'+value.author+': </strong>'+value.website+'</p>';
					// });
	    //     	} else {
	    //     		cmt_str += '<p>Sorry. No results found</p>';
	    //     	}

	        	extract_result_url.fadeOut( 200, function() {
					jQuery(this).html( urls_str);
					jQuery(this).fadeIn(200);
				});
				// extract_result_cmt.fadeOut( 200, function() {
				// 	jQuery(this).html( cmt_str);
				// 	jQuery(this).fadeIn(200);
				// });
				extract_buttom.val('Extract');
	        },  
	        error: function(errorThrown){
	        }
	    });
	    return false;
	});
});

(function($) {
jQuery(document).ready(function(){
	

	jQuery('a.anchor').click(function () {
		var divID = jQuery(this).attr('href');
		jQuery('html, body').animate({
			scrollTop: jQuery(divID).offset().top-130
		}, 400);
		return false;
	});

	jQuery('.sumome-scrollbox-popup input[name="email"], .sumome-scrollbox-popup input[type="email"]').focus();

	jQuery('#sumome-welcomemat input[name="email"], #sumome-welcomemat input[type="email"]').focus();

	jQuery('#bloggerModal_monthly, #bloggerModal_annually, #smallagencyModal_monthly, #smallagencyModal_annually, #largeagencyModal_monthly, #largeagencyModal_annually, #enterpriseModal_monthly, #enterpriseModal_annually, #bloggerModal_monthly_buy, #bloggerModal_annually_buy, #smallagencyModal_monthly_buy, #smallagencyModal_annually_buy, #largeagencyModal_monthly_buy, #largeagencyModal_annually_buy, #enterpriseModal_monthly_buy, #enterpriseModal_annually_buy').on('shown.bs.modal', function(event) {
        if( jQuery(window).width() >= 768 ) {
        	var modal = jQuery(this);
        	modal.find('.modal-body input[type="email"]').focus();
       	}
    });
});
})(jQuery);

// blog filter
(function($){
    function is_valid_email(email) {
        var pattern = new RegExp(/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i);
        if( email.length == 0 ) {
            return false;
        }
        if( /\.(co|con)$/i.test(email) ) {
            return false;
        }
        return pattern.test(email);
    }
    
	$(document).ready( function(){
		$('#blog-tabs a[data-toggle="tab"]').on('show.bs.tab', function (e) {
			var $id = $(e.target).attr('href').split('-');
			if($id[1]) {
				Cookies.set('_no_blog_tab', $id[1], { expires: 1, path: '/' });
			}
		});

		$('body').on('click', '#submitEmail', function(e) {
			var $email  = $.trim( $('#affiliateModal input[type=email]').val() );
			if( is_valid_email($email) ) {
	        	_dcq.push(["identify", {
					email: $email,
					tags: ["Affiliate"]
				}]);     
	        }
		});

		$('body').on('click', '.urgent-submit-button', function(e) {
	    	e.preventDefault();
			var $email = $('.urgent-email').val();
			
			if( is_valid_email($email) ) {
				_dcq.push(["identify", {
					email: $email,
					tags: ["Urgent-Offer"],
					success: function() {
						console.log('Added');
					}
				}]);
			}
		});
    });
})(jQuery);

(function($) {
	$(document).ready( function() {
		var message = "Hey, come back!";
		var original;

		$(window).focus( function() {
			if( original ) {
				document.title = original;
			}
		}).blur( function() {
			var title = $('title').text();
			if( title != message ) {
				original = title;
			}
			document.title = message;
		});
		
		$('[data-toggle="tooltip"]').tooltip();

		$('.sharing-area').on('click', function(e) {
			$('.download-area').removeClass('hidden');
		});

		$('.buttonPieSync a.tve_btnLink').on('click', function() {
			return confirm('Just contact support@piesync.com after you sign-up for an account and ask for the NinjaOutreach offer. You will be redirected to PieSync home page after clicking \'OK\'.');
		});

		$('#signupCW, #signupLG, div.thrv_custom_html_shortcode #signup').on('show.bs.modal', function(event) {
			var $button = $(event.relatedTarget);
			var $plan = $button.attr('data-plan');
			var $modal = $(this);
			if($plan) {
				console.log($plan);
				$modal.find('.modal-body input[name="fields[plan]"]').val($plan);
			}
		});

		var service_form = function() {
	        $("form#service-form input#telinput").intlTelInput({
	            preferredCountries: ["us", "gb", 'au', 'ca'],
	            autoPlaceholder: true,
	            utilsScript: "https://ninjaoutreach.com/wp-content/themes/apppress/asset/js/intlTelInput-utils.min.js?v=1"
	        });

	        $('form#service-form').submit( function() {
	            $('form#service-form input#phone').val( $("form#service-form input#telinput").intlTelInput("getNumber") );
	        });
	    }
	    
	    if( document.getElementById('service-form') !== null ) {
	    	if( !$('body').hasClass('tve_editor_page') ) {
	    		service_form();
	    	}
	    }
	});
})(jQuery)