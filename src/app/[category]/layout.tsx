import { PropsWithChildren } from 'react';

export default function PoliticsLayout({ children }: PropsWithChildren) {
	return (
		<div
			className={
				'flex w-full max-w-[1320px] mx-auto flex-col lg:flex-row lg:justify-center lg:gap-8 lg:px-3'
			}
		>
			<div className={'flex-1 w-full min-w-0 min-h-[calc(100vh-8rem)]'}>
				{children}
			</div>
		</div>
	);
}
