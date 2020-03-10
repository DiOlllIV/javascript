function arrAverage(arr) {
    if (!Array.isArray(arr))
        return null;

    return arr.reduce((acc, cur) => acc + cur) / arr.length;
};