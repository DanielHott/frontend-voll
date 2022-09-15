# Teste Voll (Front-end)

Esta aplicação foi desenvolvida para um teste técnico onde consiste na criação de uma plataforma para controle de pontos com loja virtual.

## Acessando online

Acesse a aplicação aqui: https://frontend-voll.vercel.app/
Pode haver demora na hora de clicar no link por delay da plataforma de deploy.

## Detalhes da aplicação
### Tela login

A aplicação possui uma tela de login onde possuem dois inputs, um para email e outro para a senha. 
Os perfis cadastrados são:
 #### Para o administrador:
Email:`admin@voll.com`
Senha: `1234567`

#### Para o Usuário:
Email:`user@voll.com`
Senha: `1234567`

![Web 1](https://github.com/DanielHott/imagens/blob/master/voll-login.png)

### Tela de listagem de produtos
Nesta tela o usuário pode adicionar produtos ao carrinho, optar pelo modo noturno, voltar à tela de login e pode procurar pelo produto que deseja comprar.

### Visão do usuário:

![Web 1](https://github.com/DanielHott/imagens/blob/master/voll-products-user.png)

Na visão do administrador, ainda possui o botão `Área de controle` que leva para tela de cadastro de produtos e atualização de moedas dos usuários.

### Visão do administrador:

![Web 1](https://github.com/DanielHott/imagens/blob/master/voll-products-admin.png)

### Tela de cadastro de produtos e atualização de moedas

Na tela, o administrador pode cadastrar um novo produto inserindo informações válidas, pode procurar pelos usuários e alterar o saldo de moedas. 

![Web 1](https://github.com/DanielHott/imagens/blob/master/voll-control-admin.png)


### Tela de carrinho

Aqui o usuário pode optar por comprar o produto, remover o produto do carrinho ou retornar à tela de produtos.

![Web 1](https://github.com/DanielHott/imagens/blob/master/voll-carrinho.png)




## Tecnologias

Este front-end foi desenvolvido com React.js e Axios. O deploy foi feito no heroku com docker.

## Copiando para sua máquina:

Clone o projeto

```bash
  git clone https://github.com/DanielHott/frontend-voll.git
```

Entre no diretório do projeto

```bash
  cd frontend-voll
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start

