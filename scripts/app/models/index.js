import Box from './box.js';
import Line from './line.js';
import Platform from './platform.js';

export default class Models {
    constructor() {
        this.box = new Box(0.5, 8, 10);
        this.platform = new Platform();

        this.list = [this.platform, this.box];
    }
}
