document.addEventListener('DOMContentLoaded', function() {
    const inputNumeroMaximo = document.getElementById('numero-maximo');

    inputNumeroMaximo.addEventListener('input', function() {
        let valor = parseInt(inputNumeroMaximo.value, 10);

        if (isNaN(valor)) {
            inputNumeroMaximo.value = '';
            return;
        }

        if (valor > 60000) {
            inputNumeroMaximo.value = 60000;
        }
        
        if (valor < 1) {
            inputNumeroMaximo.value = 1;
        }
    });

    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let numeroMaximo = parseInt(inputNumeroMaximo.value, 10);

        console.log('Valor digitado:', numeroMaximo); // Debug

        if (isNaN(numeroMaximo) || numeroMaximo < 2 || numeroMaximo > 60000) {
            alert('Por favor, insira um número válido entre 2 e 60.000.');
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        console.log('Número sorteado:', numeroAleatorio); // Debug

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
