export default function Loading() {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-border border-t-gold" />

        <span className="text-4xl text-gold">۞</span>
      </div>

      <h1 className="mt-7 text-2xl font-bold text-gold-light)">
        نگار راز
      </h1>

      <p className="mt-3 text-sm text-muted)">
        در حال گشودن دفتر رازهای حافظ...
      </p>
    </main>
  );
}
