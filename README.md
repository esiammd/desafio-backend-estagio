# DesafioBackendEstagio


Desenvolvimento de uma API RPC para facilitar o gerenciamento de uma fila de pessoas!

A API em questão contém os seguintes endpoints:

- `/createUser` - Cadastra usuário;
- `/addToLine` - Coloca um usuário na última posição da fila;
- `/findPosition` - Retorna a posição de um usuário a partir de seu email;
- `/showLine` - Lista os usuários da fila e suas respectivas posições;
- `/filterLine` - Lista os usuários filtrados a partir de um parâmetro;
- `/popLine` - Tira a pessoa na prime


# Endpoints:

- Cadastrar usuário:
Esse metódo deve receber nome, e-mail e gênero do usuário e retornar id, nome e email e gênero.

- Adicionar a fila:
Esse metódo deve receber o id do usuário a ser adicionado à fila e deve retornar a posição em que ele está na fila.

- Buscar usuário na fila:
Esse metódo deve receber o e-mail de um usuário e retornar a posição dele na fila.

- Ver fila:
Esse metódo deve retornar uma lista de usuários (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

- Filtrar fila:
Esse metódo deve receber um gênero de usuário e retornar uma lista de usuários com aquele gênero (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

- Tirar da fila:
Esse metódo deve retirar da fila a pessoa na primeira posição e retorna-la.
