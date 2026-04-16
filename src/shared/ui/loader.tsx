'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const Loader = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [progress, setProgress] = useState(0);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// старт
		setVisible(true);
		setProgress(30);

		const t1 = setTimeout(() => setProgress(70), 200);
		const t2 = setTimeout(() => setProgress(90), 400);

		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
		};
	}, [pathname, searchParams]);

	useEffect(() => {
		if (!visible) return;

		const done = setTimeout(() => {
			setProgress(100);

			setTimeout(() => {
				setVisible(false);
				setProgress(0);
			}, 200);
		}, 500);

		return () => clearTimeout(done);
	}, [visible]);

	if (!visible) {
		return null;
	}

	return (
		<div
			className={`h-[2px] bg-blue-600 fixed top-0 left-0 transition-all duration-300 opacity-100 w-full z-[70]`}
			style={{
				width: `${progress}%`,
				transition:
					progress === 100 ? 'none' : 'width 0.3s ease-in-out',
			}}
		/>
	);
};
