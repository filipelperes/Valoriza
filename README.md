# NLW Valoriza

## Regras

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ x ] Não é permitido cadastrar tag sem nome

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ x ] Não é permitido um usuário cadastrar um elogio para si

  [ x ] Não é permitido cadastrar elogios para usuários inválidos

  [ x ] O usuário precisa estar autenticado na aplicação

<details>

   <summary>Anotações da aula</summary>

   ### Routes Types
   | Type          | Description                                  |
   | :-----------: | :------------------------------------------: |
   | **GET**       | Buscar uma informação                        |
   | **POST**      | Inserir (criar) uma informação               |
   | **PUT**       | Alterar uma informação enviada por post      |
   | **DELETE**    | Remover um dado                              |
   | **PATCH**     | Alterar uma informação especifica            |

   ### Params Types
   | Type                  | Description                                                          |
   | :-------------------: | :------------------------------------------------------------------: |
   | **Route Params**      | https://localhost:3000/produtos/7438974927                           |
   | **Query Params**      | https://localhost:3000/produtos?name=teclado&description=tecladobom& |
   | **Body Params**       | ```{ "name": "teclado", "description": "teclado bom" }```            |

</details>
