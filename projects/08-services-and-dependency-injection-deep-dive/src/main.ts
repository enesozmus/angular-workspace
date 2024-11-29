import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { TasksService } from './app/services/tasks.service';

// 🟡 Angular tarafından oluşturulacak ilk kod paketine dahil edilmesine neden olur.
// platformBrowserDynamic([{ provide: TasksService }])  // → remove @Injectable({providedIn: 'root',})
platformBrowserDynamic()
   .bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true,
   })
   .catch(err => console.error(err));
