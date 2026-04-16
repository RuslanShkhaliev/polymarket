import { Category } from '@entities/event/model/schema';

export const routes = {
	home: '/',
	events: '/events',
	eventsByCategory: (category: Category) => `/events/${category}`,
	event: (slug: string) => `/events/${slug}`,
};
