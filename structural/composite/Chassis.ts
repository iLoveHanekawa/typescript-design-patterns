// page 172

import { CompositeEquipment } from "./CompositeEquipment.js";
import { Currency } from "./Currency.js";
import { Watt } from "./Watt.js";

export class Chassis extends CompositeEquipment {
    constructor(n?: string) {
        super(n);
    }

    override Power(): Watt { return new Watt(); }
    override NetPrice(): Currency { return new Currency(); }
    override DiscountPrice(): Currency { return new Currency(); }

    
}