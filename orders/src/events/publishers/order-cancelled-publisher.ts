import { Publisher, OrderCancelledEvent, Subjects } from "@kaung2024/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
