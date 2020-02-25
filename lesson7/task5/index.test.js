import { squareArray } from './index.js';

it('Should return square of numbers in array', () => {
    const result = squareArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([1, 4, 9, 16, 25, 36]);
});

it('Should return null if not array passed', () => {
    const result = squareArray('something');
    expect(result).toEqual(null);
});