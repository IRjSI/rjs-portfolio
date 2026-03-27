import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import Card from "./Card"

const Home = () => {
  const projects = [
    { name: "React Playground", desc: "LeetCode for React.", link: "https://reactpg.vercel.app" },
    { name: "Event Replay System", desc: "Event logs + deterministic state reconstruction.", link: "https://github.com/IRjSI/decision-engine.git" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-2"
    >
      <Card />

      {/* Selected work */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="rounded-2xl border border-border bg-background p-5"
      >
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mb-4">
          Selected work
        </p>
        <div className="flex flex-col gap-1.5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-secondary transition group cursor-default"
            >
              <div>
                <p className="text-[13px] font-medium">{p.name}</p>
                <p className="text-[12px] text-muted-foreground font-light">{p.desc}</p>
              </div>
              <Link
                to={p.link}
                target="_blank"
              >
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground/30 group-hover:text-muted-foreground transition"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-border">
          <Link
            to="/projects"
            className="text-[12px] text-muted-foreground hover:text-foreground transition flex items-center gap-1"
          >
            View all projects <ArrowUpRight size={12} />
          </Link>
        </div>
      </motion.div>

    </motion.div>
  )
}

export default Home