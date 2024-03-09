// support class for various classes in the Composite chapter

export class Currency {
    private _value: number = 0;
    constructor() {}
    get GetValue(): number {
        return this._value;
    }
    set SetValue(n: number) {
        this._value = n;
    }
}