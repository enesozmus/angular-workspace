/** 🔴 Building a template-driven form
 * Template-driven formlarla çalışabilmek için FormsModule'ü içe aktarmalıyız. (import)
 * FormsModule, template-driven formlarla çalışabilmek için gerekli tüm form directive'lerini ve yapılarını içerir.
 
    1. İlgili formdan elde edilecek değerleri tutacak, formla birlikte çalışacak 
    data modeli (ya da bağımsız propertyler) oluşturulur.
    2. Bir componnet ve template'i üzerinden normal bir HTML formu oluşturulur.
    
 * FormsModule'ü import etmek formların yönetimini Angular'ın almasını sağlar. 
 * 🔵 FormsModule'u import ettiğiniz anda, ngForm directive'i tüm <form> tag'lerinde varsayılan olarak etkin hale gelir
 ve Angular form yönetimini devralır.
 * 🎈 ngForm directive'i üzerinden Angular'ın ilgili formu yönetmek üzere oluşturduğu JavaScript nesnesine ulaşmanın
 yolu ActorFormComponent'inde gösterilmiştir.
 
    <form (ngSubmit)="actorForm" #actorForm="ngForm">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />

        <label for="studio">Studio</label>
        <input type="text" id="studio" name="studio" />

        <label for="skill">Skill</label>
        <select id="skill" name="skill">
            <option *ngFor="let skill of skills" [value]="skill">{{ skill }}</option>
        </select>

        <button type="submit" class="btn">New Actor</button>
    </form>

* ngForm aşağıdakileri yapar:

    1. Kendini <Form> tag'ine bağlar.
    2. En üst düzey bir FormGroup instance'ı oluşturur.
    3. ngModel directive'ine sahip her bir input için bir FormControl instance'ı oluşturur.
    4. Her bir NgModelGroup directive'i için bir FormGroup instance'ı oluşturur.

* 🎈 ngForm instance'ını, anahtar olarak ngForm kullanarak local bir template variable'a aktarabiliriz.
* #actorForm="ngForm"
* Angular'ın ilgili formu yönetmek üzere oluşturduğu JavaScript nesnesine ulaşabilmemize olanak sağlar.
    
    <form (ngSubmit)="actorForm" #actorForm="ngForm">

* 🔵 (ngSubmit)="" & onSubmit(){}
* Angular'ın form yönetimini artık devraldığını söylemiştik.
* İlgili form submit edildiğinde yani kabaca butonuna tıklandığında oluşacak olayı (ngSubmit)="" yayar.
* Yayılan bu olayı component class'ında onSubmit(){} fonksiyonuyla yakalayabilirsiniz.

* 🔵 NgModel
* Formun ötesinde ilgili kullanıcı girdilerine erişmek ve onları yönetmek için ngModel directive'i kullanılır.
* İlgili kullanıcı girdileri ilgili HTML input elementine 'NgModel' directive'inin eklenmesiyle birlikte ngForm directive'i
üzerinden form isimli FormGroup class'ı içerisinde FormControl tipindeki controls object'inde ulaşılabilir ve yönetilebilir hale gelirler.

* 🔵 [(ngModel)]=""
* İlgili syntax ek olarak two-way data binding mekanizması kurar.
* Böylece çift-taraflı olarak kullanıcı girdileri ilgili veri modeliyle senkronize tutulur.

🔵
#nameCtrl           → DOM elementine erişim sağlar
#nameCtrl="ngModel" → Angular tarafından oluşturulan control nesnesine erişim sağlar

🔵
this.form.valueChanges?
this.form().valueChanges?
    → Control'ün değeri her değiştiğinde kullanıcı arayüzünde veya programatik olarak yayımlanan
    control için değer değişikliklerinin çoklu yayın observable'ını döndürür.
*/