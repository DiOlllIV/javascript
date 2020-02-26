export default function createMessenger() {

    let message = 'Just learn it!';
    let sender = 'Gromcode';

    function sendMessage(name) {

        console.log(`${name}, ${message} Your ${sender}`);
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