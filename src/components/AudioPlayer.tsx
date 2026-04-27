import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play()
                    audioRef.current.volume = 0.4
                    setIsPlaying(true)
                } catch (err) {
                    console.log("Autoplay blocked. Waiting for user interaction.")
                    setIsPlaying(false)
                }
            }
        }

        playAudio()
    }, [])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio
                ref={audioRef}
                src="/prot.wav"
                loop
                preload="auto"
            />

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative group p-3 bg-black/80 backdrop-blur-md border-2 border-white/20 rounded-none overflow-hidden"
                style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.1)" }}
            >
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isPlaying ? "playing" : "muted"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        {isPlaying ? (
                            <Volume2 className="text-green-400 w-5 h-5" />
                        ) : (
                            <VolumeX className="text-red-400 w-5 h-5" />
                        )}

                        <span className="pixel-text text-[10px] uppercase text-white tracking-widest hidden group-hover:block">
                            {isPlaying ? "Audio: On" : "Audio: Off"}
                        </span>
                    </motion.div>
                </AnimatePresence>

                {isPlaying && (
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 border border-green-500/50"
                    />
                )}
            </motion.button>
        </div>
    )
}

export default AudioPlayer
