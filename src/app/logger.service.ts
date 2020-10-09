import { Injectable, InjectionToken, Inject, EventEmitter } from "@angular/core";

export interface Logger {
  log(...msgs: any[]): void;
}

export const LOGGER_DELEGATE = new InjectionToken<Logger>(
  "LOGGER_DELEGATE",
);

@Injectable({ providedIn: "root" })
export class LoggerService implements Logger {
  state = new EventEmitter<string>();

  constructor(@Inject(LOGGER_DELEGATE) private loggerDelegate: Logger) {
    this.log(`Logger using delegate`, this.loggerDelegate)
  }

  log(...msgs: any[]) {
    this.loggerDelegate.log(new Date(), ...msgs);
    this.getState(...msgs);
  }

  getState(...msgs: any[]) {
    const state = [...msgs].join().split(' ').pop();

    this.state.emit(state);
  }
}
