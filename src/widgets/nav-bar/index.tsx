'use client';
import { Button } from '@shared/ui/button';
import { InputSearch } from '@shared/ui/input-search';
import {
	Navbar,
	NavbarActions,
	NavbarInner,
	NavbarLinks,
	NavbarLogo,
	NavbarSearchGroup,
	NavbarSearchSuggestions,
} from '@widgets/nav-bar/ui';
import React, { useState } from 'react';

const NavbarSearch = () => {
	const [isVisibleSuggestions, setIsVisibleSuggestions] = useState(false);
	const toggleSuggestions = () => {
		setIsVisibleSuggestions(!isVisibleSuggestions);
	};
	return (
		<NavbarSearchGroup>
			<InputSearch
				placeholder={'Search for anything...'}
				onClick={toggleSuggestions}
			/>
			{isVisibleSuggestions && <NavbarSearchSuggestions />}
		</NavbarSearchGroup>
	);
};
export const NavbarWidget = () => {
	const links = [
		{ label: 'Politics', href: '/politics' },
		{ label: 'Crypto', href: '/crypto' },
	];
	return (
		<Navbar>
			<NavbarInner>
				<div className='flex items-center gap-4'>
					<NavbarLogo />
				</div>
				<div className='items-center gap-2 w-full hidden lg:flex'>
					<NavbarSearch />
					<Button
						variant={'text'}
						className={'gap-2 flex'}
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 18 18'
							>
								<path
									d='M9 1C4.5889 1 1 4.5889 1 9C1 13.4111 4.5889 17 9 17C13.4111 17 17 13.4111 17 9C17 4.5889 13.4111 1 9 1ZM9.75 12.75C9.75 13.1641 9.4141 13.5 9 13.5C8.5859 13.5 8.25 13.1641 8.25 12.75V9.5H7.75C7.3359 9.5 7 9.1641 7 8.75C7 8.3359 7.3359 8 7.75 8H8.5C9.1895 8 9.75 8.5605 9.75 9.25V12.75ZM9 6.75C8.448 6.75 8 6.301 8 5.75C8 5.199 8.448 4.75 9 4.75C9.552 4.75 10 5.199 10 5.75C10 6.301 9.552 6.75 9 6.75Z'
									fill='currentColor'
								/>
							</svg>
						}
					>
						How it works
					</Button>
				</div>

				<NavbarActions>
					<Button variant={'ghost'}>Log In</Button>
					<Button variant={'primary'}>Sign Up</Button>
				</NavbarActions>
			</NavbarInner>

			<div className='max-w-[1350px] w-full mx-auto px-4 lg:px-6'>
				<div
					className={
						'flex overflow-x-auto snap-x scroll-px-3 snap-mandatory min-w-0 no-scrollbar h-12 pl-0 items-center w-full'
					}
				>
					<NavbarLinks links={links} />
				</div>
			</div>
		</Navbar>
	);
};
