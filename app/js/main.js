$(function () {

    $('.slider-top').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:3
                }
            },{
                breakpoint: 480,
                settings:{
                    slidesToShow:2
                }
            }
        ]
    });

    $('.slider-bottom').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:3
                }
            },{
                breakpoint: 480,
                settings:{
                    slidesToShow:2
                }
            }
        ]
    });

});