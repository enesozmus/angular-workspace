import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './first-rxjs.component.html',
})
export class FirstRxJSComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  
  /**
   * 🟦
   * 🟦🟦
   * 🟦🟦🟦
   */
  ngOnInit(): void {
    /**
     *
     */
    /** 🔴 Observable

         → Observable, RxJS'nin temel türüdür (the core type).
         → Observable, gelecekteki değerlerin (values) veya olayların (events) çağrılabilir (invokable) bir koleksiyonu fikrini temsil eder.
         → Zaman içinde ulaşılabilen bir veri akışı (stream), verilerini yayabilen (emit) bir veri kaynağı (data source) olarak düşünebilirsiniz.
         → Observable'lar, abone olarak çalıştırabildiğimiz (execute) ve onlara abone olduğumuzda (subscribe) çeşitli zaman noktalarında kendi mantığını çalıştırabilme yeteneğine sahip olarak birden fazla değer üretebilen fonksiyonlar gibidirler.
         → Fonksiyonlar ile aralarındaki temel fark çeşitli zaman noktalarında herhangi bir sayıda ve çeşitte değer yayabilmeleridir.
      
         → Observable'lar, kendi başlarına hiçbir şey yapmazlar. İlgili Observable'ları yürütebilmek için (execute) üzerlerinde subscribe() metodunu çağırmamız yani abone olmamız ve bir işleyici (handler-object map) sağlamamız gerekir.
         → Bu şekilde yaydıkları değerlere tepki verebiliriz.

         → Neredeyse her şeyden bir observable oluşturabilirsiniz, ancak RxJS'deki en yaygın kullanım durumu olaylardan (events) oluşur.
            + like an array of values
            + DOM events
            + HTTP requests
            + timers
         
      🟡    
            1. Bir Observable tarafından yayılan verileri tüketebiliriz. (consume).
            2. Yayılan her değer (emitted value) için çalıştırmak istediğimiz bir mantık (some logic) sağlayabiliriz.
            3. Bir şeyler ters giderse bir hata işleme mantığı sağlayabiliriz.
            4. Observable tarafından yayınlanan akışın, veri kümesinin bittiğinden sonlandığından tükendiğinden haberdar olabiliriz.
      */

    /** 🔴 Observable

         class Observable<T> implements Subscribable<T> {
            constructor(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic)
            subscribe(observerOrNext?: Partial<Observer<T>> | ((value: T) => void), error?: (error: any) => void, complete?: () => void): Subscription
            forEach(next: (value: T) => void, promiseCtor?: PromiseConstructorLike): Promise<void>
            pipe(...operations: OperatorFunction<any, any>[]): Observable<any>
         }
      */

    /** 🔴 Core Observable concerns:

         1. Creating Observables
         2. Subscribing to Observables
         3. Executing Observables
         4. Disposing Observable Executions
      */

    /** 🔴 Creating Observables

         → A new Observable can be created by using the 'new Observable<>()' constructor.
         → The Observable constructor takes one argument: the subscribe function(){} which is run when we subscribe to this Observable.
         → The subscribe function(){} is the most important piece to describe the Observable.
         
            constructor(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic)
    
      🔵 The subscribe function

         → İlgili Observable execute edilmek, tüketilmek, dinlenilmek istendiğinde kendisine abone olunması gerekir.
         → Söz konusu amaçlar doğrultusunda ilgili Observable'a abone olunduğunda çağrılan fonksiyondur. 🔵
            → Bu fonksiyona bir 'Subscriber' verilir.
               1. Bu Subscriber'a yayabilmesi için next() fonksiyonu ile yeni değerler atanabilir.
               2. Bu Subscriber'a bir hata durumu oluşturabilmesi için error() fonksiyonu atanabilir.
               3. Bu Subscriber'a ilgili Observable tarafından yayınlanan akışın, veri kümesinin bittiğinden sonlandığından tükendiğinden haberdar edebilmesi (başarılı bir tamamlamayı bildirmek) için complete() fonksiyonu atanabilir. 
      */
    const demo1$ = new Observable<string>();
    const demo2$ = new Observable<string>(function subscribe(subscriber) {});
    // 🟢 The demo3$ that pushes the values (Alice, Ben, David, Jane) immediately synchronously when subscribed.
    const demo3$ = new Observable<string>((subscriber) => {
      // subscriber.next(1);
      subscriber.next('Alice'); // → A value has been pushed to the consumer to be observed.
      subscriber.next('Ben');
      subscriber.next('David');
      subscriber.next('Jane');
      // 🔺🔻 subscriber.error('My Custom Error'); // → The producer has encountered a problem and is notifying the consumer.
      setTimeout(() => {
        subscriber.next('Max'); // happens asynchronously
        subscriber.complete(); // → The producer is notifying the consumer that it is done nexting values, without error, will send no more values, and it will finalize.
      }, 4000);
    });
    /**  🟥 Subscriber
       * 🟥🟥🟥
       * 🟥🟥
       * 🟥
       * Implements 'the Observer interface' and extends 'the Subscription class'.
       * While the Observer is the public API for consuming the values of an Observable, all Observers get converted to a Subscriber, in order to provide Subscription-like capabilities such as unsubscribe.

            class Subscriber<T> extends Subscription implements Observer<T> {
            ...
            ...
            ...
            }

      + Observer, bir Observable'ın değerlerini tüketmek için genel API iken,
      + ...tüm Observer'lar, abonelikten çıkma gibi Abonelik benzeri yetenekler sağlamak için bir Subscriber'a dönüştürülür.
      + Yukarıdaki next(), error() ve complete() fonksiyonları Observer interface'i üzerinden gelirken; unsubscribe(), add() ve remove() gibi fonksiyonlar Subscription class'ı üzerinden gelir.
      */

    /**  🟥 Observer
       * 🟥🟥🟥
       * 🟥🟥
       * 🟥
       * 'An object interface' that defines 'a set of callback functions' a user can use to get notified of any set of Observable notification events.
       * An Observer is a consumer of values delivered by an Observable.
       * Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.
       * Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next(), error(), and complete(). 
       
      * Observer interface'i hem Subscriber class'ının uyguladığı (implement) bir interface hem de Observable class'ının subscribe() fonksiyonunun kabul ettiği argümanın partial düzeyinde bir nesne arayüzüdür.

            interface Observer<T> {
               next: (value: T) => void
               error: (err: any) => void
               complete: () => void
            }

      🟡 Aşağıda tipik bir Observer nesnesinin (object) bir örneği gösterilmektedir

            const observer: Observer<any> = {
               next: (x: any) => console.log('Observer got a next value: ' + x),
               error: (err: any) => console.error('Observer got an error: ' + err),
               complete: () => console.log('Observer got a complete notification'),
            };

         🔵 The Partial Observer
            → Observers in RxJS may also be partial.
            → The Observer object can also be partial and doesn’t require all three callbacks.
            → If you don't provide one of the callbacks, the execution of the Observable will still happen normally.
         
               const observer = {
                  next: x => console.log('Observer got a next value: ' + x),
                  error: err => console.error('Observer got an error: ' + err),
               };

      🟡 Observer nesnesini kullanmak için, bunu bir Observable abonesine sağlayın:

      * To use the Observer, provide it to the subscribe of an Observable:

            observable$.subscribe(observer);

      * When subscribing to an Observable, you may also just provide the next callback as an argument, without being attached to an Observer object,
      * for instance like this:

            observable$.subscribe(x => console.log('Observer got a next value: ' + x));
      */

    /**  🟥 Subscription
       * 🟥🟥🟥
       * 🟥🟥
       * 🟥
       * A Subscription is an object that represents a disposable resource, usually the execution of an Observable.
       * A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription.
       * Subscriptions can also be put together, so that a call to an unsubscribe() of one Subscription may unsubscribe multiple Subscriptions.
       * Subscriptions also have a remove(anotherSubscription) method, in order to undo the addition of a child Subscription.

            subscription.unsubscribe();
            subscription.add(anotherSubscription);
            subscription.remove(anotherSubscription);

            class Subscription implements SubscriptionLike {
               static EMPTY: (() => {...})
               constructor(initialTeardown?: () => void)
               closed: false

               unsubscribe(): void
               add(teardown: TeardownLogic): void
               remove(teardown: Subscription | Unsubscribable | (() => void)): void
            }
      */

    //const subscription = demo3$.subscribe();
    const subscription = demo3$.subscribe({
      // on successful emissions
      next: (name) => console.log(name),
      // on errors
      error: (error) => console.log(error),
      // called once on completion
      complete: () => console.log('complete!'),
    });

    const subscription2 = demo3$.subscribe((name) => console.log(name + ' → 2'));

    // Just call unsubscribe() to cancel the execution.
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      subscription2.unsubscribe();
    });
  }
}
