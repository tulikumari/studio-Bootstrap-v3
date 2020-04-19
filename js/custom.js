
function menuslider() {
 isntMobile = $('#barra_menu').is(":visible");
 if(isntMobile)
  {	
	 $(".navbar-collapse li").hover(function(e){
			var el = e.currentTarget;
			$("#barra_menu").stop();
			var position = $(el).position();
			$("#barra_menu").animate({
				"left":(position.left+20),
				"width":$(el).outerWidth()-1
			});
    });
	
	$(".navbar-collapse ul").hover(function() {
        
    }, function(){
			if($(".navbar-collapse li").hasClass('active'))
	         {
					 $("#barra_menu").stop();
					var selected_menu=$(".navbar-collapse li.active").position();
					$("#barra_menu").animate({
							"left":(selected_menu.left+20),
							"width":$(".navbar-collapse li.active").outerWidth()-1
					});
			 }
			else
			 {
				$("#barra_menu").stop();
				$("#barra_menu").css({
					width:'0px',
					left:'0'
				}); 
			 }
		});
	
	
	if($(".navbar-collapse li").hasClass('active'))
	 {
			$("#barra_menu").stop();
			var selected_menu=$(".navbar-collapse li.active").position();
					$("#barra_menu").animate({
							"left":(selected_menu.left+20),
							"width":$(".navbar-collapse li.active").outerWidth()-1
					});
	 }
  }
}

function header_gap()
{
    var header_h=$(".fixed").height();
	$(".header_gap").css("height",header_h);	
}


$(document).ready(function(){
	menuslider();
	header_gap();
});
$(window).resize(function(){
    isntMobile = $('#barra_menu').is(":visible");
	if(isntMobile)
	{
		menuslider();
	}
	header_gap();
});

$(document).ready(function(){
  $('.parallax2').parallax("50%", 0.5);
   $('.parallax3').parallax("50%", 0.5);
   $('.parallax4').parallax("50%", 0.1);
   $('.parallax5').parallax("50%", 0.1);
    $('.parallax6').parallax("50%", 0.1);
	
	jQuery("#layerslider").layerSlider({
			responsive: true,
			responsiveUnder: 1170,
			layersContainer: 1170,
			skin: 'fullwidth',
			hoverPrevNext: false,
			skinsPath: 'layerslider/skins/',
			showBarTimer:true,
			pauseOnHover:false,
			showCircleTimer:false,
			thumbnailNavigation:'disabled',
			navPrevNext:false,
			navStartStop:false
		});
});
$(window).load(function(){
	    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.animated').addClass('visible');
	 }
	  $('.animated').appear(function() {
		    var elem = $(this);
		    var animation = elem.data('animation');
		    if ( !elem.hasClass('visible') ) {
		       	var animationDelay = elem.data('animation-delay');
		        if ( animationDelay ) {
		            setTimeout(function(){
		                elem.addClass( animation + " visible" );
		            }, animationDelay);
		        } else {
		            elem.addClass( animation + " visible" );
		        }
		    }
		});
});

$(window).load(function(){
	$("#pageloader").hide();
	menuslider();
	header_gap();
	
	$('#home_slider2').flexslider({
		directionNav: true, 
		direction: "horizontal",
		animation: "slide",
		controlNav: false,
		prevText: "", 
		nextText: "",
	});
	$('#trabajos_slider').flexslider({
		directionNav: false, 
		direction: "horizontal",
		animation: "slide",
		controlNav: true,
		prevText: "", 
		nextText: ""
	});
	$('#trabajos_mobile_slider').flexslider({
		directionNav: false, 
		direction: "horizontal",
		animation: "slide",
		controlNav: true,
		prevText: "", 
		nextText: ""
	});
});

$(document).ready(function(){
		  $('.tooltip-show').tooltip();
		  $(".service_slide li .service_box").mouseover(function(){
			  $(this).parent('li').children(".service_tool").show();
		  });
		  $(".service_slide li .service_box").mouseout(function(){
			  $(this).parent('li').children(".service_tool").hide();
		  });
		  
		  slider = $('.bxslider').bxSlider();
		  $('.bx-prev, .bx-next').click(function(){
		   slider.startAuto();
		 });
		 $('.selectpicker').selectpicker({});
		 
		 $('#portfolio_slider2').flexslider({
			directionNav: true, 
			direction: "horizontal",
			animation: "slide",
			controlNav: false,
			prevText: "", 
			nextText: "",
		});
});


function onScroll(event){
	var header_h=$(".fixed").height();
	 
    var scrollPos = $(document).scrollTop();
    $('.index_menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
		var ref_top= (refElement.position().top*1)-(header_h*1);
        if (ref_top <= scrollPos && ref_top + refElement.height() > scrollPos) {
            $('.index_menu li').removeClass("active");
			menuslider();
            currLink.parent("li").addClass("active");
			menuslider();
        }
        else{
            //currLink.parent("li").removeClass("active");
        }
    });
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    var header_h=$(".fixed").height();
    //smoothscroll
    $('.index_menu li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).parent("li").removeClass('active');
        })
        $(this).parent("li").addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-(header_h*1)
        }, 400, 'swing', function () {
            /*window.location.hash = target;*/
            $(document).on("scroll", onScroll);
        });
    });
	
	$(".btn1").click(function(){
		$(this).toggleClass('active');
	});
	$(".fancy-select").click(function(){
		$(this).toggleClass('active');
	});
});

/*
$(document).ready(function() {
	// navigation click actions	
	$(document).on("scroll", onScroll);
	 
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
        $(document).off("scroll");
		
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
		$(".nav li").removeClass('active');
		$(this).parent('li').addClass('active');
		menuslider();
		$(document).on("scroll", onScroll);
		
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});

// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}
*/

