import { Contact, HomeIcon, Sparkle, PenIcon, PlusCircle, Book, Menu, X } from "lucide-react"
import { ReactElement, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { NavLink, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

interface MenuItemType {
  name: string
  logo: ReactElement
  link: string
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menu: MenuItemType[] = [
    { name: "Home", logo: <HomeIcon size={14} />, link: "/" },
    { name: "Skills", logo: <PenIcon size={14} />, link: "/skills" },
    { name: "Projects", logo: <Sparkle size={14} />, link: "/projects" },
    { name: "Contact", logo: <Contact size={14} />, link: "/contact" },
    { name: "Blogs", logo: <Book size={14} />, link: "/blogs" },
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between px-4 py-1.5 border-b-4 border-border bg-card shadow-[0_4px_0_0_rgba(0,0,0,0.1)] relative z-50"
      >
        <div className="flex items-center gap-6">
          <Link to="/" className="pixel-header text-[14px] text-primary tracking-tighter hover:scale-105 transition-transform flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-[10px] text-background">R</span>
            </div>
            RJS_OS
          </Link>

          <div className="hidden md:flex items-center">
            {menu.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                className={({ isActive }) =>
                  `px-4 py-1 pixel-text text-sm transition-colors relative
                  ${isActive
                    ? "text-primary bg-muted font-bold underline decoration-2 underline-offset-4"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-muted px-2 py-1 rounded border border-border">
            <ModeToggle />
          </div>

          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-2 px-4 py-1 bg-primary text-primary-foreground pixel-text text-xs hover:opacity-90 transition-opacity active:translate-y-[2px]"
          >
            <PlusCircle size={14} />
            EXEC_HIRE
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-x-4 border-b-4 border-border overflow-hidden z-40 relative shadow-xl"
          >
            <div className="flex flex-col p-2">
              {menu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 pixel-text text-sm flex items-center gap-3
                    ${isActive ? "text-primary bg-muted" : "text-muted-foreground hover:bg-muted"}`
                  }
                >
                  {item.logo}
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header