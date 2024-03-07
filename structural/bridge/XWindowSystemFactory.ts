// support class for the bottom most code on page 159

import type { WindowImp } from "./WindowImp.js";
import { WindowSystemFactory } from "./WindowSystemFactory.js";
import { XWindowImp } from "./XWindowImp.js";

export class XWindowSystemFactory extends WindowSystemFactory {
    constructor() {
        super();
    }
    MakeWindowImp(): XWindowImp {
        return new XWindowImp();
    }
}