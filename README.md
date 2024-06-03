Relatório de Movimentações API

Este projeto consiste em uma aplicação para gerar relatórios de movimentações de containers.

Começando
Relatório de Movimentações API

API Relatório de Movimentações URLs and managing user URLs.
Prerequisites

Before running the project, make sure you have the following installed:

    Node.js v18.19.0
    npm (Node Package Manager)
    Prisma CLI
    Docker (for running Prisma with Docker)

Getting Started

    Clone the repository:

git clone <repository-url>

    Navigate to the project directory:

cd url-shortener

    Install dependencies:

npm install

4.Para rodar os containers em segundo plano (modo "detached") 

docker compose up -d

5.Rodar migrate do prisma pra sincronizar a base 

npx prisma migrate dev

6.Start the server:

npm run dev 

7.Rodar para criar o Container

POST  http://localhost:3000/containers
## Corpo da solicitação
{
  "cliente": "Nome do Cliente12",
  "numero": "TEST1234512",
  "tipo": 40,
  "status": "Cheio",
  "categoria": "Importação"
}
## Resposta de Sucesso
{
    "id": "ef6cc4a6-dc39-47b9-afe8-01260655704f",
    "cliente": "Nome do Cliente12",
    "numero": "TEST1234512",
    "tipo": 40,
    "status": "Cheio",
    "categoria": "Importação"
}

8. Buscar todos os contêineres 
GET  http://localhost:3000/containers

## Resposta de Sucesso
[
    {
        "id": "1",
        "cliente": "Nome do Cliente",
        "numero": "TEST1234567",
        "tipo": 20,
        "status": "Cheio",
        "categoria": "Importação"
    },
    {
        "id": "6",
        "cliente": "Nome do Cliente02",
        "numero": "TEST1234562",
        "tipo": 40,
        "status": "Cheio",
        "categoria": "Importação"
    },
    {
        "id": "7",
        "cliente": "Nome do Cliente03",
        "numero": "TEST1234563",
        "tipo": 40,
        "status": "Vazio",
        "categoria": "Importação"
    },
    {
        "id": "783029f5-866f-4784-873a-c0e48cc1967a",
        "cliente": "Nome do Cliente11",
        "numero": "TEST1234511",
        "tipo": 20,
        "status": "Cheio",
        "categoria": "Importação"
    },
    {
        "id": "ef6cc4a6-dc39-47b9-afe8-01260655704f",
        "cliente": "Nome do Cliente12",
        "numero": "TEST1234512",
        "tipo": 40,
        "status": "Cheio",
        "categoria": "Importação"
    },
    {
        "id": "f9dac66a-9794-4ce7-8f67-c4b4632886b3",
        "cliente": "Novo Nome do Cliente",
        "numero": "NOVOTEST123456",
        "tipo": 20,
        "status": "Cheio",
        "categoria": "Exportação"
    }
]

9.Obter container específico 
GET http://localhost:3000/containers/:id

## Resposta de Sucesso
{
    "id": "f9dac66a-9794-4ce7-8f67-c4b4632886b3",
    "cliente": "Nome do Cliente10",
    "numero": "TEST1234510",
    "tipo": 40,
    "status": "Cheio",
    "categoria": "Importação"
}

10. Atualizar um contêiner
PUT  http://localhost:3000/containers/:id
## Corpo da solicitação
{
    "cliente": "Novo Nome do Cliente",
    "numero": "NOVOTEST123456",
    "tipo": 20,
    "status": "Cheio",
    "categoria": "Exportação"
}

## Resposta de Sucesso
{
    "id": "f9dac66a-9794-4ce7-8f67-c4b4632886b3",
    "cliente": "Novo Nome do Cliente",
    "numero": "NOVOTEST123456",
    "tipo": 20,
    "status": "Cheio",
    "categoria": "Exportação"
}

11.Excluir um  contêiner
DELETE  http://localhost:3000/containers/:id

Movimentações
12.Criar uma nova Movimentação de Container
POST  http://localhost:3000/movements
## Corpo da solicitação
{
    "containerId": "id_do_seu_contêiner_aqui",
    "tipo": "Embarque",
    "inicio": "2024-06-03T12:00:00.000Z",
    "fim": "2024-06-03T14:00:00.000Z"
}

## Resposta de Sucesso
{
    "id": "dca3c364-0f22-47e3-b5ba-b33d28022e3d",
    "tipo": "Descarga",
    "inicio": "2024-06-03T12:00:00.000Z",
    "fim": "2024-06-03T14:00:00.000Z",
    "containerId": "f9dac66a-9794-4ce7-8f67-c4b4632886b3"
}

13.Obter todas as Movimentações de Containers
GET http://localhost:3000/movements

## Resposta de Sucesso
[
    {
        "id": "fee7c6d8-2996-4eaf-911e-aef36c7ace9a",
        "tipo": "Embarque",
        "inicio": "2024-06-03T12:00:00.000Z",
        "fim": "2024-06-03T14:00:00.000Z",
        "containerId": "783029f5-866f-4784-873a-c0e48cc1967a"
    },
    {
        "id": "c88cb085-3998-47f1-8f2c-b7a18ee272ed",
        "tipo": "Descarga",
        "inicio": "2024-06-03T12:00:00.000Z",
        "fim": "2024-06-03T14:00:00.000Z",
        "containerId": "783029f5-866f-4784-873a-c0e48cc1967a"
    }
]

14.Obter uma Movimentação de Container específico
GET http://localhost:3000/movements/c88cb085-3998-47f1-8f2c-b7a18ee272ed

## Resposta de Sucesso
{
    "id": "c88cb085-3998-47f1-8f2c-b7a18ee272ed",
    "tipo": "Descarga",
    "inicio": "2024-06-03T12:00:00.000Z",
    "fim": "2024-06-03T14:00:00.000Z",
    "containerId": "783029f5-866f-4784-873a-c0e48cc1967a"
}

15.Atualizar a movimentação 
PUT http://localhost:3000/movements/c88cb085-3998-47f1-8f2c-b7a18ee272ed
## Corpo da solicitação
{
    "containerId": "783029f5-866f-4784-873a-c0e48cc1967a",
    "tipo": "Descarga",
    "inicio": "2024-06-03T12:00:00.000Z",
    "fim": "2024-06-03T14:00:00.000Z"
}

## Resposta de Sucesso
{
    "id": "c88cb085-3998-47f1-8f2c-b7a18ee272ed",
    "tipo": "Descarga",
    "inicio": "2024-06-03T12:00:00.000Z",
    "fim": "2024-06-03T14:00:00.000Z",
    "containerId": "783029f5-866f-4784-873a-c0e48cc1967a"
}

16.Excluir uma Movimentação de Container
DELETE http://localhost:3000/movements/6b194139-9fc0-4aa8-87f0-5ddcd5cace09
## Resposta de Sucesso
{
    "message": "Movement deleted successfully"
}

## Relatório com o total de movimentações
17.Obter todas as Movimentações de Containers 
GET http://localhost:3000/report 
## Resposta de Sucesso
{
    "reports": [
        {
            "cliente": "undefined",
            "tipo": "Embarque",
            "total": 2
        },
        {
            "cliente": "undefined",
            "tipo": "Descarga",
            "total": 2
        }
    ],
    "summary": {
        "totalImport": 0,
        "totalExport": 0
    }
}

18.Start para acessar o banco prisma:
npx prisma studio 

Endpoints
Containers

    POST /containers - Criar um novo container
    GET /containers - Obter todos os containers
    GET /containers/{id} - Obter um container por ID
    PUT /containers/{id} - Atualizar um container por ID
    DELETE /containers/{id} - Deletar um container por ID

Movimentações

    POST /movements - Criar uma nova movimentação
    GET /movements - Obter todas as movimentações
    GET /movements/{id} - Obter uma movimentação por ID
    PUT /movements/{id} - Atualizar uma movimentação por ID
    DELETE /movements/{id} - Deletar uma movimentação por ID

Relatórios

    GET /report - Gerar um relatório das movimentações agrupadas por cliente e tipo de movimentação

Contribuição

Sinta-se à vontade para abrir issues e pull requests. Para mudanças importantes, abra uma issue primeiro para discutir o que você gostaria de mudar.
Licença

Este projeto está licenciado sob a licença MIT.
