import React, { useState, useEffect, useCallback } from 'react';

const quotes = [
  "THE UNEXAMINED LIFE IS NOT WORTH LIVING",
  "THERE IS NO SPOON",
  "अहं ब्रह्मास्मि",
  "KNOW THYSELF",
  "HE WHO HAS A WHY TO LIVE CAN BEAR ALMOST ANY HOW",
  "The only thing all humans are equal in is death",
  "AMOR FATI",
  "WHAT WE DO IN LIFE ECHOES IN ETERNITY",
  "A dream... It's something you do for yourself, not for others",
  "Those Who Can’t Abandon Anything Can’t Change Anything",
  "everyone is a slave to something",
  "Be, don't try to become",
  "Life begins where fear ends",
  "",
];

const GlitchQuote: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*<>[]{}";

  const scramble = useCallback((text: string, progress: number) => {
    return text
      .split("")
      .map((char, i) => {
        if (char === " ") return " ";
        if (i < progress) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
  }, []);

  useEffect(() => {
    const targetQuote = quotes[index];
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(scramble(targetQuote, iteration));
      iteration += 1 / 3;
      if (iteration >= targetQuote.length) {
        clearInterval(interval);
        setDisplayText(targetQuote);

        // Wait and then change quote
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % quotes.length);
        }, 5000);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [index, scramble]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 w-40 hidden xl:block select-none pointer-events-none z-50">
      <div className="relative font-mono text-[11px] leading-[1.4] tracking-[0.15em] transition-all duration-300">
        <div className="relative">
          <div className="mb-3 flex items-center gap-2 opacity-40">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
            <div className="text-[8px] uppercase tracking-[0.3em] font-bold text-green-500">executing_thoughts</div>
          </div>

          <div className="absolute top-0 left-0 text-red-500/10 glitch-ghost-1 matrix-quote-glitch uppercase">{displayText}</div>
          <div className="absolute top-0 left-0 text-blue-500/10 glitch-ghost-2 matrix-quote-glitch uppercase">{displayText}</div>

          <div className="matrix-quote-glitch text-green-400/70 relative z-10 uppercase">
            {displayText}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .matrix-quote-glitch {
          font-family: 'VT323', monospace;
          text-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
          animation: matrix-flicker 5s infinite;
        }
        .glitch-ghost-1 {
          animation: ghost-1 4s infinite;
          opacity: 0;
        }
        .glitch-ghost-2 {
          animation: ghost-2 4s infinite;
          opacity: 0;
        }
        @keyframes ghost-1 {
          0%, 80%, 100% { opacity: 0; transform: translate(0); }
          81% { opacity: 0.5; transform: translate(-2px, 1px); }
          82% { opacity: 0; }
        }
        @keyframes ghost-2 {
          0%, 85%, 100% { opacity: 0; transform: translate(0); }
          86% { opacity: 0.5; transform: translate(2px, -1px); }
          87% { opacity: 0; }
        }
        @keyframes matrix-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.7; }
          20%, 24%, 55% { opacity: 1; text-shadow: 0 0 15px rgba(34, 197, 94, 0.8); }
        }
      `}} />
    </div>
  );
};

export default GlitchQuote;
