// page 93

import { Door } from "../Door.js";
import { Room } from "../Room.js";
import { MazeFactory } from "./MazeFactory.js";

export class Spell {}

export class EnchantedRoom extends Room {
    protected _spell: Spell;
    constructor(roomNumber: number, spell: Spell) {
        super(roomNumber);
        this._spell = spell;
    }
}

export class DoorNeedingSpell extends Door {
    constructor(room1: Room, room2: Room) {
        super(room1, room2);
    }
}

export class EnchantedMazeFactory extends MazeFactory {
    constructor() {
        super()
    }

    override MakeDoor(r1: Room, r2: Room): Door {
        return new DoorNeedingSpell(r1, r2);
    }

    override MakeRoom(roomNumber: number): Room {
        return new EnchantedRoom(roomNumber, this.CastSpell());
    }

    protected CastSpell(): Spell { return new Spell(); }
}