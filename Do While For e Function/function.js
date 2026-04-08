const prompt = require('prompt-sync')();

let alunos = []
let option;

function adicionarAluno() {
    console.clear();
    console.log("Certo, vamos adicionar um aluno, me informe o [nome], as notas [n1] e [n2] e a [at] de atividade.");
    const aluno = prompt("Nome dele: ");
    const n1 = prompt("Nota da P1: ");
    const n2 = prompt("Nota da P2: ");
    const at = prompt("Nota de Atividade: ");
    alunos.push({ aluno, n1, n2, at });
    prompt("Certo, adicionei esse aluno na lista com as notas. Aperte qualquer tecla para voltar na tela inicial: ");
}

function verificarNota() {
    console.clear();
    console.log("Qual aluno você quer verificar a nota?");
    console.log(alunos);
    option = prompt()
}

function deletarAluno() {
    console.clear();
}

function verLista() {
    console.clear();
    console.log("Aqui está a lista atual dos alunos cadastrados com as notas:\n");
    console.log(alunos);

    prompt("\nPressione qualquer tecla para voltar para o Menu: ");
}

function leaveProgram() {
    console.log("Encerrando o programa, até em breve " + nameProf + ".");
    process.exit();
}

console.clear();
let nameProf = prompt("Qual seu nome, Professor? ");
let materia = prompt("E qual a sua matéria? ");
console.clear();

while (true) {
    console.clear();
    console.log("Bem-vindo ao Portal do IESB, " + nameProf + ", com a matéria: " + materia + ", escolha uma das opções logo abaixo:");
    console.log("\n1 - Adicionar um aluno e atribuir notas;\n2 - Verificar se o aluno está aprovado na sua matéria;\n3 - Deletar um aluno da sua matéria;\n4 - Ver a lista dos alunos;\n5 - Sair do programa;");
    console.log("\nFaça sua escolha:")
    option = prompt();

    switch (option) {
        case "1":
            adicionarAluno();
            break;
        case "2":
            verificarNota();
            break;
        case "3":
            deletarAluno();
            break;
        case "4":
            verLista();
            break;
        case "5":
            leaveProgram();
            break;
        default:
            prompt("Opção inválida! Aperte qualquer tecla e escolha outra opção: ");
    }
}