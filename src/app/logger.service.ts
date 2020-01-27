import { Injectable, InjectionToken, Inject } from "@angular/core";

export interface Logger {
  log(...msgs: any[]): void;
}

export const LOGGER_DELEGATE = new InjectionToken<Logger>(
  "LOGGER_DELEGATE",
);

@Injectable({ providedIn: "root" })
export class LoggerService implements Logger {
  constructor(@Inject(LOGGER_DELEGATE) private loggerDelegate: Logger) {
    this.log(`Logger using delegate`, this.loggerDelegate)
  }

  log(...msgs: any[]) {
    this.loggerDelegate.log(new Date(), ...msgs);
  }
}
