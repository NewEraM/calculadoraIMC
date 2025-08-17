function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("valorIMC").textContent = "Preencha os valores corretamente!";
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);
      document.getElementById("valorIMC").textContent = `Seu IMC é: ${imc.toFixed(2)}`;
    

}