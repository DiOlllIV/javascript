/* const arr = [1, 2, 3, 4]; */

function squareArray(arr) {
    let arrayInSquare = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = arr[0]; i <= arr.length; i++) {
        arrayInSquare.push(i * i);
    }

    return arrayInSquare;
}

/* const arrayInSquare = squareArray(arr);
console.log(arrayInSquare); */