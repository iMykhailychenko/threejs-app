import Scene from './scene/scene.js';
import Camera from './camera/camera.js';
import Models from './models/index.js';
import Controls from './controls/controls.js';
import Renderer from './renderer/renderer.js';
import Light from './light/light.js';
import Sky from './sky/sky.js';

export default class Main {
    static instance = null;

    constructor() {
        if (Main.instance) return Main.instance;

        this.sky = new Sky();
        this.scene = new Scene();
        this.light = new Light();
        this.camera = new Camera();
        this.models = new Models();
        this.renderer = new Renderer(this.scene, this.camera);
        this.controls = new Controls(this.camera, this.renderer.domElement);
    }

    animate = () => {
        if (!this.animate) return;
        requestAnimationFrame(this.animate);
        this.renderer.init();
    };

    onresize = () => {
        window.onresize = () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.size();
        };
    };

    start = () => {
        // insert canvas to html
        this.renderer.size();
        document.body.appendChild(this.renderer.domElement);

        // run other helpers
        this.scene.add(...this.models.list, ...this.light.list, this.sky);
        this.controls.init(this.renderer.init);
        this.onresize();

        // run loop
        this.animate();
    };
}
