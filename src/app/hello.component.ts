import { Component, Input, Output, EventEmitter } from "@angular/core";

import { LoggerService } from "./logger.service";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <p>Internal state is: {{ someState }}</p>
    <button (click)="toggleState()">Toggle internal state</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @Input() otherProp: string;

  @Output() stateChange = new EventEmitter<boolean>();

  someState = true;

  constructor(private loggerService: LoggerService) {}

  toggleState() {
    this.someState = !this.someState;
    this.loggerService.log(`HelloComponent: Internal state is ${this.someState}`);
    this.stateChange.emit(this.someState);
  }
}
