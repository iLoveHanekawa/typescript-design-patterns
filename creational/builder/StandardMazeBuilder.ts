// page 102

import { Direction } from "../Direction.js";
import { Maze } from "../Maze.js";
import type { Room } from "../Room.js";
import { MazeBuilder } from "./MazeBuilder.js";

export class StandardMazeBuilder extends MazeBuilder {
    constructor() {
        super()
        this._currentMaze = new Maze();
    }
    override BuildMaze(): void {}
    override BuildRoom(room: number): void {}
    override BuildDoor(roomFrom: number, roomTo: number): void {}
    override GetMaze(): Maze {
        return this._currentMaze;
    }

    private CommonWall(room1: Room, room2: Room): Direction { return Direction.North; }
    private _currentMaze: Maze;
}