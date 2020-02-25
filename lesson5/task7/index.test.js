import { increaser } from './index';

it('Should return sum of numbers', () => {
    const result = increaser(6, 4);
    expect(result).toEqual(10);
});

it('Should return first number', () => {
    const result = increaser(4, 6);
    expect(result).toEqual(4);
});