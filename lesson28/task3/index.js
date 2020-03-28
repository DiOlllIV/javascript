const mult = a => b => a * b;
const twice = a => mult(a)(2);
const triple = a => mult(a)(3);

export { mult, twice, triple };