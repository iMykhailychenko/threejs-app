import { Mesh, BoxGeometry, MeshLambertMaterial } from '../../libs/three.js';

export default class Box extends Mesh {
    constructor() {
        super(new BoxGeometry(2, 5, 2), new MeshLambertMaterial({ color: '#343434' }));
        this.position.y = 5;
        this.castShadow = true;
    }
}
