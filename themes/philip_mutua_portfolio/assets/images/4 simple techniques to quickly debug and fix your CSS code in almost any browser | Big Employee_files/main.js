; /* Let's make sure all functions close before we start writing our JS code */
(function($, window, document) {
    //'use strict'; // I ♥ JS

    // check devices with device.js
    var isMobile, isTablet;
    if (typeof device === 'object') {
        isMobile = device.mobile();
        isTablet = device.tablet();
    }
    /**
     * Handlers for navigation, accessibility
     */
    (function() {
        var menu = $('#menu');

        // Accessible Menu
        menu.find('a').on('focus blur', function() {
            $(this).parents().toggleClass('focus');
        });
    })();

    /*
     * Makes 'skip to content' link work correctly in IE9 and Chrome for better
     * accessibility.
     *
     * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
     */
    $(window).on('hashchange', function() {
        var element = document.getElementById(location.hash.substring(1));

        if (element) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                element.tabIndex = -1;
            }
            element.focus();
        }
    });


    // Resonsive Videos via Fluidvids v2.2.0 
    fluidvids.init({
        selector: 'iframe',
        players: ['www.youtube.com', 'player.vimeo.com', 'youtu.be']
    });

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    $(document).on('keydown', function(e) {
        var url = false;

        // Left arrow key code.
        if (e.which === 37) {
            url = $('.previous-image').parent().attr('href');

            // Right arrow key code.
        } else if (e.which === 39) {
            url = $('.next-image').parent().attr('href');
        }

        if (url && (!$('textarea, input').is(':focus'))) {
            window.location = url;
        }
    });

    if ($('#bigContact_map_canvas').length > 0) {
        if (typeof custom_big_contact_map === 'undefined' || custom_big_contact_map === false) {
            var bigContact_geocoder;
            var bigContact_map;
            bigContact_geocoder = new google.maps.Geocoder();
            var bigContact_myOptions = {
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            bigContact_map = new google.maps.Map(document.getElementById('bigContact_map_canvas'), bigContact_myOptions);
            bigContact_geocoder.geocode({
                address: map_address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    bigContact_map.setCenter(results[0].geometry.location);
                    new google.maps.Marker({
                        map: bigContact_map,
                        position: results[0].geometry.location
                    });
                }
            });
        }
    }
    if (typeof bigDatePicker != 'undefined') {
        if (bigDatePicker == 'date') {
            $('#datepicker').datepicker({
                onSelect: function() {
                    var date = $(this).datepicker('getDate');
                    $('#bigContact-date').val($.datepicker.formatDate('DD-MM dd, yy', date));
                    $('#bigContact-appointment').attr('checked', true);
                }
            });
        } else if (bigDatePicker == 'datetime') {
            $('#datepicker').datetimepicker({
                dateFormat: bigDateFormat,
                timeFormat: bigTimeFormat,
                separator: ' @ ',
                ampm: bigAmpm,
                hourMin: 0,
                hourMax: 23,
                showHour: true,
                showMinute: bigShowMinute,
                onSelect: function(dateText, inst) {
                    var date = $(this).datetimepicker('getDate');
                    $('#bigContact-date').val(dateText);
                    $('#bigContact-appointment').attr('checked', true);
                }
            });
        }
    }

    $('#bigContact-form').submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var $form = $(this),
                form_data = $form.serialize(),
                url = $form.attr('action');
        var results = $('#bigContact-results');
        var loading = $('#bigContact-submit').find('i');
        loading.removeClass('fa-send').addClass('fa-refresh fa-spin');
        /* Send the data using post and put the results in a div */
        $.ajax({
            type: 'POST',
            url: url,
            data: form_data,
            dataType: 'json',
            timeout: 5000,
            success: function(data) {
                results.hide();
                results.empty();
                results.removeClass('alert-error alert-success').addClass('alert-' + data.status);
                $.each(data, function(index, value) {
                    if (index != 'status')
                        results.append(value);
                });
                loading.removeClass('fa-refresh fa-spin').addClass('fa-send');
                if (data.status == 'success') {
                    if (typeof (bigContact_conversion_tracking_callback) === 'function') {
                        bigContact_conversion_tracking_callback();
                    }
                    $('#bigContact-submit').attr('disabled', true);
                }
                results.slideDown('slow');
            },
            error: function(request, status, err) {
//                console.log(request);
//                console.log(err);
                results.hide();
                results.empty();
                results.removeClass('alert-error alert-success').addClass('error');
                if (status == 'timeout') {
                    results.append('Cannot Send Email: Server Timed Out');
                }
                else {
                    results.append('Cannot Send Email: Internal Error');
                }
                loading.removeClass('fa-refresh fa-spin').addClass('fa-send');
                results.slideDown('slow');
            }
        });
    });


})(window.jQuery, window, window.document);