import { Scene as ThreeScene } from '../../libs/three.js';

export default class Scene extends ThreeScene {
    constructor() {
        super();
        this.position.y = 1000;
    }
}
