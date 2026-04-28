import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlitchCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [glitchChar, setGlitchChar] = useState("");

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if the hovered element should trigger a pointer state
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;
        
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Occasional glitch character generation
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
        setGlitchChar(chars[Math.floor(Math.random() * chars.length)]);
      } else {
        setGlitchChar("");
      }
    }, 150);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(glitchInterval);
    };
  }, []);

  // Hide the cursor by default if it hasn't moved yet (x=-100)
  if (position.x === -100) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block mix-blend-difference"
      animate={{
        x: position.x - 12, // Center the 24x24 box
        y: position.y - 12,
        scale: clicked ? 0.7 : isPointer ? 1.5 : 1,
        rotate: isPointer ? 45 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
        mass: 0.1,
      }}
    >
      <div 
        className={`relative flex items-center justify-center w-6 h-6 border-[1.5px] transition-colors duration-200 
        ${isPointer ? 'border-primary bg-primary/20' : 'border-white bg-white/10'}`}
      >
        {/* Center dot */}
        <div className={`w-1 h-1 transition-colors duration-200 ${isPointer ? 'bg-primary' : 'bg-white'}`} />
        
        {/* Matrix glitch character trail */}
        <div className="absolute top-full left-full mt-1 ml-1 text-[10px] text-primary pixel-text opacity-70 font-mono">
          {glitchChar}
        </div>
      </div>
    </motion.div>
  );
};

export default GlitchCursor;
