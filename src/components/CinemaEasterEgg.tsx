import React, { useState, useEffect, useRef } from 'react';

const CinemaEasterEgg: React.FC = () => {
  const targetText = "SYS.DIR: SCORSESE · NOLAN · FINCHER · VILLENEUVE || SYS.ACT: DAY-LEWIS · MURPHY · BALE · MCCONAUGHEY";
  const [displayText, setDisplayText] = useState("0xCF 0x8A 0x11 0x9B [ENCRYPTED_STREAM] 0x44 0x21 0x00 0xFF");
  const [isHovered, setIsHovered] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*<>[]{}";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      let iteration = 0;
      intervalRef.current = setInterval(() => {
        setDisplayText(() => {
          let newStr = "";
          for(let i=0; i<targetText.length; i++) {
             if (i < iteration) {
               newStr += targetText[i];
             } else {
               if (targetText[i] === " " || targetText[i] === "·" || targetText[i] === ":" || targetText[i] === "|") {
                 newStr += targetText[i];
               } else {
                 newStr += chars[Math.floor(Math.random() * chars.length)];
               }
             }
          }
          return newStr;
        });
        
        iteration += 1 / 2;
        if (iteration >= targetText.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(targetText);
        }
      }, 30);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText("0xCF 0x8A 0x11 0x9B [ENCRYPTED_STREAM] 0x44 0x21 0x00 0xFF");
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div 
      className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:block select-none z-50 cursor-crosshair opacity-20 hover:opacity-100 transition-opacity duration-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan-500 [writing-mode:vertical-rl] rotate-180 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] whitespace-nowrap">
        {displayText}
      </div>
    </div>
  );
};

export default CinemaEasterEgg;
