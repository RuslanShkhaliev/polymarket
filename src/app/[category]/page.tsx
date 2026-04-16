import { getEventsQueryOptions } from '@entities/event';
import { Category } from '@entities/event/model/schema';
import { getQueryClient, ReactQueryHydrate } from '@lib/react-query';
import { EventsPage } from '@routes/events';

interface Props {
	params: Promise<{ category: Category }>;
}

export default async function CategoryPage({ params }: Props) {
	const { category } = await params;

	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(getEventsQueryOptions(category));
	return (
		<ReactQueryHydrate state={queryClient}>
			<EventsPage category={category} />
		</ReactQueryHydrate>
	);
}
