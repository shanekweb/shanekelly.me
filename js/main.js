$(function() {
	$("#navButton").click(function() {
		$("nav").toggleClass("nav-change");
		$("#navButton").toggleClass("navButton-change");
	});
});



$(document).ready(function(){
    
        $('nav.pa ul li a').click(function(){
    
        var el = $(this).attr('href');
        var elWrapped = $(el);
        
        scrollToDiv(elWrapped,40);
        
        return false;
    
        });
    
        function scrollToDiv(element,navheight){
    
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
        
        $('body,html').animate({
                scrollTop: totalScroll
        }, 1000);
    }
});



// Running the code when the document is ready
    $(document).ready(function(){
 
        // Calling LayerSlider on the target element
        $('#layerslider').layerSlider({
            autoStart: true,
            firstLayer: 1,
            skin: 'borderlesslight3d',
            skinsPath: 'skins/'
            // Slider options goes here,
            // please check the 'List of slider options' section in the documentation
        });
    });