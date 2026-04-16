import { env } from '@config/env.config';
import { PredictionEvent } from '@entities/event';
import { NextResponse } from 'next/server';

type Params = {
	params: Promise<{ slug: string }>;
};

export async function GET(_: Request, { params }: Params) {
	const { slug } = await params;

	console.log({ slug });
	if (!slug) {
		return NextResponse.json(
			{ error: 'Slug is required' },
			{ status: 400 },
		);
	}

	const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/events/slug/${slug}`);

	console.log(res);
	if (!res.ok) {
		return NextResponse.json({ error: 'Event not found' }, { status: 404 });
	}

	const data: PredictionEvent = await res.json();
	const activeMarkets = data.markets.filter(
		(market) => market.active && !market.closed,
	);
	return NextResponse.json({
		...data,
		markets: activeMarkets,
	});
}
