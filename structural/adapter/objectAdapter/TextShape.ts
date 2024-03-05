// page 148

import { Coord } from "../classAdapter/Coord.js";
import type { Manipulator } from "../classAdapter/Manipulator.js";
import { Point } from "../classAdapter/Point.js";
import { type Shape } from "../classAdapter/Shape.js";
import { TextManipulator } from "./TextManipulator.js";
import type { TextView } from "../classAdapter/TextView.js";

export class TextShape implements Shape {
    _text: TextView

    constructor(textView: TextView) {
        this._text = textView;
    }

    BoundingBox(bottomLeft: unknown, topRight: unknown): void {
        const bottom = new Coord();
        const left = new Coord();
        const width = new Coord();
        const height = new Coord();
        this._text.GetOrigin(bottom, left);
        this._text.GetExtent(width, height);
        bottomLeft = new Point(bottom, left);
        topRight = new Point(Coord.add(bottom, height), Coord.add(left, width));
    }

    IsEmpty(): boolean {
        return this._text.IsEmpty();
    }

    CreateManipulator(): Manipulator {
        return new TextManipulator(this);    
    }

}