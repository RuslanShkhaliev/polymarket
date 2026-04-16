import { PredictionEvent } from '@entities/event';
import { ButtonOutcome } from '@entities/event/ui/button-outcome';
import { VolumeAmount } from '@shared/ui/volume';
import Image from 'next/image';
import Link from 'next/link';
import { memo, PropsWithChildren } from 'react';

interface EventCardProps {
	data: PredictionEvent;
}

const EventCardHeader = ({
	image,
	title,
	slug,
}: {
	image: string;
	title: string;
	slug: string;
}) => {
	return (
		<div className='flex w-full justify-between relative gap-2 px-3 h-[42px]'>
			<div className={'flex gap-2'}>
				<div className='overflow-hidden rounded-sm relative w-[38px] min-w-[38px] h-[38px]'>
					{image && (
						<Image
							alt='Peru Presidential Election Winner card icon'
							decoding='async'
							className='object-cover rounded-sm absolute h-full w-full left-0 top-0 right-0 bottom-0'
							width={38}
							height={38}
							sizes='38px'
							src={image}
						/>
					)}
				</div>
				<div className='flex flex-1 min-w-0 gap-4 justify-between cursor-default'>
					<Link
						className='h-fit w-full relative cursor-pointer group flex'
						href={`/event/${slug}`}
					>
						<div className='flex flex-col justify-center min-h-[36px]'>
							<h3 className='text-body-base text-text font-[590] w-fit line-clamp-3 text-pretty decoration-2 min-w-0 group-hover:underline'>
								{title}
							</h3>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
const EventCardFooter = ({ children }: PropsWithChildren) => {
	return (
		<div className={'flex flex-col justify-end gap-1.5 px-3 pb-2'}>
			<div
				className={
					'flex w-full text-body-sm text-text-secondary relative items-center'
				}
			>
				<div className='flex w-full text-body-sm text-text-secondary relative items-center'>
					<div className='flex gap-2 justify-between items-center w-full overflow-x-auto whitespace-nowrap overflow-visible no-scrollbar'>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

const EventCardBody = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex gap-2 justify-between items-center w-full overflow-x-auto whitespace-nowrap overflow-visible no-scrollbar'>
			<div className='flex w-full justify-end gap-1.5 px-3 py-2'>
				{children}
			</div>
		</div>
	);
};

export const EventCard = memo(({ data }: EventCardProps) => {
	return (
		<div
			className={
				'relative flex flex-col justify-between rounded-xl shadow-md shadow-black/4 min-h-[180px] h-full overflow-hidden pt-3 group/card transition hover:-translate-y-px hover:shadow-black/8 hover:shadow-md dark:bg-neutral-50 dark:hover:bg-neutral-100 border'
			}
		>
			<EventCardHeader
				slug={data.slug}
				title={data.title}
				image={data.image}
			/>
			<EventCardBody>
				<div className='gap-2 w-full h-[62px] flex justify-between items-end'>
					{['Yes', 'No'].map((label, index) => (
						<Link
							key={index}
							className={'w-full'}
							href={`/event/${data.slug}?outcomeIndex=${index}`}
						>
							<ButtonOutcome
								variant={index === 0 ? 'green' : 'red'}
							>
								{label}
							</ButtonOutcome>
						</Link>
					))}
				</div>
			</EventCardBody>
			<EventCardFooter>
				<VolumeAmount value={data.volume} />
			</EventCardFooter>
		</div>
	);
});
