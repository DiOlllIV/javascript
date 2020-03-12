const inputText = document.querySelector('.text-input');
const inputValue = () => console.log(inputText.value);

inputText.addEventListener('change', inputValue);