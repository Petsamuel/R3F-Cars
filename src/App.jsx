
import { Canvas } from '@react-three/fiber';
import { Scene } from './component/Scene';
import Header from './component/Header';
import { AppProvider } from './context/context';
import './App.css';

function App() {
  return (
    <AppProvider >
      <section className={`h-screen w-screen bg-rose-400`}>
        <Header />
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
          <Scene />
        </Canvas>
      </section>
    </AppProvider>
  )
}

export default App
