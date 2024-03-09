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
    override NetPrice(): Currency {
        const i = this.CreateIterator()!;
        const total: Currency = new Currency(0);
        for(i?.First(); !i?.IsDone(); i?.Next()) {
            total.SetValue(total.GetValue() + i?.CurrentItem().NetPrice().GetValue());
        }
        return total;
    }
    override DiscountPrice(): Currency { return new Currency(); }

    override Add(e: Equipment): void {}
    override Remove(e: Equipment): void {}
    override CreateIterator(): ListIterator<Equipment> {
        return new ListIterator(this._equipment);
    }

    private _equipment: Array<Equipment> = [];
}