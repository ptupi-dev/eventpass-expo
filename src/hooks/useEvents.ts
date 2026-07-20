import { useQuery } from '@tanstack/react-query';

import { EventType } from '@/types/events';
import { wait } from '@/utils/functions';
import events from '../mocks/events.json';

export async function fetchEvents(): Promise<EventType[]> {
  await wait(3000);
  return (events as EventType[]).map((event) => ({ ...event }));
}

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 1000 * 60 * 5,
  });
}
