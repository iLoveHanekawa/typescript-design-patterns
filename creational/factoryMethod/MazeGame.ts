// page 114

import { Direction } from "../Direction.js";
import { Door } from "../Door.js";
import { Maze } from "../Maze.js";
import { Room } from "../Room.js";
import { Wall } from "../Wall.js";

export class MazeGame {
    CreateMaze(): Maze {
        const aMaze: Maze = this.MakeMaze();
        const room1 = this.MakeRoom(1);
        const room2 = this.MakeRoom(2);

        aMaze.AddRoom(room1);
        aMaze.AddRoom(room2);
        const aDoor = this.MakeDoor(room1, room2);

        const { East, North, South, West } = Direction;

        room1.SetSide(East, aDoor);
        room1.SetSide(North, this.MakeWall());
        room1.SetSide(West, this.MakeWall());
        room1.SetSide(South, this.MakeWall());

        room2.SetSide(East, this.MakeWall());
        room2.SetSide(North, this.MakeWall());
        room2.SetSide(West, aDoor);
        room2.SetSide(South, this.MakeWall());

        return aMaze;
    }

    MakeMaze(): Maze {
        return new Maze();
    }

    MakeRoom(roomNumber: number): Room {
        return new Room(roomNumber);
    }

    MakeWall(): Wall {
        return new Wall();
    }

    MakeDoor(r1: Room, r2: Room): Door {
        return new Door(r1, r2);
    }
}