// pg 93

import type { Door } from "../Door.js";
import type { Maze } from "../Maze.js";
import type { Room } from "../Room.js";
import type { MazeFactory } from "./MazeFactory.js";
import { Direction } from "../Direction.js";

export class MazeGame {
    CreateMaze(factory: MazeFactory) {
        const aMaze: Maze = factory.MakeMaze();
        const r1: Room = factory.MakeRoom(1);
        const r2: Room = factory.MakeRoom(2);
        const aDoor: Door = factory.MakeDoor(r1, r2);
        aMaze.AddRoom(r1);
        aMaze.AddRoom(r2);
        const { East, North, South, West } = Direction;
        r1.SetSide(North, factory.MakeWall());
        r1.SetSide(East, aDoor);
        r1.SetSide(South, factory.MakeWall());
        r1.SetSide(West, factory.MakeWall());

        r2.SetSide(North, factory.MakeWall());
        r2.SetSide(East, factory.MakeWall());
        r2.SetSide(South, factory.MakeWall());
        r2.SetSide(West, aDoor);
    }
}
