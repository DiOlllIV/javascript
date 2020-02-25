export const transformToObject = arr => {
    let obj = {};

    arr.forEach(element => {
        obj[element] = element;
    });

    return obj;
};

/* const arr = ['name', 'Tom', '22', 'value'];
console.log(transformToObject(arr)); */