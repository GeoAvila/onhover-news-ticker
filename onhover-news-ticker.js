/*!
 * jQuery news on hover news ticket Plugin
 * Autor Geovanny G. Avila @GeoAvila
 * Version: 1.00 (12-MAY-2011)
 * Dual licensed under the MIT and GPL licenses.
 * Requires: jQuery v1.5.2 or later
 */
(function( $ ){
  $.fn.textanimate=function( options ) {  

    var settings = {
      'width'         : 100,
      'height'         : 25,
      'speed' : 5000
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }
        // textanimate plugin code
        var $container=$(this);
        var $text_animate=$(this).find('span').html();
        $(this).find('span').remove();
        $container.css('width',settings.width+'px');   $container.css('overflow','hidden');
        $container.css('height',settings.height+'px');
        $container.append('<div id="text_container_s"><span>'+$text_animate +' | </span><span>'+$text_animate +' | </span></div>');
        var $text_container=$('#text_container_s');
        $text_container.css('width','1000px');
        var $text_width=$('#text_container_s span').width();
        var $cont_anim=$('#text_container_s span:first');
        var $move_param = $text_width-settings.width;
        var $stop = false; 
		$(" #text_container_s").mouseover(function() {
			$stop=true; 
			movement(); 
		});
		$(" #text_container_s").mouseleave(function() {
			$stop=false;
		}); 
        function movement(){
            var $cont_anim=  $('#text_container_s span:first') ;
          
			$cont_anim.animate({
				marginLeft: '-='+($text_width)+'',
				}, settings.speed, function() {
				$('#text_container_s').append('<span>'+$text_animate +' | </span>');
				$('#text_container_s span:first').remove();
			if($stop!=false)
				{   
					movement();
				}
			});
    
        };
         function gostop(object){
            var $cont_anim=$(object).find('span').first();
          $cont_anim.animate({
            marginLeft:'0px',
          }, settings.speed);
          this.stop();
        }; 
    });

  };
})( jQuery );