import { ArrowUpRight } from "lucide-react"

const ProjectCard = ({ name, description, img, link, stacks }: any) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col rounded-lg border-2 border-border bg-card overflow-hidden hover:border-primary/50 transition-all group shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)]"
    >
      <div className="overflow-hidden relative">
        <img
          src={img}
          alt={name}
          className="w-full h-44 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500 pixelated"
        />
        <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded pixel-text text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity border border-primary/20">
          LINK_START
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="pixel-header text-[12px] text-foreground leading-snug">{name}</h3>
          <ArrowUpRight
            size={14}
            className="text-muted-foreground group-hover:text-primary transition shrink-0 mt-0.5"
          />
        </div>
        <p className="pixel-text text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {stacks.map((s: any, i: number) => (
            <span
              key={i}
              className="pixel-text text-[11px] px-2 py-0.5 border border-border bg-muted text-muted-foreground"
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