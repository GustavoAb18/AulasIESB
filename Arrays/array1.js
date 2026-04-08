const prompt = require('prompt-sync')();
const fs = require('fs');

const ARQUIVO = 'lista.json';

// Carrega a lista do arquivo (ou cria vazia se não existir)
function carregarLista() {
  if (fs.existsSync(ARQUIVO)) {
    const dados = fs.readFileSync(ARQUIVO, 'utf-8');
    return JSON.parse(dados);
  }
  return [];
}

// Salva a lista no arquivo
function salvarLista(lista) {
  fs.writeFileSync(ARQUIVO, JSON.stringify(lista, null, 2));
}

// Adicionar item
function adicionarItem(lista) {
  const item = prompt('Digite o item: ');
  lista.push(item);
  salvarLista(lista);
  console.log(`"${item}" adicionado!`);
}

// Remover item
function removerItem(lista) {
  console.log('\nLista atual:');
  lista.forEach((item, index) => console.log(`${index} - ${item}`));

  const index = parseInt(prompt('Digite o número do item para remover: '));
  if (index >= 0 && index < lista.length) {
    const removido = lista.splice(index, 1);
    salvarLista(lista);
    console.log(`"${removido}" removido!`);
  } else {
    console.log('Índice inválido.');
  }
}

// Exibir lista
function exibirLista(lista) {
  if (lista.length === 0) {
    console.log('Lista vazia.');
  } else {
    console.log('\n--- Lista ---');
    lista.forEach((item, index) => console.log(`${index} - ${item}`));
  }
}

// Loop principal
function main() {
  const lista = carregarLista();

  while (true) {
    console.log('\n1 - Adicionar\n2 - Remover\n3 - Ver lista\n0 - Sair');
    const opcao = prompt('Escolha: ');

    if (opcao === '1') adicionarItem(lista);
    else if (opcao === '2') removerItem(lista);
    else if (opcao === '3') exibirLista(lista);
    else if (opcao === '0') break;
    else console.log('Opção inválida.');
  }
}

main();