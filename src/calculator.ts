export class Calculator {
    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    add(): number {
        return this.a + this.b;
    }

    subtract(): number {
        return this.a - this.b;
    }

    multiply(): number {
        return this.a * this.b;
    }

    divide(): number {
        if (this.b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return this.a / this.b;
    }

    remainder(): number {
        if (this.b === 0) {
            throw new Error("Cannot calculate remainder if one of the numbers is zero.");
        }
        return this.a % this.b;;
    }

    power(): number {
        return Math.pow(this.a, this.b);
    }

    squareRoot(): number {
        if (this.a < 0) {
            throw new Error("Cannot calculate square root of a negative number.");
        }
        return Math.sqrt(this.a);
    }
}