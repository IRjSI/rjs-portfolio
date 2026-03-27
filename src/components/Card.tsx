import { GithubIcon, TwitterIcon, DownloadIcon, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

const SKILLS = [
  "React", "TypeScript", "Node.js", "Tailwind CSS", "Express.js", "Next.js", "PostgreSQL", "Vercel", "C++",
]

const Card = ({ status, description, img }: any) => {

  return (
    <div className="flex flex-col gap-2">

      {/* Bento grid */}
      <div className="grid grid-cols-2 gap-2">

        {/* Left col */}
        <div className="flex flex-col gap-2">

          {/* Name card */}
          <motion.div
            {...scaleIn(0.15)}
            className="rounded-2xl border border-border bg-background p-6 flex flex-col justify-between min-h-[220px]"
          >
            <h1 className="font-syne font-extrabold text-[40px] leading-[.9] tracking-[-2px]">
              Raju<br />J<br />
              <span className="text-muted-foreground">Suthar.</span>
            </h1>
            <span className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 text-[11.5px] text-muted-foreground w-fit mt-4">
              <span className="w-[5px] h-[5px] rounded-full bg-green-500 animate-pulse" />
              {status ?? "Available · Full Stack Dev"}
            </span>
          </motion.div>

          {/* Avatar tile */}
          <motion.div
            {...scaleIn(0.2)}
            className="rounded-2xl border border-border bg-secondary flex items-center justify-center relative overflow-hidden"
            style={{ minHeight: 140 }}
          >
            <div
              className="absolute w-[110px] h-[110px] rounded-full border border-border"
              style={{ animation: "spin 12s linear infinite" }}
            />
            {img ? (
              <img
                src={img}
                alt="Profile"
                className="w-30 h-30 rounded-full object-cover relative z-10"
              />
            ) : (
              <span
                className="font-syne font-extrabold text-[56px] text-muted-foreground relative z-10"
                style={{ letterSpacing: -3 }}
              >
                R
              </span>
            )}
          </motion.div>
        </div>

        {/* Right col — about + links */}
        <motion.div
          {...scaleIn(0.15)}
          className="rounded-2xl border border-border bg-background p-5 flex flex-col justify-between"
        >
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mb-3">
              About
            </p>
            <p className="text-[13px] text-muted-foreground leading-[1.75] font-light">
              {description ?? (
                <>
                  I'm a <span className="text-foreground font-medium">21-year-old web developer</span> who
                  builds fast, polished products. Currently shipping personal projects and open to {" "}<span className="dark:text-green-200 text-green-600 font-medium underline">freelance</span> or {" "}<span className="dark:text-green-200 text-green-600 font-medium underline">full-time work.</span>
                  <br /><br />
                  Comfortable across the stack, <span className="text-foreground font-medium">React & TypeScript</span> on
                  the front, <span className="text-foreground font-medium">Node.js</span> on the back.
                </>
              )}
            </p>
          </div>

          <div>
            <div className="h-px bg-border my-4" />
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mb-2">
              Find me
            </p>
            <div className="flex flex-col gap-0.5">
              {[
                  { label: "GitHub",  icon: <GithubIcon size={14} />,  href: "https://github.com/IRjSI" },
                  { label: "Twitter", icon: <TwitterIcon size={14} />, href: "https://x.com/_RjS_0" },
                  { label: "Resume",  icon: <DownloadIcon size={14} />, href: "/resume.pdf", download: true },
                ].map(({ label, icon, href, download }) => (
                  <a
                    key={label}
                    href={href}
                    target={download ? undefined : "_blank"}
                    download={download}
                    className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-secondary transition-all group text-[13px]"
                  >
                    <span className="flex items-center gap-2.5 text-muted-foreground">
                      {icon}
                      <span className="text-foreground">{label}</span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground/40 group-hover:text-muted-foreground group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all"
                    />
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        {...fadeUp(0.4)}
        className="overflow-hidden rounded-xl border border-border bg-background py-2.5"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 px-5 text-[12px] text-muted-foreground font-light"
            >
              {s}
              <span className="text-[8px] text-muted-foreground/40">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

export default Card