import { Calculator } from '../Calculator/calculator';
import  assert  from 'assert';


describe('Проверка функционала калькулятора для целых чисел на Mocha', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator(10, 5);
    });

    it('Сложение двух чисел', () => {
        assert.equal((calc.add()), 15, "Ошибка сложения");
    });

    it('Вычитание двух чисел', () => {
        assert.equal((calc.subtract()), 5, "Ошибка вычитания");
    });

    it('Умножение двух чисел', () => {
        assert.equal((calc.multiply()), 50, "Ошибка умножения");
    });

    it('Деление двух чисел', () => {
        assert.equal((calc.divide()), 2, "Ошибка деления");    
    });

    it('Вычисление остатка от деления', () => {
        assert.equal((calc.remainder()), 0, "Ошибка вычисление остатка от деления");
    });

    it('Возведение в степень', () => {
        assert.equal((calc.power()), 100000, "Ошибка возведения в степень");
    });

    it('Вычисление квадратного корня', () => {
        assert.equal((calc.squareRoot()), Math.sqrt(10), "Ошибка вычисление квадратного корня");
    });
})