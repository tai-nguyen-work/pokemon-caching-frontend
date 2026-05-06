import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../model/pokemon.model';
import { TYPE_COLORS } from '../../model/pokemon-type-colors';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  @Input() activePokemon!: Pokemon;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
  
  volumeHigh = '🔊'; 

  get backgroundStyle() {
    if (!this.activePokemon?.types) return {};
    const types = this.activePokemon.types;
    const randomType = types[Math.floor(Math.random() * types.length)];
    return { 'background': TYPE_COLORS[randomType] };
  }

  playCry(url: string) {
    if (url) {
      const audio = new Audio(url);
      audio.play();
    }
  }

  getPokemonImage() {
    return this.activePokemon.sprites.frontDefault ||
           this.activePokemon.sprites.otherHomeFrontShiny ||
           this.activePokemon.sprites.otherShowdownFrontDefault;
  }
}