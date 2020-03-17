const compareObjects = (obj1, obj2) => {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length)
        return false;

    const isEqual = objKeys1.reduce((acc, key) => {
        if (!acc)
            return false;
        return obj1[key] === obj2[key];
    }, false)

    return isEqual;
};