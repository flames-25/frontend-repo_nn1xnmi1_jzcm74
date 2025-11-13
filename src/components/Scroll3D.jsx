import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Scroll3D() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const blur = useTransform(scrollYProgress, [0, 1], ['0px', '6px'])
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.6])

  useEffect(() => {
    // nothing needed here, transforms are reactive
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[180vh] bg-[#0a0b1e]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ rotateX: rotate, scale, y, filter: blur.to((b) => `blur(${b})`) }}
          className="relative w-[900px] max-w-[88vw] aspect-[16/9] rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.12),transparent_50%)]" />

          <div className="absolute -inset-16 bg-[conic-gradient(from_0deg,rgba(236,72,153,0.1),rgba(34,211,238,0.1),transparent_30%)] animate-[spin_12s_linear_infinite]" />

          <div className="absolute inset-0 grid grid-cols-12 p-6 gap-4">
            <div className="col-span-9 rounded-lg bg-black/40 border border-white/10 overflow-hidden">
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white/70 text-xs mb-1">Gameplay</div>
                  <div className="text-white text-2xl font-bold">Jugador en acción</div>
                </div>
              </div>
            </div>
            <div className="col-span-3 space-y-3">
              <div className="rounded-lg bg-black/40 border border-white/10 p-3">
                <div className="text-white/70 text-xs">Chat</div>
                <div className="h-24 bg-white/5 rounded mt-2" />
              </div>
              <div className="rounded-lg bg-black/40 border border-white/10 p-3">
                <div className="text-white/70 text-xs">Stats</div>
                <div className="h-24 bg-white/5 rounded mt-2" />
              </div>
              <div className="rounded-lg bg-black/40 border border-white/10 p-3">
                <div className="text-white/70 text-xs">Overlay</div>
                <div className="h-12 bg-white/5 rounded mt-2" />
              </div>
            </div>
          </div>

          <motion.div style={{ opacity: glow }} className="pointer-events-none absolute -inset-1 rounded-2xl border border-fuchsia-500/20 shadow-[0_0_120px_rgba(236,72,153,0.35)]" />
        </motion.div>
      </div>
    </section>
  )
}
