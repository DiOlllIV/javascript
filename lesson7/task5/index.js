const squareArray = square =>

    square.reduce((acc, element) =>
        acc.concat(element * element), []);

/* const arr = [1, 2, 3, 4, 7, 99];
console.log(squareArray(arr));
console.log(arr); */