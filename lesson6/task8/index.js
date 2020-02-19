function uniqueCount(array) {
    let unique = 0;
    for (let i = 1; i <= array.length - 1; ++i) {

        let element = array[i];

        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] === element) {
                unique++;
                console.log(element);
                console.log(array[j]);
            }
        }

    }
    return unique;

}

console.log(uniqueCount([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 6]));