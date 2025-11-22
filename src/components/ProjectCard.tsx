const ProjectCard = ({ name, description, img, link, stacks, className }: { name: string, description: string, img: string, link: string, stacks: any, className?: string }) => {

  return (
    <div className="rounded-md overflow-hidden shadow-md relative group mb-8 cursor-pointer">
      <img src={img} className="w-full h-64 object-cover" alt="" />

      <a href={link} target="_blank" className="absolute inset-0 backdrop-blur-xs flex flex-col justify-between px-4 py-4 group-hover:opacity-0 opacity-100 transition-opacity duration-700">

        <div className="flex gap-4 flex-wrap bg-black/80 sm:bg-transparent p-2 rounded-xl">
          {stacks.map((stack: any, index: any) => (
            <div key={index} className="flex items-center gap-1">
              <img src={stack.logo} alt="" className={`w-6 h-6 object-contain ${stack.invert && "invert"}`} />
              <p className="text-white text-sm text-center">{stack.stack}</p>
            </div>
          ))}
        </div>

        <div className="flex-grow flex items-center justify-center">
          <h1 className={`${className ? className : "text-white"} text-3xl font-semibold text-center`}>{name}</h1>
        </div>

        <p className={`${className ? className : "text-white"}  text-sm text-center`}>{description}</p>

      </a>
    </div>
  );
};

export default ProjectCard;
