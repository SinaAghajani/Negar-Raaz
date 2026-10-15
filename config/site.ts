
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteConfig = {
    name: "نگار راز",
    nameEn: "Negar Raz",
    description: "روایتی نو از شعر جاودانه حافظ",
    url: configuredUrl?.replace(/\/$/, "") || "http://localhost:3000",
    locale: "fa-IR",
    direction: "rtl" as const,
};

export const socialLinks = {
    instagram: "",
    telegram: "",
};

export const navigation = [
    { title: "صفحه اصلی", href: "/" },
    { title: "فال حافظ", href: "/fal" },
    { title: "غزلیات", href: "/ghazals" },
    { title: "علاقه‌مندی‌ها", href: "/favorites" },
    { title: "درباره ما", href: "/about" },
] as const;
