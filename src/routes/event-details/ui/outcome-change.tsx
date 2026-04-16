interface OutcomeChangeProps {
	value: number;
}

export const OutcomeChange = ({ value }: OutcomeChangeProps) => {
	const isUp = value >= 0;

	return (
		<div className='flex items-center gap-1 text-[12px]'>
			<span
				style={{ color: isUp ? 'var(--green-500)' : 'var(--red-500)' }}
			>
				{isUp ? '▲' : '▼'}
			</span>

			<span
				style={{ color: isUp ? 'var(--green-500)' : 'var(--red-500)' }}
			>
				{Math.abs(value)}%
			</span>
		</div>
	);
};
