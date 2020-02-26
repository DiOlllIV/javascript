export function createLogger() {

    let loggerArr = [];

    function warn(text) {
        return loggerArr.push({
            message: text,
            dateTime: Date(),
            type: 'warn'
        });
    };

    function error(text) {
        return loggerArr.push({
            message: text,
            dateTime: Date(),
            type: 'error'
        });
    };

    function log(text) {
        return loggerArr.push({
            message: text,
            dateTime: Date(),
            type: 'log'
        });

    };

    function getRecords() {
        return loggerArr.sort((acc, rec) => (acc.dataTime - rec.dataTime));
    };

    return {
        warn,
        error,
        log,
        getRecords,
    }
};

const logger = createLogger();