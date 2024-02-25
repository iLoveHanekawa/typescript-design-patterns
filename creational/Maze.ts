// page 84

import { Room } from "./Room.js";

export class Maze {
    constructor() {}

    AddRoom(room: Room): void {}
    RoomNo(roomNumber: number): Room {
        return new Room(roomNumber);
    }
}
