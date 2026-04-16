import { env } from '@config/env.config';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const category = searchParams.get('category');

	const params = new URLSearchParams();
	params.set('closed', 'false');
	params.set('active', 'true');

	if (category?.length) {
		params.set('tag_slug', category);
	}

	const url = `${env.NEXT_PUBLIC_API_URL}/events?${params.toString()}`;

	const res = await fetch(url);

	if (!res.ok) {
		return NextResponse.json(
			{ message: 'External API error' },
			{ status: res.status },
		);
	}

	const data = await res.json();

	return NextResponse.json(data);
}
