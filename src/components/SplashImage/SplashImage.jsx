import { useState } from "react";

export default function SplashImage({imgSrc,className}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <img
          src="/images/choco1.png"
          alt="Placeholder"
          className="w-full h-auto absolute inset-0 object-cover"
        />
      )}
      <img
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
