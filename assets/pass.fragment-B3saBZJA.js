import{S as a}from"./index-DQWvKL4l.js";const e="passPixelShader",r=`varying vec2 vUV;uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);}`;a.ShadersStore[e]=r;const t={name:e,shader:r};export{t as passPixelShader};
