import { InputHTMLAttributes } from 'react';

export const InputSearch = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<div className='relative w-full'>
			<div className='absolute top-1/2 left-4 -translate-y-1/2 text-text-secondary'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='18px'
					height='18px'
					viewBox='0 0 18 18'
				>
					<path
						d='M15.75 15.75L11.6386 11.6386'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
						data-color='color-2'
						fill='none'
					/>
					<path
						d='M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
						fill='none'
					/>
				</svg>
			</div>
			<kbd className='hidden lg:block text-text-tertiary pointer-events-none absolute top-1/2 right-4 -translate-y-1/2'>
				/
			</kbd>
			<input
				className='flex h-10 w-full rounded-md px-3 py-1 text-sm autofill:!bg-transparent text-text file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-input-filled-bg hover:bg-input-filled-bg-hover focus-visible:hover:bg-input-filled-bg focus-visible:bg-input-bg-surface-active ring-brand-500/70 transition-[box-shadow] duration-200 placeholder:text-text-secondary focus-visible:ring-0 ring-0 pl-11 max-lg:text-[16px]! border border-transparent'
				autoComplete='off'
				{...props}
			/>
		</div>
	);
};
