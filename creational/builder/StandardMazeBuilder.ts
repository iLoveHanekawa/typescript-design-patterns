// page 102

import { Direction } from "../Direction.js";
import { Door } from "../Door.js";
import { Maze } from "../Maze.js";
import { Room } from "../Room.js";
import { Wall } from "../Wall.js";
import { MazeBuilder } from "./MazeBuilder.js";

export class StandardMazeBuilder extends MazeBuilder {
    constructor() {
        super()
        this._currentMaze = new Maze();
    }
    override BuildMaze(): void {
        this._currentMaze = new Maze();
    }
    override BuildRoom(roomNumber: number): void {
        if(!this._currentMaze.RoomNo(roomNumber)) {
            const newRoom: Room = new Room(roomNumber);
            this._currentMaze.AddRoom(newRoom);
            const { East, West, North, South } = Direction;
            newRoom.SetSide(North, new Wall());
            newRoom.SetSide(South, new Wall());
            newRoom.SetSide(East, new Wall());
            newRoom.SetSide(West, new Wall());

        }
    }
    override BuildDoor(roomFrom: number, roomTo: number): void {
        const r1: Room = this._currentMaze.RoomNo(roomFrom);
        const r2: Room = this._currentMaze.RoomNo(roomTo);
        const aDoor: Door = new Door(r1, r2);
        r1.SetSide(this.CommonWall(r1, r2), aDoor);
        r1.SetSide(this.CommonWall(r2, r1), aDoor);
    }
    
    override GetMaze(): Maze {
        return this._currentMaze;
    }

    private CommonWall(room1: Room, room2: Room): Direction { return Direction.North; }
    private _currentMaze: Maze;
}