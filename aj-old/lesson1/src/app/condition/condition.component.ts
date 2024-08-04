import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrl: './condition.component.css'
})
export class ConditionComponent {
  isHappy = true;

  constructor() {
    setTimeout(() => {
      this.isHappy = false;
    }, 3000);
  }

  getColor() {
    return this.isHappy? 'green': 'red';
  }

}
