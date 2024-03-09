// support class for CompositeEquipment class on page 171

import type { Equipment } from "./Equipment.js";
import { Iterator } from "./Iterator.js";

export class ListIterator<Type extends Equipment, Args extends any[]> extends Iterator<Type, Args> {
    constructor(tCtor: new (...args: Args) => Type) {
        super(tCtor)
    }
}