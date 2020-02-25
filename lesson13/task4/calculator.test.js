import { calc } from './calculator';

it('Should return null if not a string passed', () => {
    const result = calc(2 + 2);
    expect(result).toEqual(null);
});

it('Should return expression of additiion', () => {
    const result = calc('2 + 2');
    expect(result).toEqual('2 + 2 = 4');
});

it('Should return expression of substraction', () => {
    const result = calc('2 - 2');
    expect(result).toEqual('2 - 2 = 0');
});

it('Should return expression of multiplication', () => {
    const result = calc('2 * 2');
    expect(result).toEqual('2 * 2 = 4');
});

it('Should return expression of division', () => {
    const result = calc('2 / 2');
    expect(result).toEqual('2 / 2 = 1');
});