import { Component } from '@angular/core';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../state/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
} from '../../state/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count = this.store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
