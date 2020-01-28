import {Injectable, InjectionToken, Inject, Output} from "@angular/core";
import {Subject} from "rxjs";

export interface Logger {
  log(...msgs: any[]): void;
}

export const LOGGER_DELEGATE = new InjectionToken<Logger>(
  "LOGGER_DELEGATE",
);

@Injectable({ providedIn: "root" })
export class LoggerService implements Logger {
  @Output() stateChanged = new Subject();

  private stateLog: any[] = [];

  constructor(@Inject(LOGGER_DELEGATE) private loggerDelegate: Logger) {
    this.log(`Logger using delegate`, this.loggerDelegate)
  }

  getStateLog() {
    return [...this.stateLog];
  }

  log(...msgs: any[]) {
    const newMessage = [new Date(), ...msgs];

    this.loggerDelegate.log(newMessage);

    this.stateLog = [...this.stateLog, newMessage.join(' ')];
    this.stateChanged.next([...this.stateLog]);
  }
}
