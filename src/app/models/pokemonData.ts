import { SpecieData } from './specieData';

export interface PokemonData {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  specieData: SpecieData;
}
