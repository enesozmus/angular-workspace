/** 🔴 Building a Reactive Form
 * Reactive formlar, değerleri zamanla değişen form girdilerini işlemek için model-driven bir yaklaşım sağlar.
 * Reactive formlar, belirli bir zaman noktasında bir formun durumunu yönetmek için explicit ve immutable bir yaklaşım kullanır.
 * Form durumundaki her değişiklik, değişiklikler arasında modelin bütünlüğünü koruyan yeni bir durum döndürür.
 * Reactive formlar, form girdilerinin ve değerlerinin eş-zamanlı olarak erişilebilen girdi değerleri akışları olarak sağlandığı
 Observable Stream'lar etrafında oluşturulur.
 * Reactive formlar, veri modeline eş-zamanlı erişim, observable operatörlerle immutability ve Observable Stream'lar aracılığıyla
 değişiklik izleme sağlar.
 
 *
 * 🔵 To use reactive form controls, import 'ReactiveFormsModule'.
 * 🔵 Generate a new component with a FormControl('').
 * 🔵 Register the control in the template
 
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    @Component({
        selector: 'app-name-editor',
        templateUrl: './name-editor.component.html',
        styleUrls: ['./name-editor.component.css'],
        standalone: false,
        })
    export class NameEditorComponent {
        name = new FormControl('');
        * FormControl'ün constructor'ını kullanarak initial ​​değerini ayarlayın, bu durumda bu boş bir string'dir.
        * Component class'ınızda bu control'leri oluşturarak, form girişinin durumunu dinlemek, güncellemek ve
        doğrulamak için anında erişim elde edersiniz.
        * Component class'ınızda bu control'ü oluşturduktan sonra, bunu şablondaki bir form control element'iyle ilişkilendirmelisiniz
        ...
    }

    <label for="name">Name: </label>
    <input id="name" type="text" [formControl]="name">

 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/