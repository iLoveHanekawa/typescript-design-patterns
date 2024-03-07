// page 158

import { Coord } from "../adapter/classAdapter/Coord.js";
import { WindowImp } from "./WindowImp.js";

class GC { constructor() {} }
class Display { constructor() {} }
class Drawable { constructor() {} }

// pretend this is a platform specific function 
function XDrawRectangle(dpy: Display, winid: Drawable, gc: GC, x: Coord, y: Coord, h: Coord, w: Coord) {}

export class XWindowImp extends WindowImp {
    constructor() {
        super()
        this._dpy = new Display();
        this._gc = new GC();
        this._winid = new Drawable();
    }
    ImpTop(): void { }
    ImpBottom(): void { }
    ImpSetOrigin(): void { }
    ImpSetExtent(): void { }
    DeviceRect(x: Coord, y: Coord, w: Coord, h: Coord): void { 
        const num1: number = Math.round(Math.min(x.value, w.value));
        const num2: number = Math.round(Math.min(y.value, h.value));
        const num3: number = Math.round(Math.abs(x.value - w.value));
        const num4: number = Math.round(Math.abs(y.value - h.value));
        XDrawRectangle(this._dpy, this._winid, this._gc, new Coord(num1), new Coord(num2), new Coord(num3), new Coord(num4));
    }
    DeviceText(char: string, x: Coord, y: Coord): void { }
    DeviceBitmap(char: string, x: Coord, y: Coord): void { }
    private _dpy: Display;
    private _winid: Drawable;
    private _gc: GC;
}