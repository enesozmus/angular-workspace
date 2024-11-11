import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  // Databinding - String Interpolation
  serverID = 'AC12G';
  serverStatus = 'offline';

  getServerStatus() {
    return 'online';
  }

  // Databinding - Property Binding
  imgURL = 'https://picsum.photos/200/300';
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
