console.log(`Trabalhando com condicionais`);

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = true;
console.log("Destinos possíveis: ");
console.log(listaDestinos);
const passagemComprada = false; 

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDestinos.slice(1, 1); // posição , qnt de itens
// }else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDestinos.slice(1, 1); 
// } else {
//     console.log("Não é maior de idade e não está acompanhada");
// }

console.log(listaDestinos);
if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Compra autorizada. Boa viagem!");
    listaDestinos.slice(2, 1); // posição , qnt de itens 
} else {
    console.log("Compra não autorizada");
}


console.log("Embarque: \n")
if (idadeComprador >= 18 && passagemComprada) {
    console.log("Boa viagem");
}else {
    console.log("Embarque não autorizada");
}