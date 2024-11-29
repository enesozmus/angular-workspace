import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * 🟡 Angular tarafından oluşturulacak ilk kod paketine dahil edilmesine neden olur.
   
      → remove @Injectable({providedIn: 'root',})
      → platformBrowserDynamic([{ provide: TasksService }])
 */
platformBrowserDynamic()
   .bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true,
   })
   .catch(err => console.error(err));
