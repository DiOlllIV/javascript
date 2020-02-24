    const reverseString = string => {
        if (typeof string != 'string')
            return null;

        return string.split('').reverse().join('');
    };

    let text = 'Some text here';
    console.log(reverseString(text));