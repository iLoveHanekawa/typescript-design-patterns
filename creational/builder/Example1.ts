// page 104

import { Maze } from "../Maze.js";
import { MazeGame } from "./MazeGame.js";
import { StandardMazeBuilder } from "./StandardMazeBuilder.js";

const game: MazeGame = new MazeGame();
let maze: Maze = new Maze();
const builder: StandardMazeBuilder = new StandardMazeBuilder();

game.CreateMaze(builder);
maze = builder.GetMaze();
