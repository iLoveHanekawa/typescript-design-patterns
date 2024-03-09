// page 170

import { Currency } from "./Currency.js";
import { Iterator } from "./Iterator.js";
import { Watt } from "./Watt.js";

export class Equipment {

    Name(): string { return this._name; }

    Power(): Watt { return new Watt(); }
    NetPrice(): Currency { return new Currency(); }
    DiscountPrice(): Currency { return new Currency(); }

    Add(e: Equipment): void {}
    Remove(e: Equipment): void {}

    protected constructor(n: string = '') {}
    private _name: string = '';

    CreateIterator(): Iterator<Equipment> { return new Iterator(); }
}