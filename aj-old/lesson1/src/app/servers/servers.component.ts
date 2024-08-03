import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  serverName = '';
  allowNewServer = false;
  serverCreationStatus = 'No Server was created'

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
