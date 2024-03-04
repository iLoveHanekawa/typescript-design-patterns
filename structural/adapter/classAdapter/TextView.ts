// page 146

import type { Coord } from "./Coord.js";

export interface TextView {
    GetOrigin(x: Coord, y: Coord): void;
    GetExtent(width: Coord, height: Coord): void;
    IsEmpty(): boolean;
}

export class TextView implements TextView {
    GetExtent(width: Coord, height: Coord): void {}
    GetOrigin(x: Coord, y: Coord): void {}
    IsEmpty(): boolean { return false; }
}