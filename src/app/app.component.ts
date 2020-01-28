import { Component } from '@angular/core';

import { LoggerService, LOGGER_DELEGATE, Logger } from './logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService, { provide: LOGGER_DELEGATE, useExisting: AppComponent }]
})
export class AppComponent implements Logger {
  name = 'Angular';

  stateLog: string[] = [];

  log(...msgs: any[]) {
    this.stateLog.push(msgs.join(' '));
  }
}
