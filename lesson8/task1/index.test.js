import { transformToObject } from './index.js';

it('Should return object with the same key like element', () => {
    const result = transformToObject(['name', 'Tom']);
    expect(result).toEqual({ name: 'name', Tom: 'Tom' });
});