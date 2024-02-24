// page 101

class Maze {}

abstract class MazeBuilder {
    public abstract BuildMaze(): void
    public abstract BuildRoom(room: number): void
    public abstract BuildDoor(roomFrom: number, roomTo: number): void
    public GetMaze(): Maze { return 0; }
    protected constructor() {}
}