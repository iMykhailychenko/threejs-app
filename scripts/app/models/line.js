import { Line as ThreeLine, LineDashedMaterial, BufferGeometry, Vector3 } from '../../libs/three.js';

class Geometry extends BufferGeometry {
    constructor(vector) {
        super();
        this.setFromPoints(vector.map((item) => new Vector3(...item)));
    }
}

export default class Line extends ThreeLine {
    constructor(vector) {
        super(new Geometry(vector), new LineDashedMaterial({ color: '#0000ff', linewidth: 10 }));
    }
}
