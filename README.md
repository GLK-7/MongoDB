# Projeto CRUD com MongoDB e Node.js

  Este é um projeto simples de CRUD (Create, Read, Update, Delete) desenvolvido para fins de estudo, focando na interação e utilização do MongoDB com Node.js e Handlebars. O projeto consiste na exibição e gerenciamento de produtos, apresentando informações como Nome, URL da imagem, preço e descrição.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para o servidor.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados dos produtos.
- **Handlebars**: Motor de template para renderização de páginas HTML dinâmicas.

## Funcionalidades

- **Adicionar Produto**: Permite a inclusão de novos produtos com nome, imagem, preço e descrição.
- **Listar Produtos**: Exibe todos os produtos cadastrados no banco de dados.
- **Atualizar Produto**: Possibilita a edição das informações de um produto existente.
- **Deletar Produto**: Remove um produto do banco de dados.

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/GLK-7/MongoDB-Products-CRUD.git

2. Navegue até o diretório do projeto:
cd seu-repositorio


3. Instale as dependências do projeto:

   ```bash
   npm install  

4. Configure as variáveis de ambiente no arquivo .env:  
 
    DB_USER=seu_usuario  
    DB_PASSWORD=sua_senha  
    DB_NAME=seu_cluster ou db_Name  

5. Inicie o servidor:

   ```bash
   npm start  

6. Uso:

    Após iniciar o servidor, acesse http://localhost:3000 no seu navegador para interagir com a aplicação. Você poderá adicionar, visualizar, editar e deletar produtos por meio da interface web.


**Notas:**

- Certifique-se de criar um arquivo `.env` com as variáveis de ambiente necessárias para a conexão com o MongoDB.

