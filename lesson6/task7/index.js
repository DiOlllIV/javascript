function checkSum(arr) {
    if (!Array.isArray(arr))
        return null;

    let sum = 0;

    for (let num of arr) {
        sum += num;
    }
    if (sum > 100)
        return true;
    return false;
};