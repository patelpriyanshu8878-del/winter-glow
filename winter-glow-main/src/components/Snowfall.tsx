import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

const Snowfall = () => {
  const { isChristmas } = useTheme();
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    if (isChristmas) {
      const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 10,
        animationDelay: Math.random() * 5,
        size: 4 + Math.random() * 8,
        opacity: 0.4 + Math.random() * 0.6,
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
          className="absolute text-white"
          style={{
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animation: `snowfall ${flake.animationDuration}s linear ${flake.animationDelay}s infinite`,
          }}
        >
        ❄️
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
