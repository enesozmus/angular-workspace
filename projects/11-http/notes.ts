/** 🔴 Communicating
 * 
    Çevrimiçi dünya, çeşitli sistemlerin sahne arkasında sorunsuz bir şekilde birbirleriyle etkileşime girerek size işlevsel bir kullanıcı deneyimi sağlamasıyla
  büyük ölçüde birbirine bağlıdır. Bunu fark etmeyebiliriz, ancak günümüzde yüzeysel olarak basit görünen birçok hafife aldığımız eylem, genellikle birden fazla
  bileşenin uyum içinde çalışmasını gerektirir.
  
    Ötesinde dünya teknoloji pazarını göz önüne aldığımızda cihazlar, işletim sistemleri, programlama dilleri, uygulama geliştirme platformları, veri tabanları
  oldukça farklılık ve çeşitlilik arz ediyor. Dolayısıyla bir yazılım ürününün platform bağımsız çalışabilmesi ve bütün bir pazara ulaşabilmesi için içindeki
  uygulamaların bir noktada aynı dili konuşabiliyor olmaları gerekiyor. Servis verilerimizi tarayıcılara ve tüm bu modern cihaz uygulamalarına hızlı, güvenli
  ve basit bir şekilde sunmak istiyorsak, tüm tarayıcılarla ve tüm bu modern cihazlarla uyumlu protokellere ve bir hizmet, arayüz sağlayan API'lara sahip olmalıyız.
  Bunlar olmadan, modern internette keyfini çıkardığımız zengin etkileşimli deneyimlere sahip olamazdık.
  
    Dolayısıyla API'lar bu ortak dile, iletişim kurabilme yeteneğine her platform tarafından desteklenecek notasyonlar şeklinde protokoller ile hizmet eden servislerdir,
  iletişim araçlarıdır.
 */

/** 🔴 API | Application Programming Interface
 * 
    API, bilgisayarlar veya farklı bilgisayar programları arasındaki bir bağlantı, bir iletişim aracı, bir yazılım arayüzüdür. Bir bilgisayarı bir kişiye bağlayan bir kullanıcı
  arayüzünün (UI) aksine API, bilgisayarları, yazılım parçalarını birbirine bağlar. Kabaca bir yazılım sisteminin makineden makineye iletişim için kullanılan "perde altı" bir
  bölümüdür.
  
    API'lar, yazılımları birbirine geçen lego tuğlaları gibi birbirlerine bağlarlar. İlgili yazılım hizmetleri API'lar aracılığıyla bir araya getirilerek yeni bir yazılım ürünü
  oluşturulabilir. Bu birleştirme sürecine entegrasyon denir.

    API'lar, (çevrim içi veya çevrim dışı) veri aktarımı için kullanılan, JSON veya XML gibi farklı formatlarda çıktılar üretebilen, bir yazılım uygulamasının dil ve platform
  bağımsız diğer bir yazılım uygulamasıyla etkileşimde girebilmesini yani veri paylaşabilmesini sağlayan, bir dizi tanım ve protokollerden oluşan yazılım araçlarıdır.
  
    API'lerin bir amacı, bir sistemin nasıl çalıştığına dair dahili ayrıntıları gizlemek, yalnızca bir programcının yararlı bulacağı parçaları açığa çıkarmak ve dahili ayrıntılar
  daha sonra değişse bile bunları tutarlı tutmaktır. İyi tasarlanmış bir API, yalnızca yazılım veya yazılım geliştiricilerinin ihtiyaç duyduğu nesneleri veya eylemleri açığa
  çıkarır. Hiçbir işe yaramayan ayrıntıları gizler. Bu soyutlama programlamayı basitleştirir.

 
 * Web sayfaları insanların birbirleriyle iletişim kurmasını ve işbirliği yapmasını sağlar. API'lar da programların birbirleriyle iletişim kurmasını ve işbirliği yapmasını sağlar.
 * Örneğin, bir API sunan bir hava durumu sensörünü ele alalım. Sensöre belirli bir mesaj iletildiğinde, mevcut hava koşullarını algılayacak ve bir hava durumu raporuyla yanıt verecektir.
  ...Sensörü etkinleştiren mesaj bir API çağrısıdır ve hava durumu raporu bir API yanıtıdır. Bir hava durumu tahmin uygulaması, coğrafi bir alandan hava durumu verileri toplayarak bir dizi
  ...hava durumu sensörü API'yıyla entegre olabilir.
 * Örneğin, 'Stripe' işletmeler için ödeme işleme hizmeti sağlayan bir şirkettir ve geliştiricilerin bu hizmeti sistemlerine entegre etmelerini sağlayan sağlam bir API sunar.
  ...Geliştiriciler, Stripe'ın API'sini kullanarak uygulamalarına ihtiyaç duyduklarında ödeme işleme veya abonelik yönetimi ekleyebilir ve her hizmet için raporlar toplayabilirler.
 * Yukarıda sözü edilen böyle bir bağlantının, iletişimin veya arayüzün nasıl kullanılabileceğini açıklayan bir belge veya standarda 'API spesifikasyonu' denir.
 */

/** 🔴 APIs | Web Services
 * 
    API'lar ve bir API türü olan Web servisler nihayetinde bir iletişim aracı olarak hizmet ederler. Her ikisi de internet üzerinden uygulamalar arasında veri transferini
  kolaylaştırabilse de aynı şey değildirler ve bu terimler her durumda birbirinin yerine kullanılmamalıdır.
  
    Temel fark, web servislerinin bir API türü olmasıdır: Tüm web servisleri birer API'dır ancak tüm API'lar web servisi değildir.

    Arasındaki diğer belirgin farklara göz atalım:
      1. Web servisleri iletişim kurmak için internet ağını kullanır. Ancak API'ların internet ağı kullanması gerekmez. Elbette kullanabilirler, ancak çevrimdışı da çalışabilirler.
        Örneğin, aynı bilgisayardaki iki uygulama API'ler aracılığıyla entegre olabilir. Ağ olmadan da veri aktarabilirsiniz.
      2. Bir API'ın her zaman web tabanlı olması gerekmez.
      3. Web servisleri, SOAP'ın belirli bir yapı gerektirmesi gibi katı iletişim kurallarını takip ederken, API'lar çok daha fazla esnekliğe sahiptirler.
 */

/** 🔴 Web Service
 * 
    Bir web servisi, iki ayrı makinenin iki farklı sistemin bir ağ üzerinden birbirleriyle iletişim kurmasının standartlaştırılmış bir yoludur. Bir web servisi de
  bir API olmasından mütevellit doğrudan insanlara değil, diğer programlara, yazılımlara uygulamalara yöneliktir. Web servisinin amacı da bir yazılım tarafından
  tüketilmektir.
  
    Sıfırdan tamamen yeni bir haritalama programı yazabilir veya Google Maps'in sağladığı bir web servisini kullanabilir ona adresi gönderebilir ve programınızda
  görüntüleyebileceğiniz konumun grafiksel bir haritasını döndürebilirsiniz.
  
    Herhangi bir web sitesi için tarayıcınızı kullandığınızda karşılaştığınız şey HTML sayfalarıdır. Bunlar, çok sayıda verinin bir araya sıkıştırılmış olabileceği
  insan tarafından okunabilen sayfalardır, çünkü bu insanlar için mantıklıdır. Şimdi başka birinin bu verilerin bir kısmını kullanmak istediğini düşünün. Sayfanızı
  indirebilir ve istedikleri verileri elde etmek için tüm "gürültüyü" filtrelemeye başlayabilirler, ancak çoğu web sitesi, verilerin tüm öğeler için aynı yere
  yerleştirileceğinden %100 emin olacak şekilde oluşturulmamıştır, bu nedenle hantal olmasının yanı sıra güvenilmez hale de gelir. Bir web servisi, bir web
  sitesinin web sitenizden veri okumak, güncellemek ve/veya silmek isteyenlere sunmayı seçtiği bir şeydir. Buna verilerinize bir "arka kapı" diyebilirsiniz.
  Tüm web servisleri için ortak olan şey, sitenin sunduğu web sayfalarının makine tarafından okunabilir eşdeğeri olmalarıdır. Bu, verileri kullanmak isteyen
  diğerlerinin ayrıştırılması ve kullanılması kolay belirli verileri geri almak için bir istek gönderebileceği anlamına gelir.
 */

/** 🔴 Connecting Angular Apps to a Backend
 * Çoğu front-end uygulamasının, veri indirmek veya yüklemek ve diğer back-end hizmetlerine erişmek için HTTP protokolü üzerinden bir sunucuyla iletişim kurması gerekir.
 * Angular, Angular uygulamaları için bir istemci HTTP API'si olan 'HttpClient' service class'ı sağlar.
 */

/** 🔴 HttpClient
 * Bu service class'ı, HTTP isteklerini gerçekleştirmek için ilgili fonksiyonlarla birlikte enjekte edilebilir bir class olarak kullanılabilir.

 * 🔻 Providing HttpClient through dependency injection

  → provideHttpClient()
  → Angular'ın `HttpClient` service'inin enjeksiyon için kullanılabilir olacak şekilde yapılandırır.

      🔵
      export const appConfig: ApplicationConfig = {
        providers: [
          provideHttpClient(),
        ]
      };

      🔵
      @NgModule({
        providers: [
          provideHttpClient(),
        ],
      })
      export class AppModule {}

      🔵
      import { HttpClientModule } from '@angular/common/http';
      @NgModule({
        imports: [
          BrowserModule,
          // import HttpClientModule after BrowserModule.
          HttpClientModule,
        ],
        ...
      })
      export class AppModule {}

      1.
        constructor(private httpClient: HttpClient)
      2.
        private httpClient = inject(HttpClient);
 */

/** 🔴 Making HTTP requests
 * HttpClient, hem veri yüklemek hem de sunucuda mutasyonlar uygulamak amacıyla isteklerde bulunabilmek
  ...için kullanılan farklı HTTP fiillerine karşılık gelen metotlara sahiptir.

 * Her bir metot, kendisine abone olunduğunda isteği gönderen ve ardından sunucu yanıt verdiğinde sonuçları yayan bir RxJS Observable döndürür.
 * Tüm HttpClient metotları için, metot, metotun döndürdüğü Observable'a abone olana kadar yani ilgili metot üzerinden subscribe() fonksiyonunu
  ...çağırana kadar ilgili HTTP request'ine başlamaz.
 * HttpClient metotlarından döndürülen tüm Observable'lar, tasarım gereği soğuktur. (cold)
 * HttpClient, RxJS'nin "cold observable" olarak adlandırdığı şeyleri üretir, yani Observable abone olana kadar gerçek bir istek gerçekleşmez.
 * Aynı Observable'a birden çok kez abone olmak ise birden çok back-end isteğini tetikler. Her abonelik bağımsızdır.
 * İlgili response döndüğünde, HttpClient'tan gelen Observable'lar genellikle tamamlanır.
 * Otomatik tamamlama nedeniyle, HttpClient abonelikleri temizlenmezse genellikle bellek sızıntısı riski yoktur.
 * Ancak, herhangi bir asenkron işlemde olduğu gibi, bunları kullanan component yok edildiğinde abonelikleri temizlemenizi şiddetle öneririz.

 * <T> → Çıktıyı tüketmeyi daha kolay ve daha belirgin hale getirmek için HttpClient request'ini response nesnesinin türünü bildirecek şekilde yapılandırabilirsiniz.
 * 
 * 
 
 * GET metoduna geçirilen bir 'options nesnesi' aracılığıyla, isteğin çeşitli özellikleri ve döndürülen yanıt türü ayarlanabilir.

 * Varsayılan olarak, HttpClient sunucuların JSON verisi döndüreceğini varsayar.
 * JSON olmayan bir API ile etkileşim kurarken, HttpClient'a hangi yanıt türünün bekleneceğini ve istekte bulunurken döndürüleceğini söyleyebilirsiniz.
 * Bu, 'responseType' seçeneğiyle yapılır.

    http.get('/images/dog.jpg', {responseType: 'arraybuffer'}).subscribe(buffer => {
      console.log('The image is ' + buffer.byteLength + ' bytes large');
    });
 */

/** 🔵 Making a GET request
 * Bir back-end'den veri almak genellikle HttpClient.get() yöntemini kullanarak bir GET isteği yapmayı gerektirir.
 * Bu metot iki argüman alır:
      1. verinin nereden alınacağını ifade eden string türünde bir endpoint URL'i
      2. ilgili request'i yapılandırabilmek için object türünde optinal bir options nesnesi
 
    get<T>(url: string, options?: {...}): : Observable<HttpResponse<T>>
    get(url: string, options?: {...}): : Observable<HttpResponse<Object>>

        options: {
          headers?: HttpHeaders | {[header: string]: string | string[]},
          observe?: 'body' | 'events' | 'response',
          params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
          reportProgress?: boolean,
          responseType?: 'arraybuffer'|'blob'|'json'|'text',
          withCredentials?: boolean,
        }

    🔵
      places = signal<Place[] | undefined>(undefined);

      private httpClient = inject(HttpClient);
      private destroyRef = inject(DestroyRef);

      ngOnInit(): void {
        const subscription = this.httpClient
          .get<{ places: Place[] }>('http://localhost:3000/places')
          .pipe(map((response) => response.places))
          .subscribe((places) => this.places.set(places));

        this.destroyRef.onDestroy(() => {
          subscription.unsubscribe();
        });
      }
 */

/** 🔵 Handling request failure
 * Bir HTTP request'inin başarısız olmasının iki yolu vardır:
    1. Bir ağ veya bağlantı hatası, ilgili request'in back-end sunucusuna ulaşmasını engelleyebilir.
    2. Back-end ilgili request'i alabilir ancak işleme koyamayabilir ve bir hata yanıtı döndürebilir.

 * HttpClient, Observable'ın hata kanalından döndürdüğü bir HttpErrorResponse'da her iki tür hatayı da yakalar.
 * RxJS library, hata işleme için yararlı olabilecek çeşitli operatörler sunar.
 * Bazen ağ kesintileri gibi geçici hatalar bir isteğin beklenmedik şekilde başarısız olmasına neden olabilir ve isteği yeniden denemek, isteğin başarılı olmasını sağlar.
 * RxJS, belirli koşullar altında başarısız olan bir Observable'a otomatik olarak yeniden abone olan çeşitli yeniden deneme operatörleri de sağlar.
 */

/** 🔵 Making a POST request
 * Sunucu tarafındaki değişimleri gerçekleştiren server API'ları genellikle yeni durumu veya yapılacak değişikliği belirten bir request body'siyle POST request'leri yapmayı gerektirir.
 * HttpClient.post() metotu get()'e benzer şekilde davranır bir kaynak URL'i, 'options' parametresi ve ek olarak 'options' parametresinden önce bir body argümanı kabul eder:
 * url, body, options
 
 * İlgili request body'sine birçok farklı türde değer sağlanabilir ve HttpClient bunları buna göre serileştirir:
 
 * İlgili request'i gerçekten ateşlemek için Observable'ları mutasyona uğratmak amacıyla .subscribe() kullanmayı unutmayın.
 * You must call subscribe() or nothing happens!

        http.post<Config>('/api/config', newConfig).subscribe(config => {
          console.log('Updated config:', config);
        });
 */