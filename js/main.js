// Carousel

const owl = $('.owl-carousel');
owl.owlCarousel(
    {
        center: true,   // центральное изобраэение будет наибольшее
        loop: true,     // Для цикла, бесконечная прокрутка
        margin: 30,     // отступ между слайдами px
        startPosition: 0,   // index слайда
        items: 3,       // 3 слайда за раз

        responsive: {
            640: {
                items: 3,
                startPOsition: 1,
            },
            850: {
                items: 3,
                startPosition: 1,
            },
            // breakpoint from 768 up
            1000: {
                // margin: 20,
                // items: 3,
            },
            1200: {
                items: 3,
                margin: 30,
            }
        }
    }
);

// Go to the previous item

$('.slider__btn--prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


// Go to the next item

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})


// Menu icon

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu__icon');

// document.querySelector('.menu-icon-wrapper').onclick = function () {
//     document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
// };

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};
