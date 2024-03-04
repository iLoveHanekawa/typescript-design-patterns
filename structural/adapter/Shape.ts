import { Coord } from "./Coord.js";

class Point {
    x: number;
    y: number;
    constructor(x: Coord, y: Coord) {
        this.x = x.value;
        this.y = y.value;
    }
}

export interface Shape {
    BoundingBox(bottomLeft: Point, topRight: Point): void;
}

export interface TextView {
    getOrigin(): void;
}