import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { LoggerService } from './logger.service';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  @ViewChild(HelloComponent, {static: false}) childReference;
  name = 'Angular';

  stateLog: string[] = [];

  constructor(private loggerService: LoggerService) {}

  ngAfterViewInit() {
      this.childReference.stateChange.subscribe((state: boolean) => {
          this.stateLog.push(`State became ${state}`);
          this.loggerService.log(`AppComponent: New state: ${state}`);
      });
  }
}
