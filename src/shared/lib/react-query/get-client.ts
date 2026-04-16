import {
	defaultShouldDehydrateQuery,
	environmentManager,
	QueryClient,
} from '@tanstack/react-query';

function makeQueryClient(): QueryClient {
	return new QueryClient({
		defaultOptions: {
			queries: {
				retry: 1,
				refetchOnWindowFocus: true,
				staleTime: 5_000,
			},
			dehydrate: {
				shouldDehydrateQuery: defaultShouldDehydrateQuery,
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient(): QueryClient {
	if (environmentManager.isServer()) {
		console.log('eyes');
		return makeQueryClient();
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient();
		return browserQueryClient;
	}
}
