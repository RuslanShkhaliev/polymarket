import { QueryProvider } from '@providers/react-query';
import { ThemeProvider } from '@providers/theme-provider';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<QueryProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</QueryProvider>
	);
};
