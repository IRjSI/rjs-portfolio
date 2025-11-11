import { GithubIcon, PlusCircle, TwitterIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Card = ({ title, status, heading, description, btn1, img }: any) => {
  

  return (
    <div className="p-6 dark:bg-[#212121] border border-t-2 dark:border-[#484848] dark:border-t-[#636363] rounded-md shadow-sm">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <p className="text-[#a1a1a1] font-medium">● {title}</p>
        <p className="text-green-500 bg-green-500/20 px-2 py-1 rounded-sm text-sm mt-2 sm:mt-0">• {status}</p>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] gap-6 items-center">
        <div>
          <h1 className="text-3xl font-semibold mb-2">{heading}</h1>
          <p className="text-[#a1a1a1] mb-4 text-sm sm:text-base">{description}</p>

          <div className="flex flex-wrap gap-2">
            <Link
              to={"/contact"}
              className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-3 py-2 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232] text-sm"
            >
              <PlusCircle size={14} /> {btn1}
            </Link>
            <a
              href="https://x.com/_RjS_0"
              target="_blank"
              className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-3 py-2 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="https://github.com/IRjSI"
              target="_blank"
              className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-3 py-2 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="/resume_latest.pdf"
              download
              className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-3 py-2 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"
            >
              Resume
            </a>
          </div>
        </div>

        <div>
          <img
            src={img}
            className="rounded-full w-32 h-32 md:w-36 md:h-36 object-cover border-2 mx-auto hover:scale-105 hover:shadow-lg transition-all duration-500"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
