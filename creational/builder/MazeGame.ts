import type { Maze } from "../Maze.js";
import { MazeBuilder } from "./MazeBuilder.js";

export class MazeGame {
    constructor() {}
    CreateMaze(builder: MazeBuilder): Maze {
        builder.BuildMaze();

        builder.BuildRoom(1);
        builder.BuildRoom(2);

        return builder.GetMaze();
    }

    CreateComplexMaze(builder: MazeBuilder): Maze {
        builder.BuildRoom(1);
        builder.BuildRoom(10001);
        return builder.GetMaze();
    }
}