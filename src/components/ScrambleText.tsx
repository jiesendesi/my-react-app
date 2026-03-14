import { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export const ScrambleText = ({ 
  text, 
  className = "", 
  speed = 40,
  delay = 0 
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(() => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              if (letter === ' ') return ' ';
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        
        if (iteration >= text.length) { 
          clearInterval(interval);
        }
        iteration += 1 / 3; 
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return <span className={className}>{displayText}</span>;
};
