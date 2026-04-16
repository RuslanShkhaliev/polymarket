import { MarketEvent } from '@entities/event';
import { ButtonOutcome } from '@entities/event/ui/button-outcome';
import { OutcomePrice } from '@routes/event-details/ui/outcome-price';
import { Avatar } from '@shared/ui/avatar';
import { VolumeAmount } from '@shared/ui/volume';

interface OutcomeRowProps {
	data: MarketEvent;
}

export const OutcomeRow = ({ data }: OutcomeRowProps) => {
	return (
		<div className='flex items-center justify-between py-3 [&+&]:border-t [&+&]:border-border'>
			<div className='flex flex-3 gap-4 min-w-[180px]'>
				<Avatar src={data.image} />

				<div className='flex flex-col gap-1'>
					<p className='text-[13px] font-medium text-text-primary'>
						{data.groupItemTitle}
					</p>
					<VolumeAmount value={data.volumeNum} />
				</div>
			</div>

			<div className='flex flex-1 gap-2 items-center'>
				<OutcomePrice value={data.outcomes[0].price} />
			</div>

			<div className='flex gap-2 shrink-0 flex-3'>
				{data.outcomes.map(({ name, price }, index) => (
					<ButtonOutcome
						key={name}
						variant={index === 0 ? 'green' : 'red'}
					>
						<span className={'capitalize'}>Buy {name} </span>
						<span className={'text-base'}>
							{(price * 100).toFixed(1)}¢
						</span>
					</ButtonOutcome>
				))}
			</div>
		</div>
	);
};
