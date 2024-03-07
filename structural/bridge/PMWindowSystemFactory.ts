// support class for the bottom most code on page 159
import { PMWindowImp } from "./PMWindowImp.js";
import type { WindowImp } from "./WindowImp.js";
import { WindowSystemFactory } from "./WindowSystemFactory.js";
export class PMWindowSystemFactory extends WindowSystemFactory {
    constructor() {
        super();
    }
    MakeWindowImp(): WindowImp {
        return new PMWindowImp();
    }
}