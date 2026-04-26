import RetroWindow from "./RetroWindow"

const Skills = () => {
  const groups = [
    { title: "Frontend.sys", skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"], color: "text-blue-400" },
    { title: "Backend.srv", skills: ["Node.js", "Express.js"], color: "text-green-400" },
    { title: "Database.db", skills: ["MongoDB", "PostgreSQL", "Prisma"], color: "text-yellow-400" },
    { title: "Libraries.lib", skills: ["ShadCN", "Material UI"], color: "text-purple-400" },
    { title: "Tools.bin", skills: ["Git", "GitHub", "REST APIs", "WebSockets", "AWS", "Docker", "Postman", "Vercel", "Render"], color: "text-red-400" },
  ]

  return (
    <div className="flex flex-col gap-4 py-4">
      <RetroWindow title="Skills_Inventory.exe" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <div key={i} className={`flex flex-col gap-3 ${i === groups.length - 1 ? "md:col-span-2" : ""}`}>
              <h3 className={`pixel-header text-[10px] ${group.color}`}>{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="pixel-text px-3 py-1 bg-muted border border-border text-foreground text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RetroWindow>

      <div className="flex justify-center">
        <div className="pixel-text text-[10px] text-muted-foreground animate-pulse">
          TOTAL_CAPABILITIES_LOADED: 100%
        </div>
      </div>
    </div>
  )
}

export default Skills