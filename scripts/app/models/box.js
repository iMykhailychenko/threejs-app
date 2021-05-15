import { Mesh, BoxGeometry, MeshLambertMaterial } from '../../libs/three.js';

export default class Box extends Mesh {
    constructor() {
        super(new BoxGeometry(50, 0.4, 5), new MeshLambertMaterial({ color: '#343434' }));
        this.castShadow = true;
    }
}
