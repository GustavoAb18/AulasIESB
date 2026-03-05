const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite a sua segunda nota: "));

let media1 = (nota1 * 0.4) + (nota2 * 0.6)

console.log("\nSomando as duas notas fica: " + media1.toFixed(1));

if (media1 >= 5) {
	console.log("Aprovado, acima da média.");
} else if (media1 < 5) {
	console.log("Em estado de recuperação.\n");
	let nota3 = parseFloat(prompt("Qual a nota da P3?: "));

	if (nota3 >= nota1 && nota3 < nota2) {
		let media2 = (nota3 * 0.4) + (nota2 * 0.6);

		if (media2 >= 5) {
			console.log("Aprovado com a média da P1, sendo: " + media2);
		} else {
			console.log("Reprovado de vez. Sua nota foi abaixo da média: " + media2);
		}
	} else {
		let media3 = (nota1 * 0.4) + (nota3 * 0.6);

		if (media3 >= 5) {
			console.log("Aprovado com a média da P2, sendo: " + media3);
		} else {
			console.log("Reprovado de vez. Sua nota foi abaixo da média: " + media3);
		}
	}
}
