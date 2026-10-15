
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataOptions {
    title: string;
    description: string;
    path?: string;
    indexable?: boolean;
}

export function createPageMetadata({
    title,
    description,
    path = "",
    indexable = true,
}: PageMetadataOptions): Metadata {
    const baseUrl = siteConfig.url.replace(/\/$/, "");
    const canonicalPath = path
        ? `/${path.replace(/^\/+|\/+$/g, "")}`
        : "";

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}${canonicalPath}`,
        },
        robots: {
            index: indexable,
            follow: indexable,
            googleBot: {
                index: indexable,
                follow: indexable,
            },
        },
        openGraph: {
            type: "website",
            locale: "fa_IR",
            siteName: siteConfig.name,
            title,
            description,
            url: `${baseUrl}${canonicalPath}`,
        },
    };
}
