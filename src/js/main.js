$(document).ready(function(){

    $('.cycle').slick({
        infinite: true,
        speed: 350,

        slidesToShow: 4,

        slidesToScroll: 3,

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
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>'

    });

});