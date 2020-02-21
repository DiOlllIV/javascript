const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

const arr = [1, 2, 3, 4, 7, 99];
console.log(getSpecialNumbers(arr));
console.log(arr);