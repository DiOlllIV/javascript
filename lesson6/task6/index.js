/* const arr = [1, 2, 3, 4];  */

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let arrayReverse = [];

    for (let i = 0; i < arr.length; i++) {
        arrayReverse.unshift(arr[i]);
    }

    return arrayReverse;
}

/* const arrayRevers = reversArray(arr);
console.log(arrayRevers);  */