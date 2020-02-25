import { square } from './index';

it('Should return square of number', () => {
    const result = square(4);
    expect(result).toEqual(16);
});