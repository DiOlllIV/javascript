const callbackPrompt = {
    message: 'Can u tell me u\'r number?',
    showPrompt() {

        const phoneNumber = prompt(this.message);

        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {

        setTimeout(this.showPrompt.bind(this), ms);
    },
};

export { callbackPrompt };