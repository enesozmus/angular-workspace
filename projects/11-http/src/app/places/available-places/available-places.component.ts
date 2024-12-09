import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../../models/place.model';
import { PlacesService } from '../../services/places.service';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  imports: [PlacesComponent, PlacesContainerComponent],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  // ⭐ Showing a Loading Fallback
  isFetching = signal(false);
  // 🔻 Handling request failure
  error = signal('');

  // private httpClient = inject(HttpClient);
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // ⭐ Showing a Loading Fallback
    this.isFetching.set(true);
    // 🔵 Fetching JSON data
    const subscription = this.placesService.loadAvailablePlaces().subscribe({
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
    // const subscription = this.httpClient
    //   .get<{ places: Place[] }>('http://localhost:3000/places')
    //   .pipe(
    //     map((response) => response.places),
    //     // optional
    //     catchError((error: Error) => {
    //       console.log(error);
    //       return throwError(
    //         () =>
    //           new Error(
    //             'Something went wrong fetching the available places. Please try again later.'
    //           )
    //       );
    //     })
    //   )
    //   .subscribe({
    //     next: (places) => this.places.set(places),
    //     // 🔻 Handling request failure
    //     error: (error: Error) => {
    //       console.log(error);
    //       // this.error.set(error.message);
    //       this.error.set(
    //         'Something went wrong fetching the available places. Please try again later.'
    //       );
    //     },
    //     complete: () => {
    //       // ⭐ Showing a Loading Fallback
    //       this.isFetching.set(false);
    //     },
    //   });

    // // 🔵 Gerçek response'u incelemek ve tüm respone erişmek için, observe seçeneğini 'response' olarak ayarlayın
    // const subscription2 = this.httpClient
    //   .get<{ places: Place[] }>('http://localhost:3000/places', {
    //     observe: 'response',
    //   })
    //   .subscribe((response) => {
    //     console.log(response);
    //     console.log('Body:', response.body);
    //     console.log('Headers:', response.headers);
    //     console.log('Response status:', response.status);
    //     console.log('Places:', response.body?.places);
    //   });

    // // 🔵 HttpClient, yanıt gövdesine veya yanıt nesnesine ek olarak, istek yaşam döngüsündeki (the request lifecycle) belirli anlara karşılık gelen bir ham olay akışı (a stream of raw events) da döndürebilir
    // // → Bu event'ler, isteğin gönderildiği zamanı, yanıt başlığının döndürüldüğü zamanı ve gövdenin tamamlandığı zamanı içerir.
    // // → Bu event'ler, ayrıca büyük istek veya yanıt gövdeleri için yükleme ve indirme durumunu bildiren ilerleme olaylarını da içerebilir.
    // // → → HttpEventType.Sent             → The request has been dispatched to the server
    // // → → HttpEventType.UploadProgress   → An HttpUploadProgressEvent reporting progress on uploading the request body
    // // → → HttpEventType.ResponseHeader   → The head of the response has been received, including status and headers
    // // → → HttpEventType.DownloadProgress	→ An HttpDownloadProgressEvent reporting progress on downloading the response body
    // // → → HttpEventType.Response	        → The entire response has been received, including the response body
    // // → → HttpEventType.User	            → A custom event from an Http interceptor.
    // // → 🔺 Bu durumda daha önce olduğu gibi sadece bir kez değil, birden çok kez tetiklenecektir.
    // const subscription3 = this.httpClient
    //   .get<{ places: Place[] }>('http://localhost:3000/places', {
    //     observe: 'events',
    //     reportProgress: true,
    //   })
    //   .subscribe((event) => {
    //     console.log('⭐', event);

    //     // switch (event.type) {
    //     //   case HttpEventType.UploadProgress:
    //     //     console.log(
    //     //       'Uploaded ' + event.loaded + ' out of ' + event.total + ' bytes'
    //     //     );
    //     //     break;
    //     //   case HttpEventType.Response:
    //     //     console.log('Finished uploading!');
    //     //     break;
    //     // }
    //   });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      // subscription2.unsubscribe();
      // subscription3.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placesService
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (resData) => console.log(resData),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
    // this.httpClient
    //   .put('http://localhost:3000/user-places', {
    //     placeId: selectedPlace.id,
    //   })
    //   .subscribe({
    //     next: (resData) => console.log(resData),
    //   });
  }
}
