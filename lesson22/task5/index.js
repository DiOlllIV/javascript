const searchBtn = document.querySelector('.search__btn');
const searching = document.querySelector('.search__input');
const logSearching = () => console.log(searching.value);

searchBtn.addEventListener('click', logSearching);