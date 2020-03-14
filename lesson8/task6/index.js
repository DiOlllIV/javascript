const user = {
    name: "Sam",
}

const addPropertyV1 = (userData, userId) =>
    userData.id = userId;

const addPropertyV2 = (userData, userId) =>
    Object.assign(userData, userData.id = userId);

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