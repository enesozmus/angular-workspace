import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css',
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
}
