import { z } from 'zod';

export const marketSchema = z
	.object({
		id: z.string(),
		active: z.boolean(),
		closed: z.boolean(),
		image: z.string(),
		volume: z.string().default('0'),
		volumeNum: z.number().default(0),
		outcomes: z.string(),
		outcomePrices: z.string().default('[]'),
		groupItemTitle: z.string().optional(),
	})
	.transform((dto) => {
		const outcomes: string[] = JSON.parse(dto.outcomes);
		const prices: string[] = JSON.parse(dto.outcomePrices);

		return {
			...dto,
			outcomes: outcomes.map((name, i) => ({
				name,
				price: Number(prices[i]),
			})),
		};
	});
export type MarketEvent = z.infer<typeof marketSchema>;

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
