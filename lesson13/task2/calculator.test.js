import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('Should return square of numbers', () => {
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it('Should return odd numbers from array', () => {
    const result = getOddNumbers([1, 2, 3]);
    expect(result).toEqual([1, 3]);
});

it('Should return a sum of two numbers', () => {
    const result = getSum(2, 3);
    expect(result).toEqual(5);
});