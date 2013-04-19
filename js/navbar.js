$(function() {

	var stickyNavTopOffset = $('#sticky-navigation').offset().top;
	
	var stickyNavigation = function() {
		var scroll_top = $(window).scrollTop();
		if (scroll_top > stickyNavTopOffset) { 
			$('#sticky-navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
			$('#sticky-navigation').css({ 'position': 'relative' }); 
		}   
	};

	stickyNavigation();

	$(window).scroll(function() {
		 stickyNavigation();
	});
	
	$('a[href="#"]').click(function(event) { 
		event.preventDefault(); 
	});
	
});