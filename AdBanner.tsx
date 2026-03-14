import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot?: string; // इसे रखने देते हैं ताकि App.tsx में एरर न आए
}

export function AdBanner({ slot }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adsterra की स्क्रिप्ट लोड करना
    if (adRef.current && adRef.current.innerHTML === '') {
      const script = document.createElement('script');
      script.src = "//pl28915296.effectivegatecpm.com/b14bf34baa101aed0a3cdeae044d58f8/invoke.js";
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center my-8 w-full min-h-[100px]">
      <p className="text-[10px] text-zinc-400 mb-2 uppercase tracking-widest">Sponsored Content</p>
      
      {/* यह वह जगह है जहाँ Adsterra विज्ञापन दिखाएगा */}
      <div 
        ref={adRef} 
        id="container-b14bf34baa101aed0a3cdeae044d58f8"
        className="w-full flex justify-center"
      ></div>
    </div>
  );
}
