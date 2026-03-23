import { useEffect } from "react";
import { config } from "@/config";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export function SEO({ title, description, keywords, image, url }: SEOProps) {
    const { branding } = config;

    useEffect(() => {
        const fullTitle = title ? `${title} | ${branding.name}` : branding.name;
        document.title = fullTitle;

        const setMeta = (name: string, content: string, isProperty = false) => {
            let meta = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`);
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute(isProperty ? 'property' : 'name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", content);
        };

        if (description) {
            setMeta("description", description);
            setMeta("og:description", description, true);
        }

        if (keywords) {
            setMeta("keywords", keywords);
        }

        if (image) {
            setMeta("og:image", image, true);
        }

        if (url) {
            setMeta("og:url", url, true);
        }

        setMeta("og:title", fullTitle, true);
        setMeta("og:type", "website", true);

    }, [title, description, keywords, image, url, branding.name]);

    return null;
}
