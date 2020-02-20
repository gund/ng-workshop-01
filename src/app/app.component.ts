import { Component, ViewChild } from '@angular/core';

import { LoggerService } from './logger.service';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(HelloComponent, {static: true}) childComp: HelloComponent;
  name = 'Angular';

  stateLog: string[] = [];

  constructor(private loggerService: LoggerService) {}

  ngAfterContentInit(): void {
    this.childComp.stateChange.subscribe((state: boolean) => {
      this.stateLog.push(`State became ${state}`);
      this.loggerService.log(`AppComponent: New state: ${state}`);
    });
  }
}
