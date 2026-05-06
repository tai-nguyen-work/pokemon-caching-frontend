import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from '../../service/pokemon.service';
import { of } from 'rxjs';
import { Pokemon } from '../../model/pokemon.model';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj('PokemonService', ['getPokemons']);
    pokemonServiceSpy.getPokemons.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [PokemonListComponent],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemons on init', () => {
    expect(pokemonServiceSpy.getPokemons).toHaveBeenCalledWith(0, 20);
  });

  it('should open and close pokemon details', () => {
    const mockPokemon = { 
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      abilities: ['overgrow'],
      stats: [{ baseStat: 45, name: 'hp' }],
      sprites: { frontDefault: 'url', otherHomeFrontShiny: 'url', otherShowdownFrontDefault: 'url' }
    } as Pokemon;
    
    component.openDetail(mockPokemon);
    expect(component.selectedPokemon).toEqual(mockPokemon);

    component.closeDetail();
    expect(component.selectedPokemon).toBeNull();
  });
});