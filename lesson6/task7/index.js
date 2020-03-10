function checkSum(arr) {
    if (!Array.isArray(arr))
        return null;

    for (num of arr) {
        num += num;
    }
    return num;
};