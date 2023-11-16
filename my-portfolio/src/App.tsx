// Dependencies
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div className="round-element">Hello, world</div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* 3D canvas */}
      <div style={{ height: '300px', width: '100%' }}>
        {/* Allows for 3d rendering*/}
        <Canvas>
          {/* Temp box mesh for visual */}
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            {/* Material as a property */}
            <meshStandardMaterial color="violet" />
          </mesh>
        </Canvas>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
