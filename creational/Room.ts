// page 83

import { MapSite } from "./MapSite.js";
import { Direction } from "./Direction.js";

export class Room implements MapSite {
    private _roomNumber: number;

    constructor(roomNo: number) {
        this._roomNumber = roomNo;
        this._sides = [null, null, null, null];
    }
    
    GetSide(direction: Direction): MapSite {
        // Subject to change
        return new Room(direction);
    }

    SetSide(direction: Direction, mapSite: MapSite) {
        this._sides[direction] = mapSite;
    }

    Enter(): void {}

    private _sides: (MapSite | null)[];

    
}