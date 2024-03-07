// page 157

import type { Coord } from "../adapter/classAdapter/Coord.js";

export abstract class WindowImp {

    protected constructor() {}

    abstract ImpTop(): void;
    abstract ImpBottom(): void;
    abstract ImpSetOrigin(): void;
    abstract ImpSetExtent(): void;

    abstract DeviceRect(x: Coord, y: Coord, w: Coord, h: Coord): void;
    abstract DeviceText(char: string, x: Coord, y: Coord): void;
    abstract DeviceBitmap(char: string, x: Coord, y: Coord): void;
}