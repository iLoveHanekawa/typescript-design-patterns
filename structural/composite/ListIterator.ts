// support class for CompositeEquipment class on page 171

import type { CompositeEquipment } from "./CompositeEquipment.js";
import type { Equipment } from "./Equipment.js";
import { Iterator } from "./Iterator.js";

export class ListIterator<Type extends Equipment> extends Iterator<Type> {
    constructor(collection: Array<Equipment>) {
        super(collection)
    }
    
    First(): void {
        this._index = 0;
    }

    Next(): void {
        this._index++;
    }

    IsDone(): boolean {
        return this._index >= this._collection.length;
    }

    CurrentItem(): Equipment {
        return this._collection[this._index]
    }
}