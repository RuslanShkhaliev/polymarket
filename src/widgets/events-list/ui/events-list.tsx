'use client';
import { EventCard, PredictionEvent } from '@entities/event';

interface EventsListProps {
	items: PredictionEvent[];
}
export const EventsList = ({ items }: EventsListProps) => {
	return (
		<div
			className={
				'grid h-auto gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
			}
		>
			{items.map((item) => (
				<EventCard
					key={item.id}
					data={item}
				/>
			))}
		</div>
	);
};
