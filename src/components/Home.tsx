import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Hero from "./Hero"
import ProofStrip from "./ProofStrip"

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
      <Hero />
      <ProofStrip />

      <div className="mt-8">
        <p className="text-xs text-gray-500 mb-3">SELECTED WORK</p>

        <div className="space-y-3">
          {[
            {
              name: "Event Replay System",
              desc: "Event logs + deterministic state reconstruction.",
            },
            {
              name: "Realtime Chat",
              desc: "WebSocket-based sync with room architecture.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="p-4 border border-neutral-800 rounded hover:border-neutral-600 transition"
            >
              <h3 className="text-sm font-medium">{p.name}</h3>
              <p className="text-xs text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>

        <Link
          to="/projects"
          className="inline-block mt-4 text-xs text-green-500"
        >
          View all →
        </Link>
      </div>
    </motion.div>
  )
}

export default Home