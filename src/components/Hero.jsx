import { motion } from 'framer-motion'
import MusicPlayer from '../MusicPlayer'
import { Gamepad2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0b1e] via-[#0d0f2a] to-[#0a0b1e] text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,0,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,204,255,0.15),transparent_60%)]" />
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1">
            <Gamepad2 className="w-4 h-4 text-fuchsia-300" />
            <span className="text-xs tracking-wide text-white/80">Experiencia gamer inmersiva</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Tu mundo de videojuegos
          </h1>
          <p className="text-white/70 max-w-2xl">
            Música integrada, animaciones modernas y un efecto de scroll 3D que te mete en la partida mientras bajas.
          </p>
          <div className="w-full sm:w-auto">
            <MusicPlayer />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs">
        Desplázate hacia abajo
      </div>
    </section>
  )
}
