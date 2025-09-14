import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly service: PokemonService) {}

  @Get()
  @ApiOperation({ summary: 'Lista pokémons com filtro e paginação' })
  @ApiQuery({ name: 'type', required: false, description: 'Filtrar por tipo' })
  @ApiQuery({ name: 'name', required: false, description: 'Filtrar por nome' })
  @ApiQuery({ name: 'page', required: false, description: 'Número da página', example: 1 })
  @ApiQuery({ name: 'limit', required: false, description: 'Itens por página', example: 10 })
  @ApiResponse({ status: 200, description: 'Lista de pokémons com paginação e metadados', schema: {
    type: 'object',
    properties: {
      items: { type: 'array', items: { $ref: '#/components/schemas/Pokemon' } },
      totalItems: { type: 'number' },
      totalItemsPage: { type: 'number' },
      totalPages: { type: 'number' },
      page: { type: 'number' },
      next: { type: 'boolean' }
    }
  }})
  findAll(
    @Query('type') type?: string,
    @Query('name') name?: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ): {
    items: Pokemon[];
    totalItems: number;
    totalItemsPage: number;
    totalPages: number;
    page: number;
    next: boolean;
  } {
    let pokemons = this.service.findAll();
    if (type) {
      pokemons = pokemons.filter(p => p.type.toLowerCase().includes(type.toLowerCase()));
    }
    if (name) {
      pokemons = pokemons.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }
    const totalItems = pokemons.length;
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const totalPages = totalItems === 0 ? 0 : Math.ceil(totalItems / limitNum);
    const start = (pageNum - 1) * limitNum;
    const end = start + limitNum;
    const items = pokemons.slice(start, end);
    const totalItemsPage = items.length;
    const next = pageNum < totalPages;
    return {
      items,
      totalItems,
      totalItemsPage,
      totalPages,
      page: pageNum,
      next
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca pokémon por ID' })
  @ApiResponse({ status: 200, description: 'Pokémon encontrado', type: Pokemon })
  @ApiResponse({ status: 404, description: 'Pokémon não encontrado' })
  findById(@Param('id') id: string): Pokemon | undefined {
    return this.service.findById(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo pokémon' })
  @ApiBody({ type: Pokemon })
  @ApiResponse({ status: 201, description: 'Pokémon criado', type: Pokemon })
  create(@Body() pokemon: Pokemon): Pokemon {
    return this.service.create(pokemon);
  }
}
