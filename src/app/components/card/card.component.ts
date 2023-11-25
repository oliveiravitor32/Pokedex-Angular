import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData = {
    name: 'Searching...',
    id: 0,
    height: 0,
    weight: 0,
    sprites: {
      front_default:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg',
    },
    types: [],
    specieData: {
      flavor_text_entries: [
        { flavor_text: '', language: { name: '', url: '' } },
      ],
    },
  };
  animationClass: string = '';

  constructor(private service: PokemonService) {
    this.service.search.subscribe((searchedPokemon: string) => {
      this.getPokemon(searchedPokemon);
    });
  }
  ngOnInit() {}

  getPokemon(searchPokemon: string) {
    this.animationClass = 'onAnimation';
    setTimeout(() => {
      this.animationClass = '';
    }, 1200);
    this.service.getPokemon(searchPokemon).subscribe({
      next: (res: PokemonData) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          height: res.height,
          weight: res.weight,
          sprites: res.sprites,
          types: res.types,
          specieData: {
            flavor_text_entries: [
              { flavor_text: '', language: { name: '', url: '' } },
            ],
          },
        };
        this.getFlavorText(this.pokemon.id);
      },
    });
  }

  getFlavorText(id: number) {
    this.service.getFlavorText(id).subscribe({
      next: (res) => {
        this.pokemon.specieData.flavor_text_entries = res.flavor_text_entries;
      },
    });
  }
}
