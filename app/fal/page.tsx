import type { Metadata } from "next";
import FalExperience from "@/components/fal/FalExperience";

export const metadata: Metadata = {
  title: "فال حافظ",
  description: "با نیتی آرام، غزلی از حافظ بخوان و در معنای آن تأمل کن.",
  alternates: {
    canonical: "/fal",
  },
  openGraph: {
    title: "فال حافظ | نگار راز",
    description: "تجربه‌ای آرام و شاعرانه از فال حافظ در نگار راز.",
    type: "website",
  },
};

export default function FalPage() {
  return (
    <main className="page-shell">
      <FalExperience />
    </main>
  );
}
