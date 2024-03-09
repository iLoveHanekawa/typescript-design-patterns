// support class for various classes in the Composite chapter

export class Currency {
    private _value;
    constructor(val: number = 0) {
        this._value = val;
    }
    get GetValue(): number {
        return this._value;
    }
    set SetValue(n: number) {
        this._value = n;
    }
}