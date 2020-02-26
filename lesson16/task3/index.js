function createArrayOfFunctions(num) {
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = function() {
            return i;
        };
    }

    if (typeof num !== 'number')
        return null;

    if (num === undefined)
        return [];
};

export { createArrayOfFunctions };