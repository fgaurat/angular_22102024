import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncComponent } from "./inc/inc.component";
import { ShowComponent } from "./show/show.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IncComponent, ShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signal-counter-app';
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  inc() {
    this.count.update((value) => value + 1);
  }

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });

    effect(() => {
      console.log(`Save count is: ${this.count()}`);
      this.saveCountToLocalStorage(this.count())
    });
  }

  // Méthode pour sauvegarder la valeur du compteur dans le localStorage
  saveCountToLocalStorage(value: number) {
    localStorage.setItem('count', value.toString());
  }

  // Méthode pour charger la valeur du compteur depuis le localStorage
  getCountFromLocalStorage(): number {
    const storedCount = localStorage.getItem('count');
    return storedCount !== null ? parseInt(storedCount, 10) : 0; // Retourne 0 si aucune valeur n'est stockée
  }
}
