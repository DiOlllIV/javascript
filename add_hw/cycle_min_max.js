function getMin(arr) {
    let minNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (minNum > arr[i])
            minNum = arr[i];
    }

    return minNum;
}

function getMax(arr) {
    let maxNum = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (maxNum < arr[i])
            maxNum = arr[i];
    }

    return maxNum;
}

console.log(getMin([5, 7, 88, 10, 4, 3, 6]));
console.log(getMax([5, 7, 88, 10, 4, 3, 6]));