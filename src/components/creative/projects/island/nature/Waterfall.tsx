import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
// Shaders
import waterfallVertexShader from '../shaders/waterfall/vertex.glsl';
import waterfallFragmentShader from '../shaders/waterfall/fragment.glsl';
// R3F
import { extend, useFrame } from '@react-three/fiber';
// Drei
import { shaderMaterial } from '@react-three/drei';

function Waterfall() {
  // extend shader materials
  const WaterfallMaterial = shaderMaterial(
    {
      uPixelRatio: Math.min(window.devicePixelRatio, 2),
      uTime: 0,
    },
    waterfallVertexShader,
    waterfallFragmentShader
  );

  extend({ WaterfallMaterial });

  const waterfallRef = useRef<any>(null);

  const waterfallCount = 1000;

  const { waterfallPositions, waterfallScale } = useMemo(() => {
    const waterfallPositions = new Float32Array(waterfallCount * 3);

    const waterfallScale = new Float32Array(waterfallCount);

    for (let i = 0; i < waterfallCount; i++) {
      waterfallPositions[i * 3 + 0] = (Math.random() - 0.5) * 1;
      waterfallPositions[i * 3 + 1] = Math.random() * 1.5;
      waterfallPositions[i * 3 + 2] = (Math.random() - 0.5) * 1;
      waterfallScale[i] = Math.random();
    }
    return { waterfallPositions, waterfallScale };
  }, [waterfallCount]);

  useFrame((state, delta) => {
    waterfallRef.current.uTime += delta;
  });
  return (
    <points>
      <bufferGeometry attach={'geometry'}>
        <bufferAttribute
          attach='attributes-position'
          count={waterfallPositions.length / 3}
          array={waterfallPositions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
        <bufferAttribute
          attach='attributes-aScale'
          count={waterfallScale.length}
          array={waterfallScale}
          itemSize={1}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>
      {/* @ts-ignore */}
      <waterfallMaterial
        ref={waterfallRef}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default Waterfall;
