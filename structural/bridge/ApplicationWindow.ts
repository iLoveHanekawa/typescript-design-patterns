// page 157

import { View } from "./View.js"
import { Window } from "./Window.js"


export class ApplicationWindow extends Window {
    constructor() {
        super(new View())
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
        this.GetView().DrawOn(this);
    }
    override DrawLine(): void {}
    override DrawPolygon(): void {}
    override DrawRect(): void {}
    override DrawText(): void {}
    
}