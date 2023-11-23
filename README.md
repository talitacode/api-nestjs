# API com NestJS

API RESTful de lista de compras.

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> </p>

## Installation

- Criar banco de dados no PostgreSQL shopping_list

- Criar o arquivo .env na raiz do projeto, com as configurações do seu banco PostgreSQL

## Example

```html
SERVER_PORT=3000
MODE=DEV
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=
DB_DATABASE=shopping_list
DB_SYNCHRONIZE=true 
```

```bash
$ npm install
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

