// page 133

class MazeFactory {

    private static _instance: MazeFactory | null = null;

    protected constructor() {}

    static Instance(): MazeFactory {
        if(this._instance == null) {
            if(process.env.MAZE_STYLE === 'bombed') {
                return new BombedFactory();
            }
            else if(process.env.MAZE_STYLE === 'enchanted') {
                return new EnchantedMazeFactory();
            }
            else return new MazeFactory();
        }
        return this._instance;
    }
}

class BombedFactory extends MazeFactory {}

class EnchantedMazeFactory extends MazeFactory {}