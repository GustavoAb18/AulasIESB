const prompt = require('prompt-sync')();

function calcPeso() {
	console.clear();
	console.log(nome, "Digite no campo assim:\nPeso [ 86.5 ]\nAltura [ 1.76 ].\n");
	const peso = parseFloat(prompt("Quanto você pesa? "));
	const altura = parseFloat(prompt("E a sua altura? "));
	
	const imc = peso / (altura ** 2);
	console.log("Seu peso calculado: " + imc.toFixed(2) + ".");
	
	if (imc <= 18.5) {
		console.log(nome + ", você está Abaixo do Peso, é importante procurar orientação nutricional.\n");
		prompt("Aperte qualquer tecla e vamos calcular outra pessoa.. ");
		return 1;
	} else if (imc >= 18.5 || imc <= 24.9) {
		console.log(nome + ", seu peso está equilibrado, e está saudável.\n");
		prompt("Aperte qualquer tecla e vamos calcular outra pessoa.. ");
		return 1;
	} else if (imc >= 25 || imc <= 29.9) {
		console.log(nome + ", você está na classe de Sobrepeso, pequenas mudanças podem melhorar sua saúde.\n");
		prompt("Aperte qualquer tecla e vamos calcular outra pessoa.. ");
		return 1;
	} else if (imc >= 30 || imc <= 34.9) {
		console.log(nome + ", você está na classe Obesidade de Grau I, recomenda-se um acompanhamento médico.\n");
		prompt("Aperte qualquer tecla e vamos calcular outra pessoa.. ");
		return 1;
	} else if (imc >= 35 || imc <= 39.9) {
		console.log(nome + ", você está na classe Obesidade de Grau II, recomenda-se um acompanhamento médico.\n");
		prompt("Aperte qualquer tecla e vamos calcular outra pessoa.. ");
		return 1;
	} else if (imc > 40) {
		console.log(nome + ", você está na classe Obesidade de Grau III, recomenda-se um acompanhamento médico.\n");
		prompt("Aperte qualquer tecla e vamos calcular outra pessoa.. ");
		return 1;
	} else {
		console.log("Isso não é um número, rode novamente apertando qualquer tecla..");
		prompt("Aperte qualquer tecla e vamos calcular outra pessoa.. ");
		return 1;
	}
}

function terminarPrograma() {
	console.log("Encerrando o programa..");
	process.exit();
}

let opcao, nome;
contador = 0;
console.clear();
let repetidor = prompt("Quantas vezes o programa irá rodar? ");

while (contador < repetidor) {
	console.clear();
	console.log("Digite o seu nome abaixo");
	nome = prompt();
	
	console.log("\n" + nome + ", escolha uma opção válida:");
	console.log("\n1 - Calcular o seu peso\n2 - Sair do programa\n");
	opcao = prompt();
	switch (opcao) {
		case "1":
			calcPeso();
			break;
		case "2":
			terminarPrograma();
			break;
		default:
			prompt("Não existe essa opção.");
			break;
	}
	contador++;
}