import { OrbitControls } from '../../libs/orbit-controls.js';

export default class Controls extends OrbitControls {
    constructor(camera, domElement) {
        super(camera, domElement);
        // this.maxPolarAngle = 1.45;
        // this.minDistance = 5;
        // this.maxDistance = 55;
    }

    init = (render) => {
        this.addEventListener('change', render);
    }
}