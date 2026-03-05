const prompt = require('prompt-sync')();

let a = ["a", "b", "c", "d"];
console.log("Estoque atual:", a);


let elemento = prompt("Qual Estoque deseja remover?: ");
let index = a.indexOf(elemento);

if (index !== -1) {
	a.splice(index, 1);
	console.log('Produto', '"' + elemento + '"', 'removido do Estoque. Estoque atualizado:', a);
} else {
	console.log('Produto', '"' + elemento + '"', 'não encontrado.');
}
