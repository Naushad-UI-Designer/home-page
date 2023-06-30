$(document).ready(function(){
    $('.owl-carousel-4-items').owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        nav: true,
        items: 4,
        mouseDrag:true,
        touchDrag:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

    $('.owl-carousel-3-items').owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        nav: true,
        items: 3,
        mouseDrag:true,
        touchDrag:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:3
            }
        }
    })

    $('#owl-carousel-6-items').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        items: 6,
        mouseDrag:true,
        touchDrag:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
            1200:{
                items:6
            }
        }
    })

    $('.owl-carousel-1-items').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        items: 1,
        mouseDrag:true,
        touchDrag:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })
});
