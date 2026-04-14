'use client';
import { THEME_STORAGE_KEY } from '@providers/theme-provider/constants';
import {
	ThemeContextType,
	ThemeProviderType,
} from '@providers/theme-provider/types';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

const ThemeContext = createContext<ThemeContextType | null>(null);
export const ThemeProvider = ({
	children,
	defaultDarkMode = true,
}: ThemeProviderType) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
		const savedMode = localStorage.getItem(THEME_STORAGE_KEY);
		return savedMode ? JSON.parse(savedMode) : defaultDarkMode;
	});

	useEffect(() => {
		localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(isDarkMode));
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	const toggleDarkMode = useCallback(() => {
		setIsDarkMode((prev) => !prev);
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode: isDarkMode,
				toggleDarkMode,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const ctx = useContext(ThemeContext);

	if (!ctx) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return ctx;
};
