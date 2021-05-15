import { Mesh, BoxGeometry, MeshBasicMaterial } from '../../libs/three.js';

export default class Box extends Mesh {
    constructor() {
        super(new BoxGeometry(2, 5, 2), new MeshBasicMaterial({ color: '#343434' }));
        // this.position.x = -5;
        this.position.y = 2.5;
        this.castShadow = true;
    }
}
