import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,  // Añade esto o elimina la propiedad standalone si existe
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="IncreaseBy(1)">+1</button>
    <button (click)="Reset()">Reset</button>
    <button (click)="DecreaseBy(1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  IncreaseBy(value: number): void {
    this.counter += value;
  }

  DecreaseBy(value: number): void {
    this.counter -= value;
  }

  Reset(): void {
    this.counter = 10;
  }
}
