/* const user = {
    name: "Sam",
} */

const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData
};
const addPropertyV2 = (userData, userId) =>
    Object.assign({}, userData, userData.id = userId);

const addPropertyV3 = (userData, userId) => {
    const objCopy = Object.assign({}, userData);
    objCopy.id = userId;

    return objCopy;
};

const addPropertyV4 = (userData, userId) => {
    const objCopy = {...userData };
    objCopy.id = userId;
    return objCopy;
};

/* const v1 = addPropertyV1(user, 1);
const v2 = addPropertyV2(user, 2);
const v3 = addPropertyV3(user, 3);
const v4 = addPropertyV4(user, 4); */