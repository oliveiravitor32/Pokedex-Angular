import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';
import { SpecieData } from '../models/specieData';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api: string = 'https://pokeapi.co/api/v2/';

  search = new EventEmitter();

  constructor(private http: HttpClient) {}

  getPokemon(searchedPokemon: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.api + 'pokemon/' + searchedPokemon);
  }

  getFlavorText(id: number): Observable<SpecieData> {
    return this.http.get<SpecieData>(this.api + 'pokemon-species/' + id);
  }

  searchPokemon(searchedPokemon: string) {
    this.search.emit(searchedPokemon);
  }
}
