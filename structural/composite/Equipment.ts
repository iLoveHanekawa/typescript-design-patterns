// page 170

import type { Watt } from "./Watt.js";

export abstract class Equipment {

    Name(): string { return this._name; }

    abstract Power(): Watt;

    protected constructor(n: string) {}
    private _name: string = '';
}