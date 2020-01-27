import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  stateLog: string[] = [];

  constructor(private loggerService: LoggerService) {}

  onStateChanged(state: boolean) {
    this.stateLog.push(`State became ${state}`);
    this.loggerService.log(`AppComponent: New state: ${state}`);
  }
}
