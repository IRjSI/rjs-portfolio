import { GithubIcon, TwitterIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      const res = await fetch("https://formspree.io/f/xldnnbdz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      setForm({ name: "", email: "", message: "" })
    } catch {
      setError("Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">

      {/* Top row */}
      <div className="grid grid-cols-2 gap-2">

        {/* Form card */}
        <motion.div
          {...fadeUp(0.1)}
          className="col-span-2 rounded-2xl border border-border bg-background p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
              Contact
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-green-500">
              <span className="w-[5px] h-[5px] rounded-full bg-green-500 animate-pulse" />
              Online
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary text-[13px] outline-none focus:border-border/80 transition placeholder:text-muted-foreground/50"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary text-[13px] outline-none focus:border-border/80 transition placeholder:text-muted-foreground/50"
              />
            </div>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary text-[13px] outline-none focus:border-border/80 transition resize-none placeholder:text-muted-foreground/50"
            />
            <div className="flex items-center justify-between">
              <div>
                {success && <p className="text-[12px] text-green-500">Message sent.</p>}
                {error && <p className="text-[12px] text-red-500">{error}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 rounded-xl bg-foreground text-background text-[13px] font-medium hover:opacity-80 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send →"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Socials row */}
      <motion.div
        {...fadeUp(0.2)}
        className="grid grid-cols-2 gap-2"
      >
        <a
          href="https://x.com/_RjS_0"
          target="_blank"
          className="flex items-center justify-between px-5 py-4 rounded-2xl border border-border bg-background hover:bg-secondary transition group"
        >
          <div className="flex items-center gap-3">
            <TwitterIcon size={16} className="text-muted-foreground" />
            <div>
              <p className="text-[13px] font-medium">Twitter / X</p>
              <p className="text-[11px] text-muted-foreground">@_RjS_0</p>
            </div>
          </div>
          <span className="text-muted-foreground/40 group-hover:text-muted-foreground text-xs transition">↗</span>
        </a>
        
        <a
          href="https://github.com/IRjSI"
          target="_blank"
          className="flex items-center justify-between px-5 py-4 rounded-2xl border border-border bg-background hover:bg-secondary transition group"
        >
          <div className="flex items-center gap-3">
            <GithubIcon size={16} className="text-muted-foreground" />
            <div>
              <p className="text-[13px] font-medium">GitHub</p>
              <p className="text-[11px] text-muted-foreground">IRjSI</p>
            </div>
          </div>
          <span className="text-muted-foreground/40 group-hover:text-muted-foreground text-xs transition">↗</span>
        </a>
      </motion.div>

    </div>
  )
}

export default Contact