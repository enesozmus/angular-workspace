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

/** 🔴 Route
 * Tek bir rotayı tanımlayan bir yapılandırma nesnesi.
 * Tek tek bir routes[] isimli array'de tanımlanırlar.
 * Router, bu nesnede tanımlanan yapılandırma seçeneklerini kullanarak, belirli bir URL'in
 bölümlerini her rotaya göre eşleştirmeye çalışır.

    interface Route {
        title?: string | Type<Resolve<string>> | ResolveFn<string> | undefined;
        path?: string | undefined;
        pathMatch?: "prefix" | "full" | undefined;
        component?: Type<any> | undefined;
        redirectTo?: string | RedirectFunction | undefined;
        children?: Routes | undefined;
        ...
        ...
        ...
    }
 */

/** 🔴 Route Order
 * Rotaların sırası önemlidir çünkü Router rotaları eşleştirirken "first-match wins" stratejisini kullanır.
 * Bu nedenle daha spesifik rotalar daha az spesifik rotalara nazaran listenin daha yukarısına yerleştirilmelidir.
 * Önce statik bir yola sahip rotaları listeleyin, ardından varsayılan rotayla eşleşen boş bir yol rotası ekleyin.
 * Joker rota en son gelir!
 * Temel bir kural olarak, her zaman en spesifikten en az spesifike doğru sıralamayı deneyin.
 */

/** 🔴 Setting up wildcard routes
 * İyi işleyen bir uygulama, (a well-functioning application) kullanıcılar uygulamanızın var olmayan
 bir bölümüne gitmeye çalıştığında bunu zarif bir şekilde ele almalıdır.
 * Bu işlevi uygulamanıza eklemek için bir joker rotası ayarlarsınız. (a wildcard route)
 * Angular router'ı, istenen URL herhangi bir rotayla eşleşmediğinde bu rotayı seçer.
 * İki yıldız işareti, **, Angular'a bu rota tanımının bir joker rota olduğunu belirtir.
 * Component property'si için, uygulamanızdaki herhangi bir component'i tanımlayabilirsiniz. Yaygın seçenekler
 arasında, kullanıcılarınıza 404 sayfası göstermek için tanımlayabileceğiniz uygulamaya özgü bir PageNotFoundComponent
 veya uygulamanızın ana component'ine bir yönlendirme bulunur.

    { path: '**', component: <component-name> }
    { path: '**', component: PageNotFoundComponent }
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

/** 🔴 Getting Route Information
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

 * 🔴🔵 withComponentInputBinding()
 * Router durumundan gelen bilgilerin, Route yapılandırmalarındaki component input'larına doğrudan bağlanmasını sağlar.
    
    . query parameters
    . path and matrix parameters
    . static route data
    . data from resolvers


 * 🔴🔵🔵 ActivatedRoute 🔵🔵🔴
 * Angular uygulamalarında, navigation, farklı view'lar ve component'ler arasında kolayca hareket etmeye gezinmeye
 yardımcı olan temel bir özelliktir.
 * ActivatedRoute class'ı bu gezinme sürecinde önemli bir rol oynar ve rota parametreleri, sorgu parametreleri ve
 diğer rotaya özgü meta veriler dahil olmak üzere geçerli rota hakkında değerli bilgiler sağlar.
 
 * ActivatedRoute, '@angular/router' tarafından sağlanan bir service'tir ve Şu anda yüklenen component'le ilişkili 
 mevcut-aktif-etkin rotayı temsil eder.
 * Kullanıcı farklı bir rotaya gittiğinde, Angular RouterModule geçerli rotanın bilgilerini içeren ActivatedRoute
 instance'ını günceller.

    . Accessing the URL
    . Accessing Route Parameters → For example, in the URL /users/:id, id is a route parameter.
    . Accessing Query Parameters → For example, in the URL /search?q=angular, q is a query parameter.
    . Accessing URL Fragments
    . Accessing Route Data
    . Observing Route Changes

 * ActivatedRoute'u service'ini kullanabilmek için onu constructor üzerinden veya inject mekanizması
 üzerinden ilgili component class'ına enjekte etmemiz gerekir.
 * ActivatedRoute, Angular'daki '@angular/router'ın bir parçasıdır.

        params: Observable
        paramMap: Observable
        queryParams: Observable
        queryParamMap: Observable
        fragment: Observable
        snapshot: ActivatedRouteSnapshot
        data: Observable
        url: Observable
        outlet: string
        title: Observable
        component: Type | null
        root: ActivatedRoute
        parent: ActivatedRoute | null
        firstChild: ActivatedRoute | null
        children: ActivatedRoute[]
        pathFromRoot: ActivatedRoute[]

 * 🟦🟦 paramMap & params
 * paramMap ve params, abone olunduğunda rota ile ilişkili rota parametrelerini döndüren observable ögelerdir.
 * paramMap observable'ı kendisine abone olunduğunda (subscribe) rota parametresini bir paramMap nesnesi olarak döndürür.
 * paramMap nesnesi, ilgili rotanın rota parametrelerinin bir haritasıdır.
 * Belirli bir rotayı okumak için get() fonksiyonunu veya tüm rotaları okumak için getAll() fonksiyonunu kullanabilirsiniz.
 
 * params observable'ı, rota parametresini bir params koleksiyonu olarak döndürür. Adına göre dizinlenmiş bir rota parametreleri koleksiyonudur.
 * * For example, in the URL /users/:id, 'id' is a route parameter.

        this.activatedRoute.paramMap.subscribe((data) => {
            this.id1 = data.get('id');
            this.product = this.productService.getProduct(this.id1);
        });

        this.activatedRoute.params.subscribe((data) => {
            this.id2 = data['id'];
        });
 
        const subscription = this.activatedRoute.paramMap.subscribe({
            next: (paramMap) => {
                this.userName = this.usersService
                                            .users
                                                .find((u) => u.id === paramMap.get('userId'))?.name || '';
            },
        });

 * 🟦🟦
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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

/** 🔴 Accessing Parent Route Data From Inside Nested Routes
 * TasksComponent
 * ApplicationConfig
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

/** 🔴 Programmatic Navigation | Router
 * Router → View'lar arasında navigation ve URL düzenleme yetenekleri sağlayan bir service.
 * Angular'ın Router class'ında programatik navigation sağlayan iki fonksiyon mevcuttur.
 
    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>; 
    navigateByUrl(url: string | UrlTree, extras?: NavigationBehaviorOptions): Promise<boolean>;


    this.router.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true,
    });

    router.navigate(['team', 33, 'user', 11], {relativeTo: route});
    router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});

    router.navigateByUrl("/team/33/user/11");
    router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
 */

/** 🔴 pathMatch
 * * /users/james/articles?from=134#section
 * Öncelikle sorgu parametrelerinin (?from=134) ve fragment'ların (#section) path-matching'de
 herhangi bir rol oynamadığını belirtelim. Sadece temel URL (/users/james/articles) önemlidir.
 * Angular temel URL'i segmentlere ayırır. (users, james ve articles)
 * Router yapılandırması, tek bir kök düğümü (root node) olan bir ağaç yapısıdır. (a tree structure)
 * Her Route nesnesi, children düğümlere sahip olabilen bir düğümdür; bu children düğümler de başka
 children düğümlere sahip olabilir veya leaf düğümler olabilir.
 * Router'ın amacı, kök düğümden başlayarak URL'in tüm (!!!) segmentleriyle tam olarak eşleşen bir rota
 yapılandırma dalı bulmaktır. Bu çok önemlidir!
 * Angular, tüm URL ile eşleşebilecek bir route configuration branch bulamazsa - ne daha fazla ne de daha az -
 hiçbir şey oluşturmayacaktır.
 * Hedef URL'iniz /a/b/c ise Router yalnızca /a/b veya /a/b/c/d ile eşleşebiliyorsa, o zaman eşleşme olmaz ve
 uygulama hiçbir şey oluşturmaz.
 * Bu varsayılan davranıştır.

 * * pathMatch
    → path-matching stratejisi, 'prefix' veya 'full' olabilir. 
    → Varsayılan 'prefix'tir.
    → Varsayılan olarak, Router, URL elementlerini soldan kontrol ederek URL'in belirli bir yolla eşleşip
    eşleşmediğini kontrol eder ve bir yapılandırma eşleşmesi olduğunda durur.
        → 🔵 'prefix' stratejisi, Router'ın tüm yapılandırma ağacı üzerinde yineleme yapması ve URL tamamen eşleşene kadar
        onu hedef URL segmentine göre segment segment eşleştirmeye çalışması anlamına gelir.
        → 🔵 'full' stratejisi, ilgili route nesnesine ait children: [] Routes nesnesinin görmezden gelinmesini sağlar.
        Eğer bütün segmentleri kapsayan direkt tam bir uyum yoksa ayrıca gidip child rotalarına bakmaz. 
        (Ignore my children and only match me.)
            - Note: redirectTo'lu rotalar, herhangi birinin pathMatch: full kullanmak isteyeceği tek yer olurdu.
            - Note: An empty path (path: '') will match any segment, so not only /, but also /welcome.
            - Note: path: '**', pathMatch: 'full' olsun veya olmasın kesinlikle her şeyle eşleşecektir.
            - Note: Empty path (path: '') rotalarını yönlendirirken 'full' stratejisi kullanmak önemlidir.

            /users/james/articles
                    → 🔵 'prefix' → bir path: 'users' bulursa, james ve articles'ı eşleştirebilmek için child rotalarına girer ve bakar.
                    → 🔵 'full'   → bir path: 'users' bulursa, users !== /users/james/articles eşitliği olmadığı için
                    child rotalar da zaten es geçileceği için kod bu satırı atlar.
 */

/** 🔴 Setting up redirects
 * 'Nihayetinde bir URL döndüren redirectTo property'sine sahip herhangi bir rota, varsayılan davranışa göre
 hedef URL ile eşleştirilecektir. Buradaki tek fark, yönlendirmenin bir segment eşleştiği anda uygulanmasıdır.
 * Bir yönlendirme rotası varsayılan olarak 'prefix' eşleşme-stratejisini kullanıyorsa, kısmi bir eşleşmenin
 bir yönlendirmeye neden olmak için yeterli olduğu anlamına gelir.

 * * /users/james/articles

    🔵
    const routes: Routes = [
        {
            path: 'not-found',
            component: NotFoundComponent,
        },
        {
            path: 'users',
            redirectTo: 'not-found',
        },
        {
            path: 'users/:userID',
            children: [
            {
                path: 'comments',
                component: UserCommentsComponent,
            },
            {
                path: 'articles',
                component: UserArticlesComponent,
            },
            ],
        },
    ];

    1. 'not-found' !== 'users' - skip it. ❌
    2. 'users' === 'users' - we have a match.
       This match has a redirectTo: 'not-found', which is applied immediately.
       The target URL changes to not-found.
       The router begins matching again and finds a match for not-found right away.
       The application renders NotFoundComponent.

    🔵
    const routes: Routes = [
        {
            path: 'not-found',
            component: NotFoundComponent,
        },
        {
            path: 'users',
            pathMatch: 'full',
            redirectTo: 'not-found',
        },
        {
            path: 'users/:userID',
            children: [
            {
                path: 'comments',
                component: UserCommentsComponent,
            },
            {
                path: 'articles',
                component: UserArticlesComponent,
            },
            ],
        },
    ];

    1. 'not-found' !== 'users' - skip it. ❌
    2. 'users' === 'users' good but no ❌
        users would match the first segment of the URL, but the route configuration requires a 'full' match, thus skip it.
    3. 'users' === 'users' good and 
       'users/:userID' === 'users/james' ✅
       'users/:userID' matches users/james. 'articles' is still not matched but this route has children[].
       We find a match for 'articles' in the children[].
       The whole URL is now matched and the application renders UserArticlesComponent.

    🔵
    const routes: Routes = [
       { path: 'welcome', component: WelcomeComponent },
       { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        or
       { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
       { path: '**', component: NotFoundComponent }
    ];
    
    Uygulama localhost:4200'de ayağa kalktığında varsayılan sayfa 'welcome' olacaktır.
    Çünkü ilk eşleşme empty path (path: '') ile olacaktır o da 'welcome' yönlendirmesi yapacaktır.

    → pathMatch:'full' → Bu durumda açılan ilk sayfa WelcomeComponent olacaktır.
        /asdafa durumunda ise NotFoundComponent olacaktır.
    → pathMatch:'prefix' → Bu durumda artık her URL tanımlanan path:'' ile eşleşeceğinden bu asla joker rotaya ulaşmayacaktır.

 * 🎈
 * Kullanıcıları rollerine, üyelik veya abonelik durumlarına göre uygulamanızın farklı bölümlerine yönlendirmek isteyebilirsiniz.
 * Bir redirect ayarlamak için, yönlendirme yapmak istediğiniz path ile bir rotayı, yönlendirme yapmak
 istediğiniz component'i ve router'a URL'i nasıl eşleştireceğini söyleyen bir pathMatch değerini içeren
 bir rota yapılandırın.

    { path: 'users', redirectTo: 'not-found' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'users', pathMatch: 'full', redirectTo: 'not-found' },

 * 🔴 redirectTo 
        → Path eşleştiğinde yönlendirilecek (redirect) bir URL döndüren bir URL veya fonksiyon.
        → URL eğik çizgiyle (/) başlıyorsa veya işlev bir UrlTree döndürüyorsa 'absolute',
        aksi takdirde path URL'ine bağıntılı. (relative)    

 * 🎈 Bazen bir redirect basit, statik bir redirect olmaz.
 * RedirectTo property'si ayrıca bir string veya UrlTree döndüren daha karmaşık mantığa sahip bir fonksiyon olabilir.

    const routes: Routes = [
        { path: "first-component", component: FirstComponent },
        {
            path: "old-user-page",
            redirectTo: ({ queryParams }) => {
            const errorHandler = inject(ErrorHandler);
            const userIdParam = queryParams['userId'];
            if (userIdParam !== undefined) {
                return `/user/${userIdParam}`;
            } else {
                errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
                return `/not-found`;
            }
            },
        },
        { path: "user/:userId", component: OtherComponent },
    ];
 */
