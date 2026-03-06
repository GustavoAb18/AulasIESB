// Perguntando valores do a, b, c
let a = prompt("Qual o valor do a?: ");
let b = prompt("Qual o valor do b?: ");
let c = prompt("Qual o valor do c?: ");

/*
    Equações do Δ e bhaskara:
    
    delta = ((b) ** 2) + (-4 * (a) * (c))
    
    Caso de delta > 0:
        x1 = (-(b) + (Math.sqrt(delta).toFixed(2))) / (2 * a);
        x2 = (-(b) - (Math.sqrt(delta).toFixed(2))) / (2 * a);
        
    Caso de delta = 0:
        x3 = -(b) / (2 * a);
*/

delta = ((b) ** 2) + (-4 * (a) * (c))

x = (Math.sqrt(delta).toFixed(2));

console.log("\nSeu Delta (Δ): " + delta + "\nSua Raíz: " + x);