import { Calculator } from "./calculator"

describe('Проверка функционала калькулятора при негативных значениях', () => {
    let act: Calculator;

    beforeEach(() => {
        act = new Calculator(-1, -2);
    });

    it('Сложение', () => {
        expect(act.add()).toBe(-3);
    });

    it('Вычитание', () => {
        expect(act.subtract()).toBe(1);
    });

    it('Умножение', () => {
        expect(act.multiply()).toBe(2);
    });
    
    it('Деление', () => {
        expect(act.divide()).toBe(0.5);
    });

    it('Вычисление остатка от деления', () => {
        expect(act.remainder()).toBe(-1);
    });

    it('Возведение в степень', () => {
        expect(act.power()).toBe(1);
    });

    it('Нахождение корня', () => {
        expect(act.squareRoot()).toThrow(new Error('Cannot calculate square root of a negative number.'));
    });
});