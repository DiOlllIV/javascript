function createArrayOfFunctions(num) {

    let arr = [num];

    for (let i = 0; i < num; i++) {
        arr[i] = function() {
            return i;
        };
    }

    if (typeof num !== 'number')
        return null;

    if (num == undefined)
        return [];

    return arr;
};

export { createArrayOfFunctions };