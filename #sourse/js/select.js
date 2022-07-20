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