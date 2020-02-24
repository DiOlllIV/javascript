const cleanTransactionsList = arr => {

    let cleanArr = arr.filter(num => {
        if (Number(num))
            return num;
    });

    return cleanArr.map(num => '$' + Number(num).toFixed(2));

};

const arr = ['1.9', '16.4', '17', '1 dollyar'];
console.log(cleanTransactionsList(arr));