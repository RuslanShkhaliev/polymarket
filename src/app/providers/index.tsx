import { QueryProvider } from '@providers/react-query';
import { StoreProvider } from '@providers/store';
import { ThemeProvider } from '@providers/theme-provider';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<QueryProvider>
			<StoreProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</StoreProvider>
		</QueryProvider>
	);
};
