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
 * Örneğin, bir API sunan bir hava durumu sensörünü ele alalım. Sensöre belirli bir mesaj iletildiğinde, mevcut hava koşullarını algılayacak ve bir hava durumu raporuyla yanıt verecektir. Sensörü etkinleştiren mesaj bir API çağrısıdır ve hava durumu raporu bir API yanıtıdır. Bir hava durumu tahmin uygulaması, coğrafi bir alandan hava durumu verileri toplayarak bir dizi hava durumu sensörü API'yıyla entegre olabilir.
 * Örneğin, 'Stripe' işletmeler için ödeme işleme hizmeti sağlayan bir şirkettir ve geliştiricilerin bu hizmeti sistemlerine entegre etmelerini sağlayan sağlam bir API sunar. Geliştiriciler, Stripe'ın API'sini kullanarak uygulamalarına ihtiyaç duyduklarında ödeme işleme veya abonelik yönetimi ekleyebilir ve her hizmet için raporlar toplayabilirler.
 * Yukarıda sözü edilen böyle bir bağlantının, iletişimin veya arayüzün nasıl kullanılabileceğini açıklayan bir belge veya standarda 'API spesifikasyonu' denir.
 */