export default createMessenger = () => {
    let message = 'Just learn it!';

    function sendMessage(name) {
        const sender = 'Gromcode';

        console.log(`${name}, ${message} Your ${sender}`)
    };

    function setMessage(text) {
        message = text;
    };

    function setSender(text) {
        sender = text.bold();
    };

    return {
        sendMessage,
        setMessage,
        setSender,
    };
};

/* const message = createMessenger(); */