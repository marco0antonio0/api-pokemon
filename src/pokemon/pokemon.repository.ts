import { Pokemon } from './pokemon.entity';
import { pokemons } from '../data/pokemons.data';

export class PokemonRepository {
  private pokemons: Pokemon[] = pokemons;

  findAll(): Pokemon[] {
    return this.pokemons;
  }

  findById(id: number): Pokemon | undefined {
    return this.pokemons.find(p => p.id === id);
  }

  create(pokemon: Pokemon): Pokemon {
    pokemon.id = this.pokemons.length + 1;
    this.pokemons.push(pokemon);
    return pokemon;
  }
}
