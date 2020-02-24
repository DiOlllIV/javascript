const countOccurrences = (str, findStr) => {

    if (findStr === '')
        return null;

    let sum = 0;
    let pos = 0;

    while (true) {
        let foundPos = str.indexOf(findStr, pos);

        if (foundPos == 0)
            break;

        sum++;
        pos = foundPos + 1;
    }

    return sum;

};


/* let text = " Lorem Ipsum s simpy dunny text of the printing and typesetting index has been the industry's standard dummy text ever since the 1500s.";
console.log(countOccurences('s', text)); */