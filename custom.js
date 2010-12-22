$(document).ready(function(){
        
    $(window).load(function(){
		
		// Load masonry grid
	    $('#posts').masonry({ 
	    	columnWidth: 290, 
	    	singleMode: true,
	    	resizeable: true,
	    	animate: true,
	    });
	    
	    // Fade in hidden posts after grid load
	    $('.post').fadeIn(500);	

    });
    
    $('#description a.button').css('opacity', 1);
    $('#description a.button').hover(function() {
    		$(this).fadeTo('fast', 0.7);
    	}, function() {
    		$(this).fadeTo('fast', 1);
    });
        
    // Fading top bar when scrolling on page    
	$(window).scroll(function() {
		
		var element = "#description-wrap";
    	var top = $(window).scrollTop();
		var currentOpacity = $(element).css('opacity');
		if (top > 30) {
			if (currentOpacity == 1) {
				$(element).fadeTo('fast', 0.5);
			}
		} else {
			if (currentOpacity == 0.5) {
				$(element).fadeTo('fast', 1);
			}
		}

	});
							
});
