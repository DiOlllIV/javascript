const multiRound = num => [
    Number(Math.floor(num * 100) / 100),
    Number(Math.round(num * 100) / 100),
    Number(Math.ceil(num * 100) / 100),
    Number(Math.trunc(num * 100) / 100),
    Number(num.toFixex(2))
];