const filterNames = (arr, text) =>
    arr.filter(elem =>
        elem.length > 5 && elem.includes(text) && elem);