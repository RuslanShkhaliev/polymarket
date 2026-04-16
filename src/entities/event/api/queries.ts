import { eventsApi } from '@entities/event/api/events.api';
import { Category } from '@entities/event/model/schema';
import { queryOptions } from '@tanstack/react-query';

export const EventsQueryKeys = {
	getAll: (category?: Category) => ['events', category],
	getBySlug: (slug: string) => ['event', slug],
} as const;

export const getEventsQueryOptions = (category?: Category) =>
	queryOptions({
		queryKey: EventsQueryKeys.getAll(category),
		queryFn: () => eventsApi.getEvents(category),
	});

export const getEventBySlugQueryOptions = (slug: string) =>
	queryOptions({
		queryKey: EventsQueryKeys.getBySlug(slug),
		queryFn: () => eventsApi.getEventBySlug(slug),
	});
