interface MarketCardProps {
	body: React.ReactNode;
	header?: React.ReactNode;
	footer?: React.ReactNode;
}

interface MarketCardFooterProps {
	volume?: number;
	price?: number;
	change?: number;
	changePercentage?: number;
}
export const MarketCardFooter = ({}: MarketCardFooterProps) => {
	return (
		<div className={'flex flex-col justify-end gap-1.5 px-3 pb-2'}>
			<div
				className={
					'flex w-full text-body-sm text-text-secondary relative items-center'
				}
			>
				<div className='flex gap-2 justify-between items-center w-full overflow-x-auto whitespace-nowrap overflow-visible no-scrollbar' />
			</div>
		</div>
	);
};
export const MarketCard = ({ body, header, footer }: MarketCardProps) => {
	return (
		<div
			className={
				'relative flex flex-col justify-between rounded-xl shadow-md shadow-black/4 min-h-[180px] h-full overflow-hidden pt-3 group/card transition hover:-translate-y-px hover:shadow-black/8 hover:shadow-md dark:bg-neutral-50 dark:hover:bg-neutral-100 border'
			}
		>
			<div
				className={
					'flex w-full items-start relative gap-2 px-3 h-[42px]'
				}
			/>
			<MarketCardFooter />
		</div>
	);
};
