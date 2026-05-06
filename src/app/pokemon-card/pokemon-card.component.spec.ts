import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { Pokemon } from '../../model/pokemon.model';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = { 
      name: 'pikachu',
      types: ['electric']
    } as Pokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit openDetail event when onOpenDetails is called', () => {
    spyOn(component.openDetail, 'emit');
    component.onOpenDetails();
    expect(component.openDetail.emit).toHaveBeenCalledWith(component.pokemon);
  });
});