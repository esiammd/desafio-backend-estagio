import { createUser, addToLine, findPosition, showLine, filterLine, popLine } from './user.service';

/*
Cadastrar usuário
Esse metódo deve receber nome, e-mail e gênero do usuário e retornar id, nome e email e gênero.
*/
console.log(createUser("test1", "test1@test", "f"));
console.log(createUser("test2", "test2@test", "f"));
console.log(createUser("test3", "test3@test", "m"));
console.log(createUser("test4", "test4@test", "m"));

/*
Adicionar a fila
Esse metódo deve receber o id do usuário a ser adicionado à fila e deve retornar a posição em que ele está na fila.
*/
console.log(addToLine(2));
console.log(addToLine(1));
console.log(addToLine(4));
console.log(addToLine(3));

/*
Buscar usuário na fila
Esse metódo deve receber o e-mail de um usuário e retornar a posição dele na fila.
*/
console.log(findPosition("teste@teste"));
console.log(findPosition("te@te"));
console.log(findPosition("mai@te"));
console.log(findPosition("javi@te"));

/*
Ver fila
Esse metódo deve retornar uma lista de usuários (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).
*/
console.log(showLine());

/*
Filtrar fila
Esse metódo deve receber um gênero de usuário e retornar uma lista de usuários com aquele gênero (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).
*/
console.log(filterLine("f"));
console.log(filterLine("m"));

/*
Tirar da fila
Esse metódo deve retirar da fila a pessoa na primeira posição e retorna-la.
*/
console.log(popLine());
console.log(popLine());

console.log(showLine());

