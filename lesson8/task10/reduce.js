const buildObject = (keysList, valuesList) => {

    const result = keysList.reduce((acc, cur, id) => {
        acc[cur] = valuesList[id];
        return acc;
    }, {});

    return result;
};