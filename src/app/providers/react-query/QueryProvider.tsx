'use client';

import { getQueryClient } from '@lib/react-query/get-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

export const QueryProvider = ({ children }: PropsWithChildren) => {
	const client = getQueryClient();
	return (
		<QueryClientProvider client={client}>{children}</QueryClientProvider>
	);
};
