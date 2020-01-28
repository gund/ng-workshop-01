import {Component, OnInit} from '@angular/core';

import { LoggerService } from './logger.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  subscription: Subscription;
  name = 'Angular';

  stateLog: string[] = [];

  constructor(private loggerService: LoggerService) {}

  ngOnInit() {
    this.stateLog = this.loggerService.getStateLog();
    this.subscription = this.loggerService.stateChanged.subscribe((stateLog: any[]) => {
      this.stateLog = [...stateLog];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onStateChanged(state: boolean) {
  //   this.stateLog.push(`State became ${state}`);
  //   this.loggerService.log(`AppComponent: New state: ${state}`);
  // }
}
