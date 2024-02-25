// page 92

import { Door } from "../Door.js";
import { Maze } from "../Maze.js";
import { Room } from "../Room.js";
import { Wall } from "../Wall.js";

export class MazeFactory {

    constructor() {}

    MakeMaze(): Maze {
        return new Maze();
    }

    MakeWall(): Wall { 
        return new Wall();
    }

    MakeRoom(roomNumber: number): Room {
        return new Room(roomNumber);
    }

    MakeDoor(r1: Room, r2: Room): Door {
        return new Door(r1, r2);
    }
}