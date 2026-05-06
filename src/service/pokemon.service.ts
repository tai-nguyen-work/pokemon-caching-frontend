import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API_URL = 'http://localhost:8080/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(page: number, size: number): Observable<Pokemon[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Pokemon[]>(this.API_URL, { params });
  }
}