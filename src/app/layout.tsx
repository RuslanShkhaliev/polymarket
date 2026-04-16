import { Providers } from '@app/providers';
import { NavbarWidget } from '@widgets/nav-bar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './styles/index.css';
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Polymarket Clone',
	description: 'Created for testing purposes',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>
				<NextTopLoader showSpinner={false} />

				<Providers>
					<NavbarWidget />
					<main
						className={
							'size-full z-2 not-lg:flex-1 not-lg:w-full not-lg:flex not-lg:flex-col not-lg:bg-(--color-background) not-lg:z-2 lg:h-full lg:flex-1 lg:w-full lg:max-w-full min-h-[calc(100dvh-var(--navbar-height))] not-lg:[box-sizing:padding-box]'
						}
					>
						<div
							className={
								'flex  pt-7.5 px-6  bg-background w-full flex-col box-border max-[599px]:overscroll-none max-[599px]:overflow-x-clip max-[1023px]:overscroll-none lg:pb-0 lg:h-full'
							}
						>
							{children}
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
