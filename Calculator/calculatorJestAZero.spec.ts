import { Calculator } from "./calculator"

describe('Проверка функционала калькулятора при a равном нулю', () => {
    let act: Calculator;

    beforeEach(() => {
        act = new Calculator(0, 5);
    });

    it('Сложение', () => {
        expect(act.add()).toBe(5);
    });

    it('Вычитание', () => {
        expect(act.subtract()).toBe(-5);
    });

    it('Умножение', () => {
        expect(act.multiply()).toBe(0);
    });
    
    it('Деление', () => {
        expect(act.divide()).toBe(0);
    });

    it('Вычисление остатка от деления', () => {
        expect(act.remainder()).toBe(0);
    });

    it('Возведение в степень', () => {
        expect(act.power()).toBe(0);
    });

    it('Нахождение корня', () => {
        expect(act.squareRoot()).toBe(0);
    });
});