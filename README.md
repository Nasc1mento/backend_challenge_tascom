# backend_challenge_tascom

Este projeto foi desenvolvido para o desafio técnico de backend da Tascom.

## Descrição

O projeto consiste em uma API RESTful que permite a criação, listagem, atualização e remoção de tarefas e etiquetas. As etiquetas podem ser associadas a uma ou mais tarefas.

## Estrutura de diretórios

```
/
  /src
  |__/controllers       # Controladores da API    
  |__/databases         # Configuração do banco de dados
  |__/docs              # Documentação da API
  |__/dto               # Objetos de entrada e saída
  |__/env               # Variáveis de ambiente
  |__/models            # Modelos de dados
  |__/repositories      # Camada de acesso a dados
  |__/routes            # Endpoints da API
  |__/services          # Regras de negócio
  |__/utils             # Funções utilitárias
/
```
## Utilização

### Pré-requisitos

- Node
- MongoDB (local ou remoto)

### Execução local

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente presentes no arquivo `.env.example`

4. Inicie o servidor com `npm run start`. Caso prefira, use `npm run start:dev` para iniciar o servidor em modo de desenvolvimento

### Documentação

A documentação da API foi feita com o Swagger e pode ser acessada em `http://localhost:8080/docs`

## Licença
[MIT](https://github.com/Nasc1mento/backend_challenge_tascom/blob/main/LICENSE)