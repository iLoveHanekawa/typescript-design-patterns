// page 170

import type { Currency } from "./Currency.js";
import type { Watt } from "./Watt.js";

export abstract class Equipment {

    Name(): string { return this._name; }

    abstract Power(): Watt;
    abstract NetPrice(): Currency;
    abstract DiscountPrice(): Currency;

    abstract Add(e: Equipment): void;
    abstract Remove(e: Equipment): void;

    protected constructor(n: string) {}
    private _name: string = '';
}