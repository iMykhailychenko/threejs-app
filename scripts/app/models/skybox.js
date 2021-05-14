import { Mesh, BoxGeometry, TextureLoader, MeshBasicMaterial, BackSide } from '../../libs/three.js';

class Materials {
    pictures = [
        '/assets/texture/ft.jpg',
        '/assets/texture/bk.jpg',
        '/assets/texture/up.jpg',
        '/assets/texture/dn.jpg',
        '/assets/texture/rt.jpg',
        '/assets/texture/lf.jpg',
    ];

    constructor() {
        this.materials = this.pictures.map((url) => {
            const material = new MeshBasicMaterial({ map: new TextureLoader().load(url) });
            material.side = BackSide;
            return material;
        });
    }
}

export default class Skybox extends Mesh {
    constructor() {
        super(new BoxGeometry(10000, 10000, 10000), new Materials().materials);
    }
}
