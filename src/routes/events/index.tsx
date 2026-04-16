'use client';

import { Category, getEventsQueryOptions } from '@entities/event';
import { marketWs } from '@features/market/api/ws';
import { useSuspenseQuery } from '@tanstack/react-query';
import { EventsList } from '@widgets/events-list';
import { useEffect } from 'react';

interface CategoryRouteProps {
	category?: Category;
}

export const EventsPage = ({ category }: CategoryRouteProps) => {
	const { data } = useSuspenseQuery(getEventsQueryOptions(category));

	useEffect(() => {
		const ids: string[] = [];
		data.forEach((item) => {
			item.markets.forEach((m) => ids.push(m.id));
		});
		marketWs.subscribe(ids);
	}, [data]);

	return <EventsList items={data} />;
};
