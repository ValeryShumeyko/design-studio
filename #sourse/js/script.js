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
    const headerLogo = document.querySelector('.header__logo_item');
    const headerLang = document.querySelector('.header__lang_item');
    const menuLink = document.querySelectorAll('.menu__link');

    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        menuIconText.classList.toggle('active');
        headerButton.classList.toggle('active');
        headerLogo.classList.toggle('active');
        headerLang.classList.toggle('active');
        for(var i=0; i<menuLink.length; i++) {
            menuLink[i].classList.toggle('active');
        };
    });
}




//--------------------filter-----------------------------------------------------

function app() {
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.card');

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            filter(currentCategory, cards);
            for (var i=0; i<buttons.length; i++) {
                if (buttons[i].classList.contains('active')) {
                    buttons[i].classList.remove('active');
                } else {
                }
            }
            button.classList.add('active');
        })
    })
}

app();



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
    //spaceBetween: -19,
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

new Swiper('.news-slider',{
    //количество слайдов для показа
    slidesPerView: 'auto',
    //отступ между слайдами
    spaceBetween: 20,
    breakpoints: {
        769: {
            spaceBetween: 40,
        },
        1025: {
            spaceBetween: 48,
        }  
    },
    //бесконечное прокручивание
    loop: true,
        //свободный режим
    freeMode: true,
});

new Swiper('.slider',{
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //количество слайдов для показа
    slidesPerView: 'auto',
    //отступ между слайдами
    spaceBetween: 20,
    //бесконечное прокручивание
    loop: true,
        //свободный режим
    freeMode: true,
});

//select==============================================================================================

const selectButton = document.querySelector('.main-screen__select_button');
const selectList = document.querySelector('.main-screen__list');
const selectListItems = document.querySelectorAll('.main-screen__list-item');

//Клик по кнопке. Открыть, закрыть select
selectButton.addEventListener('click', function() {
    selectList.classList.toggle('main-screen__list--visible');
    this.classList.add('main-screen__select_button--active');
});

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
selectListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        selectButton.innerText = this.innerText;
        selectButton.focus();
        selectList.classList.toggle('main-screen__list--visible');
    })
})

//Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
    if (e.target !== selectButton) {
        selectButton.classList.remove('main-screen__select_button--active');
        selectList.classList.remove('main-screen__list--visible');
    }
})




