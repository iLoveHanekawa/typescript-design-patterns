// support class for various classes in the Composite chapter

import type { Equipment } from "./Equipment.js";

export class Iterator<Type extends Equipment, Args extends any[]> {
    // constructor for the argument Type
    private _collection: Type[];
    private _tCtor: { new(...args: Args): Type };
    private _index: number;

    constructor(tCtor: { new(...args: Args): Type }) {
        this._tCtor = tCtor
        this._collection = [];
        this._index = 0;
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

    CurrentItem(): Type {
        return this._collection[this._index]
    }
}