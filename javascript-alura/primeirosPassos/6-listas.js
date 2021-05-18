console.log(`Trabalhando com listas`);

//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`, 
); 

listaDestinos.push(`Curitiba`); //adicionando um item na lista
console.log(listaDestinos);

listaDestinos.splice(1,1); // posição, qnt de elementos
console.log(listaDestinos);

console.log(listaDestinos[1]); //mostrando só o elemento na posição 1 --> Rio de Janeiro
