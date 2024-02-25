// page 101

import { Maze } from "../Maze.js";

export abstract class MazeBuilder {
    BuildMaze(): void {}
    BuildRoom(room: number): void {}
    BuildDoor(roomFrom: number, roomTo: number): void {}
    public GetMaze(): Maze { return new Maze() }
    protected constructor() {}
}
