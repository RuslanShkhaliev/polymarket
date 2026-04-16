import cn from 'classnames';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
	base: 'inline-flex items-center cursor-pointer active:scale-[97%] transition duration-150 justify-center gap-2 whitespace-nowrap rounded-sm text-body-base font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 shrink min-w-0 md:shrink-0 md:min-w-fit',

	variants: {
		variant: {
			primary:
				'bg-button-primary-bg text-button-primary-text hover:bg-button-primary-bg-hover',
			ghost: 'bg-button-ghost-bg text-text-brand hover:bg-button-ghost-bg-hover',
			text: 'text-button-primary-text hover:text-button-link-text-hover',
		},

		size: {
			md: 'h-9 px-4 py-2',
			sm: 'h-8 px-3 text-sm',
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'md',
		truncate: true,
	},
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
	truncate?: boolean;
	icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, children, truncate, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(button({ variant, size }), className)}
				{...props}
			>
				{props.icon && props.icon}
				<span
					className={cn(
						truncate
							? 'truncate md:text-clip md:overflow-visible md:whitespace-normal'
							: 'whitespace-nowrap',
					)}
				>
					{children}
				</span>
			</button>
		);
	},
);

Button.displayName = 'Button';
