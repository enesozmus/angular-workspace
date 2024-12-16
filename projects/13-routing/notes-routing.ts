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

/** 🔴 Route Order
 * Rotaların sırası önemlidir çünkü Router rotaları eşleştirirken "first-match wins" stratejisini kullanır.
 * Bu nedenle daha spesifik rotalar daha az spesifik rotalara nazaran listenin daha yukarısına yerleştirilmelidir.
 * Önce statik bir yola sahip rotaları listeleyin, ardından varsayılan rotayla eşleşen boş bir yol rotası ekleyin.
 * Joker rota en son gelir!
 * Temel bir kural olarak, her zaman en spesifikten en az spesifike doğru sıralamayı deneyin.
 */

/** 🔴 RouterLink (directive)
 * Angular'da RouterLink, farklı bir rotaya bildirimsel olarak gitmek için bir directive'dir.
 * İlgili template'deki bir elemente uygulandığında, o elementi tanımlanan rotaya bir gezinme başlatan 
 bir bağlantı haline getirir.
 * Bir bağlantıda absolute veya relative path'ler kullanabilir, sorgu parametreleri ayarlayabilir,
 parametrelerin nasıl işleneceğini kontrol edebilir ve gezinme durumlarının geçmişini tutabilirsiniz.

    🔵
    /               → router, rotayı uygulamanın kökünden arar.
    ./              → router, aktif rotanın alt segmentlerine bakar.
    ../             → router, rota ağacında bir seviye yukarı çıkar.

    🔵
    href="", sayfalarda gezinmek için HTML tarafından sağlanan ve tıklandığında sayfayı yeniden yükleyen temel attribute'tür.
    routerLink="" ise 'sayfayı yeniden yüklemeden' farklı component'lere gitmek için Angular tarafından sağlanan directive'dir.
    İkisi arasındaki en büyük fark, href'in geçerli sayfanın durumunu öldürmesi, routerLink'in ise sayfanın durumunu kaybetmemesidir.
 
    🔵
    Bunu tüm directive'lerde görebilirsiniz:
        Köşeli parantez[] kullandığınızda, bindable property (a variable) geçirdiğiniz anlamına gelir.
        [routerLink]="routerLinkVariable"
        public routerLinkVariable = "/home";
        updateRouterLinkVariable(){ this.routerLinkVariable = '/about'; }
    Köşeli parantezleri[] routerLink için kullanmanın diğer bir sebebi de gezindiğiniz bağlantıya dinamik sorgu parametreleri geçirebilmenizdir:
        [routerLink]="[routerLinkVariable]"[queryParams]="{unit: dynamicQueryParameter}"
        private dynamicQueryParameter = '129'; public routerLinkVariable = "/home"; 

    🔵
    routerLink="/users"
        <your-domain>/users

    routerLink="/users/bob
        <your-domain>/users/bob

    [routerLink]="['/', 'users', 'bob']"
        <your-domain>/users/bob

    [routerLink]="['/', 'users', {details: true}, 'bob']"
    [routerLink]="['/', 'users', {display: 'verbose'}, 'bob']"
        <your-domain>/users;display=verbose/bob

    [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education"
        /user/bob?debug=true#education

    [routerLink]="['/', 'users', { outlets: { side: ['bob'] } }]"
    [routerLink]="['/', 'users', { outlets: { side: ['bob'], footer: ['sharks'] } }]"

    [{ path: 'user/:name', component: UserCmp }]    
        <a routerLink="/user/bob">link to user component</a>

    ['/team', teamId, 'user', userName, {details: true}]
        /team/11/user/bob;details=true
 */

/** 🔴 RouterLinkActive (directive)
 * Bir elementin bağlantı yolunun şu anda etkin olup olmadığını izler ve bağlantılı yol etkin olduğunda 
 ilgili elemente eklenecek bir veya daha fazla CSS sınıfı belirtmenize olanak tanır.

    routerLink="/tasks" routerLinkActive="selected"
    routerLink="/user/bob" routerLinkActive="active-link"
    routerLink="/user/bob" routerLinkActive="class1 class2"
    routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']"
    routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}"

    [routerLink]="['/home']" [routerLinkActive]="['is-active']"
    [routerLink]="['/home']" [routerLinkActive]="'is-active'"

    { path: 'users/:userId', component: UserTasksComponent, }
        [routerLink]="['/users', user().id]" routerLinkActive="selected"
 */

/** 🔴 Getting route information
 * Genellikle, bir kullanıcı uygulamanızda gezinirken, bir component'ten diğerine bilgi aktarmak istersiniz.
 * Bu tür bilgileri uygulama component'lerinize geçirebilmek için bir rota kullanabilirsiniz.
 * Bunu yapabilmek için, provideRouter ile withComponentInputBinding()'i ya da 
 RouterModule.forRoot'un bindToComponentInputs'unu kullanabilirsiniz.

 * Angular 16'nın yayınlanmasıyla birlikte, developer'lar geçerli rota hakkında bilgi edinme konusunda daha basit bir yaklaşıma sahip oldu.
 * Bu yeni özellik, @Input aracılığıyla geçerli rota parametrelerine erişmenizi sağlayarak, gereken kalıp kod miktarını önemli ölçüde azaltır.
 * Daha önce, geçerli rota hakkında bilgi edinmek için, ilgili component'e ActivatedRoute'u eklemeniz ve rota parametrelerini almak için snapshot property'sini kullanmanız gerekiyordu.
 * Yeni yaklaşım bu süreci önemli ölçüde basitleştirir.
 * Şimdi yapmanız gereken tek şey, parametrenin adıyla bir input property'si bildirmektir:

    @Input() id!: string;
    { path: ":id", component: ProfileComponent }
    providers: [provideRouter(routes, withComponentInputBinding())]

    🎈 module-based
    @NgModule({
        declarations: [AppComponent],
        bootstrap: [AppComponent],
        imports: [BrowserModule, RouterModule.forRoot(routes, {
        bindToComponentInputs: true
        })]
    })

 * 🔵 withComponentInputBinding()
 * Router durumundan gelen bilgilerin, Route yapılandırmalarındaki component input'larına doğrudan bağlanmasını sağlar.
    query parameters
    path and matrix parameters
    static route data
    data from resolvers


 * 🔵 ActivatedRoute
 * Bir çıkışta yüklenen bir component'le ilişkili bir rota hakkındaki bilgiye erişim sağlar.
 * RouterState ağacını dolaşmak ve düğümlerden bilgi çıkarmak için kullanılır.
 */

/** 🔴 Nesting Routes
 * Uygulamanız daha karmaşık hale geldikçe, root component'iniz dışındaki bir component'e relative rotalar oluşturmak isteyebilirsiniz.
 * Bu tür nested rotalara child rotalar denir.
 * Bu, AppComponent'deki <router-outlet> elementine ek olarak uygulamanıza ikinci bir <router-outlet> eklediğiniz anlamına gelir.
 * Bir child rota, hem bir path'e hem de bir component'e ihtiyaç duyması bakımından diğer rotalar gibidir.
 * Tek fark, child rotaları ana parent rota içindeki bir child array'ine yerleştirmenizdir.

    const routes: Routes = [
     {
        path: 'first-component', // → main routes
        component: FirstComponent, // this is the component with the <router-outlet> in the template
        // → child routes
        children: [
        {
            path: 'child-a', // child route path
            component: ChildAComponent, // child route component that the router renders
        },
        {
            path: 'child-b',
            component: ChildBComponent, // another child route component that the router renders
        },
        ],
     },
    ];
 */

/** 🔴 Absolute and Relative Route Paths
 * Angular geliştirmede, rotalar arasında gezinmeyi yönetmek temel bir beceridir.
 * Geliştiricilerin sıklıkla karşılaştığı iki kritik kavram relative ve absolute path'lerdir.
 * Bu path'ler bir uygulamanın farklı bölümlerinin nasıl birbirine bağlandığını ve gezindiğini belirler.
 * Bir Angular uygulamasında rotalar genellikle çeşitli component'lerle tanımlanır.
 
    <header>
        <a routerLink="home">Home</a>
        <a routerLink="about">About</a>
        <a routerLink="contact">Contact</a>
        <a routerLink="courses">Courses</a>
    </header>
 
 * 🔵 Absolute Paths
 * Angular'daki absolute path'ler, yoldan önce önde gelen eğik çizgi (/) kullanılarak tanımlanır.
 * Bu gösterim, Angular'a path'in absolute olduğunu, yani uygulamanın kök URL'ine doğrudan ekleneceğini söyler.
	
    <a routerLink="/about">About</a>
	<your-domain>/about
	localhost:4200/about

 * 🔵 Relative Paths
 * Relative path'ler geçerli URL segmentine bağıntılı path'ler tanımlamanıza olanak tanır.
 * Relative path'ler eğik çizgi (/) kullanmazlar.
 * İçinde bulunulan şu andaki mevcut-etkin-aktif rotaya eklenirler ve nihai URL'leri, uygulama içinde tıklandığı yere bağlıdır.
 * İlgili linkin 'about' sayfasında olduğu varsayarsak, ilgili linke tıkladığımızda bizi localhost:4200/about/home adresine yönlendirir.

	<a routerLink="home">Home</a>
	localhost:4200/about/home

 * Home component'inden 'kurslar' sayfasına giden bir butonumuz olduğunu varsayalım.
 * Mevcut-etkin rotamız → localhost:4200/home
 * Gidilecek rotayı hem absolute hem de relative bir path olarak tanımlayabiliriz.
 
 * → absolute
 
    <button routerLink="/courses">Go to Courses Page</button>
    localhost:4200/courses

* → relative

    <button routerLink="courses">Go to Courses Page</button>
    localhost:4200/home/courses

 * 🔵 Special Notations
 * Nokta-eğik çizgi (./) relative yolu belirtir.
 * Çift nokta-eğik çizgi (../), rota hiyerarşisinde bir seviye yukarı çıkmayı ifade eder.
 
    <a routerLink="../courses">Courses</a>
    If the current route is 'localhost:4200/home/about', this will change the URL to 'localhost:4200/courses' by removing
    one level (about) and appending courses.
 */