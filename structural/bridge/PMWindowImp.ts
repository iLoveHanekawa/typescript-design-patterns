// page 159

import { Coord } from "../adapter/classAdapter/Coord.js";
import { Point } from "../adapter/classAdapter/Point.js";
import { WindowImp } from "./WindowImp.js";

// this is class that is made up to fit the example, same with the gpi functions that follow
// pretend these are platform specific functions
class PresentationSpaceHandle { constructor() {} }
type PPOINTL = [Point, Point, Point, Point] 

function GpiBeginPath(hps: PresentationSpaceHandle, val: number): boolean { return false; }
function GpiSetCurrentPosition(hps: PresentationSpaceHandle, point: Point): boolean { return false; }
function GpiPolyLine(hps: PresentationSpaceHandle, val: number, point: PPOINTL): Error {
    throw new Error("GPI_ERROR");
}
function GpiEndPath(hps: PresentationSpaceHandle): boolean { return false; }
function GpiStrokePath(hps: PresentationSpaceHandle, val1: number, val2: number): void {}


export class PMWindowImp extends WindowImp {
    constructor() {
        super()
        this._hps = new PresentationSpaceHandle();
    }
    ImpTop(): void { }
    ImpBottom(): void { }
    ImpSetOrigin(): void { }
    ImpSetExtent(): void { }
    DeviceRect(x: Coord, y: Coord, w: Coord, h: Coord): void { 
        const left: Coord = new Coord(Math.min(x.value, w.value));
        const right: Coord = new Coord(Math.max(x.value, w.value));
        const top: Coord = new Coord(Math.max(y.value, h.value));
        const bottom: Coord = new Coord(Math.min(y.value, h.value));

        const point: PPOINTL = [
            new Point(left, top), 
            new Point(right, top), 
            new Point(right, bottom), 
            new Point(left, bottom)
        ]

        if(
            GpiBeginPath(this._hps, 1) === false ||
            GpiSetCurrentPosition(this._hps, point[3]) === false ||
            GpiPolyLine(this._hps, 4, point) instanceof Error ||
            GpiEndPath(this._hps) === false
        ) {
            throw new Error("Can't draw rectangle");
        }
        else {
            GpiStrokePath(this._hps, 1, 0);
        }
    }
    DeviceText(char: string, x: Coord, y: Coord): void { }
    DeviceBitmap(char: string, x: Coord, y: Coord): void { }
    
    private _hps: PresentationSpaceHandle;
}