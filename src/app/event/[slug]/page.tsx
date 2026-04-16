import { getEventBySlugQueryOptions } from '@entities/event';
import { getQueryClient, ReactQueryHydrate } from '@lib/react-query';
import { EventDetails } from '@routes/event-details';

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: Props) {
	const { slug } = await params;
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(getEventBySlugQueryOptions(slug));
	return (
		<ReactQueryHydrate state={queryClient}>
			<EventDetails slug={slug} />
		</ReactQueryHydrate>
	);
}
