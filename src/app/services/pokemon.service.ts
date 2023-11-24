import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemon(searchedPokemon: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.api + 'pokemon/' + searchedPokemon);
  }

  getFlavorText(id: number): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.api + 'pokemon-species/' + id);
  }
}
