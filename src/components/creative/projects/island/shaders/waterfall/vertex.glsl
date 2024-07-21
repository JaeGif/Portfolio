uniform float uTime;
uniform float uPixelRatio;

attribute float aScale;


void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    modelPosition.y += sin(uTime + modelPosition.x * 75.0) * 0.2;
    modelPosition.x += cos(uTime + modelPosition.x * 75.0)  * 0.2;
    modelPosition.z += sin(uTime + modelPosition.x) * 0.2;
    
    vec4 viewPosition = viewMatrix * modelPosition; 
    vec4 projectionPosition = projectionMatrix * viewPosition;


    gl_Position = projectionPosition;
    gl_PointSize = 40.0 * uPixelRatio * aScale;              // fix size for all pixel ratios
    gl_PointSize *= (1.0 / - viewPosition.z);                // size attenuation
}