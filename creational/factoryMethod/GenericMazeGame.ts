import { Direction } from "../Direction.js";
import type { Door } from "../Door.js";
import { Maze } from "../Maze.js";
import type { Room } from "../Room.js";
import type { Wall } from "../Wall.js";
import { BombedWall, RoomWithABomb } from "../abstractFactory/BombedMazeFactory.js";
import { Spell, DoorNeedingSpell, EnchantedRoom } from "../abstractFactory/EnchantedMazeFactory.js";

class GenericMazeGame  {
    constructor() {}

    MakeMaze(): Maze {
        return new Maze();
    }

    MakeRoom<T extends Room, Args extends any[]>(Type: { new(...args: Args): T }, ...args: Args): T {
        return new Type(...args);
    }

    MakeWall<T extends Wall, Args extends any[]>(Type: { new(...args: Args): T }, ...args: Args ): T {
        return new Type(...args);
    }

    MakeDoor<T extends Door>(Type: { new(r1: Room, r2: Room): T }, r1: Room, r2: Room): Door {
        return new Type(r1, r2);
    }
}

class ExampleGame extends GenericMazeGame {
    constructor() {
        super();
    }

    CreateMaze(): Maze {
        const aMaze: Maze = this.MakeMaze();
        const room1 = this.MakeRoom(EnchantedRoom, 1, this.CastSpell());
        const room2 = this.MakeRoom(EnchantedRoom, 2, this.CastSpell());

        aMaze.AddRoom(room1);
        aMaze.AddRoom(room2);
        const aDoor = this.MakeDoor(DoorNeedingSpell, room1, room2);

        const { East, North, South, West } = Direction;

        room1.SetSide(East, aDoor);
        room1.SetSide(North, this.MakeWall(BombedWall));
        room1.SetSide(West, this.MakeWall(BombedWall));
        room1.SetSide(South, this.MakeWall(BombedWall));

        room2.SetSide(East, this.MakeWall(BombedWall));
        room2.SetSide(North, this.MakeWall(BombedWall));
        room2.SetSide(West, aDoor);
        room2.SetSide(South, this.MakeWall(BombedWall));

        return aMaze;
    }

    protected CastSpell(): Spell { return new Spell(); }
}

