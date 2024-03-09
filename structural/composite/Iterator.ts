// support class for various classes in the Composite chapter

import type { Equipment } from "./Equipment.js";

export class Iterator<Type extends Equipment, Args extends any[]> {
    // constructor for the argument Type

    private _TCtor: { new(...args: Args): Type };
    constructor(TCtor: { new(...args: Args): Type }) {
        this._TCtor = TCtor
    }
    
}