function checker(arr) {
    let minNum = arr[0];
    let maxNum = arr[0];

    for (i = 0; i < arr.length; i++) {

        if (minNum > arr[i])
            minNum = arr[i];

        if (maxNum < arr[i])
            maxNum = arr[i];
    }

    if (minNum + maxNum > 1000)
        return true;
    else
        return false;
}
/* 
console.log(checker([5, 7, 88, 10, 4, 3, 6])) */