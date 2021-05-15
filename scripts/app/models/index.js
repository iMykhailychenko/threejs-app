import Box from './box.js';
import Line from './line.js';
import Platform from './platform.js';

export default class Models {
    constructor() {
        this.box = new Box();
        this.lineX = new Line([
            [-100, 0, 0],
            [100, 0, 0],
        ]);
        this.lineY = new Line([
            [0, -100, 0],
            [0, 100, 0],
        ]);
        this.lineZ = new Line([
            [0, 0, -100],
            [0, 0, 100],
        ]);
        this.platform = new Platform();

        this.list = [this.platform, this.lineX, this.lineY, this.lineZ, this.box];
    }
}
