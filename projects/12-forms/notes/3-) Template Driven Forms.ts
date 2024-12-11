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







 * 
 * 
 * 
 * 
 * 
 * 
 * Form'daki control elementleri input validation'ları olan data property'lerine bağldır.
 * Template-driven formlar, ilgili template'de değişiklikler yapıldıkça component'deki veri modelini güncellemek (ya da tersi) için two-way data binding kullanır.
 * Template-driven formlar, Angular template'inizde form-specific directive'ler kullanmanıza olanak tanır.
 * Template-driven formlar küçük veya daha basit formlar için harika bir seçimdir.
 * - Reactive formlar ise daha ölçeklenebilir ve karmaşık formlar için uygundur.
 * - Reactive formlar, form oluşturmak için model odaklı bir yaklaşım sağlar.

   . Input-control değerlerini okumak ve yazmak için two-way data binding'ler oluşturmak üzere ngModel'i kullanın
   . Control'lerin durumunu izleyen özel CSS class'ları kullanarak görsel geri bildirimler sağlayın
   . Doğrulama hatalarını kullanıcılara gösterin ve form durumuna göre form denetimlerinden koşullu olarak girdiye izin verin
   . Template reference variable'ları kullanarak HTML elemetleri arasında bilgi paylaşın

 
   . NgModel	   → Ekli form elementindeki değer değişikliklerini veri modelindeki değişikliklerle uzlaştırır ve kullanıcı girdisine giriş doğrulaması ve hata işleme ile yanıt vermenizi sağlar.
   . NgForm		   → En üst düzey bir FormGroup instance'ı oluşturur ve bunu toplanmış form değerini ve doğrulama durumunu izlemek için bir <form> element'ine bağlar.
                  FormsModule'u içe aktardığınız anda, bu directive varsayılan olarak tüm <form> etiketlerinde etkin hale gelir.
                  Özel bir selector eklemenize gerek yoktur.
   . NgModelGroup	→ Bir FormGroup instance'ını oluşturur ve bir DOM element'ine bağlar.
 */