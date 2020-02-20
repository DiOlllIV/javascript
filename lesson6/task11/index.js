function checker(arr) {
    let min = arr[0];
    let max = arr[0];

    for (i = 0; i < arr.length; i++) {

        if (min > arr[i])
            min = arr[i];

        if (max < arr[i])
            max = arr[i];
    }

    let sum = min + max;

    if (sum > 1000)
        return true;
    else
        return false;
}
/* 
console.log(checker([5, 7, 88, 10, 4, 3, 6])) */