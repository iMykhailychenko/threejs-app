import { PerspectiveCamera } from '../../libs/three.js';

export default class Camera extends PerspectiveCamera {
    constructor() {
        super(75, window.innerWidth / window.innerHeight, 45, 30_000);
        this.position.set(-900,-200,-900);
    }
}
