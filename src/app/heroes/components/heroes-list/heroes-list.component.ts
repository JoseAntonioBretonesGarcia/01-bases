import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  public heroesName: string[] = ['Spiderman', 'Ironman', 'Hulk'];

  public lastHeroRemoved: string = '';

  removeLastHero(): void {
    const heroRemoved = this.heroesName.pop();
    this.lastHeroRemoved = heroRemoved === undefined ? '' : heroRemoved;
  }
}
