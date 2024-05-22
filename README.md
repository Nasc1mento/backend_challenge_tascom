# backend_challenge_tascom

Este projeto foi desenvolvido para o desafio técnico de backend da Tascom.

## Descrição

O projeto consiste em uma API RESTful que permite a criação, listagem, atualização e remoção de tarefas e etiquetas. As etiquetas podem ser associadas a uma ou mais tarefas.

## Estrutura de diretórios

```
/
  /src
  |__/controllers
  |__/databases
  |__/docs
  |__/dto
  |__/env
  |__/models
  |__/repositories
  |__/routes
  |__/services
  |__/repository
/
```
## Utilização

### Pré-requisitos

- Node
- MongoDB (local ou remoto)

### Instalação

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente.<br> 
Exemplo:
```
PORT=8080
MONGO_URL={Sua URL do MongoDB}
```
4. Inicie o servidor com `npm start` ou `npm run start:dev` para iniciar o servidor em modo de desenvolvimento

### Documentação

A documentação da API foi feita com o Swagger e pode ser acessada em `http://localhost:8080/docs`

### Licença
[MIT](https://github.com/Nasc1mento/backend_challenge_tascom/blob/main/LICENSE)