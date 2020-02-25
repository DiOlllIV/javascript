import { concatProps } from './index.js';

it('Should return array without keys', () => {
    const result = concatProps({ name: 'Tom', ege: '22', value: '98%' });
    expect(result).toEqual(['Tom', '22', '98%']);
});