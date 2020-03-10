/* const arr = [3, 44, 11, 1]; */

function sortAsc(array) {
    let ascArray = [];
    for (let i = 0; i <= array.length - 1; ++i) {
        let position = i;
        let element = array[i];
        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] < element) {
                position = j;
                element = array[j];
            }
        }
        array[position] = array[i];
        array[i] = element;
        ascArray.push(array[i])
    }
    return ascArray;
}

/* const ascArray = sortAsc(arr);
console.log(ascArray); */

/*********************Revers*************************/
function sortDesc(array) {
    let descArray = [];
    for (let i = 0; i <= array.length - 1; ++i) {
        let position = i;
        let element = array[i];
        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] > element) {
                position = j;
                element = array[j];
            }
        }
        array[position] = array[i];
        array[i] = element;
        descArray.push(array[i])
    }
    return descArray;
}

/* const descArray = sortDesc(arr);
console.log(descArray); */