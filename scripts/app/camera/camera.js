import { PerspectiveCamera } from '../../libs/three.js';

export default class Camera extends PerspectiveCamera {
    constructor() {
        super(90, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.position.set(0, 10, 10);
        // this.lookAt(10, 10, 0);
    }
}
