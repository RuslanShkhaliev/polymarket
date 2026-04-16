'use client';

import { Category, getEventsQueryOptions } from '@entities/event';
import { InputSearch } from '@shared/ui/input-search';
import { useSuspenseQuery } from '@tanstack/react-query';
import { EventsList } from '@widgets/events-list';

interface CategoryRouteProps {
	category: Category;
}

export const CategoryRoute = ({ category }: CategoryRouteProps) => {
	console.log(category, 'dawd');
	const { data, isLoading, isError } = useSuspenseQuery(
		getEventsQueryOptions(category),
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error</div>;
	}
	return (
		<div>
			<div className='flex flex-col w-full gap-0 mb-4'>
				<div className='flex items-center justify-between w-full'>
					<div
						aria-hidden='true'
						className='font-semibold text-heading-xl first-letter:uppercase'
					>
						{category}
					</div>
					<div className='flex gap-0.5 items-center ml-auto'>
						<InputSearch placeholder={'Search'} />
						<button
							type='button'
							aria-label='Toggle filters'
							className='size-10 shrink-0 rounded-md flex items-center justify-center cursor-pointer hover:bg-surface'
						>
							<div className='select-none p-2 rounded-md flex items-center justify-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<title>sliders</title>
									<g fill='currentColor'>
										<line
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											x1='13.25'
											y1='5.25'
											y2='5.25'
											x2='16.25'
										/>
										<line
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											x1='1.75'
											y1='5.25'
											y2='5.25'
											x2='8.75'
										/>
										<line
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											x1='4.75'
											x2='1.75'
											y1='12.75'
											y2='12.75'
										/>
										<line
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											x1='16.25'
											y1='12.75'
											y2='12.75'
											x2='9.25'
										/>
										<circle
											cy='5.25'
											fill='none'
											r='2.25'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											cx='11'
										/>
										<circle
											cy='12.75'
											fill='none'
											r='2.25'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											cx='7'
										/>
									</g>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>
			<EventsList items={data} />
		</div>
	);
};
