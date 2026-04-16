'use client';

import { store, updateMarketPriceAtom } from '@entities/market/model/store';
import { marketWs } from '@features/market/api/ws';
import { Provider } from 'jotai';
import { PropsWithChildren, useEffect } from 'react';

export const StoreProvider = ({ children }: PropsWithChildren) => {
	useEffect(() => {
		console.log('rerender');
		marketWs.connect((id, data) => {
			store.set(updateMarketPriceAtom, { id, data });
		});
	}, []);
	return <Provider>{children}</Provider>;
};
