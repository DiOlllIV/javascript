import { findDivCount } from './index';

it('Should return multiple number in between of numbers', () => {
    const result = findDivCount(2, 9, 5);
    expect(result).toEqual(1);
});