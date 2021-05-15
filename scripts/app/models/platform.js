import { Mesh, PlaneBufferGeometry, MeshPhongMaterial } from '../../libs/three.js';

export default class Platform extends Mesh {
    constructor() {
        super(new PlaneBufferGeometry(10000, 10000), new MeshPhongMaterial({ color: '#e9e9e9', depthWrite: true }));
        this.rotation.x = -Math.PI / 2;
        this.receiveShadow = true;
    }
}
