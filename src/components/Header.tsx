import { Contact, HomeIcon, Sparkle, PenIcon, PlusCircle } from "lucide-react"
import { ReactElement } from "react"
import { ModeToggle } from "./mode-toggle"
import { NavLink, Link } from "react-router-dom"
import { motion } from "framer-motion"

interface MenuItemType {
  name: string
  logo: ReactElement
  link: string
}

const Header = () => {
  const menu: MenuItemType[] = [
    { name: "Home",     logo: <HomeIcon size={14} />,  link: "/" },
    { name: "Skills",   logo: <PenIcon size={14} />,   link: "/skills" },
    { name: "Projects", logo: <Sparkle size={14} />,   link: "/projects" },
    { name: "Contact",  logo: <Contact size={14} />,   link: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl border border-border bg-background"
    >
      <span className="font-syne font-extrabold text-[18px] tracking-tight">
        RjS<span className="text-muted-foreground font-normal">.</span>
      </span>

      <div className="flex gap-0.5">
        {menu.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            title={item.name}
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg text-[12.5px] transition-all duration-150 flex items-center gap-1.5
              ${isActive
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`
            }
          >
            {item.logo}
            <span className="hidden sm:inline">{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-1.5">
        <ModeToggle />
        <Link
          to="/contact"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12.5px] font-medium bg-foreground text-background hover:opacity-80 transition-opacity"
        >
          <PlusCircle size={12} />
          Hire me
        </Link>
      </div>
    </motion.nav>
  )
}

export default Header