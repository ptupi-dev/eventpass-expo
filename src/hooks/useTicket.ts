import { useMutation } from '@tanstack/react-query';

import { wait } from '@/utils/functions';
import tickets from '../mocks/tickets.json';
import { TicketType } from '@/types/tickets';

export async function fetchTicket({
  eventId,
}: {
  eventId: string;
}): Promise<TicketType | undefined> {
  await wait(1000);
  const ticketMap = new Map<string, TicketType>(
    (tickets as TicketType[]).map((ticket) => [ticket['event-id'], ticket] as const),
  );
  return ticketMap.get(eventId);
}

export function useTicket() {
  return useMutation({
    mutationKey: ['ticket-detail'],
    mutationFn: fetchTicket,
  });
}
