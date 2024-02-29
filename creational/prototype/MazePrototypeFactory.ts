// page 122

import { Direction } from "../Direction.js";
import { MazeGame } from "../MazeGame.js";

abstract class MapSite {
    public abstract Enter(): void;
    public abstract Clone(): MapSite;
}

class Wall extends MapSite {

    constructor() {
        super()
    }

    override Clone(): Wall {
        return new Wall();
    }
    override Enter(): void {}
}

class Room extends MapSite {
    private _roomNumber!: number;

    constructor() {
        super();
        this._sides = [null, null, null, null];
    }

    Initialize(roomNumber: number): void {
        this._roomNumber = roomNumber;
    }
    
    GetSide(direction: Direction): MapSite {
        // Subject to change
        return new Room();
    }

    SetSide(direction: Direction, mapSite: MapSite) {
        this._sides[direction] = mapSite;
    }

    override Enter(): void {}
    override Clone(): Room {
        return new Room();
    }

    private _sides: (MapSite | null)[];

    
}

class Maze {
    constructor() {}

    AddRoom(room: Room): void {}
    RoomNo(roomNumber: number): Room {
        return new Room();
    }
}


class Door extends MapSite {

    private _room1!: Room;
    private _room2!: Room;
    private _isOpen: boolean;

    constructor() {
        super();
        this._isOpen = false;
    }

    Initialize(room1: Room, room2: Room): void {
        this._room1 = room1;
        this._room2 = room2;
    }
    OtherSideFrom(room: Room): Room {
        // subject to change
        return new Room();
    }

    override Enter(): void {}
    override Clone(): Door {
        return new Door();
    }

}

class MazeFactory {

    constructor() {}

    MakeMaze(): Maze {
        return new Maze();
    }

    MakeWall(): Wall { 
        return new Wall();
    }

    MakeRoom(roomNumber: number): Room {
        return new Room();
    }

    MakeDoor(r1: Room, r2: Room): Door {
        return new Door();
    }
}


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

    override MakeWall(): Wall {
        return this._prototypeWall.Clone();
    }
    
    override MakeDoor(r1: Room, r2: Room): Door {
        const door = this._prototypeDoor.Clone();
        door.Initialize(r1, r2);
        return door;
    }

    override MakeMaze(): Maze {
        return new Maze();
    }

    override MakeRoom(roomNumber: number): Room {
        const room = this._prototypeRoom.Clone();
        room.Initialize(roomNumber);
        return room;
    }

}

const game = new MazeGame();

const simpleMazeFactory = new MazePrototypeFactory(new Maze(), new Wall(), new Room(), new Door());