// page 115

import { Room } from "../Room.js";
import { Wall } from "../Wall.js";
import { MazeGame } from "./MazeGame.js";
import { BombedWall, RoomWithABomb } from '../abstractFactory/BombedMazeFactory.js'

export class BombedMazeGame extends MazeGame {

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