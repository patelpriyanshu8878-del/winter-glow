import React, { useEffect, useState, memo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

const Snowfall = memo(() => {
  const { isChristmas } = useTheme();
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    if (isChristmas) {
      // Reduced to 30 snowflakes for better mobile performance
      const flakes: Snowflake[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 12,
        animationDelay: Math.random() * 5,
        size: 12 + Math.random() * 8,
        opacity: 0.5 + Math.random() * 0.5,
      }));
      setSnowflakes(flakes);
    }
  }, [isChristmas]);

  if (!isChristmas) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute will-change-transform"
          style={{
            left: `${flake.left}%`,
            fontSize: flake.size,
            opacity: flake.opacity,
            animation: `snowfall ${flake.animationDuration}s linear ${flake.animationDelay}s infinite`,
            transform: 'translateZ(0)',
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
});

Snowfall.displayName = 'Snowfall';

export default Snowfall;
