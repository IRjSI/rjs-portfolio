import { ArrowUpRight } from "lucide-react"

const ProjectCard = ({ name, description, img, link, stacks }: any) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:bg-secondary transition group"
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-44 object-cover group-hover:scale-[1.03] transition duration-500"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[13px] font-medium leading-snug">{name}</h3>
          <ArrowUpRight
            size={14}
            className="text-muted-foreground/30 group-hover:text-muted-foreground transition shrink-0 mt-0.5"
          />
        </div>
        <p className="text-[12px] text-muted-foreground font-light leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {stacks.map((s: any, i: number) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
            >
              {s.stack ?? s}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard