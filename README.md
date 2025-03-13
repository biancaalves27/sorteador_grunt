# Sorteador de Números

Este é um projeto simples de um sorteador de números aleatórios. O usuário pode inserir um número máximo e o sistema sorteia um número entre 1 e o número máximo informado, com algumas validações para garantir que o número inserido esteja entre 2 e 600.000.

## Funcionalidade

- O usuário define o valor máximo que o número sorteado pode atingir.
- O número sorteado é mostrado após o envio do formulário.
- Caso o valor inserido seja inválido (menor que 2 ou maior que 600.000), o sistema irá alertar o usuário.
- O valor máximo pode ser ajustado e o sistema limita o número a um máximo de 600.000.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- Grunt (para automação)

## Como Usar

1. Clone este repositório para o seu ambiente local:
   ```bash
   git clone [https://github.com/biancaalves27/sorteador_grunt.git]

Abra o arquivo index.html em seu navegador.

Insira um número máximo no campo de entrada e clique no botão Sortear número.

O número sorteado será exibido na tela.

## Testes Funcionais
Foi realizado um teste funcional manual para verificar o comportamento do sorteador. Os seguintes testes foram realizados:

**1.** Validação do número máximo:
Verificar se o número sorteado está dentro do intervalo válido (entre 1 e o número máximo inserido pelo usuário).

**2.** Validação de número inválido abaixo do limite:
Verificar se o sistema alerta quando o valor inserido for menor que 2, com a mensagem:
"Por favor, insira um número válido entre 2 e 600.000."

**3.** Validação de número inválido acima do limite:
Verificar se o sistema alerta quando o valor inserido for maior que 600.000, com a mensagem:
"O valor máximo permitido é 600.000."

**4.** Validação do sorteio:
Verificar se o número sorteado realmente fica dentro do intervalo de 1 até o número máximo informado.

Ação de envio do formulário:
Testar se, ao clicar no botão "Sortear número", o número sorteado é mostrado corretamente na tela.

## Contribuições
Se você deseja contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório e enviar um pull request.

- Faça um fork deste repositório.
- Crie uma nova branch (git checkout -b minha-nova-branch).
- Faça suas alterações e commit (git commit -am 'Adicionando nova funcionalidade').
- Envie a branch (git push origin minha-nova-branch).
- Abra um pull request.
