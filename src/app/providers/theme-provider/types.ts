import { ReactNode } from 'react';

export interface ThemeContextType {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

export interface ThemeProviderType {
	defaultDarkMode?: boolean;
	children: ReactNode;
}
