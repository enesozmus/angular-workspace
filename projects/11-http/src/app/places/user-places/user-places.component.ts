import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../../models/place.model';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  imports: [PlacesContainerComponent, PlacesComponent],
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  // ⭐ Showing a Loading Fallback
  isFetching = signal(false);
  // 🔻 Handling request failure
  error = signal('');

  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // ⭐ Showing a Loading Fallback
    this.isFetching.set(true);
    // 🔵 Fetching JSON data
    const subscription = this.placesService.loadUserPlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
      // 🔻 Handling request failure
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
