import type { Coord } from "./Coord.js";

export interface TextView {
    GetOrigin(): void;
    GetExtent(width: Coord, height: Coord): void;
    IsEmpty(): boolean;
}

export class TextView implements TextView {
    GetExtent(width: Coord, height: Coord): void {}
    GetOrigin(): void {}
    IsEmpty(): boolean { return false; }
}