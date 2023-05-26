import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter : {{ counter }}</h3>
    <button (click)="incrementCounter()">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decrementCounter()">-1</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  incrementCounter(): void {
    this.counter += 1;
  }

  decrementCounter(): void {
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
