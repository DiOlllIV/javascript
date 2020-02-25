import { getEvenOdd } from './index';

it('Should return even if number is even', () => {
    const result = getEvenOdd(4);
    expect(result).toEqual('even');
});

it('Should return odd if number is odd', () => {
    const result = getEvenOdd(3);
    expect(result).toEqual('odd');
});