import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import Visitor from "./components/Visitor"
import WaterDropGrid from "./components/WaterDropGrid"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-2000" />

        <div className="px-4 py-4 font-satoshi min-h-screen relative">

          <div className="max-w-[600px] mx-auto">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Visitor />
            {/* <div className="w-4 h-4 bg-green-500 rounded absolute bottom-1" id="green-box" /> */}
          </div>
        </div>
    </ThemeProvider>
  )
}

export default App
