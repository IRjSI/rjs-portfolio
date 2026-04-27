import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Visitor from "./components/Visitor"
import BlogSection from "./components/BlogSection"
import AudioPlayer from "./components/AudioPlayer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-4 py-4 font-sans min-h-screen bg-background transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-4">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<BlogSection />} />
          </Routes>
          <Visitor />
          <AudioPlayer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App