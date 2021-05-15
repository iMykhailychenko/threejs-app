import { DirectionalLight, AmbientLight } from '../../libs/three.js';

export default class Light {
    constructor() {
        this.ambientLight = new AmbientLight('#ffffff', 0.5);

        this.directionalLight = new DirectionalLight('#ffffff');
        this.directionalLight.position.set(-6, 12, 18);
        this.directionalLight.castShadow = true;

        this.list = [this.ambientLight, this.directionalLight];
    }
}
