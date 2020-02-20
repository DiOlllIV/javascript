function squareArray(array) {
    let arraySquare = [];

    for (let i = 0; i < array.length; ++i) {

        arraySquare.push(array[i] * array[i]);
    }

    return arraySquare;
}
/* 
console.log(squareArray([1, 2, 3, 4, 7, 99])); */