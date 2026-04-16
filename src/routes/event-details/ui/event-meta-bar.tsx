interface EventMetaBarProps {
	volume: number;
}

export const EventMetaBar = ({ volume }: EventMetaBarProps) => {
	const [vol] = volume.toLocaleString().split('.');
	return (
		<div className='pb-2 pt-2 flex flex-col gap-1'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-x-2.5 items-center'>
					<p className='text-[13px] font-medium text-text-primary whitespace-nowrap'>
						${vol} Vol.
					</p>
				</div>
			</div>
		</div>
	);
};
