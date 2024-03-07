// page 156

import { Coord } from "../adapter/classAdapter/Coord.js";
import type { Point } from "../adapter/classAdapter/Point.js";
import { View } from "./View.js";
import { WindowImp } from "./WindowImp.js";

export abstract class Window {

    constructor(contents: View) {
        this._contents = contents;
    }

    private _contents: View;
    private _imp: WindowImp | null = null;
    
    protected GetView(): View { return this._contents; }
    protected GetWindowImp(): WindowImp { return this._imp; }
    
    // requests handled by window
    abstract DrawContents(): void;
    abstract Open(): void;
    abstract Close(): void;
    abstract Iconify(): void;
    abstract Deiconify(): void;

    // requests forwarded to implementation
    abstract SetOrigin(at: Point): void;
    abstract SetExtent(extent: Point): void;
    abstract Raise(): void;
    abstract Lower(): void;

    abstract DrawLine(x: Point, y: Point): void;
    DrawRect(x: Point, y: Point): void {
        const imp: WindowImp = this.GetWindowImp();
        imp.DeviceRect(new Coord(x.x), new Coord(x.y), new Coord(y.x), new Coord(y.y));
    }
    abstract DrawPolygon(points: Point[], n: number): void;
    abstract DrawText(char: string, x: Point): void;
}