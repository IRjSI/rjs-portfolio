import { motion } from "framer-motion"
import PixelHero from "./PixelHero"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-2"
    >
      <PixelHero />
    </motion.div>
  )
}

export default Home