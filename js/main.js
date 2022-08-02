(function ($) {
	"use atrict";

	// mobile-menu active
	$('#mobile_menu').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile_menu'
	});
	
	// navigation
	$(".navigation a").on("click", function(){
	   $(".navigation").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});

	// Feature App Carousel
 	$('#feature-app-slide').bind('slide.bs.carousel', function (e) {

 		if($("#app-slide li").last().hasClass('active')){
 			$('#app-slide').find("li").removeClass("active");
			$("#app-slide li").first().addClass("active");
 		}
 		else{
 			var activeSlider = $(this).find(".active").next('.carousel-item').data("id");
	 	    $('#app-slide').find("li").removeClass("active");
	 	    $('#app-slide').find("li#"+activeSlider).addClass("active");
 		}
 	});

 	$('#feature-app-slide').on( 'click', 'li.single-app-slide-content .icon-box', function() {
	    var activeSlider = $(this).find(".carousel-item").data("data-id");
	    $('#feature-app-slide').find("carousel-item").removeClass("active");
 	    $('#feature-app-slide').find("carousel-item#"+activeSlider).addClass("active");
	});

 	// Explode App Carousel
 	$('#explore-app-slide').bind('slide.bs.carousel', function (e) {

 		if($("#app-slide-explode li").last().hasClass('active')){
 			
 			$('#app-slide-explode').find("li").removeClass("active");
			$("#app-slide-explode li").first().addClass("active");
 		}
 		else{
 			var activeSlider = $(this).find(".active").next('.carousel-item').data("id");
	 	    $('#app-slide-explode').find("li").removeClass("active");
	 	    $('#app-slide-explode').find("li#"+activeSlider).addClass("active");
 		}

 	});

 	$('#explore-app-slide').on( 'click', 'li.explore-app-slide-content .explore-app-body', function() {
	    var activeSlider = $(this).find(".carousel-item").data("data-id");
	    $('#explore-app-slide').find("carousel-item").removeClass("active");
 	    $('#explore-app-slide').find("carousel-item#"+activeSlider).addClass("active");
	});




	// project_active
	$('.screenshot_active').owlCarousel({
	    loop:true,
	    autoplay:true,
	    margin:30,
	    nav:true,
	    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        767:{
	            items:2
	        },
	        992:{
	            items:3
	        },
	        1200:{
	            items:4
	        }
	    }
	})

	
})(jQuery);