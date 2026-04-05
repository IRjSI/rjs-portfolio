import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 p-6 border border-border bg-background rounded-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500 text-xs">● Writing</p>
        <p className="text-xs text-gray-600">Notes & Systems</p>
      </div>

      {/* Blog List */}
      <div className="space-y-4">
        {blogs.map((blog, i) => (
          <Link
            key={i}
            to={blog.link}
            target="_blank"
            className="block p-4 border border-border rounded hover:bg-secondary transition group"
          >
            <h3 className="text-sm font-medium group-hover:text-white transition">
              {blog.title}
            </h3>

            <p className="text-xs text-gray-400 mt-1">
              {blog.description}
            </p>

            <span className="text-[10px] text-gray-600 mt-2 inline-block group-hover:text-gray-400">
              Read →
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default BlogSection