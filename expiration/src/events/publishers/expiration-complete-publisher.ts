import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@kaung2024/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
