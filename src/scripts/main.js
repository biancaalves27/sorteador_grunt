document.addEventListener('DOMContentLoaded', function() {
    const inputNumeroMaximo = document.getElementById('numero-maximo');

    // Impedir que o usuário digite mais de 60000
    inputNumeroMaximo.addEventListener('input', function() {
        let valor = parseInt(inputNumeroMaximo.value);
        if (valor > 60000) {
            inputNumeroMaximo.value = 60000;
        }
    });

    // Validação e sorteio do número
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let numeroMaximo = parseInt(inputNumeroMaximo.value);

        // Valida se o número é válido
        if (isNaN(numeroMaximo) || numeroMaximo < 2 || numeroMaximo > 60000) {
            alert('Por favor, insira um número válido entre 2 e 60.000.');
            return;
        }

        // Sorteio do número aleatório entre 1 e o valor máximo (inclusive)
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        // Exibe o número sorteado
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
