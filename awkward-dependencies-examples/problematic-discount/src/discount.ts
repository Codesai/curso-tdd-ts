import {MarketingCampaign} from "./marketingCampaign";
import {Money} from "./money";

export class Discount {
    private marketingCampaign: MarketingCampaign;

    constructor() {
        this.marketingCampaign = new MarketingCampaign();
    }

    public discountFor(netPrice: Money): Money {
        if (this.marketingCampaign.isCrazySalesDay()) {
            return netPrice.reduceBy(15);
        }
        if (netPrice.moreThan(Money.oneThousand())) {
            return netPrice.reduceBy(10);
        }
        if (netPrice.moreThan(Money.oneHundred()) && this.marketingCampaign.isActive()) {
            return netPrice.reduceBy(5);
        }
        return netPrice;
    }
}
