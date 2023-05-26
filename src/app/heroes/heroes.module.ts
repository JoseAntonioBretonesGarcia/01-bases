import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

@NgModule({
  exports: [HeroComponent, HeroesListComponent],
  declarations: [HeroComponent, HeroesListComponent],
})
export class HeroesModule {}
