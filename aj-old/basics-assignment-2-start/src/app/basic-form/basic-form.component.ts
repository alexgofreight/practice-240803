import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent {
  userName = '';
  onSend() {
    console.log(`User: ${this.userName} Send!`);
    this.userName = '';
  }
}
