export class Coord {
    value: number = 0;
    constructor(value: number = 0) {
        this.value = value
    }
    static add(x: Coord, y: Coord): Coord {
        return new Coord(x.value + y.value)
    }
}
