const prompt = require('prompt-sync')();

/*
    - Opção Vista [1]: Desconto de 10% (10.000);
    - Opção Metade [2]: Juros de 0.5 (500);
    - Opção Uma Quarta [3]: (1.000);
    - Para as opções de Metade e Uma quarta, seria calculado também o ano, sendo 48.
*/

let option, price;
let calcVista, calcMetade, calcQuarta;

function vista() {
    calcVista = price - (price * 0.10);
}

function metade() {
    calcMetade = price + (price * 0.05);
}

function quarta() {
    calcQuarta = price + (price * 0.01);
}

function menu() {
    console.clear();
    console.log("Digite o preço do carro como está no exemplo abaixo:\n[ R$ > '123052' ]")
    console.log("\nPara sair do programa, digite [0]\n");
    price = parseFloat(prompt("R$ > "));

    if (price === 0) {
        console.log("\nFinalizando o programa..");
        process.exit(0);
    } else if (price >= 53000 || price <= 143000) {
        console.log("Qual a forma de pagamento? Temos:\n1 - Opção á vista;\n2 - Metade\n3 - Um quarto;\n");
        option = parseInt(prompt("Opção > "));

        switch (option) {
            case 1:
                vista();
                break;
            case 2:
                metade();
                break;
            case 3:
                quarta();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    } else {
        console.log("Não consigo identificar esse preço. Coloque até no máximo 145 mil.. Aperte [ENTER] para voltar");
        prompt("> ");
    }
    menu();
}
menu();
