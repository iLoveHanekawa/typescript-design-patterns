// page 83

import type { MapSite } from "./MapSite.js";
import { Room } from "./Room.js";

export class Door implements MapSite {

    private _room1: Room;
    private _room2: Room;
    private _isOpen: boolean;

    Door(room1: Room, room2: Room) {
        this._isOpen = false;
        this._room1 = room1;
        this._room2 = room2;
    }

    OtherSideFrom(room: Room): Room {
        // subject to change
        return new Room(0);
    }

    public Enter(): void {}
}