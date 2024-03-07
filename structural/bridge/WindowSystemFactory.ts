import { PMWindowSystemFactory } from "./PMWindowSystemFactory.js";
import { WindowImp } from "./WindowImp.js";
import { XWindowSystemFactory } from "./XWindowSystemFactory.js";

export abstract class WindowSystemFactory {

    private static _instance: WindowSystemFactory | null = null;

    protected constructor() {}

    static Instance(): WindowSystemFactory {
        if(this._instance === null) {
            if(process.env.PLATFORM === 'PM') return new XWindowSystemFactory();
            else return new PMWindowSystemFactory();
        }
        return this._instance;
    }

    abstract MakeWindowImp(): WindowImp;
}