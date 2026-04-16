type OutcomePriceProps = {
	value: number;
};
export const OutcomePrice = ({ value }: OutcomePriceProps) => {
	return (
		<p className='font-semibold text-[28px] text-text-primary'>
			{Math.round(value * 100)}%
		</p>
	);
};
