function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').textContent = 'Informe valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    const classificacao = obterClassificacao(imc);

    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`;
}

function obterClassificacao(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}
