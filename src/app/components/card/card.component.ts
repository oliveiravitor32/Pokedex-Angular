import { Component } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  pokemon: PokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      name: '',
      id: 0,
      height: 0,
      weight: 0,
      sprites: { front_default: '' },
      types: [],
      flavor_text_entries: [],
    };

    this.getPokemon('squirtle');
  }

  getPokemon(searchPokemon: string) {
    this.service.getPokemon(searchPokemon).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          height: res.height,
          weight: res.weight,
          sprites: res.sprites,
          types: res.types,
          flavor_text_entries: [],
        };
        this.getFlavorText(res.id);
      },
    });
  }

  getFlavorText(id: number) {
    this.service.getFlavorText(id).subscribe({
      next: (res) => {
        this.pokemon.flavor_text_entries = res.flavor_text_entries;
      },
    });
  }
}
