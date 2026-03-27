import { Contact, HomeIcon, PenIcon, Sparkle } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
  const menu = [
    { name: "Home", icon: <HomeIcon size={14} />, link: "/" },
    { name: "Skills", icon: <PenIcon size={14} />, link: "/skills" },
    { name: "Projects", icon: <Sparkle size={14} />, link: "/projects" },
    { name: "Contact", icon: <Contact size={14} />, link: "/contact" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center px-4 py-2 bg-[#121212] border border-neutral-800 rounded-xl"
    >
      <div className="flex gap-3">
        {menu.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-1 text-xs px-2 py-1 rounded transition ${
                isActive
                  ? "bg-[#1f1f1f] text-white"
                  : "text-gray-500 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span className="hidden sm:block">{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <Link
          to="/contact"
          className="text-xs px-2 py-1 bg-white text-black rounded"
        >
          Hire
        </Link>
      </div>
    </motion.div>
  )
}

export default Header