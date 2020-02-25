export const reverseArray = (arr) => {

    if (!Array.isArray(arr))
        return null;

    return arr.concat().reverse();
};

/* const arr = [1, 2, 3, 4, 7, 99];
console.log(reverseArray(arr));
console.log(arr); */