import * as React from 'react';
import { PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonOutcome = tv({
	base: [
		'w-full inline-flex items-center justify-center gap-2',
		'whitespace-nowrap rounded-sm',
		'text-body-base font-semibold',
		'cursor-pointer transition duration-150',
		'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
		'disabled:pointer-events-none disabled:opacity-50',
		'active:scale-100',
		'py-2 px-2 h-10',
		'flex-1 min-w-0 overflow-hidden',
		'group',
		'[&_svg]:pointer-events-none [&_svg]:shrink-0',
		'hover:!text-white',
	],
	variants: {
		variant: {
			green: [
				'bg-green-500/15 text-green-600 dark:text-green-500',
				'hover:bg-green-600',
				'dark:hover:bg-green-400',
			],
			red: [
				'bg-red-500/9 text-red-500 dark:bg-red-500/15',
				'hover:!bg-red-500',
				'dark:hover:bg-red-500/25',
			],
		},
	},
	defaultVariants: {
		variant: 'green',
	},
});

type Variants = VariantProps<typeof buttonOutcome>;

export function ButtonOutcome({
	variant,
	children,
}: PropsWithChildren<Variants>) {
	return (
		<button
			type='button'
			className={buttonOutcome({ variant })}
		>
			<p className='truncate font-semibold dark:brightness-110'>
				{children}
			</p>
		</button>
	);
}
