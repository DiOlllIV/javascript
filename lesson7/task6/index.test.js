import { reverseArray } from './index.js';

it('Should return reverse array', () => {
    const result = reverseArray([1, 2, 3]);
    expect(result).toEqual([3, 2, 1]);
});

it('Should return null if not array passed', () => {
    const result = reverseArray('something');
    expect(result).toEqual(null);
});