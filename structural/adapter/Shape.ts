import { Point } from "./Point.js";

export interface Shape {
    BoundingBox(bottomLeft: Point, topRight: Point): void;
}
