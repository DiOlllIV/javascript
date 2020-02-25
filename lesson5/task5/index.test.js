import { getSum } from './index';

it('Should return sum of even in between of two numbers', () => {
    const result = getSum(4, 8);
    expect(result).toEqual(18);
});