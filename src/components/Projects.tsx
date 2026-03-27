import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

const Projects = () => {

  const featured = [
    {
      name: "React Playground",
      description: "Interactive system to learn React through executable challenges. Includes runtime compilation, state tracking, and sandbox execution.",
      img: "/Screenshot 2025-11-22 185328.png",
      link: "https://reactpg.vercel.app/",
      stacks: ["Redis", "Babel", "Socket.io"],
    },
    {
      name: "Chronos",
      description: "Task system with independent tracking and weekly analytics. Focused on structured state management and productivity flows.",
      img: "/Screenshot 2025-11-22 185826.png",
      link: "https://chronoss.vercel.app/",
      stacks: ["MongoDB", "Next.js", "Tailwind"],
    },
  ]

  const others = [
    {
      name: "VidTube",
      description: "Video + thoughts sharing platform with backend APIs and persistence.",
      img: "/Screenshot 2025-06-26 115310.png",
      link: "https://vidtube-fe.vercel.app",
      stacks: ["React", "MongoDB", "Express"],
    },
    {
      name: "Note-Cove",
      description: "Markdown-based note system with persistence and clean UI.",
      img: "/Screenshot 2025-04-19 111923.png",
      link: "https://note-cove.vercel.app",
      stacks: ["React", "Appwrite"],
    },
    {
      name: "Image Formatter",
      description: "Utility to convert and optimize images for social media formats.",
      img: "/image.png",
      link: "https://image-formater.vercel.app/",
      stacks: ["Next.js"],
    },
    {
      name: "Book Tracker",
      description: "Simple tracking app for managing reading progress.",
      img: "/Screenshot 2025-04-23 161807.png",
      link: "https://book-trakker.vercel.app",
      stacks: ["React"],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-[#121212] border border-neutral-800 rounded-xl"
    >
      {/* Header */}
      <div className="flex justify-between mb-6">
        <p className="text-gray-500 text-xs">● Projects</p>
        <p className="text-green-500 text-xs">Live</p>
      </div>

      {/* Featured */}
      <div className="mb-8">
        <p className="text-xs text-gray-500 mb-3">FEATURED</p>

        <div className="space-y-4">
          {featured.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>

      {/* Others */}
      <div>
        <p className="text-xs text-gray-500 mb-3">OTHERS</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects