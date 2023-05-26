import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormDBZComponent {
  @Output() onNewCharacterEvent = new EventEmitter<Character>();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacterEvent.emit(this.character);

    this.character = { id: '', name: '', power: 0 };
  }
}
