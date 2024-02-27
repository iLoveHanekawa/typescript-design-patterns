// page 115

import { MazeGame } from "./MazeGame.js";
import { Spell, DoorNeedingSpell, EnchantedRoom } from "../abstractFactory/EnchantedMazeFactory.js";
import type { Room } from "../Room.js";
import type { Door } from "../Door.js";

export class EnchantedMazeGame extends MazeGame {
    constructor() {
        super();
    }

    override MakeRoom(roomNumber: number): Room {
        return new EnchantedRoom(roomNumber, this.CastSpell());
    }

    override MakeDoor(r1: Room, r2: Room): Door {
        return new DoorNeedingSpell(r1, r2);
    }

    protected CastSpell(): Spell {
        return new Spell();
    }
}