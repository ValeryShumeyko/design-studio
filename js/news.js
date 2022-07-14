const selectButtonNews = document.querySelector('.title__menu_button');
const selectListNews = document.querySelector('.title__menu');
const selectListItemsNews = document.querySelectorAll('.title__menu_item');

//Клик по кнопке. Открыть, закрыть select
selectButtonNews.addEventListener('click', function() {
    selectListNews.classList.toggle('title__menu--visible');
    this.classList.add('title__menu_button--active');
});

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
selectListItemsNews.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        selectButtonNews.innerText = this.innerText;
        selectButtonNews.focus();
        selectListNews.classList.toggle('title__menu--visible');
    })
})

//Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
    if (e.target !== selectButtonNews) {
        selectButtonNews.classList.remove('title__menu_button--active');
        selectListNews.classList.remove('title__menu--visible');
    }
})