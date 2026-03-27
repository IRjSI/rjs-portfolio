import { GithubIcon, TwitterIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 dark:bg-[#1a1a1a] border border-neutral-800 rounded-xl"
    >
      {/* Header */}
      <div className="flex justify-between mb-6">
        <p className="text-gray-400 text-sm">● Contact</p>
        <p className="text-green-500 text-xs">Online</p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 rounded bg-[#2c2c2c] text-sm outline-none"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-[#2c2c2c] text-sm outline-none"
        />

        <textarea
          rows={4}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full px-4 py-2 rounded bg-[#2c2c2c] text-sm outline-none resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-green-600 text-white rounded text-sm"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-500 text-sm">Message sent.</p>}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      {/* Socials */}
      <div className="flex justify-center gap-3 mt-6">
        <a href="https://x.com/_RjS_0" target="_blank" className="dark:bg-[#2b2b2b] p-2 rounded">
          <TwitterIcon size={16} />
        </a>
        <a href="https://github.com/IRjSI" target="_blank" className="dark:bg-[#2b2b2b] p-2 rounded">
          <GithubIcon size={16} />
        </a>
      </div>
    </motion.div>
  )
}

export default Contact