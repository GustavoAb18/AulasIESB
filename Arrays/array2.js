const prompt = require('prompt-sync')();

const mercado = [];
const ferramentas = [];
const carros = [];

while (true) {
	console.clear();
	console.log("Esse é o estoque atual: Mercado, Ferramentas e Carros");

	console.log("\nEscolha uma opção:\n[ 1 ] - Adicionar um Produto\n[ 2 ] - Remover um Produto\n[ 3 ] - Listar um Produto\n[ 4 ] - Buscar um Produto\n[ 5 ] - Ordenar\n[ 6 ] - Juntar Lista\n[ 7 ] - Sair do Programa");
	console.log("Alternativas: [ add ], [ remove ], [ list ], [ seek ], [ order ], [ addup ] e [ exit ]\n");

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
				console.log('Produto "' + element + '" colocado no Estoque. Estoque atualizado.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Produto' + element + 'já está no Estoque.');
				prompt("Pressione Enter para continuar: ");
			}
		}
		if (choose == 2 || choose == "ferramenta") {
			console.log("\nO que queira adicionar no Estoque [ " + ferramentas + " ] ?");
			let element = prompt();
			let index = ferramentas.indexOf(element);

			if (index == -1) {
				ferramentas.push(element);
				console.log('Produto "' + element + '" colocado no Estoque. Estoque atualizado.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Produto "' + element + '" já está no Estoque.');
				prompt("Pressione Enter para continuar: ");
			}
		}
		if (choose == 3 || choose == "carro") {
			console.log("\nO que queira adicionar no Estoque [ " + carros + " ] ?");
			let element = prompt();
			let index = carros.indexOf(element);

			if (index == -1) {
				carros.push(element);
				console.log('Produto "' + element + '" colocado no Estoque. Estoque atualizado.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Produto "' + element + '" já está no Estoque.');
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
			console.log("\nO que queira remover no Estoque [ " + mercado + " ] ?");
			let element = prompt();
			let index = mercado.indexOf(element);
			if (index !== -1) {
				mercado.splice(index, 1);
				console.log('Produto "' + element + '" foi removido da Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Não existe "' + element + '" na Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			}
		}
		if (choose == 2 || choose == "ferramenta") {
			console.log("\nO que queira remover no Estoque [ " + ferramentas + " ] ?");
			let element = prompt();
			let index = ferramentas.indexOf(element);
			if (index !== -1) {
				ferramentas.splice(index, 1);
				console.log('Produto "' + element + '" foi removido da Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Não existe "' + element + '" na Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			}
		}
		if (choose == 3 || choose == "carro") {
			console.log("\nO que queira remover no Estoque [ " + carros + " ] ?");
			let element = prompt();
			let index = carros.indexOf(element);
			if (index !== -1) {
				carros.splice(index, 1);
				console.log('Produto "' + element + '" foi removido da Estoque.');
				prompt("Pressione Enter para continuar: ");
				continue;
			} else {
				console.log('Não existe "' + element + '" na Estoque.');
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
        	console.log('Produto "' + element + '" encontrado na lista [ mercado ].');
    	} else if (ferramentas.indexOf(element) !== -1) {
        	console.log('Produto "' + element + '" encontrado na lista [ ferramentas ].');
    	} else if (carros.indexOf(element) !== -1) {
        	console.log('Produto "' + element + '" encontrado na lista [ carros ].');
    	} else {
        	console.log('Produto "' + element + '" não encontrado em nenhuma lista.');
    	}

    	prompt("\nPressione Enter para continuar: ");
    	continue;
	} else if (option == 5 || option == "order") {
		console.log("Opção [5] escolhida, como queira ordernar a lista? Em ordem Crescente ou Decrescente?");
		console.log("Alternativas: [ 1 || orderup ] ou [ 2 || orderdown ]");
		let choose = prompt();
		
		if (choose == 1 || choose == "orderup") {
			console.log("Qual lista você deseja fazer em ordem crescente?");
			console.log("A do [mercado]: " + mercado);
			console.log("A de [ferramenta]: " + ferramentas);
			console.log("A do [carro]: " + carros);
			
			let inc = prompt();
			if (inc == "mercado") {
				mercado.sort((a, b) => a.localeCompare(b));
				console.log(mercado);
				prompt("Digite [ENTER] para voltar o programa.. ");
				continue;
			} else if (inc == "ferramenta") {
				ferramentas.sort((a, b) => a.localeCompare(b));
				console.log(ferramentas);
				prompt("Digite [ENTER] para voltar o programa.. ");
				continue;
			} else if (inc == "carro") {
				carros.sort((a, b) => a.localeCompare(b));
				console.log(carros);
				prompt("Digite [ENTER] para voltar o programa.. ");
				continue;
			} else {
				prompt("Essa lista não existe, pressione [ENTER] e tente novamente.");
				continue;
			}
			
		} else if (choose == 2 || choose == "orderdown") {
			console.log("Qual lista você deseja fazer em ordem decrescente?");
			console.log(mercado);
			console.log(ferramentas);
			console.log(carros);
			
			let dec = prompt();
			if (dec == "mercado") {
				mercado.sort((a, b) => b.localeCompare(a));
				console.log(mercado);
				prompt("Digite [ENTER] para voltar o programa.. ");
				continue;
			} else if (dec == "ferramenta") {
				ferramentas.sort((a, b) => b.localeCompare(a));
				console.log(ferramentas);
				prompt("Digite [ENTER] para voltar o programa.. ");
				continue;
			} else if (dec == "carro") {
				carros.sort((a, b) => b.localeCompare(a));
				console.log(carros);
				prompt("Digite [ENTER] para voltar o programa.. ");
				continue;
			} else {
				prompt("Essa lista não existe, pressione [ENTER] e tente novamente.");
				continue;
			}
		}
	} else if (option == 6 || option == "addup") {
		console.log("Opção [6] escolhida, escolhe uma lista para adicionar até 5 produtos novos. As listas atuais são:")
		console.log("Mercado temos: " + mercado);
		console.log("Ferramentas temos: " + ferramentas);
		console.log("Carro temos: " + carros);
		console.log("\nUse: [ 1 || mercado ] ou [ 2 || ferramenta ] ou [ 3 || carro ]");
		
		let choose = prompt();
		
		if (choose == 1 || choose == "mercado") {
			console.log("Quais objetos queira adicionar em Mercados? (Não pode colocar objeto repetido.)");
			let ob1 = prompt();
			let index = mercado.indexOf(ob1);
			if (index == -1) {
				mercado.push(ob1);
				console.log('Produto "' + ob1 + '" foi colocado na Estoque. Digite outro:');
				let ob2 = prompt();
				let index = mercado.indexOf(ob2);
				if (index == -1) {
					mercado.push(ob2);
					console.log('Produto "' + ob2 + '" foi colocado na Estoque. Digite outro:');
					let ob3 = prompt();
					let index = mercado.indexOf(ob3)
					if (index == -1) {
						mercado.push(ob3);
						console.log('Produto "' + ob3 + '" foi colocado na Estoque. Digite outro:');
						let ob4 = prompt();
						let index = mercado.indexOf(ob4)
						if (index == -1) {
							mercado.push(ob4);
							console.log('Produto "' + ob4 + '" foi colocado na Estoque. Digite outro:');
							let ob5 = prompt();
							let index = mercado.indexOf(ob5)
							if (index == -1) {
								mercado.push(ob5);
								console.log('Produto "' + ob5 + '" foi colocado na Estoque. Ordenando.."');
								mercado.sort((a, b) => a.localeCompare(b));
								console.log(mercado);
								prompt("Tecle [ENTER] para voltar o programa..");
								continue;
							} else {
								console.log('Já existe "' + ob5 + '" na Estoque.');
								prompt("Rode novamente pressionando [ENTER]: ");
								continue;
							}
						} else {
							console.log('Já existe "' + ob4 + '" na Estoque.');
							prompt("Rode novamente pressionando [ENTER]: ");
							continue;
						}
					} else {
						console.log('Já existe "' + ob3 + '" na Estoque.');
						prompt("Rode novamente pressionando [ENTER]: ");
						continue;
					}
				} else {
					console.log('Já existe "' + ob2 + '" na Estoque.');
					prompt("Rode novamente pressionando [ENTER]: ");
					continue;
				}
			} else {
				console.log('Já existe "' + ob1 + '" na Estoque.');
				prompt("Rode novamente pressionando [ENTER]: ");
				continue;
			}
		} else if (choose == 2 || choose == "ferramenta") {
			console.log("Quais objetos queira adicionar em Ferramentas? (Não pode colocar objeto repetido.)");
			let ob1 = prompt();
			let index = ferramentas.indexOf(ob1);
			if (index == -1) {
				ferramentas.push(ob1);
				console.log('Produto "' + ob1 + '" foi colocado na Estoque. Digite outro:');
				let ob2 = prompt();
				let index = ferramentas.indexOf(ob2);
				if (index == -1) {
					ferramentas.push(ob2);
					console.log('Produto "' + ob2 + '" foi colocado na Estoque. Digite outro:');
					let ob3 = prompt();
					let index = ferramentas.indexOf(ob3)
					if (index == -1) {
						ferramentas.push(ob3);
						console.log('Produto "' + ob3 + '" foi colocado na Estoque. Digite outro:');
						let ob4 = prompt();
						let index = ferramentas.indexOf(ob4)
						if (index == -1) {
							ferramentas.push(ob4);
							console.log('Produto "' + ob4 + '" foi colocado na Estoque. Digite outro:');
							let ob5 = prompt();
							let index = ferramentas.indexOf(ob5)
							if (index == -1) {
								ferramentas.push(ob5);
								console.log('Produto "' + ob5 + '" foi colocado na Estoque. Ordenando.."');
								ferramentas.sort((a, b) => a.localeCompare(b));
								console.log(ferramentas);
								prompt("Tecle [ENTER] para voltar o programa..");
								continue;
							} else {
								console.log('Já existe "' + ob5 + '" na Estoque.');
								prompt("Rode novamente pressionando [ENTER]: ");
								continue;
							}
						} else {
							console.log('Já existe "' + ob4 + '" na Estoque.');
							prompt("Rode novamente pressionando [ENTER]: ");
							continue;
						}
					} else {
						console.log('Já existe "' + ob3 + '" na Estoque.');
						prompt("Rode novamente pressionando [ENTER]: ");
						continue;
					}
				} else {
					console.log('Já existe "' + ob2 + '" na Estoque.');
					prompt("Rode novamente pressionando [ENTER]: ");
					continue;
				}
			} else {
				console.log('Já existe "' + ob1 + '" na Estoque.');
				prompt("Rode novamente pressionando [ENTER]: ");
				continue;
			}
		} else if (choose == 3 || choose == "carro") {
			console.log("Quais objetos queira adicionar em Carros? (Não pode colocar objeto repetido.)");
			let ob1 = prompt();
			let index = carros.indexOf(ob1);
			if (index == -1) {
				carros.push(ob1);
				console.log('Produto "' + ob1 + '" foi colocado na Estoque. Digite outro:');
				let ob2 = prompt();
				let index = carros.indexOf(ob2);
				if (index == -1) {
					carros.push(ob2);
					console.log('Produto "' + ob2 + '" foi colocado na Estoque. Digite outro:');
					let ob3 = prompt();
					let index = carros.indexOf(ob3)
					if (index == -1) {
						carros.push(ob3);
						console.log('Produto "' + ob3 + '" foi colocado na Estoque. Digite outro:');
						let ob4 = prompt();
						let index = carros.indexOf(ob4)
						if (index == -1) {
							carros.push(ob4);
							console.log('Produto "' + ob4 + '" foi colocado na Estoque. Digite outro:');
							let ob5 = prompt();
							let index = carros.indexOf(ob5)
							if (index == -1) {
								carros.push(ob5);
								console.log('Produto "' + ob5 + '" foi colocado na Estoque. Ordenando.."');
								carros.sort((a, b) => a.localeCompare(b));
								console.log(carros);
								prompt("Tecle [ENTER] para voltar o programa..");
								continue;
							} else {
								console.log('Já existe "' + ob5 + '" na Estoque.');
								prompt("Rode novamente pressionando [ENTER]: ");
								continue;
							}
						} else {
							console.log('Já existe "' + ob4 + '" na Estoque.');
							prompt("Rode novamente pressionando [ENTER]: ");
							continue;
						}
					} else {
						console.log('Já existe "' + ob3 + '" na Estoque.');
						prompt("Rode novamente pressionando [ENTER]: ");
						continue;
					}
				} else {
					console.log('Já existe "' + ob2 + '" na Estoque.');
					prompt("Rode novamente pressionando [ENTER]: ");
					continue;
				}
			} else {
				console.log('Já existe "' + ob1 + '" na Estoque.');
				prompt("Rode novamente pressionando [ENTER]: ");
				continue;
			}
		} else {
			prompt("Essa lista não existe, pressione [ENTER] e selecione outra lista..");
			continue;
		}
	} else if (option == 7 || option == "exit") {
		console.log("\nFinalizando o programa..");
		break;
	} else {
		prompt("\nEssa não é uma opção válida. Pressione [ENTER] e selecione as opções novamente..");
		continue;
	}
}
