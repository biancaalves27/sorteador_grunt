document.addEventListener('DOMContentLoaded', function () {
    const inputNumeroMaximo = document.getElementById('numero-maximo');

    inputNumeroMaximo.addEventListener('input', function () {
        let valor = parseInt(inputNumeroMaximo.value, 10);

        if (valor > 600000) {
            inputNumeroMaximo.value = 600000;
            alert('O valor máximo permitido é 600.000.');
        } else if (valor < 2) {
            alert('Por favor, insira um número válido entre 2 e 600.000.');
            inputNumeroMaximo.value = 1;
        }
    });

    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();

        let numeroMaximo = parseInt(inputNumeroMaximo.value, 10);

        if (isNaN(numeroMaximo) || numeroMaximo < 2 || numeroMaximo > 600000) {
            alert('Por favor, insira um número válido entre 2 e 600.000.');
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        console.log('Número sorteado:', numeroAleatorio);
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
