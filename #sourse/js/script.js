// ibg

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for(var i=0; i<ibg.length; i++) {
        if(ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage='url("'+ibg[i].querySelector('img').getAttribute('src')+'")';
        }
    };
}
ibg();

//бургер==========================================================

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const menuIconText = document.querySelector('.menu__icon_text');
    const headerButton = document.querySelector('.header__button_item');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        menuIconText.classList.toggle('active');
        headerButton.classList.toggle('active');
    });
}

//cлайдер========================================================================================

new Swiper('.image-slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //количество слайдов для показа
    slidesPerView: 1.37,
    breakpoints: {
        612: {
            slidesPerView: 1.17,
        }     
    },
    //отступ между слайдами
    spaceBetween: -19,
    //количество пролистываемых слайдов
    slidesPerGroup: 1,
    //бесконечное прокручивание
    loop: true,
    //количество дублирующих слайдов
  //  loopedSlides: 3,
    //свободный режим
  //  freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
});