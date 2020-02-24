const splitString = (string, len = 10) => {

    if (typeof string != 'string')
        return null;

    const strArr = [];
    let start = 0;

    while (true) {
        let chunk = text.substring(start, len);

        if (chunk.length === 0)
            break;

        // if length of chunk smaller than length of substring, 
        // repeats dot to remaining length
        if (chunk.length < len)
            chunk += '.'.repeat(len - chunk.length)

        strArr.push(chunk.slice());
        start += len;
    }

    return strArr;
};

/* 
let text = "Lorem Ipsum s simpy dunny text of the printing and typesetting index has been the industry's standard dummy text ever since the 1500s.";
console.log(splitString(text, 3)); */