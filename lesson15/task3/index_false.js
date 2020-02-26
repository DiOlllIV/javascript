function createLogger() {

    let message;
    let dateTime;
    let type;

    function warn(text) {

        message = text;
        dateTime = Date();
        type = 'warn';
    };

    function error(text) {

        message = text;
        dateTime = Date();
        type = 'error';
    };

    function log(text) {

        message = text;
        dateTime = Date();
        type = 'log';
    };

    function getRecords() {
        return `{ message: ${message}, dateTime: ${dateTime}, type: ${type} }`;
    };

    return {
        warn,
        error,
        log,
        getRecords,
    }
};

const logger = createLogger();