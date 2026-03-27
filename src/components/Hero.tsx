import { Link } from "react-router-dom"
import { GithubIcon, TwitterIcon } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-[#121212] border border-neutral-800 rounded-xl"
    >
      <div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] gap-6 items-center">
        
        <div>
          <p className="text-xs text-gray-500 mb-2">FULL STACK ENGINEER</p>

          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight mb-3">
            Building real-time systems & scalable backend architecture.
          </h1>

          <p className="text-sm text-gray-400 mb-5">
            Focused on MERN, WebSockets, and event-driven systems.
          </p>

          <div className="flex gap-2 flex-wrap">
            <Link to="/projects" className="px-3 py-1.5 bg-white text-black text-xs rounded">
              View Work
            </Link>

            <Link to="/contact" className="px-3 py-1.5 bg-[#1f1f1f] text-xs rounded">
              Contact
            </Link>

            <a href="https://github.com/IRjSI" target="_blank" className="p-1.5 bg-[#1f1f1f] rounded">
              <GithubIcon size={14} />
            </a>

            <a href="https://x.com/_RjS_0" target="_blank" className="p-1.5 bg-[#1f1f1f] rounded">
              <TwitterIcon size={14} />
            </a>
          </div>
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/99244540?v=4"
          className="rounded-lg w-24 h-24 object-cover opacity-90"
        />
      </div>
    </motion.div>
  )
}

export default Hero