import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  // Databinding - String Interpolation
  serverID = 'AC12G';
  serverStatus = 'offline';

  getServerStatus() {
    return 'online';
  }

  // Databinding - Property Binding
}
