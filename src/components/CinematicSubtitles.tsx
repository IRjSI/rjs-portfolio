import React, { useState, useEffect } from 'react';
import { CaptionsIcon } from 'lucide-react';

const subtitleSequence = [
  "(Eerie, atmospheric synth pulsing)",
  "I've always been drawn to narratives that fold time upon itself...",
  "Where the architecture of the mind is as vast and terrifying as reality.",
  "Building systems isn't much different from directing a film.",
  "It demands an absolute, almost dangerous obsession with the craft.",
  "You have to immerse yourself entirely in the illusion to unearth the truth.",
  "Every line of code is a frame.",
  "Every architecture, a universe waiting to be observed.",
  "(The tension releases; a quiet ambient hum remains)",
  ""
];

const CinematicSubtitles: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0);
      setIsVisible(false);
      return;
    }

    let isMounted = true;

    const playSequence = async () => {
      for (let i = 0; i < subtitleSequence.length; i++) {
        if (!isMounted || !isActive) break;

        setCurrentIndex(i);
        setIsVisible(true);

        // Calculate duration based on text length (longer text = longer display)
        const text = subtitleSequence[i];
        const duration = text.startsWith('(') ? 3000 : Math.max(3000, text.length * 80);

        // Wait for reading duration
        await new Promise(resolve => setTimeout(resolve, duration));

        if (!isMounted || !isActive) break;

        // Fade out
        setIsVisible(false);

        // Pause between subtitles
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Loop back to start after finishing
      if (isMounted && isActive) {
        setTimeout(() => {
          setCurrentIndex(0);
          playSequence();
        }, 5000);
      }
    };

    playSequence();

    return () => {
      isMounted = false;
    };
  }, [isActive]);

  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className={`fixed bottom-6 left-6 z-50 p-2 rounded-md transition-all duration-500 ${isActive
          ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 shadow-[0_0_15px_rgba(250,204,21,0.2)]'
          : 'text-muted-foreground/30 hover:text-muted-foreground hover:bg-black/20'
          }`}
        title="Toggle Director's Commentary"
      >
        <CaptionsIcon size={20} />
      </button>

      {isActive && (
        <div className="fixed bottom-12 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
          <div
            className={`transition-opacity duration-700 ease-in-out ${isVisible && subtitleSequence[currentIndex] !== "" ? 'opacity-100' : 'opacity-0'}`}
          >
            <p
              className={`text-center px-4 py-1.5 rounded bg-black/60 backdrop-blur-sm max-w-2xl
                ${subtitleSequence[currentIndex]?.startsWith('(')
                  ? 'text-yellow-400/90 italic font-serif text-sm tracking-wide'
                  : 'text-white font-sans text-base sm:text-lg tracking-wide shadow-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'
                }
              `}
            >
              {subtitleSequence[currentIndex]}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CinematicSubtitles;
