$(document).ready(function () {



    $(".header__loop").click(function(e){
        e.preventDefault();
        if($(".header__input").hasClass('header__input--hidden')) $(".header__input").toggleClass("header__input--visible");

    });



    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    $('.team-slider').slick({
        infinite: true,
        speed: 150,

        slidesToShow: 4,

        slidesToScroll: 1,

        appendArrows: $('.arrow'),

        prevArrow: '.team__btn--prev',
        nextArrow: '.team__btn--next',

        responsive: [

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ],

    });


    $('.blockquote-slider').slick({
        infinite: true,
        speed: 150,

        slidesToShow: 1,

        slidesToScroll: 1,

        appendArrows: $('.arrow2'),

        prevArrow: '.blockquote__btn--prev',
        nextArrow: '.blockquote__btn--next',

    });


    $('.clients__slider').slick({
        dots: true,
        dotsClass: 'clients__dots',


        slidesToShow: 4,
        arrows:false,

        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"> </button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>',

        responsive: [

            {
                breakpoint: 1272,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 976,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 664,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ],

    });

});