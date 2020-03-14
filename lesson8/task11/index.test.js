import { getAdults } from './index.js';

it('Should return object with adult users', () => {
    const result = getAdults({ 'Joe': 19, 'Tom': 17, 'Bob': 18, });
    expect(result).toEqual({ 'Joe': 19, 'Bob': 18 });
});