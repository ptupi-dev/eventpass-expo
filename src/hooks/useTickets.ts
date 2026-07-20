import { useQuery } from '@tanstack/react-query';

import { wait } from '@/utils/functions';
import tickets from '../mocks/tickets.json';
import { TicketType } from '@/types/tickets';

export async function fetchTickets(): Promise<TicketType[]> {
  await wait(3000);
  return (tickets as TicketType[]).map((ticket) => ({ ...ticket }));
}

export function useEvents() {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets,
    staleTime: 1000 * 60 * 5,
  });
}
