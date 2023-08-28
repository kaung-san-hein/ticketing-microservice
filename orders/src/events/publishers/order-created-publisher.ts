import { Publisher, OrderCreatedEvent, Subjects } from "@kaung2024/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
