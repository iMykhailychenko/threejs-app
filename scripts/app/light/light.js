import { DirectionalLight, AmbientLight } from '../../libs/three.js';

export default class Light {
    constructor() {
        this.ambientLight = new AmbientLight('#999999', 0.3);

        this.directionalLight = new DirectionalLight('#999999');
        this.directionalLight.position.set(0, 3, -4);
        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.camera.near = 0.1;
        this.directionalLight.shadow.camera.far = 500;
        this.directionalLight.shadow.camera.right = 17;
        this.directionalLight.shadow.camera.left = -17;
        this.directionalLight.shadow.camera.top = 17;
        this.directionalLight.shadow.camera.bottom = -17;
        this.directionalLight.shadow.mapSize.width = 512;
        this.directionalLight.shadow.mapSize.height = 512;
        this.directionalLight.shadow.radius = 4;
        this.directionalLight.shadow.bias = -0.0005;

        this.list = [this.ambientLight, this.directionalLight];
    }
}
