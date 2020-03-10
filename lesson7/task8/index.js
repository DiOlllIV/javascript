function cloneArr(arr) {
    if (!Array.isArray(arr))
        return null;

    return arr.map(elem => elem);
};