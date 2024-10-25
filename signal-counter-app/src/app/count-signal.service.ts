import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountSignalService {
  private counter = signal(0)
  readonly count:Signal<number> = this.counter.asReadonly()

  inc(){

    this.counter.update(value => value+1)
  }
}
