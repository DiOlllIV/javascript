import { add, decrease, reset, getMemo } from './index';

it('Should save addeted number in memory', () => {
    add(5);
    const result = getMemo();
    expect(result).toEqual(5);
});

it('Should subtract entered number from memory', () => {
    decrease(4);
    const result = getMemo();
    expect(result).toEqual(1);
});

it('Should return a number in memory', () => {
    const result = getMemo();
    expect(result).toEqual(1);
});

it('Should reset number in memory to 0', () => {
    reset(4);
    const result = getMemo();
    expect(result).toEqual(0);
});

it('Should return a number in memory', () => {
    const result = getMemo();
    expect(result).toEqual(0);
});