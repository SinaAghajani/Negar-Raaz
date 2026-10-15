import "server-only";

import fortunesData from "@/data/hafez-fortunes.json";
import { z } from "zod";

const fortuneSchema = z.object({
    id: z.union([z.string(), z.number()]).transform(String),
    title: z.string().trim().min(1),
    interpreter: z.string().trim().min(1),
});

const fortunesSchema = z.array(fortuneSchema);

export type HafezFortune = z.infer<typeof fortuneSchema>;

const fortunes = fortunesSchema.parse(fortunesData);

export const hafezProvider = {
    getAllFortunes(): HafezFortune[] {
        return fortunes;
    },

    getRandomFortune(): HafezFortune {
        if (fortunes.length === 0) {
            throw new Error("هیچ فالی در فهرست موجود نیست.");
        }

        const index = Math.floor(Math.random() * fortunes.length);

        return fortunes[index]!;
    },

    getFortuneById(id: string): HafezFortune | undefined {
        return fortunes.find((fortune) => fortune.id === id);
    },
};
