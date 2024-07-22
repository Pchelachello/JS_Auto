import { Calculator } from "./calculator"

describe('Проверка функционала калькулятора для дробных чисел', () => {
    let act: Calculator;

    beforeEach(() => {
        act = new Calculator(2.5, 7.5);
    });

    it('Сложение', () => {
        expect(act.add()).toBe(10);
    });

    it('Вычитание', () => {
        expect(act.subtract()).toBe(-5);
    });

    it('Умножение', () => {
        expect(act.multiply()).toBe(18.75);
    });
    
    it('Деление', () => {
        expect(act.divide()).toBe(0.3333333333333333);
    });

    it('Вычисление остатка от деления', () => {
        expect(act.remainder()).toBe(2.5);
    });

    it('Возведение в степень', () => {
        expect(act.power()).toBe(965.0505554713071);
    });

    it('Нахождение корня', () => {
        expect(act.squareRoot()).toBe(1.5811388300841898);
    });
});