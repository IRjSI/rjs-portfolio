import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RetroWindowProps {
  title: string
  children: ReactNode
  className?: string
  delay?: number
}

const RetroWindow = ({ title, children, className = "", delay = 0 }: RetroWindowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`bg-card border-2 border-border rounded-lg overflow-hidden shadow-2xl ${className}`}
    >
      <div className="bg-muted px-4 py-1 flex items-center justify-between border-b-2 border-border">
        <span className="pixel-text text-xs text-muted-foreground uppercase tracking-tighter">{title}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
      </div>
      <div className="p-5">
        {children}
      </div>
    </motion.div>
  )
}

export default RetroWindow
