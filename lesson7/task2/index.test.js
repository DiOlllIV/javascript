import { sortDesc } from './index.js';

it('Should return revers array', () => {
    const result = sortDesc([1, 2, 3]);
    expect(result).toEqual([3, 2, 1]);
});