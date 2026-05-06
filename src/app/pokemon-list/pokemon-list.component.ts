import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Pokemon } from '../../model/pokemon.model';
import { PokemonService } from '../../service/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, InfiniteScrollDirective, PokemonCardComponent, PokemonDetailComponent],
  standalone: true,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  page = 0;
  size = 20;
  loading = false;
  hasMore = true;
  selectedPokemon: Pokemon | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadMore();
  }

  onScroll() {
    if (!this.loading && this.hasMore) {
      this.loadMore();
    }
  }

  loadMore() {
    this.loading = true;
    this.pokemonService.getPokemons(this.page, this.size).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.pokemons = [...this.pokemons, ...data];
          this.page++; 
        } else {
          this.hasMore = false; 
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  openDetail(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  closeDetail() {
    this.selectedPokemon = null;
  }
}
