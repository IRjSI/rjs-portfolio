import { motion } from "framer-motion"

const Skills = () => {
  const groups = [
    {
      title: "Core",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Frontend",
      skills: ["JavaScript", "Tailwind", "Next.js"],
    },
    {
      title: "Backend & DB",
      skills: ["Prisma"],
    },
    {
      title: "Tools",
      skills: ["Git", "Postman", "Vercel", "Render"],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 dark:bg-[#1a1a1a] border border-neutral-800 rounded-xl"
    >
      <p className="text-gray-400 text-sm mb-6">● Skills</p>

      <div className="space-y-6">
        {groups.map((group, i) => (
          <div key={i}>
            {/* Section Title */}
            <p className="text-xs text-gray-500 mb-2">{group.title}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className={`px-3 py-1 text-sm rounded transition 
                    ${
                      group.title === "Core"
                        ? "bg-white text-black font-medium"
                        : "bg-[#2b2b2b] text-gray-300 hover:bg-[#3a3a3a]"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills