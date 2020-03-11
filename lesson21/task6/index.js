function setButton(buttonText) {
    const body = document.querySelector('body');
    body.innerHTML = '<button></button>';
    const button = document.querySelector('button');
    button.innerHTML = buttonText;

};

/* setButton("button text"); */


export { setButton };