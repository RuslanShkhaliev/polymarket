export const formatCompactNumber = (value: number): string =>
	new Intl.NumberFormat('en', {
		notation: 'compact',
		compactDisplay: 'short',
	}).format(value);
