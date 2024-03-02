interface Integer {
    x: number
    set(x: number): void
    get(): number
}

class Integer implements Integer {
    x: number
    constructor(x: number) {
        this.x = x;
    }

    set(x: number): void {
        this.x = x;
    }

    get(): number {
        return this.x;
    }
}

const x = new Integer(4);
const y: Integer = {
    x: 3,
    get(): number {
        return this.x
    },
    set(x: number): void {
        this.x = x;
    }
}

const addFive = (x: Integer): void => {
    x.set(9);
}

console.log(x.get());
console.log(y.get());
addFive(x);
addFive(y);
console.log(x.get());
console.log(y.get());
