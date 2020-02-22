const concatProps = obj => {
    let arr = [];

    for (let key in obj) {

        arr.push(obj[key]);
    }

    return arr;
};

/* 
const obj = { name: 'Tom', ege: '22', value: '98%' };
console.log(concatProps(obj)); */