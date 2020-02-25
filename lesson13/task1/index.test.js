it('17 it\'s a 17', () => {
    expect(17).toEqual(17);
});

it('18 it\'s no a 17', () => {
    expect(18).not.toEqual(17);
});


const getEvenNumers = numbers =>
    numbers.filter(num => (num % 2 === 0));

it('Should return even numbers', () => {
    const result = getEvenNumers([1, 2, 3, 4]);

    expect(result).toEqual([2, 4]);
});