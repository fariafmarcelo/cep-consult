# Consult CEP

## Apresentação

> O objetivo principal deste projeto é realizar a consulta de CEP's utilizando como base a API ViaCep (https://viacep.com.br/) \
> Foi utilizado o MongoDB para salvar os ceps já consultados, para que em consultas repetidas os valores sejam obtidos em nosso banco de dados e não através da API do ViaCep. \
> Também está sendo aproveitado o React-Toast para a apresentação de um erro quando o cep digitado é inexistente. \
> Um REGEX está realizando a validação do input do CEP para que não sejam digitados caracteres que não sejam letras, e para que seja adicionado automaticamente o "-" no cep para uma padronização no momento da pesquisa e ao salvar no banco de dados.

## Back-End

> Para rodar o projeto Back-End é preciso ter o MongoDB Compass instalado em sua maquina (https://www.mongodb.com/try/download/compass), acessar a pasta backend e então rodar o comando `npm install` para instalar as restantes dependências. \
> Feito isto basta rodar o comando `npm run dev` e seu projeto irá apresentar a mensagem Backend is running on port 3003.

## Front-End

> Para rodar o projeto Front-End, basta acessar a pasta frontend e então rodar o comando `npm install` para instalar as dependências necessárias, e então executar o comando `npm start` para que o projeto seja iniciado na *porta 3000*.