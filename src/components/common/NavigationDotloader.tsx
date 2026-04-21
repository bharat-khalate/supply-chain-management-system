const AppDotLoader = ({ 
  dotCount = 3, 
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
        const dotColor = Array.isArray(color) ? color[i % color.length] : color;
        const isHex = dotColor.startsWith("#");
        return (
          <div
            key={i}
            className={`${size} rounded-full animate-bounce ${!isHex ? dotColor : ""}`}
            style={{
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