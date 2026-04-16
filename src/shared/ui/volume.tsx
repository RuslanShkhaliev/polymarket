import { formatCompactNumber } from '@utils/format-number';

interface VolumeAmountProps {
	value: number;
}
export const VolumeAmount = ({ value }: VolumeAmountProps) => {
	return (
		<p className='text-sm text-text-secondary'>
			<span className='uppercase'>${formatCompactNumber(value)} </span>
			Vol.
		</p>
	);
};
