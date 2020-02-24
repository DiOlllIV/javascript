const calc = expression => {

    const [a, oper, b] = expression.split(' ');
    let result;

    switch (oper) {
        case '+':
            result = Number(a) + Number(b);
            break;
        case '-':
            result = Number(a) - Number(b);
            break;
        case '*':
            result = Number(a) * Number(b);
            break;
        case '/':
            result = Number(a) / Number(b);
            break;

    }

    return `${expression} = ${result}`;
}

/* console.log(calc('1 + 2'));
console.log(calc('1 - 2'));
console.log(calc('1 * 2'));
console.log(calc('1 / 2')); */