import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.component.css'],
})
export class HeaderComponent {
  constructor(private service: PokemonService) {}

  searchedPokemon: string = '';

  onSubmit() {
    this.service.searchPokemon(this.searchedPokemon);
  }
}
