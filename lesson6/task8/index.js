function uniqueCount(array) {
    let unique = 0;
    for (let i = 1; i < array.length; ++i) {

        let element = array[i];

        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] === element) {
                unique++;
            }
        }
        console.log(unique);
    }
    return unique;

}

console.log(uniqueCount([1, 2, 3, 1, 2, 3, 5, 4, 4, 6, 7, 1]));