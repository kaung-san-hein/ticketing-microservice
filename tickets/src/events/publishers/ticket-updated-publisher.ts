import { Publisher, Subjects, TicketUpdatedEvent } from "@kaung2024/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}