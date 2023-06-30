$(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
       $('#header-bg').addClass('header-sticky');
    } else {
       $('#header-bg').removeClass('header-sticky');
    }
});
