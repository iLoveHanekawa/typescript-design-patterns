import { Wall } from "./MazePrototypeFactory.js";

export class BombedWall extends Wall {
    constructor() {
        super();
        this._bomb = false;
    }

    Clone(): Wall {
        return new BombedWall();
    }

    HasBomb(): boolean {
        return this._bomb;
    }

    private _bomb: boolean
}