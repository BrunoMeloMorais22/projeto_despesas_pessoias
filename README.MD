# Sistema de Controle de Despesas

## Sobre o Projeto

O Sistema de Controle de Despesas é uma aplicação web desenvolvida para auxiliar usuários no gerenciamento de gastos pessoais. O sistema permite cadastrar despesas, visualizar os registros em uma tabela e acompanhar os gastos através de gráficos interativos.

O projeto foi desenvolvido com foco em praticar conceitos de desenvolvimento Full Stack, integração com banco de dados e construção de APIs REST.

## Funcionalidades

* Cadastro de despesas
* Listagem de despesas em tabela
* Armazenamento de dados em banco de dados MySQL
* Dashboard com gráfico de gastos por categoria
* API REST utilizando Node.js e Express
* Integração com Prisma ORM

## Tecnologias Utilizadas

### Backend

* Node.js
* Express.js
* Prisma ORM
* MySQL

### Frontend

* HTML5
* CSS3
* JavaScript

### Visualização de Dados

* Chart.js

## Estrutura do Projeto

```text
backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── repositories/
│   └── utils/

public/
├── html/
├── css/
└── js/
```

## Instalação

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o banco de dados

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/controle_despesas"
```

### 4. Executar as migrations

```bash
npx prisma migrate dev
```

### 5. Iniciar o projeto

```bash
npm start
```

O sistema estará disponível em:

```text
http://localhost:3000
```

## Próximas Funcionalidades

* Edição de despesas
* Exclusão de despesas
* Filtros por período
* Relatório mensal
* Evolução dos gastos por mês
* Indicadores financeiros
* Sistema de autenticação

## Objetivo do Projeto

Este projeto foi desenvolvido para aprimorar conhecimentos em:

* Desenvolvimento Backend com Node.js
* APIs REST
* Banco de Dados Relacionais
* Prisma ORM
* Integração Frontend e Backend
* Manipulação e visualização de dados

## Autor

Bruno Melo

LinkedIn: Adicione seu perfil aqui

GitHub: Adicione seu perfil aqui
