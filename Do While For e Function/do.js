const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Quantas vezes você quer que o programa rode? "));
let contador = 0;

let n1, n2, at, total, aluno, notaMaior;

do {
    aluno = prompt("Digite o nome do aluno: ");
    do {
        n1 = parseFloat(prompt("Digite a n1 (0 a 10): "));
    } while (n1 > 10 || n1 < 0);

    do {
        n2 = parseFloat(prompt("Digite a n2 (0 a 10): "));
    } while (n2 > 10 || n2 < 0);

    do {
        at = parseFloat(prompt("Digite a nota da atividade (0 a 10): "));
    } while (at > 10 || at < 0);
    total = (n1 * 0.35) + (n2 * 0.35) + (at * 0.30);

    console.log("Média total: " + total.toFixed(2) + "\n");
    contador++;
} while (contador < numero);