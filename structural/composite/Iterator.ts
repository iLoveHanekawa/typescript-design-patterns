// support class for various classes in the Composite chapter

import type { Equipment } from "./Equipment.js";

export class Iterator<Type extends Equipment> {
    // constructor for the argument Type
    constructor(collection: Array<Equipment> = []) {
        this._index = 0;
        this._collection = collection;
    }

    
    protected _index: number;
    protected _collection: Array<Equipment>;
    
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