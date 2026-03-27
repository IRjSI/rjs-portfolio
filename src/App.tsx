import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        
        {/* Gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] 
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
          bg-[size:40px_40px]" 
        />
      </div>

      {/* Main Layout */}
      <div className="px-4 py-6 font-satoshi min-h-screen">
        <div className="max-w-[720px] mx-auto">
          
          <Header />

          <div className="mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default App