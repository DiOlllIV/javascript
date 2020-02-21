const reverseArray = (arr) => {

    if (!Array.isArray(arr))
        return null;

    return arr.reverse();
};

const arr = [1, 2, 3, 4, 7, 99];
console.log(reverseArray(arr));