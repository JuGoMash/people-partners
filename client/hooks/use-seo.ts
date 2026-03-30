import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
}

export function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = 'https://cdn.builder.io/api/v1/image/assets%2Faf68e484decf46379ccbfc0f4be45e74%2Fb6e0e84606394ae4926dc19e95311903?format=webp&width=1200',
  ogUrl,
  twitterCard = 'summary_large_image',
}: SEOConfig) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) ||
                    document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        const attrName = name.startsWith('og:') ? 'property' : 'name';
        element.setAttribute(attrName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    setMetaTag('og:title', ogTitle || title);
    setMetaTag('og:description', ogDescription || description);
    setMetaTag('og:image', ogImage);
    setMetaTag('og:type', 'website');
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:image', ogImage);

    if (ogUrl) {
      setMetaTag('og:url', ogUrl);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, twitterCard]);
}
