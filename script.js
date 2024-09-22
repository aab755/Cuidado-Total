function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoElement = document.getElementById('resultado');

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultadoElement.innerHTML = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    resultadoElement.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}.`;
}