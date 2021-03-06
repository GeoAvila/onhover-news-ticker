/*!
 * jQuery news on hover news ticket Plugin
 * Autor Geovanny G. Avila @GeoAvila
 * Version: 0.3 (25-MAY-2011)
 * Dual licensed under the MIT and GPL licenses.
 * Requires: jQuery v1.5.2 or later
 */
(function( $ ){
  $.fn.textanimate=function( options ) {  

    var settings = {
      'width'         : 100,
      'height'         : 25,
      'speed' : 5000,
	  'padding':15,
	  'on_hover' : false
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }
        // textanimate plugin code
		$(this).find('span').css('padding-right',settings.padding+'px')
        var $text_animate=$(this).html();
		
        $(this).html('<div class="text_container"></div>');
        $(this).find('.text_container').append($text_animate+$text_animate);
        var $container=$(this);
        $container.css('width',settings.width+'px');                                     $container.css('overflow','hidden');
        $container.css('height',settings.height+'px');
        var $text_container=$(this).find('.text_container');
        $text_container.css('width','1000px');
        var $text_width=$text_container.find('span').width();
        var $cont_anim=$text_container.find('span').first();
        var $move_param = $text_width-settings.width;
        $text_container.mouseover(function() {
		    if(settings.on_hover==true)
			{
				$stop=true; 
				movement(); 				
			}else
			{
			$text_container.find('span').first().stop();
			}
        });
        $text_container.mouseleave(function() {
		    if(settings.on_hover==true)
			{
			    $stop=false;
			}else
			{
				$stop=true; 
				movement(); 
			}
        });
		var $stop = settings.on_hover; 
		if(settings.on_hover!=true)
		{
		$stop=true;
		 movement();
		}
		
        function movement(){
            var $cont_anim=  $text_container.find('span').first();
            $cont_anim.animate({
                marginLeft: '-='+($text_width+settings.padding)+''
                },settings.speed,"linear", function() {
                $text_container.append($text_animate);
                $text_container.find('span').first().remove();
            if($stop!=false)
                {   
                    movement();
                }
            });
    
        };
         function gostop(){
            var $cont_anim=$text_container.find('span').first();
          $cont_anim.animate({
            marginLeft:'0px',
          }, settings.speed);
          this.stop();
        }; 
    });
  };
})( jQuery );






