import { PaymentCreatedEvent, Publisher, Subjects } from "@kaung2024/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
