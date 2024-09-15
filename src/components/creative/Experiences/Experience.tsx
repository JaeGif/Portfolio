import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import Lights from './Lights';
import Postprocessing from './Postprocessing';
import StaticLights from './StaticLights';
import Loading from './Loading';

function Experience() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.01,
        far: 200,
        position: [3, 5, 11],
      }}
    >
      {/*       <Suspense fallback={<Loading />}>
        <Environment
          preset='sunset'
          background
          backgroundBlurriness={0.9}
          environmentIntensity={0.25}
        />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
        <Postprocessing />
        <StaticLights />
        <Scene />

      </Suspense> */}

      <Loading />
    </Canvas>
  );
}

export default Experience;
