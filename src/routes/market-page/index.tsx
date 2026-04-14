'use client';

import {
	MarketPageWidget,
	NavbarWidget,
	OrderBookWidget,
	TradingPanelWidget,
	useThemeContext,
} from 'polymarket-ui';

export default function MarketPage() {
	const { isDarkMode, toggleDarkMode } = useThemeContext();

	return (
		<div>
			<NavbarWidget />
			<button
				className={'text-lg text-gray-500'}
				onClick={toggleDarkMode}
			>
				Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
			</button>

			<MarketPageWidget />

			{/* Or use individual components */}
			<OrderBookWidget />
			<TradingPanelWidget
				currentPrice={75}
				maxAmount={1000}
			/>
		</div>
	);
}
