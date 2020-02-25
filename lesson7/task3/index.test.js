import { flatArray } from './index.js';

it('Should return solid array', () => {
    const result = flatArray([1, [2, 3], 4, [5, 6]]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});