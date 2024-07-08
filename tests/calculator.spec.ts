import { Calculator } from "../src/calculator"

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
        expect(act.divide()).toThrow();
    });

    it('Вычисление остатка от деления', () => {
        expect(act.remainder()).toThrow();
    });

    it('Возведение в степень', () => {
        expect(act.power()).toBe(1);
    });

    it('Нахождение корня', () => {
        expect(act.squareRoot()).toBe(1.4142135623730951);
    });
});

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
        expect(act.squareRoot()).toThrow();
    });
});