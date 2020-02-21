const flatArray = arr =>
    arr
    .reduce((acc, element) =>
        acc.concat(element), []);

/* const arr = ['Cat', [44, 1, 3], 77, ['Tor']];
console.log(flatArray(arr));
console.log(arr); */