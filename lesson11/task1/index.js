const splitText = (text, len = 10) => {

    if (typeof text != 'string')
        return null;

    const strArr = [];
    let start = 0;

    while (true) {
        let chunk = text.substr(start, len);
        if (chunk.length === 0)
            break;

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        start += len;
    }


    return strArr.join('\n');
};


/* let text = "Lorem Ipsum s simpy dunny text of the printing and typesetting index has been the industry's standard dummy text ever since the 1500s.";
console.log(splitText(text, 5)); */