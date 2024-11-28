import { useState, useEffect } from 'react';

export const LazyImage = ({ src, webpSrc, fallbackSrc, alt, className, onClick = null }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        
        // Try WebP first
        if (webpSrc) {
            img.src = webpSrc;
            img.onload = () => {
                setImageSrc(webpSrc);
                setIsLoading(false);
            };
            img.onerror = () => {
                // If WebP fails, try original format
                const fallbackImg = new Image();
                fallbackImg.src = src;
                fallbackImg.onload = () => {
                    setImageSrc(src);
                    setIsLoading(false);
                };
                fallbackImg.onerror = () => {
                    // If both fail, use fallback image
                    if (fallbackSrc) {
                        setImageSrc(fallbackSrc);
                    }
                    setIsLoading(false);
                };
            };
        } else {
            // If no WebP provided, load original directly
            img.src = src;
            img.onload = () => {
                setImageSrc(src);
                setIsLoading(false);
            };
            img.onerror = () => {
                if (fallbackSrc) {
                    setImageSrc(fallbackSrc);
                }
                setIsLoading(false);
            };
        }
    }, [src, webpSrc, fallbackSrc]);

    return (
        <>
            {isLoading && (
                <div className={`${className} bg-gray-800 animate-pulse`} />
            )}
            <img
                src={imageSrc}
                alt={alt}
                className={`${className} ${isLoading ? 'hidden' : ''}`}
                loading="lazy"
                onClick={onClick}
                draggable="false"
            />
        </>
    );
};
