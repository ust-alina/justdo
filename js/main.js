$(document).ready(function(){

    $('.banner_container_right_x').click(function(){
        $('.banner_container_right_text').toggleClass('open');
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
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


