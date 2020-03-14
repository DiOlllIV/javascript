const pickProps = (obj, arr) => {

    let object = {};

    arr.forEach(elm => {
        object[elm] = obj[elm];
    });

    return object;
};

/* const arr = ['a', 'b'];
const obj = { a: 1, b: 2, c: 3 };
console.log(pickProps(obj, arr)); */