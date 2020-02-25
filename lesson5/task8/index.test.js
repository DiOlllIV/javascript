import { sum, compareSums } from './index';

it('Should return sum in between of numbers', () => {
    const result = sum(6, 4);
    expect(result).toEqual(15);
});

it('Should return sum in between of numbers', () => {
    const result = sum(4, 6);
    expect(result).toEqual(15);
});

it('Should return true if sum of first two numbers bigger', () => {
    const result = compareSums(6, 5, 4, 6);
    expect(result).toEqual(false);
});

it('Should return false if sum of first two numbers smaller', () => {
    const result = compareSums(6, 4, 5, 6);
    expect(result).toEqual(true);
});