let isConfirmed = false;
const button = document.querySelector('.single-use-btn');
const oneClick = () => {
    if (!isConfirmed) {
        console.log('clicked');
        isAppend = true;
    }
};

button.addEventListener('click', oneClick);