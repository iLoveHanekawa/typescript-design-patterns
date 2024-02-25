// page 83

import { MapSite } from "./MapSite.js";
import { Direction } from "./Direction.js";

export class Room implements MapSite {
    public _roomNumber: number;
    
    constructor(roomNo: number) {
        this._roomNumber = roomNo
    }
    
    public GetSide(direction: Direction): MapSite {
        // Subject to change
        return new Room(direction);
    }

    public Enter(): void {}
    
}