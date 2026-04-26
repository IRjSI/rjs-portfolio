import RetroWindow from "./RetroWindow"

const blogs = [
  {
    title: "Designing a Real-Time React Playground",
    description:
      "Building a React playground with runtime execution, workers, queues, and real-time updates.",
    link: "https://react-playground.hashnode.dev/designing-a-real-time-react-playground-with-workers-queues-and-websockets",
  },
]

const BlogSection = () => {
  return (
    <div className="flex flex-col gap-6 py-4">
      <RetroWindow title="Archives_Reader.exe" className="w-full">
        <div className="flex flex-col gap-4">
          <h2 className="pixel-header text-[12px] text-yellow-500 mb-4 flex items-center justify-between">
            STORED_CHUNKS
            <span className="text-[8px] text-muted-foreground">ENCODING: UTF-8</span>
          </h2>

          <div className="grid gap-4">
            {blogs.map((blog, i) => (
              <a
                key={i}
                href={blog.link}
                target="_blank"
                className="block p-4 border-2 border-border bg-card hover:border-yellow-500/30 transition-all group shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="pixel-header text-[10px] text-foreground group-hover:text-yellow-500 transition-colors">
                    {blog.title}
                  </h3>
                  <span className="pixel-text text-muted group-hover:text-yellow-500"> {`>>>`}</span>
                </div>

                <p className="pixel-text text-sm text-muted-foreground mt-1">
                  {blog.description}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 w-1 bg-yellow-600" />
                  <span className="pixel-text text-[10px] text-yellow-600 uppercase">
                    ACCESS_LOG_ENTRY_{i + 1}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RetroWindow>
    </div>
  )
}

export default BlogSection