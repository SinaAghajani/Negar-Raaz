export default function FalLoading() {
  return (
    <main
      className="page-shell flex min-h-[60vh] items-center justify-center px-4"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-border border-t-gold" />
        <p className="text-sm text-muted">در حال آماده‌سازی فضای فال حافظ...</p>
      </div>
    </main>
  );
}
