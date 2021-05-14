import { OrbitControls } from '../../libs/orbit-controls.js';

export default class Controls extends OrbitControls {
    constructor(camera, domElement) {
        super(camera, domElement);
    }

    init = (render) => {
        this.addEventListener('change', render);
        this.minDistance = 500;
        this.maxDistance = 1500;
    }
}