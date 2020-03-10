function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr))
        return null;

    let newArr = [];
    for (let num of arr) {
        if (num % 2 === 0)
            newArr.push(num += delta);
        newArr.push(num);
    }

    return newArr;
};