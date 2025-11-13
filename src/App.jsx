import Hero from './components/Hero'
import Scroll3D from './components/Scroll3D'

function App() {
  return (
    <div className="bg-[#0a0b1e] text-white min-h-screen">
      <Hero />
      <Scroll3D />
      <footer className="py-16 text-center text-white/60">
        Hecho con ❤️ para gamers
      </footer>
    </div>
  )
}

export default App
