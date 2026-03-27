import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const Skills = () => {
  const groups = [
    { title: "Frontend",  skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
    { title: "Backend",   skills: ["Node.js", "Express.js"] },
    { title: "Database",  skills: ["MongoDB", "PostgreSQL", "Prisma"] },
    { title: "Libraries", skills: ["ShadCN", "Material UI"] },
    { title: "Tools",     skills: ["Git", "GitHub", "REST APIs", "WebSockets", "AWS", "Docker", "Postman", "Vercel", "Render"] },
  ]

  return (
    <div className="flex flex-col gap-2">

      {/* Header */}
      <motion.div
        {...fadeUp(0.1)}
        className="flex items-center justify-between px-5 py-3.5 rounded-2xl border border-border bg-background"
      >
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">Skills</p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-2">
        {groups.map((group, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.1 + i * 0.07)}
            className={`rounded-2xl border border-border bg-background p-5 ${
              i === groups.length - 1 ? "col-span-2" : ""
            }`}
          >
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mb-3">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className={`px-3 py-1.5 rounded-full text-[12px] transition
                    ${i === 0
                      ? "bg-foreground text-background font-medium"
                      : "border border-border text-muted-foreground hover:border-border/80 hover:text-foreground"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Skills