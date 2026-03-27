import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

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
    <div className="flex flex-col gap-2">

      {/* Header */}
      <motion.div
        {...fadeUp(0.1)}
        className="flex items-center justify-between px-5 py-3.5 rounded-2xl border border-border bg-background"
      >
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">Projects</p>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-green-500">
          <span className="w-[5px] h-[5px] rounded-full bg-green-500 animate-pulse" />
          Live
        </span>
      </motion.div>

      {/* Featured */}
      <motion.div {...fadeUp(0.15)} className="rounded-2xl border border-border bg-background p-5">
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mb-4">Featured</p>
        <div className="flex flex-col gap-3">
          {featured.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </motion.div>

      {/* Others */}
      <motion.div {...fadeUp(0.2)} className="rounded-2xl border border-border bg-background p-5">
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mb-4">Others</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {others.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </motion.div>

    </div>
  )
}

export default Projects