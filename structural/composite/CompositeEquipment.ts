// page 171

import { Currency } from "./Currency.js";
import { Equipment } from "./Equipment.js";
import { Iterator } from "./Iterator.js";
import { ListIterator } from "./ListIterator.js";
import { Watt } from "./Watt.js";

export class CompositeEquipment extends Equipment {
    constructor(n?: string) {
        super(n)
    }

    override Power(): Watt { return new Watt(); }
    override NetPrice(): Currency { return new Currency(); }
    override DiscountPrice(): Currency { return new Currency(); }

    override Add(e: Equipment): void {}
    override Remove(e: Equipment): void {}
    override CreateIterator(): Iterator<Equipment, [n: string | undefined]> | null {
        return new ListIterator(CompositeEquipment);
    }

    private _equipment: Array<Equipment> = [];
}