function setButton(buttonText) {
    const body = document.querySelector('body');

    body.textContent = buttonText;
    /* body.innerHTML = buttonText; */
};

/* setButton("<button>button text</button>"); */



export { setButton };