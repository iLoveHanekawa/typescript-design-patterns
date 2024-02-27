// page 93

import { Room } from "../Room.js";
import { Wall } from "../Wall.js";
import { MazeFactory } from "./MazeFactory.js";

export class RoomWithABomb extends Room {
    constructor(roomNumber: number) {
        super(roomNumber);
    }
}

export class BombedWall extends Wall {
    constructor() {
        super()
    }
}

export class BombedMazeFactory extends MazeFactory {
    constructor() {
        super()
    }

    override MakeWall(): Wall {
        return new BombedWall();
    }

    override MakeRoom(roomNumber: number): Room {
        return new RoomWithABomb(roomNumber);
    }

}