const prompt = require(`prompt-sync`)();

const mercado = [];
const ferramentas = [];
const carros = [];

while (true) {
	console.clear();
	console.log("Esse é o estoque atual: Mercado, Ferramentas e Carros");

	console.log("\nEscolha uma opção:\n[ 1 ] - Adicionar um Produto\n[ 2 ] - Remover um Produto\n[ 3 ] - Listar um Produto\n[ 4 ] - Buscar um Produto\n[ 5 ] - Saia do programa");
	console.log("Alternativas: [ add ], [ remove ], [ list ], [ seek ] e [ exit ]\n");

	console.log("O que deseja fazer?");
	const option = prompt();

	if (option == 1 || option == "add") {
		console.log("\nOpção [1] escolhida, qual lista queira adicionar?: ");
		console.log("Alternativas: [ 1 || mercado ] ou [ 2 || ferramenta ] ou [ 3 || carro ]\n");
    	let choose = prompt();
		if (choose == 1 || choose == "mercado") {
			console.log("\nO que queira adicionar no Estoque [ " + mercado + " ] ?");
			let element = prompt();
			let index = mercado.indexOf(element);

			if (index == -1) {
				mercado.push(element);
				console.log('Produto', element, 'colocado no Estoque. Estoque atualizado.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Produto', element, 'já está no Estoque.');
				prompt("Pressione Enter para continuar: ");
			}
		}
		if (choose == 2 || choose == "ferramenta") {
			console.log("\nO que queira adicionar no Estoque [ " + ferramentas + " ] ?");
			let element = prompt();
			let index = ferramentas.indexOf(element);

			if (index == -1) {
				ferramentas.push(element);
				console.log('Produto', element, 'colocado no Estoque. Estoque atualizado.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Produto', element, 'já está no Estoque.');
				prompt("Pressione Enter para continuar: ");
			}
		}
		if (choose == 3 || choose == "carro") {
			console.log("\nO que queira adicionar no Estoque [ " + carros + " ] ?");
			let element = prompt();
			let index = carros.indexOf(element);

			if (index == -1) {
				carros.push(element);
				console.log('Produto', element, 'colocado no Estoque. Estoque atualizado.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Produto', element, 'já está no Estoque.');
				prompt("Pressione Enter para continuar: ");
			}
		}
		else {
			prompt("Não existe o produto listado. Aperte [ENTER] e selecione outra lista: ");
		}
		continue;
	} else if (option == 2 || option == "remove") {
		console.log("\nOpção [2] escolhida, escolhe a lista:");
		console.log("Alternativas: [ 1 || mercado ] ou [ 2 || ferramenta ] ou [ 3 || carro ]\n");
		let choose = prompt();
		if (choose == 1 || choose == "mercado") {
			console.log("\nO que queira adicionar no Estoque [ " + mercado + " ] ?");
			let element = prompt();
			let index = mercado.indexOf(element);
			if (index !== -1) {
				mercado.splice(index, 1);
				console.log('Produto', element, 'foi removido da Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Não existe', element, 'na Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			}
		}
		if (choose == 2 || choose == "ferramenta") {
			console.log("\nO que queira adicionar no Estoque [ " + ferramentas + " ] ?");
			let element = prompt();
			let index = ferramentas.indexOf(element);
			if (index !== -1) {
				ferramentas.splice(index, 1);
				console.log('Produto', element, 'foi removido da Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Não existe', element, 'na Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			}
		}
		if (choose == 3 || choose == "carro") {
			console.log("\nO que queira adicionar no Estoque [ " + carros + " ] ?");
			let element = prompt();
			let index = ferramentas.indexOf(element);
			if (index !== -1) {
				carros.splice(index, 1);
				console.log('Produto', element, 'foi removido da Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Não existe', element, 'na Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			}
		}
		else {
			prompt("Não existe esse produto listado. Aperte [ENTER] e selecione outra lista: ");
		}
		continue;
	} else if (option == 3 || option == "list") {
		console.log("\nOpção [3] escolhida, qual lista deseja ver?");
		console.log("Alternativas: [ 1 || mercado ] ou [ 2 || ferramenta ] ou [ 3 || carro ] ou [ 4 || all ]\n");
		let choose = prompt();
		if (choose == 1 || choose == "mercado") {
			console.log("Mercado selecionado, aqui estão os produtos:\n");
			console.log(mercado);
			prompt("\nPressione Enter para continuar: ");
			continue;
		}
		if (choose == 2 || choose == "ferramentas") {
			console.log("Ferramentas selecionado, aqui estão os produtos:\n");
			console.log(ferramentas);
			prompt("\nPressione Enter para continuar: ");
			continue;
		}
		if (choose == 3 || choose == "ferramentas") {
			console.log("Carros selecionado, aqui estão os produtos:\n");
			console.log(carros);
			prompt("\nPressione Enter para continuar: ");
			continue;
		}
		if (choose == 4 || choose == "all") {
			console.log("Todos selecionados, aqui estão os produtos:\n");
			console.log(mercado);
			console.log(ferramentas);
			console.log(carros);
			prompt("\nPressione Enter para continuar: ");
			continue;
		}
		else {
			console.log("Não há esse produto. Aperte [ENTER] e selecione outra lista: ");
		}
		continue;
	} else if (option == 4 || option == "seek") {
    	console.log("\nOpção [4] escolhida, qual produto deseja buscar?\n");
    	let element = prompt();

    	if (mercado.indexOf(element) !== -1) {
        	console.log('Produto', element, 'encontrado na lista [ mercado ].');
    	} else if (ferramentas.indexOf(element) !== -1) {
        	console.log('Produto', element, 'encontrado na lista [ ferramentas ].');
    	} else if (carros.indexOf(element) !== -1) {
        	console.log('Produto', element, 'encontrado na lista [ carros ].');
    	} else {
        	console.log('Produto', element, 'não encontrado em nenhuma lista.');
    	}

    	prompt("\nPressione Enter para continuar: ");
    	continue;
	} else if (option == 5 || option == "exit") {
		console.log("\nFinalizando o programa..");
		break;
	} else {
		prompt("\nEssa não é uma opção válida. Pressione [ENTER] e selecione as opções novamente: ");
		continue;
	}
}
