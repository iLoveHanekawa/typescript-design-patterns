// page 132

export class MazeFactory {

    protected constructor() {}

    private static _instance: MazeFactory | null = null;

    static Instance(): MazeFactory {
        if(this._instance == null) {
            this._instance = new MazeFactory;
        }
        return this._instance;
    }
}
