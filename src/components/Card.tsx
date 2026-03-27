import { GithubIcon, TwitterIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Card = ({ title, status, heading, description, img }: any) => {
  return (
    <div className="p-6 bg-[#121212] border border-neutral-800 rounded-xl hover:border-neutral-700 transition">
      
      {/* Top */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500 text-xs">● {title}</p>
        <p className="text-green-500 text-xs">{status}</p>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] gap-6 items-center">
        
        {/* Content */}
        <div>
          <h1 className="text-2xl font-semibold mb-3 leading-tight">
            {heading}
          </h1>

          <p className="text-gray-400 text-sm mb-5">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex gap-2 flex-wrap">
            <Link to="/projects" className="px-3 py-1.5 bg-white text-black text-xs rounded">
              View Work
            </Link>

            <Link to="/contact" className="px-3 py-1.5 bg-[#1f1f1f] text-xs rounded">
              Contact
            </Link>

            <a href="https://github.com/IRjSI" target="_blank" className="p-1.5 bg-[#1f1f1f] rounded">
              <GithubIcon size={14} />
            </a>

            <a href="https://x.com/_RjS_0" target="_blank" className="p-1.5 bg-[#1f1f1f] rounded">
              <TwitterIcon size={14} />
            </a>
          </div>
        </div>

        {/* Image */}
        <img
          src={img}
          className="rounded-lg w-24 h-24 object-cover mx-auto opacity-90"
        />
      </div>
    </div>
  )
}

export default Card