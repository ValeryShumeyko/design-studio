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
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    //Получаем инпут file в переменную
    const formFile = document.getElementById('formFile');

    formFile.addEventListener('change', () => {
        uploadFile(formFile.files[0]);
    });

    function uploadFile(file) {
        //проверим размер файла (< 10mb)
        if (file.size > 10 * 1024 * 1024) {
            alert('File size not more than 10 MB');
            return;
        }
    }

});