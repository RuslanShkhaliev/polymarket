'use client';

import { getEventBySlugQueryOptions } from '@entities/event';
import { EventMetaBar } from '@routes/event-details/ui/event-meta-bar';
import { OutcomeRow } from '@routes/event-details/ui/outcome-row';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';

export const EventDetails = ({ slug }: { slug: string }) => {
	const { data } = useSuspenseQuery(getEventBySlugQueryOptions(slug));

	return (
		<div className={'relative'}>
			<div className=' flex gap-3 items-center'>
				<div className={'shrink-0'}>
					<div
						className={
							'overflow-hidden origin-top-left rounded-sm transform-none'
						}
					>
						<div className='bg-white rounded-sm overflow-hidden relative !h-10 !w-10 !min-w-10 min-[480px]:!h-16 min-[480px]:!w-16 min-[480px]:!min-w-16'>
							<div className='w-16 h-16 min-w-16 opacity-0 overflow-hidden bg-skeleton-bg/50 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[skeletonShimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-skeleton-bg before:to-transparent absolute top-0 left-0 rounded-[inherit]' />
							{data.image && (
								<Image
									alt='Market icon'
									fill
									loading='lazy'
									decoding='async'
									className='absolute h-full w-full inset-0 object-cover'
									src={data.image}
								/>
							)}
						</div>
					</div>
				</div>
				<div className='flex-1 min-w-0 -mt-1 origin-center-left transform-none'>
					<div className='flex flex-col items-start gap-1'>
						<h1 className='!font-semibold text-heading-xl !my-0 w-full'>
							{data.title}
						</h1>
					</div>
				</div>
			</div>
			<div className={'sticky top-0 z-10'}>
				<EventMetaBar volume={data.volume} />
			</div>
			<div className='space-y-2 border-t border-border'>
				{data.markets.map((market, index) => (
					<OutcomeRow
						key={index}
						data={market}
					/>
				))}
			</div>
		</div>
	);
};
