import { MarketPrice } from '@entities/market/model/store';

type PriceUpdateMsg = {
	event_type: 'price_change';
	asset_id: string;
	price: number;
	best_bid?: number;
	best_ask?: number;
	timestamp?: number;
};

type SubscribeMsg = {
	type: 'subscribe';
	assets_ids: string[];
};
enum EventType {
	SUBSCRIBE = 'subscribe',
	PRICE_CHANGE = 'price_change',
}
type WsMessage =
	| { type: EventType.SUBSCRIBE; marketIds: string[] }
	| { type: EventType.PRICE_CHANGE; id: string; data: MarketPrice };

type UpdateCb = (id: string, data: MarketPrice) => void;
class MarketWs {
	private ws: WebSocket | null = null;

	constructor(private readonly url: string) {}

	connect(onUpdate: UpdateCb) {
		if (this.ws) return;
		this.ws = new WebSocket(this.url);

		this.ws.onmessage = (event) => {
			const msg = JSON.parse(event.data);

			if (msg.event_type === EventType.PRICE_CHANGE) {
				onUpdate(msg.asset_id, {
					lastTradePrice: msg.price,
					bestBid: msg.best_bid ?? 0,
					bestAsk: msg.best_ask ?? 0,
					updatedAt: Date.now(),
				});
			}
		};
	}

	subscribe(ids: string[]) {
		if (!this.ws) return;

		this.ws.send(
			JSON.stringify({
				operation: EventType.SUBSCRIBE,
				assets_ids: ids,
			}),
		);
	}
}

export const marketWs = new MarketWs(
	`${process.env.NEXT_PUBLIC_WSS_URL}/market`,
);
