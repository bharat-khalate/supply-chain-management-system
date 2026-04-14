import React from "react";
const AppDotLoader = ({ 
  dotCount = 3, 
  // Accept an array of colors or a single string (Tailwind class or Hex)
  color = "bg-white", 
  size = "h-2 w-2", 
  spacing = "space-x-1.5",
  containerClass = "",
  speed = "0.6s"
}) => {
  const dots = Array.from({ length: dotCount });
  return (
    <div className={`flex items-center justify-center ${spacing} ${containerClass}`}>
      {dots.map((_, i) => {
        // Handle individual colors if an array is passed, otherwise use the string
        const dotColor = Array.isArray(color) ? color[i % color.length] : color;
        // Determine if we should use a Tailwind class or an inline style for Hex
        const isHex = dotColor.startsWith("#");
        return (
          <div
            key={i}
            className={`${size} rounded-full animate-bounce ${!isHex ? dotColor : ""}`}
            style={{
              // staggered delay logic: (index - count) * (speed / count)
              animationDelay: `-${(dotCount - i) * 0.15}s`,
              animationDuration: speed,
              backgroundColor: isHex ? dotColor : undefined,
            }}
          />
        );
      })}
    </div>
  );
};
export default AppDotLoader;