export default createMessenger = () => {

    let message = 'Just learn it!';
    let sender = 'Gromcode';

    function sendMessage(name) {

        console.log(`${name}, ${message} Your ${sender}`);
    };

    function setMessage(text) {
        message = text.bold();
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