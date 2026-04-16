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
