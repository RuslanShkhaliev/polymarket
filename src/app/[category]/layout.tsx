'use client';
import { store } from '@entities/market/model/store';
import { useMarketRealtime } from '@features/market/useMarketRealtime';
import { InputSearch } from '@shared/ui/input-search';
import { useParams } from 'next/navigation';
import { PropsWithChildren } from 'react';

type PoliticsLayoutProps = PropsWithChildren<{
	params: Promise<{ category: string }>;
}>;
export default function PoliticsLayout({
	children,
	params,
}: PoliticsLayoutProps) {
	const { category } = useParams<{ category: string }>();

	useMarketRealtime(store.set);

	return (
		<div
			className={
				'flex w-full max-w-[1320px] mx-auto flex-col lg:flex-row lg:justify-center lg:gap-8 lg:px-3'
			}
		>
			<div className={'flex-1 w-full min-w-0 min-h-[calc(100vh-8rem)]'}>
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
				{children}
			</div>
		</div>
	);
}
