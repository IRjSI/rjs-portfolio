import { useState, useEffect } from 'react';

const konamiSequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown'
];

export function useKonamiCode() {
  const [isKonamiActive, setIsKonamiActive] = useState(false);

  useEffect(() => {
    let index = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === konamiSequence[index]) {
        index++;
        if (index === konamiSequence.length) {
          setIsKonamiActive((prev) => !prev);
          index = 0;
        }
      } else {
        index = 0;
        if (e.key === konamiSequence[0]) {
          index = 1;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return isKonamiActive;
}
