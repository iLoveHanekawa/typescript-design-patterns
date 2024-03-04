// utility for Shape class on page 146

export class Coord {
    value: number = 0;
    constructor(value: number = 0) {
        this.value = value
    }
    static add(x: Coord, y: Coord): Coord {
        return new Coord(x.value + y.value)
    }
}
