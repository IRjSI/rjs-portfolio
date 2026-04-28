import { GithubIcon, TwitterIcon } from "lucide-react"
import { useState } from "react"
import RetroWindow from "./RetroWindow"

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
    <div className="flex flex-col gap-6 py-4">
      <RetroWindow title="Communication_Port.com" className="w-full">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="pixel-header text-[12px] text-primary mb-4">ESTABLISH_CONNECTION</h2>
            <p className="pixel-text text-muted-foreground mb-6">
              SEND A PACKET TO MY INBOX. I USUALLY RESPOND WITHIN 24 CYCLES.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="pixel-text text-[10px] text-muted-foreground">USER_NAME</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="IDENTIFY YOURSELF"
                  required
                  className="placeholder:text-secondary w-full px-3 py-2 border-2 border-border bg-background pixel-text text-sm text-primary outline-none focus:border-primary/50 transition placeholder:text-muted/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="pixel-text text-[10px] text-muted-foreground">EMAIL_ADDRESS</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="RETURN_ADDRESS@HOST.COM"
                  required
                  className="placeholder:text-secondary w-full px-3 py-2 border-2 border-border bg-background pixel-text text-sm text-blue-500 outline-none focus:border-blue-500/50 transition placeholder:text-muted/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="pixel-text text-[10px] text-muted-foreground">MESSAGE_PAYLOAD</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="ENTER ENCRYPTED MESSAGE..."
                  required
                  className="placeholder:text-secondary w-full px-3 py-2 border-2 border-border bg-background pixel-text text-sm text-foreground outline-none focus:border-foreground/20 transition resize-none placeholder:text-muted/20"
                />
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="pixel-text text-xs">
                  {success && <span className="text-green-500 animate-pulse">[DELIVERED]</span>}
                  {error && <span className="text-red-500">[ERROR: {error}]</span>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="pixel-header text-[10px] px-6 py-2 bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  {loading ? "TRANSMITTING..." : "SEND_DATA"}
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="pixel-header text-[12px] text-blue-500 mb-4">EXTERNAL_LINKS</h2>
              <div className="flex flex-col gap-3">
                <a
                  href="https://x.com/_RjS_0"
                  target="_blank"
                  className="flex items-center justify-between p-3 border-2 border-border bg-card hover:border-blue-500/30 transition group"
                >
                  <div className="flex items-center gap-3">
                    <TwitterIcon size={18} className="text-muted-foreground group-hover:text-blue-400" />
                    <div>
                      <p className="pixel-text text-sm text-foreground">TWITTER_X</p>
                      <p className="pixel-text text-[10px] text-muted-foreground">@_RJS_0</p>
                    </div>
                  </div>
                  <span className="pixel-text text-muted group-hover:text-blue-500"> {`>>>`}</span>
                </a>

                <a
                  href="https://github.com/IRjSI"
                  target="_blank"
                  className="flex items-center justify-between p-3 border-2 border-border bg-card hover:border-foreground/20 transition group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} className="text-muted-foreground group-hover:text-foreground" />
                    <div>
                      <p className="pixel-text text-sm text-foreground">GITHUB_REPO</p>
                      <p className="pixel-text text-[10px] text-muted-foreground">IRJSI</p>
                    </div>
                  </div>
                  <span className="pixel-text text-muted group-hover:text-foreground"> {`>>>`}</span>
                </a>
              </div>
            </div>

            <div className="mt-auto bg-muted p-4 border border-border rounded relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 bg-primary/20 text-[8px] pixel-text text-primary">SECURE_CHANNEL</div>
              <p className="pixel-text text-[10px] text-muted-foreground leading-tight">
                ENCRYPTION: AES-256-GCM<br />
                PROTOCOL: HTTPS/TLS 1.3<br />
                STATUS: LISTENING_ON_PORT_443
              </p>
            </div>
          </div>
        </div>
      </RetroWindow>
    </div>
  )
}

export default Contact