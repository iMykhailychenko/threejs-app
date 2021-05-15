import { DirectionalLight, AmbientLight } from '../../libs/three.js';

export default class Light {
    constructor() {
        this.ambientLight = new AmbientLight('#efefef', 0.3);

        this.directionalLight = new DirectionalLight('#efefef');
        this.directionalLight.position.set(0, 3, -4);
        this.directionalLight.castShadow = true;

        this.list = [this.ambientLight, this.directionalLight];
    }
}
