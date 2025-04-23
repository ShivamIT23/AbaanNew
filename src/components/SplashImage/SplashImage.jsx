import { useState } from "react";

export default function SplashImage({bgColor = "inherit",imgSrc,className, defaultImg="/images/choco1.png"}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <img
          src={defaultImg}
          alt="Placeholder"
          className="w-full h-auto absolute inset-0 object-cover"
        />
      )}
      <img
      style={{ backgroundColor: `${bgColor}` }}
        src={imgSrc}
        alt="Splash"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)} // hide fallback even if it fails
        className={`w-full h-auto object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
