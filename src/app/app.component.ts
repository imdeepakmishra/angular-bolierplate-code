import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from './state/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-state-ngrx';

  count: Observable<number>;
  constructor(private counterStore: Store<AppState>) {
    this.count = counterStore.select(selectCount);
  }
}
