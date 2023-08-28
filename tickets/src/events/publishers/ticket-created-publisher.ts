import { Publisher, Subjects, TicketCreatedEvent } from "@kaung2024/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}