import { atom, createStore } from 'jotai';
import { selectAtom } from 'jotai/utils';

export type MarketPrice = {
	lastTradePrice: number;
	bestBid: number;
	bestAsk: number;
	updatedAt: number;
};

export const store = createStore();

export const marketPricesAtom = atom<Map<string, MarketPrice>>(new Map());

export const subscribedMarketIdsAtom = atom<Set<string>>(new Set([]));

export const addSubscribedMarketIdsAtom = atom(
	null,
	(get, set, ids: string[]) => {
		const prev = new Set(get(subscribedMarketIdsAtom));

		let changed = false;

		for (const id of ids) {
			if (!prev.has(id)) {
				prev.add(id);
				changed = true;
			}
		}

		if (changed) {
			set(subscribedMarketIdsAtom, new Set(prev));
		}
	},
);

export const updateMarketPriceAtom = atom(
	null,
	(get, set, update: { id: string; data: MarketPrice }) => {
		const prev = new Map(get(marketPricesAtom));

		prev.set(update.id, update.data);

		set(marketPricesAtom, prev);
	},
);

export const marketPriceByIdAtom = (id: string) =>
	selectAtom(marketPricesAtom, (map) => map.get(id));
