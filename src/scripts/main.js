document.addEventListener('DOMContentLoaded', function() {
    const inputNumeroMaximo = document.getElementById('numero-maximo');

    // Impedir que o usuário digite um número maior que 60.000
    inputNumeroMaximo.addEventListener('input', function() {
        let valor = parseInt(inputNumeroMaximo.value);

        // Verifica se o valor ultrapassou o limite e ajusta para 60.000
        if (valor > 60000) {
            inputNumeroMaximo.value = 60000;
        }
        
        // Evita que o usuário insira valores não inteiros, ajustando ao valor inteiro mais próximo
        if (valor !== parseInt(valor)) {
            inputNumeroMaximo.value = parseInt(valor);
        }
    });

    // Validação e sorteio do número
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let numeroMaximo = parseInt(inputNumeroMaximo.value);

        // Valida se o número está dentro do intervalo de 2 a 60.000
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
