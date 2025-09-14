import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';
import { PokemonRepository } from './pokemon.repository';

@Injectable()
export class PokemonService {
  private repository = new PokemonRepository();

  findAll(): Pokemon[] {
    return this.repository.findAll();
  }

  findById(id: number): Pokemon | undefined {
    return this.repository.findById(id);
  }

  create(pokemon: Pokemon): Pokemon {
    return this.repository.create(pokemon);
  }
}
