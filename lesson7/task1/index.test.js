import { getSpecialNumbers } from './index.js';

it('Should return numbers multiples of three', () => {
    const result = getSpecialNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([3, 6]);
});