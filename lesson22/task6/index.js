let isClicked = false;
const button = document.querySelector('.single-use-btn');
const oneClick = () => {
    if (!isClicked) {
        console.log('clicked');
        isClicked = true;
    }
};

button.addEventListener('click', oneClick);