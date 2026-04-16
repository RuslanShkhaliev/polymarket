import { getEventsQueryOptions } from '@entities/event';
import { getQueryClient, ReactQueryHydrate } from '@lib/react-query';
import { EventsPage } from '@routes/events';

export default async function Page() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(getEventsQueryOptions());
	return (
		<ReactQueryHydrate state={queryClient}>
			<EventsPage />
		</ReactQueryHydrate>
	);
}
