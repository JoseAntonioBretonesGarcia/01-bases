import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class DbzMainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  deleteCharacter(uuid: string): void {
    this.dbzService.deleteCharacterById(uuid);
  }

  createNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
