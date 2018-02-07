$(document).ready(function(){

    $('.cycle').slick({
        infinite: true,
        speed: 150,

        slidesToShow: 1,

        slidesToScroll: 1,

        appendArrows: $('.arrow'),

        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"> </button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>'

    });


    $('.cycle2').slick({
        infinite: true,
        speed: 350,

        slidesToShow: 4,

        slidesToScroll: 3,

        appendArrows: $('.arrow'),

        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"> </button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>',

        responsive: [

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
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


});