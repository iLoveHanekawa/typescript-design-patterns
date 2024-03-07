// page 157

import { Coord } from "../adapter/classAdapter/Coord.js";
import { View } from "./View.js";
import { Window } from "./Window.js";
import type { WindowImp } from "./WindowImp.js";

export class IconWindow extends Window {
    private _bitmapName: string;
    constructor() {
        super(new View())
        this._bitmapName = 'default'
    }

    override Close(): void {}
    override Open(): void {}
    override Iconify(): void {}
    override Deiconify(): void {}
    override SetExtent(): void {}
    override SetOrigin(): void {}
    override Raise(): void {}
    override Lower(): void {}
    override DrawContents(): void {
        const imp: WindowImp = this.GetWindowImp();
        if(imp){
            imp.DeviceBitmap(this._bitmapName, new Coord(0.0), new Coord(0.0));
        }
    }
    override DrawLine(): void {}
    override DrawPolygon(): void {}
    override DrawRect(): void {}
    override DrawText(): void {}
}