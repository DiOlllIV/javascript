function buildObject(keys, values) {
    const arrOfObj = keys.map((elem, index) =>
        ({
            [elem]: values[index]
        }));

    const result = Object.assign(...arrOfObj);

    return result;
};