import { createCalculator } from './index';

it('Should save add 5 in memory', () => {
    const calc = createCalculator();
    calc.add(5);
    const result = calc.getMemo();
    expect(result).toEqual(5);
});

it('Should descrease num from memory num', () => {
    const calc = createCalculator();
    calc.decrease(5);
    const result = calc.getMemo();
    expect(result).toEqual(-5);
});

it('Should reset to 0 a number in memory', () => {
    const calc = createCalculator();
    calc.reset(5);
    const result = calc.getMemo();
    expect(result).toEqual(0);
});

it('Should show a number from memory', () => {
    const calc = createCalculator();
    calc.getMemo();
    const result = calc.getMemo();
    expect(result).toEqual(0);
});