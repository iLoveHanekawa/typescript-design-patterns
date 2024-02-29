// page 122

import type { Door } from "../Door.js";
import type { Maze } from "../Maze.js";
import type { Room } from "../Room.js";
import type { Wall } from "../Wall.js";
import { MazeFactory } from "../abstractFactory/MazeFactory.js"

export class MazePrototypeFactory extends MazeFactory {
    private _prototypeMaze: Maze;
    private _prototypeWall: Wall;
    private _prototypeRoom: Room;
    private _prototypeDoor: Door;

    constructor(maze: Maze, wall: Wall, room: Room, door: Door) {
        super();
        this._prototypeDoor = door;
        this._prototypeRoom = room;
        this._prototypeWall = wall;
        this._prototypeMaze = maze;
    }
    

}