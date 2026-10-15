import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: "/",
        name: "نگار راز | فال حافظ",
        short_name: "نگار راز",
        description: "روایتی نو از شعر جاودانه حافظ",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        lang: "fa",
        dir: "rtl",
        background_color: "#071d1b",
        theme_color: "#071d1b",
        categories: ["education", "entertainment", "lifestyle"],
        icons: [
            {
                src: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}