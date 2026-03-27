const ProjectCard = ({ name, description, img, link, stacks }: any) => {
  return (
    <a
      href={link}
      target="_blank"
      className="block border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition group"
    >
      <img
        src={img}
        className="w-full h-48 object-cover group-hover:scale-[1.02] transition"
      />

      <div className="p-4">
        <h3 className="text-sm font-semibold mb-1">{name}</h3>

        <p className="text-xs text-gray-400 mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1">
          {stacks.map((s: any, i: number) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 bg-[#1f1f1f] rounded"
            >
              {s.stack}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard