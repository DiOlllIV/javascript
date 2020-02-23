const getMaxAbsoluteNumber = arr => {

    if (!Array.isArray(arr) || arr == 0)
        return null;

    const absolute = arr.map(elem => Math.abs(elem));

    return Math.max(...absolute);
};
/* 
const arr = [-99, 4, 777, 88, -999];
const arr1 = [];
console.log(getMaxAbsoluteNumber(arr1)) */