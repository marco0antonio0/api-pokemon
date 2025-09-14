# API Pokémon

API REST desenvolvida com NestJS para consulta, filtro, paginação e cadastro dos principais pokémons da franquia. Ideal para estudos, demonstrações e integrações com sistemas que precisam de dados Pokémon de forma simples e rápida.

## Recursos
- Listagem de pokémons com filtros por nome e tipo
- Paginação customizável
- Busca por ID
- Cadastro de novos pokémons
- Documentação interativa via Swagger

## Como rodar o projeto

```bash
npm install
npm run start
```
Acesse: http://localhost:3000/api/docs para visualizar e testar todos os endpoints via Swagger.

## Endpoints principais

- `GET /api/pokemon` — Lista pokémons com filtros e paginação
  - Parâmetros de query:
    - `type`: filtra por tipo
    - `name`: filtra por nome
    - `page`: número da página
    - `limit`: itens por página
  - Resposta:
    ```json
    {
      "items": [ ...pokémons... ],
      "totalItems": 87,
      "totalItemsPage": 10,
      "totalPages": 9,
      "page": 1,
      "next": true
    }
    ```

- `GET /api/pokemon/:id` — Busca pokémon por ID
- `POST /api/pokemon` — Adiciona novo pokémon

## Documentação Swagger

Acesse `/api/docs` para testar e visualizar todos os endpoints, parâmetros e exemplos de resposta.

## Estrutura do projeto

- `src/pokemon/pokemon.controller.ts` — Rotas e documentação
- `src/pokemon/pokemon.service.ts` — Lógica de negócio
- `src/pokemon/pokemon.repository.ts` — Acesso aos dados
- `src/data/pokemons.data.ts` — Lista dos pokémons

## Tecnologias
- NestJS
- Swagger
- TypeScript

---
