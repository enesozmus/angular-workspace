import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../../models/place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  imports: [PlacesComponent, PlacesContainerComponent],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
})
export class AvailablePlacesComponent {
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
}
