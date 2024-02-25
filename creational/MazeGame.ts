import { Door } from "./Door.js";
import { Maze } from "./Maze.js";
import { Room } from "./Room.js";
import { Direction } from "./Direction.js";
import { Wall } from "./Wall.js";

export class MazeGame {
    CreateMaze() {
        const aMaze: Maze = new Maze();
        const r1: Room = new Room(1);
        const r2: Room = new Room(2);
        const theDoor: Door = new Door(r1, r2)
        aMaze.AddRoom(r1);
        aMaze.AddRoom(r2);
        const { East, North, South, West } = Direction;
        r1.SetSide(North, new Wall());
        r1.SetSide(East, theDoor);
        r1.SetSide(South, new Wall());
        r1.SetSide(West, new Wall());

        r2.SetSide(North, new Wall());
        r2.SetSide(East, new Wall());
        r2.SetSide(South, new Wall());
        r2.SetSide(West, theDoor);
    }
}