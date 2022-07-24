

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');



        form.reset();
        uploadedArea.remove();


        let textReq = document.querySelector('.form__req');
        textReq.classList.remove('active');
        let formReq = document.querySelectorAll('._req');
    
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
        }
        function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        }
        formRemoveError(input);




        
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        //let formData = new FormData(form);
        //formData.append('file', formFile.files[0]);

        if (error===0) {
            let formButton = document.getElementById('form__button');
            formButton.setAttribute('href', '#popup_2');
            formButton.click();
            form.reset();
            textReq.classList.remove('active');

        } else {
            //alert('hey');
            let textReq = document.querySelector('.form__req');
            textReq.classList.add('active');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //Функция теста email
    function emailTest(input) {
     //   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    //Получаем инпут file в переменную
    const formFile = document.getElementById('formFile');

    progressArea = document.querySelector(".progress-area");
    uploadedArea = document.querySelector(".uploaded-area");


    formFile.addEventListener('change', ({target, total}) => {
        let file = target.files[0];
        if (file) {
            let fileName = file.name;
            let fileSize = file.size;
            if (file.size > 10 * 1024 * 1024) {
                alert('File size not more than 10 MB');
                progressArea.innerHTML = "";
                uploadedArea.insertAdjacentHTML("afterbegin", "");
                return;
            }
            if (file.size < 1000000) {
                fileSize = Math.floor(fileSize / 1000) + " KB";
            } else {
                fileSize = Math.floor(fileSize / 1000000) + " MB";
            }
            //(fileTotal <1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
            let progressHTML = `<li class="row">
                                   <img src="img/main screen/file.png" width="30" alt="file">
                                   <div class="content">
                                       <div class="details">
                                           <span class="name">${fileName} * Uploading</span>
                                           <span class="percent"></span>
                                       </div>
                                       <div class="progress-bar">
                                           <div class="progress"></div>
                                       </div>
                                   </div>
                               </li>`;
            progressArea.innerHTML = progressHTML;
            setTimeout(() => {
                progressArea.innerHTML = "";
            }, 2000);
            setTimeout(() => {
                let uploadedHTML = `<li class="row">
                                        <div class="content">
                                            <img src="img/main screen/file.png" width="30" alt="file">
                                            <div class="details">
                                                <span class="name">${fileName} * Uploaded</span>
                                                <span class="size">${fileSize}</span>
                                            </div>
                                        </div>
                                        <img src="img/main screen/done.png" width="20" alt="done">
                                    </li>`;
            uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
            }, 2100); 
            uploadFile(file);
        }
       // uploadFile(formFile.files[0]);
    });

    function uploadFile(file) {
       // проверим размер файла (< 10mb)

    }

    /*function uploadFile(file) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "php/upload.php");
        xhr.upload.addEventListener("progress", ({loaded, total}) => {
           // let file = target.files[0];
           // let fileName = file.name;
            let fileLoaded = Math.floor((loaded / total) * 100);
            let fileTotal = Math.floor(total / 1000);
            let fileSize;
            (fileTotal <1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
            let progressHTML = `<li class="row">
            <img src="img/main screen/file.png" width="30" alt="file">
            <div class="content">
                <div class="details">
                    <span class="name">${e} * Uploading</span>
                    <span class="percent">50%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress"></div>
                </div>
            </div>
        </li>`;
        progressArea.innerHTML = progressHTML;
            if(loaded == total) {
                let uploadedHTML = `<li class="row">
                <div class="content">
                    <img src="img/main screen/file.png" width="30" alt="file">
                    <div class="details">
                        <span class="name">${name} * Uploaded</span>
                        <span class="size">70 KB</span>
                    </div>
                </div>
                <img src="img/main screen/done.png" width="20" alt="done">
            </li>`;
            uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
            }  
            //var reader = new FileReader();
           // reader.onload = function (e) {
               // uploadedArea.innerHTML = 
            //};
           // reader.onerror = function (e) {
                //alert('Ошибка');
           // };
           // reader.readAsDataURL(file);
        });
        let formData = new FormData(form);
        xhr.send(formData);


    }*/

});
const formSelectButton = document.querySelector('.select__button');
const formSelectList = document.querySelector('.select__list');
const formSelectListItems = document.querySelectorAll('.select__list-item');

//Клик по кнопке. Открыть, закрыть select
formSelectButton.addEventListener('click', function() {
    formSelectList.classList.toggle('select__list--visible');
    this.classList.add('select__button--active');
});

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
formSelectListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        formSelectButton.innerText = this.innerText;
        formSelectButton.focus();
        formSelectList.classList.toggle('select__list--visible');
    })
})

//Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
    if (e.target !== formSelectButton) {
        formSelectButton.classList.remove('select__button--active');
        formSelectList.classList.remove('select__list--visible');
    }
})
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




