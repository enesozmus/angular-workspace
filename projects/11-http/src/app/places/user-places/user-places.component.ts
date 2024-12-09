import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../../models/place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

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

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // ⭐ Showing a Loading Fallback
    this.isFetching.set(true);
    // 🔵 Fetching JSON data
    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/user-places')
      .pipe(
        map((response) => response.places),
        // optional
        catchError((error: Error) => {
          console.log(error);
          return throwError(
            () =>
              new Error(
                'Something went wrong fetching your favorite places. Please try again later.'
              )
          );
        })
      )
      .subscribe({
        next: (places) => this.places.set(places),
        // 🔻 Handling request failure
        error: (error: Error) => {
          console.log(error);
          // this.error.set(error.message);
          this.error.set(
            'Something went wrong fetching your favorite places. Please try again later.'
          );
        },
        complete: () => {
          // ⭐ Showing a Loading Fallback
          this.isFetching.set(false);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
