import { DirectionalLight } from '../../libs/three.js';

export default class Light extends DirectionalLight {
    constructor() {
        super('#e6f0ff');
        this.position.set(-6, 14, 16);
        this.castShadow = true;

        this.shadow.camera.top = 2;
        this.shadow.camera.bottom = -2;
        this.shadow.camera.left = -2;
        this.shadow.camera.right = 2;

        this.shadow.camera.near = 0.1;
        this.shadow.camera.far = 200;
    }
}
