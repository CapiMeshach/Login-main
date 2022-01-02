import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  set(flag: boolean) {
    this.subject.next(flag);
  }

  get(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
