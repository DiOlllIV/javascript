import { sum } from './index.js';

it('Should return addition of numbers', () => {
    const result = sum(1, 2);
    expect(result).toEqual(3);
});