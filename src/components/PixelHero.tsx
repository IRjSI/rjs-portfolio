import { motion } from "framer-motion"
import { GithubIcon, TwitterIcon, ArrowUpRight } from "lucide-react"
import tw_bann from "../assets/pixel/tw_bann.png"
import RetroWindow from "./RetroWindow"
import { Link } from "react-router-dom"

const PixelHero = () => {
  const projects = [
    { name: "React Playground", desc: "LeetCode for React.", link: "https://reactpg.xyz" },
    { name: "Decision Engine", desc: "Event logs + state reconstruction.", link: "https://github.com/IRjSI/decision-engine.git" },
  ]

  return (
    <div className="flex flex-col gap-6 py-8">
      <div className="crt-monitor aspect-video max-w-4xl mx-auto w-full relative">
        <div className="crt-screen w-full h-full relative overflow-hidden">
          <img
            src={tw_bann}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* Overlay Scanline */}
          <div className="scanline" />

          {/* Floating UI Elements inside Screen */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, ease: "linear" }}
              className="bg-black/60 backdrop-blur-sm border border-white/20 p-2 rounded pixel-text text-green-400 text-sm overflow-hidden whitespace-nowrap"
            >
              BOOTING_SYSTEM... [OK]
            </motion.div>
            <div className="bg-black/60 backdrop-blur-sm border border-white/20 p-2 rounded pixel-text text-blue-400 text-[10px]">
              LOCATION: HYPERSPACE
            </div>
          </div>

          <div className="absolute bottom-4 right-4 z-20">
            <div className="bg-black/60 backdrop-blur-sm border border-white/20 p-3 rounded pixel-text text-white text-[10px] max-w-[200px]">
              <p className="pixel-header text-[8px] mb-2 text-yellow-400">RAJU J SUTHAR</p>
              <p className="opacity-80">Full-stack engineer building real-time systems.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        <RetroWindow title="Bio.exe" className="h-full">
          <div className="flex flex-col gap-4">
            <p className="pixel-text text-foreground text-lg leading-relaxed">
              I'M A <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4">21-YEAR-OLD DEVELOPER</span> WHO BUILDS FAST, POLISHED PRODUCTS.
              SPECIALIZING IN <span className="text-green-500">REACT</span>, <span className="text-blue-500">NODE.JS</span> AND <span className="text-purple-500">DISTRIBUTED SYSTEMS</span>.
            </p>
            <p className="pixel-text text-foreground text-lg leading-relaxed uppercase">
              I also write <a href="https://flaction.vercel.app" target="_blank" className="text-yellow-500 underline">flash fiction</a> and make <a href="https://youtube.com/@IRjSI" target="_blank" className="text-orange-500 underline">music</a>
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/IRjSI" target="_blank" className="p-2 bg-muted border border-border rounded hover:border-primary/50 transition group">
                <GithubIcon size={18} className="text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://x.com/_RjS_0" target="_blank" className="p-2 bg-muted border border-border rounded hover:border-primary/50 transition group">
                <TwitterIcon size={18} className="text-muted-foreground group-hover:text-primary" />
              </a>

              <a href="/resume.pdf" download target="_blank" className="px-2 py-1 bg-muted border border-border rounded hover:border-primary/50 transition group">
                <p className="pixel-text text-foreground text-lg leading-relaxed uppercase">Resume</p>
              </a>
            </div>
          </div>
        </RetroWindow>

        <RetroWindow title="Projects.bat" className="h-full">
          <div className="flex flex-col gap-2">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                className="group flex items-center justify-between p-3 border border-transparent hover:border-primary/30 hover:bg-primary/5 rounded transition-all"
              >
                <div>
                  <h3 className="pixel-header text-[10px] text-primary mb-1 group-hover:translate-x-1 transition-transform">{p.name}</h3>
                  <p className="pixel-text text-muted-foreground text-sm">{p.desc}</p>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Link to="/projects" className="pixel-text text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-2 group">
                VIEW_ALL_WORK.SH <span className="animate-pulse group-hover:text-primary">_</span>
              </Link>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  )
}

export default PixelHero
