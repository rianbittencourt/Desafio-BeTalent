
# BeTalent Desafio Front-End React.js


## Tecnologias

- React
- Tailwind CSS 
- json-server 




## Funcionalidades

- Tabela contendo dados:
imagem (thumb do/a usuário/a);
nome;
cargo
data de admissão;
telefone..
- Filtro funcionando por cargo, nome e telefone..
- API feita com o json-server
- Responsividade 

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`REACT_APP_URL_API`



## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/rianbittencourt/Desafio-BeTalent
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Definir a Variável de Ambiente criando um .env (localhost:3001 por padrão)

```bash
REACT_APP_URL_API='http://localhost:3001/employees'
```

Inicie o servidor

```bash
  npm run start
```

## Pontos de Melhoria

Utilizar alguma lib de gerenciamento de estado global como JOTAI/REDUX/ZUSTAND para lidar com o filtro sem precisar criar um Provider por volta da aplicação.

