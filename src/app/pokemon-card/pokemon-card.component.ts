import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../model/pokemon.model';
import { CommonModule } from '@angular/common';
import { TYPE_COLORS } from '../../model/pokemon-type-colors';

@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;

  @Output() openDetail = new EventEmitter<Pokemon>();

  readonly typeColor = TYPE_COLORS;

  onOpenDetails() {
    this.openDetail.emit(this.pokemon);
  }

}
