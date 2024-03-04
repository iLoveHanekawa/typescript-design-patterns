import { TextView } from "./TextView.js";
import { Shape } from "./Shape.js";
import { Point } from "./Point.js";
import { Coord } from "./Coord.js";
import { Manipulator } from "./Manipulator.js";
import { TextManipulator } from "./TextManipulator.js";

export class TextShape extends TextView implements Shape {

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

    IsEmpty(): boolean {
        return super.IsEmpty();        
    }

    CreateManipulator(): Manipulator {
        return new TextManipulator(this);
    }
}