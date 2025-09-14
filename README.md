# API Pokémon
<div style="display: flex; flex-direction: row; gap: 10px; align-items: center; margin-bottom: 20px;">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Serverless-FD5750?style=for-the-badge&logo=serverless&logoColor=white">
</div>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

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
