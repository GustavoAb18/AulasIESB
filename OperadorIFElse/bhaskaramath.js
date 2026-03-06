const prompt = require('prompt-sync')();

/*
    Equações do Δ e Bhaskara:
    
    delta = ((b) ** 2) + (-4 * (a) * (c));
    
    Caso de delta > 0:
        x1 = (-(b) + (Math.sqrt(delta).toFixed(0))) / (2 * a);
        x2 = (-(b) - (Math.sqrt(delta).toFixed(0))) / (2 * a);
        
    Caso de delta = 0:
        x3 = -(b) / (2 * a);
*/

let a = prompt("Qual o valor do a?: ");
let b = prompt("Qual o valor do b?: ");
let c = prompt("Qual o valor do c?: ");

if (a != 0) {
    console.log("\nVerificando qual o valor do Delta (Δ):");
	delta = ((b) ** 2) + (-4 * (a) * (c));
	console.log("\nValor do Delta (Δ):", delta);
	
	if (delta != 0 && delta > 0) {
	    x1 = (-(b) + (Math.sqrt(delta))) / (2 * a);
        x2 = (-(b) - (Math.sqrt(delta))) / (2 * a);
        console.log("\nAs raízes do Delta (Δ) seriam:", x1.toFixed(0), "e", x2.toFixed(0) + ".");
        
	} else if (delta = 0) {
	    x3 = -(b) / (2 * a);
	    console.log("\nA raíz do Delta (Δ) seria:", x3.toFixed(0) + ".");
	    
	} else {
	    console.log("\nNão existe raíz do delta.");
	}
	
} else {
	console.log("\nO valor de A não pode ser 0.");
}
