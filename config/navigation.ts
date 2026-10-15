
import { navigation } from "@/config/site";

export const mainNavigation = navigation;

export const footerNavigation = [
    { title: "صفحه اصلی", href: "/" },
    { title: "غزلیات حافظ", href: "/ghazals" },
    { title: "درباره نگار راز", href: "/about" },
] as const;

export const mobileNavigation = navigation;
