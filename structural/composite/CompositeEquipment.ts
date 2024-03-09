import { Currency } from "./Currency.js";
import { Equipment } from "./Equipment.js";
import { Watt } from "./Watt.js";

export class CompositeEquipment extends Equipment {
    constructor(n: string) {
        super(n)
    }

    override Power(): Watt { return new Watt(); }
    override NetPrice(): Currency { return new Currency(); }
    override DiscountPrice(): Currency { return new Currency(); }

    override Add(): Equipment { return new Equipment(); }
}