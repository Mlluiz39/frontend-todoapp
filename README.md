# Todo List

Este é um aplicativo simples de lista de tarefas com autenticação de usuários e armazenamento de dados em um banco de dados PostgreSQL. Com ele, você pode adicionar, visualizar e remover itens de uma lista de tarefas, além de fazer login e logout.

## Instalação

Para instalar o aplicativo, siga os seguintes passos:

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório onde o repositório foi clonado.
3. Instale as dependências do aplicativo executando o comando `yarn | npm install`.
4. Configure as variáveis de ambiente para a conexão com o banco de dados PostgreSQL, definindo as seguintes variáveis: `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` e `DB_DATABASE`.
5. Inicie o aplicativo executando o comando `yarn dev | npm run dev`.

## Uso

Para usar o aplicativo, siga os seguintes passos:

1. Abra o aplicativo em seu navegador (por padrão, o aplicativo estará disponível em http://localhost:5173).
2. Crie uma conta de usuário clicando no link "Criar conta" na página inicial.
3. Faça login na sua conta usando o formulário de login na página inicial.
4. Para adicionar um novo item à lista de tarefas, digite o nome da tarefa no campo de entrada e pressione o botão "Adicionar".
5. Para remover um item da lista de tarefas, clique no botão "Remover" ao lado do item.
6. Para marcar um item como concluído, clique no checkbox ao lado do item.
7. Para fazer logout, clique no link "Sair" no canto superior direito da página.

## Contribuição

Se você quiser contribuir para o desenvolvimento deste aplicativo, siga os seguintes passos:

1. Crie um fork deste repositório.
2. Faça suas alterações no fork.
3. Abra um pull request com suas alterações para este repositório.

## Licença

Este aplicativo é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
