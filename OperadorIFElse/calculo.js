const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o seu primeiro número: "));
let num2 = parseFloat(prompt("Digite o seu segundo número: "));

let media = (num1 + num2) / 2;

if (media >= 5) {
	console.log("Acima da média, aprovado.", media);
} else {
	console.log("Abaixo da média, reprovado.", media);
}
