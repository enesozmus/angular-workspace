/** 🔴 Forms in Angular
 * Formlarla kullanıcı girdisini işlemek, birçok yaygın uygulamanın temel taşıdır.
 * Uygulamalar, kullanıcıların oturum açmasını, bir profili güncellemesini, hassas bilgileri girmesini
 * ...ve diğer birçok veri girişi görevini gerçekleştirmesini sağlamak için formları kullanır.
 * Angular, formlar aracılığıyla kullanıcı girdisini işlemek için iki farklı yaklaşım sunar: reactive ve template-driven.
 * Her ikisi de view'dan kullanıcı girdi olaylarını yakalar, kullanıcı girdisini doğrular, güncellenecek bir form modeli
 * ...ve veri modeli oluşturur ve değişiklikleri izlemek için bir yol sağlar.
 */

/** 🔴 Choosing an approach → reactive & template-driven
 * Reactive formlar ve template-driven formlar form verilerini farklı şekilde işler ve yönetir.
 * Her yaklaşım farklı avantajlar sunar.
 */

/** 🟣 Reactive forms
 * İlgili formun nesne modeline doğrudan, açık (explicit) erişim sağlamanıza olanak sağlar.
 * Template-driven formlarla karşılaştırıldığında, daha sağlamdırlar: daha ölçeklenebilir,
 * ...yeniden kullanılabilir ve test edilebilirdirler.
 * Formlar uygulamanızın önemli bir parçasıysa veya uygulamanızı oluşturmak için reactive kalıplar kullanıyorsanız, reactive formları kullanın.

    . Form modelinin kurulumu explicit'tir ve component class'larında oluşturulur.
    . Veri modeli structured ve immutable'dır.
    . Veri akışı eş-zamanlıdır.
    . Form doğrulaması fonksiyonlar tarafından sağlanır.
 */

/** 🔵 Template-driven forms
 * İlgili formun nesne modelini oluşturmak ve düzenlemek için şablondaki directive'lere güvenmeniz gerekir.
 * Bir uygulamaya e-posta listesi, kayıt formu gibi basit bir form eklemek için kullanışlıdırlar.
 * Bir uygulamaya eklemek kolaydır, ancak reactive formlar kadar iyi ölçeklenmezler.
 * Yalnızca HTML template'inde yönetilebilen çok temel form gereksinimleriniz ve mantığınız varsa, template-driven formlar iyi uyum sağlayabilir.
 
    . Form modelinin kurulumu implicit'tir ve directive'ler tarafından oluşturulur.
    . Veri modeli unstructured ve mutable'dır.
    . Veri akışı eş-zamansızdır.
    . Form doğrulaması directive'ler tarafından sağlanır.
 */

/** 🔴 Scalability
 * Formlar uygulamanızın merkezi bir parçasıysa, ölçeklenebilirlik çok önemlidir.
 * Form modellerini ilgili component'ler arasında 'yeniden kullanabilmek' kritik öneme sahiptir.
 * Reactive formlar, template-driven formlardan daha ölçeklenebilirdir.
 * Reactive formlar, altta yatan form API'ına doğrudan erişim sağlarlar ve view ile veri modeli arasında
 * ...eş-zamanlı veri akışı kullanırlar, bu da büyük ölçekli formlar oluşturmayı kolaylaştırır.
 * Template-driven formlar basit senaryolara odaklanır ve yeniden kullanılabilir değildir.
 */

/** 🔴 Setting up the form model
 * Hem reactive hem de template-driven formlar, kullanıcıların etkileşimde bulunduğu form giriş öğeleri
 * ...ile component modelinizdeki form verileri arasındaki değer değişikliklerini izler.
 * Bu iki yaklaşım, temel yapı taşlarını paylaşırlar ancak ortak form-control instance'larını oluşturma
 * ...ve yönetme şeklinizde farklılık gösterir.

 * Hem reactive hem de template-driven formlar aşağıdaki temel class'lar üzerine kuruludur:

    . FormControl → Tekil form denetiminin değerini ve doğrulama durumunu izler.
    . FormGroup   → Bir form denetimleri koleksiyonu için aynı değerleri ve durumu izler.
    . FormArray   → Bir dizi form denetimi için aynı değerleri ve durumu izler.
    . ControlValueAccessor → Angular FormControl instance'ları ile built-in DOM element'leri arasında bir köprü oluşturur.
 */

/** 🟣 Setup in reactive forms
 * Reactive formlarda, form modelini doğrudan component class'ında tanımlarsınız.
 * [formControl] directive'i, dahili bir değer erişimcisi kullanarak,
 * ...açıkça oluşturulan FormControl instance'ını view'daki belirli bir form elementine bağlar.
 
    @Component({
        selector: 'app-reactive-favorite-color',
        template: `
            Favorite Color: <input type="text" [formControl]="favoriteColorControl">
        `,
        standalone: false,
    })
    export class FavoriteColorComponent {
        favoriteColorControl = new FormControl('');
    }
 */

/** 🔵 Setup in template-driven forms
 * Template-driven formlarda, form modeli açık (explicit) olmaktan ziyade örtüktür (implicit).
 * NgModel directive'i, belirli bir form elementi için bir FormControl instance'ı oluşturur ve yönetir.
 
    @Component({
        selector: 'app-template-favorite-color',
        template: `
            Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
        `,
        standalone: false,
    })
    export class FavoriteColorComponent {
        favoriteColor = '';
    }
 */
