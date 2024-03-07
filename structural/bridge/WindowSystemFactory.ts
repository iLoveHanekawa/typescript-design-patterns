import { WindowImp } from "./WindowImp.js";

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

    MakeWindowImp(): WindowImp {
        return new WindowImp();
    }
}