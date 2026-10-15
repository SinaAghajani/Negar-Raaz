import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { falRepository } from "@/server/repositories/fal.repository";
import FalResultView from "@/components/fal/FalResult";

interface FalDetailPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({
    params,
}: FalDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const result = await falRepository.getById(id);

    if (!result) {
        return {
            title: "فال پیدا نشد",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: `فال حافظ | ${result.fortune.title}`,
        description: result.fortune.interpreter,
        alternates: {
            canonical: `/fal/${encodeURIComponent(id)}`,
        },
        openGraph: {
            title: `فال حافظ | ${result.fortune.title}`,
            description: result.fortune.interpreter,
            type: "article",
        },
    };
}

export default async function FalDetailPage({
    params,
}: FalDetailPageProps) {
    const { id } = await params;
    const result = await falRepository.getById(id);

    if (!result) {
        notFound();
    }

    return (
        <main className="page-shell">
            <FalResultView result={result} onRetry={undefined} />
        </main>
    );
}