import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.6)
  const [muted, setMuted] = useState(false)

  const track = {
    title: 'Cyberpunk Ride',
    artist: 'Royalty-free',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = muted ? 0 : volume
  }, [volume, muted])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }

  const toggleMute = () => setMuted((m) => !m)

  return (
    <div className="backdrop-blur bg-white/10 border border-white/10 rounded-xl p-3 sm:p-4 shadow-lg flex items-center gap-3 text-white">
      <Music className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-300" />
      <div className="min-w-0">
        <div className="text-xs sm:text-sm font-semibold leading-tight truncate">{track.title}</div>
        <div className="text-[10px] sm:text-xs text-white/70 truncate">{track.artist}</div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button onClick={togglePlay} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition" aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button onClick={toggleMute} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition" aria-label={muted ? 'Activar sonido' : 'Silenciar'}>
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={muted ? 0 : volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20 accent-fuchsia-400"
          aria-label="Volumen"
        />
      </div>
      <audio ref={audioRef} src={track.src} preload="auto" crossOrigin="anonymous" />
    </div>
  )
}
