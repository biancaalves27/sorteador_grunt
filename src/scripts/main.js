document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        // Validação: Garante que o número seja válido, maior que zero e não ultrapasse 10.000
        if (isNaN(numeroMaximo) || numeroMaximo <= 0 || numeroMaximo > 10000) {
            alert("Por favor, insira um número válido entre 1 e 10.000.");
            return;
        }

        // Gera um número aleatório entre 1 e o número máximo permitido
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        // Exibe o resultado
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
