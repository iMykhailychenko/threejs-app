import { PerspectiveCamera } from '../../libs/three.js';

export default class Camera extends PerspectiveCamera {
    constructor() {
        super(75, window.innerWidth / window.innerHeight, 0.1, 30_000);
        this.position.set(0, 7, -15);
        this.lookAt(10, 0, 0);
    }
}
