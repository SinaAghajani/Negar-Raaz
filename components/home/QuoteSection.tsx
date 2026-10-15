import { Quote } from "lucide-react";

interface QuoteSectionProps {
  quote?: string;
  attribution?: string;
}

export default function QuoteSection({
  quote = "در اندرون من خسته‌دل ندانم کیست",
  attribution = "حافظ",
}: QuoteSectionProps) {
  return (
    <section className="section-container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <Quote size={30} className="mx-auto text-gold/70" />

        <blockquote className="mt-6 text-2xl font-medium leading-loose text-gold-light sm:text-3xl">
          «{quote}»
        </blockquote>

        <p className="mt-5 text-sm text-muted">{attribution}</p>
      </div>
    </section>
  );
}
