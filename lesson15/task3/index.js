export function createLogger() {

    let loggerArr = [];

    function warn(text) {

        loggerArr.push({
            message: text,
            dateTime: new Date(),
            type: 'warn'
        });
    };

    function error(text) {

        loggerArr.push({
            message: text,
            dateTime: new Date(),
            type: 'error'
        });
    };

    function log(text) {

        loggerArr.push({
            message: text,
            dateTime: new Date(),
            type: 'log'
        });

    };

    function getRecords(type) {
        if (type !== undefined)
            return loggerArr.filter(elem => elem.type === type);
        return loggerArr.sort((acc, rec) => (acc.dateTime > rec.dateTime));
    };

    return {
        warn,
        error,
        log,
        getRecords,
    }
};

const logger = createLogger();