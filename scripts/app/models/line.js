import { Line as ThreeLine, LineDashedMaterial, BufferGeometry, Vector3 } from '../../libs/three.js';

class Geometry extends BufferGeometry {
    constructor() {
        super();
        this.setFromPoints([new Vector3(-10, 0, 0), new Vector3(0, 10, -20)]);
    }
}

export default class Line extends ThreeLine {
    constructor() {
        super(new Geometry(), new LineDashedMaterial({ color: '#0000ff' }));
    }
}
