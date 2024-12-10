import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

// 🔴
// 🔴🔴
// 🔴🔴🔴
function loggingInterceptorBasic(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  console.log('🎈', request.url);
  return next(request);
}

// 🔴
// 🔴🔴
// 🔴🔴🔴
function loggingInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // 🔵 Modifying requests
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING')
  // });
  //return next(req);

  return next(request).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.log('[Incoming Response]');
          console.log(event.status);
          console.log(event.body);
        }
      },
    })
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptorBasic])),
  ],
};
