import { getEventsQueryOptions } from '@entities/event';
import { Category } from '@entities/event/model/schema';
import { getQueryClient, ReactQueryHydrate } from '@lib/react-query';
import { CategoryRoute } from '@routes/category';

interface Props {
	params: Promise<{ category: Category }>;
}

export default async function CategoryPage({ params }: Props) {
	const { category } = await params;

	const queryClient = getQueryClient();

	await queryClient.prefetchQuery(getEventsQueryOptions(category));
	return (
		<ReactQueryHydrate state={queryClient}>
			<CategoryRoute category={category} />
		</ReactQueryHydrate>
	);
}
