# TudoShop - Loja Virtual

Este projeto é uma aplicação React que consome a API pública Fake Store para exibir uma lista de produtos.

---

## Requisitos

- Node.js (versão 16 ou superior recomendada)
- npm ou yarn
- npm install Styled Components

---

## Como executar a aplicação

### 1. Clone o repositório

```bash
git clone https://seu-repositorio.git
```

### 2. Entre na pasta do projeto

```bash
cd nome-da-pasta-do-projeto
```

### 3. Instale as dependências

Usando npm:

```bash
npm install
```

Ou usando yarn:

```bash
yarn install
```

### 4. Inicie a aplicação

Com npm:

```bash
npm start
```

Com yarn:

```bash
yarn start
```

### 5. Acesse no navegador

Abra o endereço:

```
http://localhost:3000
```

---

## Estrutura do projeto

- `src/App.js` — componente principal da aplicação
- `src/components/ProductList.js` — componente que busca e exibe a lista de produtos
- `src/components/ProductCard.js` — componente para renderizar cada produto individualmente

---

## Observações

- A aplicação depende da API pública Fake Store (https://fakestoreapi.com/).
- Certifique-se que sua conexão com a internet esteja ativa para carregar os produtos.
- Em caso de falha na requisição, uma mensagem de erro será exibida.

---

## Autor

Vitor

---

## Licença

Este projeto está sob a licença MIT.
