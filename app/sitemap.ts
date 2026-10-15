import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url.replace(/\/$/, "");

    const publicRoutes = [
        {
            path: "",
            priority: 1,
            changeFrequency: "weekly" as const,
        },
        {
            path: "/fal",
            priority: 0.9,
            changeFrequency: "monthly" as const,
        },
        {
            path: "/ghazals",
            priority: 0.8,
            changeFrequency: "weekly" as const,
        },
        {
            path: "/about",
            priority: 0.5,
            changeFrequency: "monthly" as const,
        },
    ];

    return publicRoutes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}