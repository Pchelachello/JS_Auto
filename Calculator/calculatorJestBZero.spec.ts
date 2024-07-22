import { Calculator } from "./calculator"

describe('Проверка функционала калькулятора при b равном нулю', () => {
    let act: Calculator;

    beforeEach(() => {
        act = new Calculator(2, 0);
    });

    it('Сложение', () => {
        expect(act.add()).toBe(2);
    });

    it('Вычитание', () => {
        expect(act.subtract()).toBe(2);
    });

    it('Умножение', () => {
        expect(act.multiply()).toBe(0);
    });
    
    it('Деление', () => {
        expect(act.divide()).toThrow(new Error('Division by zero is not allowed.'));
    });

    it('Вычисление остатка от деления', () => {
    //     expect(act.remainder()).toThrow(new Error('Cannot calculate remainder if one of the numbers is zero.'));
    // });
    expect(() => act.squareRoot()).toThrow(new Error('Cannot calculate square root of a negative number.'));
    });
    
    it('Возведение в степень', () => {
        expect(act.power()).toBe(1);
    });

    it('Нахождение корня', () => {
        expect(act.squareRoot()).toBe(1.4142135623730951);
    });
});