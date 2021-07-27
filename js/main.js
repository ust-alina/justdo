$(document).ready(function(){

	/*$('.services_block .services_block_back').hide().css('top', 0);

	function mySideChange(front) {
        if (front) {
            $(this).parent().find('.services_block_front').show();
            $(this).parent().find('.services_block_back').hide();
            
        } else {
            $(this).parent().find('.services_block_front').hide();
            $(this).parent().find('.services_block_back').show();
        }
    }
    
    $('.services_block').hover(
        function () {
            $(this).find('.services_box').stop().rotate3Di('flip', 500, {direction: 'clockwise', sideChange: mySideChange});
        },
        function () {
            $(this).find('.services_box').stop().rotate3Di('unflip', 500, {sideChange: mySideChange});
        }
    );*/

    $('.banner_container_right_x').click(function(){
        $('.banner_container_right_text').toggleClass('open');
    });

    $('.questions_block_title').click(function() {
        $(this).toggleClass('open');
        $(this).next().toggleClass('open');
        $('.questions_block_title').not(this).removeClass('open')
		  .not(this).next().removeClass('open');
    });
    

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.header_bottom').toggleClass('active');
        
    });

});


