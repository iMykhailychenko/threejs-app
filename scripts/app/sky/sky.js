import { MathUtils, Vector3, PMREMGenerator } from '../../libs/three.js';
import { Sky as ThreeSky } from '../../libs/sky.js';

export default class Sky extends ThreeSky {
    constructor() {
        super();
        this.scale.setScalar(450_000);
        this.material.uniforms.turbidity.value = 0.5;
        this.material.uniforms.rayleigh.value = 0.5;
        this.material.uniforms.mieCoefficient.value = 0.005;
        this.material.uniforms.mieDirectionalG.value = 0.7;

        // sun
        this.sun = new Vector3();
        this.sun.setFromSphericalCoords(1, MathUtils.degToRad(30), MathUtils.degToRad(180));
        this.material.uniforms.sunPosition.value.copy(this.sun).normalize();
    }
}
