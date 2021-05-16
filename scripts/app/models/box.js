import { Mesh, BoxGeometry, MeshToonMaterial } from '../../libs/three.js';

export default class Box extends Mesh {
    constructor(...params) {
        super(new BoxGeometry(...params), new MeshToonMaterial({ color: '#9e445f' }));
        this.position.set(0, 4, 0);
        this.rotation.set(0, 0, -5);
        this.castShadow = false;
    }
}
