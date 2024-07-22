import { Calculator } from "./calculator"

describe('Проверка функционала калькулятора для целых чисел', () => {
    let act: Calculator;

    beforeEach(() => {
        act = new Calculator(2, 5);
    });

    it('Сложение', () => {
        expect(act.add()).toBe(7);
    });

    it('Вычитание', () => {
        expect(act.subtract()).toBe(-3);
    });

    it('Умножение', () => {
        expect(act.multiply()).toBe(10);
    });
    
    it('Деление', () => {
        expect(act.divide()).toBe(0.4);
    });

    it('Вычисление остатка от деления', () => {
        expect(act.remainder()).toBe(2);
    });

    it('Возведение в степень', () => {
        expect(act.power()).toBe(32);
    });

    it('Нахождение корня', () => {
        expect(act.squareRoot()).toBe(1.4142135623730951);
    });
});