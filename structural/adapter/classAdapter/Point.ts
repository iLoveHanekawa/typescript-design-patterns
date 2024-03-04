// utility for Shape class on page 146

import { Coord } from "./Coord.js";

export class Point {
    x: number;
    y: number;
    constructor(x: Coord, y: Coord) {
        this.x = x.value;
        this.y = y.value;
    }
}
