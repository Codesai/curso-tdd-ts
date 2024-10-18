import {Discount} from "../src/discount";
import {Money} from "../src/money";

describe('Discount', () => {
    it('fix me', () => {
        const discount = new Discount();

        const net = Money.amount(110);
        const total = discount.discountFor(net)

        expect(total).toBe(Money.amount(104.5))
    });
});