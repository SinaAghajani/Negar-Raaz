import Link from "next/link";
import { BookOpen, Heart, MoonStar, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "فال حافظ",
    description: "با نیتی آرام، غزلی از حافظ بخوان و لحظه‌ای با خودت خلوت کن.",
    href: "/fal",
  },
  {
    icon: BookOpen,
    title: "دیوان غزل‌ها",
    description: "در میان غزل‌ها جست‌وجو کن و شعرهای محبوبت را دوباره بخوان.",
    href: "/ghazals",
  },
  {
    icon: Heart,
    title: "دفتر علاقه‌مندی‌ها",
    description: "غزل‌هایی را که دوست داری ذخیره کن تا همیشه در دسترست باشند.",
    href: "/favorites",
  },
  {
    icon: MoonStar,
    title: "لحظه‌ای آرامش",
    description:
      "در فضایی الهام‌گرفته از باغ‌های ایرانی از شتاب روزمره فاصله بگیر.",
    href: "/about",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm text-gold">در نگار راز</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground">
            سفری میان شعر و احساس
          </h2>
          <p className="mt-4 leading-8 text-muted">
            برای خواندن، اندیشیدن و نگه‌داشتن بیت‌هایی که به دلت می‌نشینند.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl border border-border bg-surface/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-surface-light"
            >
              <span className="inline-flex rounded-2xl border border-border bg-background p-3 text-gold transition group-hover:bg-gold group-hover:text-background">
                <Icon size={23} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-gold-light">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-muted">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
