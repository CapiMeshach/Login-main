import {
  Directive,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  Input,
  OnDestroy,
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';

@Directive({
  selector: '[CptDebounceClickDirective]',
})
export class CptDebounceClickDirective implements OnInit, OnDestroy {
  @Input() debounceTime = 500;

  @Output() debounceClick = new EventEmitter();

  private clicks = new Subject();

  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe((e) => this.debounceClick.emit(e));
  }

  @HostListener('submit', ['$event'])
  submitEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
