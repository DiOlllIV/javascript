/* const user = {
    name: "Sam",
};

const value = {
    name: 'Bob',
    transaction: 1700,
}; */

const mergeObjectsV1 = (obj1, obj2) =>
    Object.assign({}, { obj1, obj2 });

const mergeObjectsV2 = (obj1, obj2) =>
    Object.assign({}, { obj2, obj1 });

const mergeObjectsV3 = (obj1, obj2) => {
    const copy1 = {...obj1 };
    const copy2 = {...obj2 };

    const objCopy = Object.assign({}, { copy1, copy2 });

    return objCopy;
};


const mergeObjectsV4 = (obj1, obj2) =>
    Object.assign({}, {...obj2, ...obj1 });



/* const v1 = mergeObjectsV1(user, value);
const v2 = mergeObjectsV2(user, value);
const v3 = mergeObjectsV3(user, value);
const v4 = mergeObjectsV4(user, value); */