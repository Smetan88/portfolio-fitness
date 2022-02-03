$(function() {
    $('.header__content-banner').slick({
        prevArrow: '<button type="button" class="arrow-left"><img src="images/left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="arrow-right"><img src="images/right.svg" alt="right"></button>',
        responsive: [{
            breakpoint: 1081,
            settings: {
                arrows: false,
            },

        }]
    });
    $('.program__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1341,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 1,

                },
            }
        ]

    });
    $('.post__content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1341,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 1,

                },
            }
        ]
    });
    $('.social__slider-top').slick({
        slidesToShow: 2.98,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.social__slider-bottom').slick({
        slidesToShow: 2.98,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
    });
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });


    $(document).ready(function() {
        //прикрепляем клик по заголовкам acc-head
        $('.footer__accordeon').on('click', accordeon);
    });

    function accordeon() {
        //скрываем все кроме того, что должны открыть
        $('.footer__list').not($(this).next()).slideUp(500);
        // открываем или скрываем блок под заголовоком, по которому кликнули
        $(this).next().slideToggle(500);
    }

});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 2;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

setTimeout(() => {
    animOnScroll();
}, 300);
