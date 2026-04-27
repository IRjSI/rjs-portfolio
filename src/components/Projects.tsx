import ProjectCard from "./ProjectCard"
import RetroWindow from "./RetroWindow"

const Projects = () => {
  const featured = [
    {
      name: "React Playground",
      description: "Interactive system to learn React through executable challenges. Includes runtime compilation, state tracking, and sandbox execution.",
      img: "/Screenshot 2026-03-25 182638.png",
      link: "https://reactpg.xyz/",
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
    <div className="flex flex-col gap-6 py-4">
      <RetroWindow title="Project_Database.sql" className="w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="pixel-header text-[12px] text-green-500 mb-6 border-b border-neutral-800 pb-2 flex items-center justify-between">
              FEATURED_MODULES
              <span className="text-[8px] animate-pulse">LIVE_STATUS: OK</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featured.map((p, i) => <ProjectCard key={i} {...p} />)}
            </div>
          </div>

          <div>
            <h2 className="pixel-header text-[12px] text-blue-500 mb-6 border-b border-neutral-800 pb-2">
              ARCHIVED_SUBSYSTEMS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {others.map((p, i) => <ProjectCard key={i} {...p} />)}
            </div>
          </div>
        </div>
      </RetroWindow>

      <div className="flex justify-center">
        <div className="pixel-text text-[10px] text-neutral-600">
          -- END OF LIST --
        </div>
      </div>
    </div>
  )
}

export default Projects