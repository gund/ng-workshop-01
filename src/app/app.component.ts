import { Component, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  stateLog: string[] = [];

  constructor(private loggerService: LoggerService) {}

  ngOnInit() {
    this.loggerService.state.subscribe((state: string) => {
      this.stateLog.push(`State became ${state}`);
    });
  }
}
