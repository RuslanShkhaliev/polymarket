interface ProbabilityBarProps {
	value: number;
}
export const ProbabilityBar = ({ value }: ProbabilityBarProps) => {
	const percent = Math.round(value * 100);

	return (
		<div className='h-2 w-full bg-neutral-800 rounded relative overflow-hidden'>
			<div
				className='h-full bg-green-500 transition-all'
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
};
