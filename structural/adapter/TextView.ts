import type { Coord } from "./Coord.js";

export interface TextView {
    GetOrigin(): void;
    GetExtent(width: Coord, height: Coord): void;
    IsEmpty(): boolean;
}