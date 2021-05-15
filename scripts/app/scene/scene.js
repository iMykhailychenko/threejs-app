import { Scene as ThreeScene, Color, CubeTextureLoader, Fog } from '../../libs/three.js';

class SceneTexture extends CubeTextureLoader {
    constructor() {
        super();
        this.pictures = [
            'assets/texture/ft.jpg',
            'assets/texture/bk.jpg',
            'assets/texture/up.jpg',
            'assets/texture/dn.jpg',
            'assets/texture/rt.jpg',
            'assets/texture/lf.jpg',
        ];
        this.texture = this.load(this.pictures);
    }
}

export default class Scene extends ThreeScene {
    constructor() {
        super();
        this.background = new SceneTexture().texture;
        this.fog = new Fog('#b5e8ff', 0.1, 4000);
    }s
}
