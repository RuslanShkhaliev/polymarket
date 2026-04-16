export const routes = {
	home: '/',
	category: (category: string) => `/${category}`,
	event: (slug: string) => `/events/${slug}`,
};
