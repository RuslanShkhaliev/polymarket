import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';

export const ReactQueryHydrate = ({
	children,
	state,
}: {
	children: React.ReactNode;
	state: QueryClient;
}) => {
	return (
		<HydrationBoundary state={dehydrate(state)}>
			{children}
		</HydrationBoundary>
	);
};
