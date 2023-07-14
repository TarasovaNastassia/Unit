$(document).ready(function () {

    // Находим блок  с слайдами

    const owl = $('#clients-slider');

    // запускаем карусель
    owl.owlCarousel({
        items:1,
        loop :true
    });


    // находим кнопки вперед назад
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // клик на кнопку назад и прокрутка карусели
    prev.click(function () {
        owl.trigger('prev.owl.carousel');
    })


    // клик на кнопку вперед и прокрутка карусели
    next.click(function () {
        owl.trigger('next.owl.carousel');
    })

  });


