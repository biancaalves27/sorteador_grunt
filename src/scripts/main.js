document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo); // Converte para número inteiro

        // Verifica se o valor inserido é válido e dentro do intervalo
        if (isNaN(numeroMaximo) || numeroMaximo < 2 || numeroMaximo > 600000) {
            alert('Por favor, insira um número válido entre 2 e 600.000.');
            return;
        }

        // Sorteio do número aleatório
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio) + 1;

        // Exibe o número sorteado
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})
