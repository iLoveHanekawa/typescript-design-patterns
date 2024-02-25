// page 93 create maze with bombs

import { MazeGame } from "./MazeGame.js";
import { BombedMazeFactory } from "./BombedMazeFactory.js";

const game: MazeGame = new MazeGame();
const factory: BombedMazeFactory = new BombedMazeFactory();

game.CreateMaze(factory);
