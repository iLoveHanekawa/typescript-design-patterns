import { MazeGame } from "./MazeGame.js";
import { CountingMazeBuilder } from "./CountingMazeBuilder.js";

const game: MazeGame = new MazeGame();
const builder: CountingMazeBuilder = new CountingMazeBuilder();

game.CreateMaze(builder);
const counts: { rooms: number; doors: number; } = { rooms: 0, doors: 0 };
builder.GetCounts(counts);

console.log(counts);
