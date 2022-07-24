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