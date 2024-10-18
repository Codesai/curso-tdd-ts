export class Money {
    private readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    private static aValueOf(amount: number): number {
        return Math.round(amount * 100) / 100;
    }

    public static oneThousand(): Money {
        return new Money(this.aValueOf(1000));
    }

    public static oneHundred(): Money {
        return new Money(this.aValueOf(100));
    }

    public static amount(amount: number): Money {
        return new Money(this.aValueOf(amount));
    }

    public reduceBy(percentage: number): Money {
        const newValue = this.value * (100 - percentage) / 100;
        return new Money(newValue);
    }

    public moreThan(other: Money): boolean {
        return this.value > other.value;
    }
}
