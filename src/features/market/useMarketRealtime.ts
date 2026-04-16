import { updateMarketPriceAtom } from '@entities/market/model/store';
import { useEffect } from 'react';
import { marketWs } from './api/ws';

export const useMarketRealtime = (set: any) => {
	useEffect(() => {
		marketWs.connect((id, data) => {
			set(updateMarketPriceAtom, { id, data });
		});
	}, []);
};
