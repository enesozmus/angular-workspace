/** 🔴 Angular Routing
 * Routing, kullanıcının single-page bir uygulamada gördüklerini değiştirmenize yardımcı olur.
 * Single-page bir uygulamada, yeni bir sayfa almak için sunucuya gitmek yerine, belirli component'lere
 karşılık gelen ekran bölümlerini göstererek veya gizleyerek kullanıcının gördüklerini değiştirirsiniz.
 * Angular URL'i izleyerek ve manipüle ederek farklı URL'ler için farklı component'leri render edebilir.
 * 
 * Bir view'dan diğerine gezinmeyi (the navigation) yönetmek için Angular Router'ı kullanırsınız.
 * Angular Router, bir tarayıcı URL'ini görünümü değiştirme talimatı olarak yorumlayarak gezinmeyi etkinleştirir.
 */

/** 🔴 Defining a Basic Route
 * Bir route oluşturmanın üç temel yapı taşı vardır.

    1-) 🔵 İlgili rotalarınız için bir Routes[] array'i ayarlayın.

        import { Routes } from '@angular/router';
        export const routes: Routes = [];
    
    2-) 🔵 İlgili rotalarınızı Routes[] array'inde tanımlayın.

        Bu array'deki her route, iki property içeren bir JavaScript nesnesidir.
        İlk property olan path, rota için URL yolunu tanımlar.
        İkinci property olan component, Angular'ın karşılık gelen yol için kullanması gereken component'i tanımlar.
        
        /users → UsersComponent
        /shop → ShopComponent

            const routes: Routes = [
                { path: 'first-component', component: FirstComponent },
                { path: 'second-component', component: SecondComponent },
            ];

    3-) 🔵 Tanımladığını bu routes[] array'ini app.config.ts'e import edin ve provideRouter() fonksiyonuna ekleyin.

            export const appConfig: ApplicationConfig = {
                providers: [provideRouter(routes)]
            };

    4-) 🔵 İlgili rotalarınızı uygulamanıza ekleyin.

        Bunu yapabilmek için de AppComponent import[] array'ine RouterLink, RouterLinkActive, ve RouterOutlet'i import edin.
        Daha sonra, component şablonunuzu <router-outlet> içerecek şekilde güncelleyin.

            <h1>Angular Router App</h1>
            <nav>
                <ul>
                    <li>
                        <a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">
                            First Component
                        </a>
                    </li>
                    <li>
                        <a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">
                            Second Component
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- The routed views render in the <router-outlet>-->
            <router-outlet></router-outlet>
 */
