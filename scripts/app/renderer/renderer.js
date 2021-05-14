import { WebGLRenderer } from '../../libs/three.js';

export default class Renderer extends WebGLRenderer {
    constructor(scene, camera) {
        super({ antialias: true });
        this.scene = scene;
        this.camera = camera;
    }

    size = () => {
        this.setSize(window.innerWidth, window.innerHeight);
    }

    init = () => {
        this.render(this.scene, this.camera);
    }
}
