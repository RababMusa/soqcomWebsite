/*
    Author       : EnvyTheme
    Template Name: RAISE
    Description  : Multipurpose Onepage Website Template
    Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.menu-top').addClass('menu-shrink');
            } else {
                $('.menu-top').removeClass('menu-shrink');
            }
        });			
        
        $('.navbar .navbar-nav li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $('.btnservices').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });
        
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });				
        // END MENU JS	

        // HOME SLIDER
        $('.home-slider-area').owlCarousel({
            items:1,
            loop:true,
            nav:true,
            autoplay:true,
            autoplayHoverPause: true,
            autoplayTimeout:4000,
            smartSpeed:1000,
            navText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
            ]
        });
        
        $(".home-slider-area").on("translate.owl.carousel", function(){
            $(".single-slider-item h1, .single-slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slider-item .banner-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".home-slider-area").on("translated.owl.carousel", function(){
            $(".single-slider-item h1, .single-slider-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slider-item .banner-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        // END HOME SLIDER
        
        // ABOUT US SLIDER
        $('.about-us-slider').owlCarousel({
            items:1,
            loop:true,
            nav:true,
            autoplay:true,
            autoplayHoverPause: true,
            autoplayTimeout:4000,
            smartSpeed:1000,
            navText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
            ]
        });
        // END ABOUT US SLIDER
        
        // PROJECTS PORTFOLIO
        $('#Container').mixItUp();
        // END PROJECTS PORTFOLIO
        
        // COUNTER NUMBER
        $('.counter-number').counterUp({
            delay: 10,
            time: 1000
        });
        // END COUNTER NUMBER
        
        // BLOG SLIDER
        jQuery('.blog-slider').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplay:true,
            autoplayHoverPause: true,
            autoplayTimeout:4000,
            smartSpeed:1000,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
        // END BLOG SLIDER
        
        // CLIENT LOGO SLIDER
        jQuery('.client-logo-slider').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            autoplay:true,
            autoplayHoverPause: true,
            autoplayTimeout:4000,
            smartSpeed:1000,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        });
        // END CLIENT LOGO SLIDER
        
       /* START INPUT FIELD SPACE VALIDATITON */
        jQuery(function() {
          jQuery('body').on('keydown', '#contact_name, #contact_email, #contact_subject, #contact_phone, #contact_message', function(e) {
                console.log(this.value);
                 if (e.which === 32 &&  e.target.selectionStart === 0) {
                   return false;
                }  
            });
        });
        /* END INPUT FIELD SPACE VALIDATITON */

        /* START SEND MAIL */
        $('#contatc_form').submit(function(event) {
            event.preventDefault();
            var name 	= $('#contact_name').val();
            var email 	= $('#contact_email').val();
            var sub 	= $('#contact_subject').val();
            var sub 	= $('#contact_phone').val();
            var message = $('#contact_message').val();
            var recaptcha = $("#g-recaptcha-response").val();
            
            if(name == "" || email == "" || message == "" || name == "" || message == "" || recaptcha == "" || sub == ""){
                jQuery('#contact_send_status').removeClass('message_send');
                jQuery('#contact_send_status').addClass('message_notsend');
                jQuery('#contact_send_status').text('Please fill all fields with correct data.');
                
            }else{
                var formData = $('#contatc_form').serialize();
                $.ajax({
                    type: 'POST',
                    url: $('#contatc_form').attr('action'),
                    data: formData,
                    success:function(data){  
                        jQuery('form[name="myform"]')[0].reset();
                        grecaptcha.reset();
                        $("#g-recaptcha-response").val("");
                    },
                })
                .done(function(response) {
                    $('#contact_send_status').removeClass('message_notsend');
                    $('#contact_send_status').addClass('message_send');
                    $('#contact_send_status').html("<div class='alert alert-success' role='alert'>Your email successfully Sent! Thank you.</div>");
                    $("#contact_send_status").fadeOut(3000);				
                })
                .fail(function(data) {
                    jQuery('#contact_send_status').removeClass('message_send');
                    jQuery('#contact_send_status').addClass('message_notsend');
                    jQuery('#contact_send_status').html("<div class='alert alert-danger' role='alert'>Something wrong please try again!</div>");
                });
            }
        });
        /* END SEND MAIL */
    
        // BACK TO TOP BUTTON
        $('body').append('<div id="Top" class="back-to-top"><i class="fa fa-long-arrow-up"></i></div>');
    	$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#Top').fadeIn();
			} else {
				$('#Top').fadeOut();
			}
		}); 
        $('#Top').on('click', function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
        // EDN BACK TO TOP BUTTON 
	}); 	
  
    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".preloader-area").fadeOut(500);
    });
    // END PRELOADER
    
	// START WOW ANIMATION JS
        new WOW().init();	
	// END WOW ANIMATION JS
})(jQuery);


  

