import type { FalResult as FalResultData } from "@/types/fal";
import Interpretation from "./Interpretation";
import ShareFalButton from "./ShareFalButton";

interface FalResultProps {
    result: FalResultData;
    onRetry?: () => void;
}

export default function FalResult({ result, onRetry }: FalResultProps) {
    const { fortune } = result;

    return (
        <section className="mx-auto w-full max-w-4xl space-y-6">
            <div className="text-center">
                <p className="text-sm text-gold">فال تو آماده است</p>

                <h2 className="mt-3 text-3xl font-bold text-gold-light">
                    {fortune.title}
                </h2>

                <p className="mt-3 text-sm text-muted">
                    {new Intl.DateTimeFormat("fa-IR", {
                        dateStyle: "long",
                    }).format(new Date(result.createdAt))}
                </p>
            </div>

            <Interpretation text={fortune.interpreter} />

            <ShareFalButton fortune={fortune} />

            {onRetry && (
                <div className="text-center">
                    <button
                        type="button"
                        onClick={onRetry}
                        className="rounded-xl border border-border px-5 py-3 text-sm text-foreground transition hover:bg-surface"
                    >
                        گرفتن فال دوباره
                    </button>
                </div>
            )}
        </section>
    );
}
