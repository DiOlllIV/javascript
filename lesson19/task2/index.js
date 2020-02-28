export function getOwnProps(obj) {

    let propsArr = [];

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function')
            propsArr.push(prop);
    }

    return propsArr;
    /* return Object.keys(obj); */
};