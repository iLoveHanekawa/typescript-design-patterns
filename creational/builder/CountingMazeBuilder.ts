import { MazeBuilder } from "./MazeBuilder.js";

export class CountingMazeBuilder extends MazeBuilder {

    private _doors: number;
    private _rooms: number;

    constructor() {
        super();
        this._doors = this._rooms = 0;
    }

    override BuildRoom(room: number): void {
        this._rooms++;
    }

    override BuildDoor(roomFrom: number, roomTo: number): void {
        this._doors++;
    }

    GetCounts(counts: { rooms: number; doors: number }) {
        counts.doors = this._doors;
        counts.rooms = this._rooms;
    }
}
