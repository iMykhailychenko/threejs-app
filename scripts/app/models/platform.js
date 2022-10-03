import { Mesh, PlaneBufferGeometry, MeshPhongMaterial } from '../../libs/three.js';

export default class Platform extends Mesh {
    constructor() {
        super(new PlaneBufferGeometry(5000, 5000), new MeshPhongMaterial({ color: '#183041', depthWrite: true }));
        this.rotation.x = -Math.PI / 2;
        this.receiveShadow = true;
    }
}
