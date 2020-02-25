export default createMessenger = () => {

    let message = 'Just learn it!';
    const sender = 'Gromcode';

    const sendMessage = name => {

        console.log(`${name}, ${message} Your ${sender}`)
    };

    const setMessage = text => {
        message = text.bold();
    };

    const setSender = text => {
        sender = text.bold();
    };

    return {
        sendMessage,
        setMessage,
        setSender,
    };
};

/* const message = createMessenger(); */