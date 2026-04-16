import { fetchClient } from '@api/fetch-client';
import {
	Category,
	PredictionEvent,
	predictionEventSchema,
	predictionEventsSchema,
} from '../model/schema';

const baseUrl = '/api/events';

export const eventsApi = {
	getEvents: async (category?: Category): Promise<PredictionEvent[]> => {
		const json = await fetchClient.get<PredictionEvent[]>(
			category ? `${baseUrl}?category=${category}` : baseUrl,
		);
		return predictionEventsSchema.parse(json);
	},
	getEventBySlug: async (slug: string): Promise<PredictionEvent> => {
		const json = await fetchClient.get<PredictionEvent>(
			`${baseUrl}/${slug}`,
		);

		return predictionEventSchema.parse(json);
	},
};
