import { marketSchema } from '@entities/market/model/schema';
import { z } from 'zod';

export const predictionEventSchema = z.object({
	id: z.string(),
	title: z.string(),
	image: z.string(),
	volume: z.number(),
	slug: z.string(),
	markets: z.array(marketSchema),
});

export const categorySchema = z.enum(['sports', 'crypto', 'politics']);

export type Category = z.infer<typeof categorySchema>;
export const predictionEventsSchema = z.array(predictionEventSchema);
export type PredictionEvent = z.infer<typeof predictionEventSchema>;
