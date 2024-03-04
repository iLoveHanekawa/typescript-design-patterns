import { TextView } from "./TextView.js";
import { Shape } from "./Shape.js";
import { Point } from "./Point.js";
import { Coord } from "./Coord.js";

class TextShape extends TextView implements Shape {
    BoundingBox(bottomLeft: Point, topRight: Point): void {
        const bottom = new Coord();
        const left = new Coord();
        const width = new Coord();
        const height = new Coord();
        this.GetOrigin(bottom, left);
        this.GetExtent(width, height);
        bottomLeft = new Point(bottom, left);
        topRight = new Point(Coord.add(bottom, height), Coord.add(left, width));
    }
}