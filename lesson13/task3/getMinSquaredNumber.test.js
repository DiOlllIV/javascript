import getMinSquaredNumber from './getMinSquaredNumber';

it('Sould return minimal number from array in square', () => {
    const result = getMinSquaredNumber([2, 3, 4, 5]);
    expect(result).toEqual(4);
});

it('Sould return null if array is empty', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});

it('Sould return null if not array passed', () => {
    const result = getMinSquaredNumber('something');
    expect(result).toEqual(null);
});