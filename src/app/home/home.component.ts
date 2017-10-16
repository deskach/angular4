import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private numObsSubscriptions: Subscription;
  private customObsSubscriptions: Subscription;

  constructor() {
  }

  ngOnDestroy() {
    this.numObsSubscriptions.unsubscribe();
    this.customObsSubscriptions.unsubscribe();
  }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);

    this.numObsSubscriptions = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('an error');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.next('3rd package');
      }, 7000);
    });

    this.customObsSubscriptions = myObservable.subscribe(
      (data: String) => console.log(data),
      (error: String) => console.log(error),
      () => console.log('Completed'),
    );
  }

}
