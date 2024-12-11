/** 🔴 FormsModule
 * Formların yönetimini Angular'ın almasına olanak sağlar.
 * Template-driven formlar için gerekli provider'ları ve directive'leri export eder ve bunları bu modülü
 import eden NgModules tarafından içe aktarılmaya hazır hale getirir.
 */

/** 🔴 Form
 * FormGroupDirective ve NgForm directive'leri tarafından uygulanan (implemented by) bir interface'dir.
 * FormsModule ve ReactiveFormsModule tarafından kullanılır.
 */

/** 🔴 NgForm
 * Üst düzey bir FormGroup instance'ı oluşturur ve bunu ilgili bütün form değerlerini ve doğrulama durumlarını
 izleyebilmek için bir forma bağlar.
 * FormsModule'u import ettiğiniz anda, bu directive tüm <form> tag'lerinde varsayılan olarak etkin hale gelir.
 * İsteğe bağlı olarak ngForm directive'ini 'ngForm' kullanarak yerel bir şablon değişkenine aktarabilirsiniz.
 * Bu sayede ilgili formun Angular tarafından oluşturulan JavaScript nesnesine ulaşabilirsiniz.

    <form (ngSubmit)="onSubmit(myForm)" #myForm="ngForm">
 */

/** 🔴 FormControl
 * FormControl, FormGroup, FormArray ve FormRecord ile birlikte Angular'da formları tanımlamak için kullanılan
 dört temel yapı taşından biridir.
 * FormControl, ilgili Angular formundaki tek bir input field'ını temsil eder.

   <input type="text" id="name" name="name"/>

   let name = new FormControl('');

 * Bir developer olarak, metin kutusundaki mevcut değeri bilmek istersiniz.
 * Ayrıca ilgili değerin geçerli olup olmadığını da bilmek istersiniz.
 * Ayrıca ilgili değerin kullanıcı tarafından değiştirilip (dirty) değiştirilmediğini (unchanged) de bilmek isteyebilirsiniz.
 * FormControl, ilgili input element'lerinin için tüm bu bilgileri kapsayan bir nesnedir.
 * Her input field'ı için bu class'ın ayrı bir instance'ı oluşturulur.
 * Bu instance'lar ilgili field'ın mevcut değerini ve touched, untouched, dirty, pristine, valid, invalid olup olmadıklarının bilgisini sağlarlar.
 */

/** 🔴 FormGroup
 * FormGroup, FormControl, FormArray ve FormRecord ile birlikte Angular'da formları tanımlamak için kullanılan
 dört temel yapı taşından biridir.
 * Bir form birden fazla input field'ına dolayısıyla da 'control' grubuna sahip olabilir.
 * FormGroup, 'FormControl' class'ının bir koleksiyonudur. 
 * FormGroup class'ı bir 'control' grubunu temsil eder; FormControl instance'larının değerini ve geçerlilik durumunu izler.
 
   <input type="text" id="name" name="name"/>
   <input type="text" id="country" name="country" >
   <input type="text" id="city" name="city" >

   let address= new FormGroup({
      name : new FormControl(""),
      country : new FormControl(""),
      city : new FormControl(""),
   })
 */

/** 🔴 FormArray
 * FormArray, FormControl, FormGroup ve FormRecord ile birlikte Angular'da formları tanımlamak için kullanılan
 dört temel yapı taşından biridir.
 * FormArray, FormControl'lerinin bir array'idir[].
 * FormGroup'ta her FormControl, anahtar olarak control adı olan bir property'dir. 
 * FormArray'de ise FormControl'lerinin bir array'i vardır.
 * Ayrıca FormControl'leri run-time'da dinamik olarak eklememize olanak tanır.
 
   contactForm = new FormGroup( {
      name: new FormControl(''),
      country : new FormControl(""),
      cities:new FormArray([
         new FormControl('Mumbai'),
         new FormControl('Delhi')
      ])
   });.
 */

/** 🔴 FormRecord
 * FormRecord da FormControl'ün bir koleksiyonudur.
 * FormGroup'a çok benzerdir, ancak FormControl'leri run-time'da dinamik olarak eklememize olanak tanır.
 * FormRecord'da control'ler FormRecord'un bir property'si haline gelir.
 Her bir control key-value çifti olarak temsil edilirken, FormArray'de control'ler bir array'in parçası haline gelir.

   cities!: FormRecord<FormControl<string | null>>;
   this.cities.addControl('mumbai', new FormControl(''));
 */
