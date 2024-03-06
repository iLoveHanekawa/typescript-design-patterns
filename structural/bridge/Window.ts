// page 156

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
    abstract DrawRect(x: Point, y: Point): void;
    abstract DrawPolygon(points: Point[], n: number): void;
    abstract DrawText(char: string, x: Point): void;
}