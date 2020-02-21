function getMin(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }

    return min;
}

function getMax(arr) {
    let max = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}

console.log(getMin([5, 7, 88, 10, 4, 3, 6]));
console.log(getMax([5, 7, 88, 10, 4, 3, 6]));