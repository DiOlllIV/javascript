const user = {
    name: "Sam",
}

const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;

    return obj;
};

const addPropertyV2 = (obj, key, value) =>
    Object.assign({}, obj, obj[key] = value);

const addPropertyV3 = (obj, key, value) => {
    const objCopy = Object.assign({}, obj);
    objCopy[key] = value;

    return objCopy;
};

const addPropertyV4 = (obj, key, value) => {
    const objCopy = {...obj };
    objCopy[key] = value;

    return objCopy;
};

const v1 = addPropertyV1(user, 1, 1);
const v2 = addPropertyV2(user, 2, 2);
const v3 = addPropertyV3(user, 3, 3);
const v4 = addPropertyV4(user, 4, 4);