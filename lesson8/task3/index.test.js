import { pickProps } from './index.js';

it('Should return object with keys and element like element in array', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'b']);
    expect(result).toEqual({ a: 1, b: 2 });
});