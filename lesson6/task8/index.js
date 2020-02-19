function uniqueCount(array) {
    let unique = 1;
    for (let i = 0; i <= array.length - 1; ++i) {

        let element = array[i];

        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] === element) {
                unique++;
            }
        }

    }
    return unique;

}

console.log(uniqueCount([3, 4, 6, 3, 11, 6, 5, 7, 6, 44, 11, 1]));