import { normalizePersianText } from "@/lib/utils";
import type { Ghazal } from "@/types/ghazal";

export function searchGhazals(
    ghazals: readonly Ghazal[],
    query: string,
): Ghazal[] {
    const normalizedQuery = normalizePersianText(query).toLocaleLowerCase("fa");

    if (!normalizedQuery) {
        return [...ghazals];
    }

    return ghazals.filter((ghazal) => {
        const searchableText = normalizePersianText(
            [
                ghazal.title,
                ghazal.poet,
                ...ghazal.verses.flatMap((verse) => [
                    verse.first,
                    verse.second,
                ]),
            ].join(" "),
        ).toLocaleLowerCase("fa");

        return searchableText.includes(normalizedQuery);
    });
}