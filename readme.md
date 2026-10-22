# Quiz Revisão Rápida

**Disciplina:** Desenvolvimento de Sistemas Web (EECP0036) - UFMA
**Aluno:** Anderson Carvalhal Pimenta (Matrícula: 20250013630)
**Trilha Escolhida:** Trilha C (Sem API externa)

## 📌 O que o app faz

O "Quiz Revisão Rápida" é uma aplicação web simples projetada para ajudar estudantes e concurseiros a testarem seus conhecimentos. Ele exibe perguntas de revisão, recebe e valida a resposta digitada pelo usuário, informa imediatamente se a resposta está correta ou incorreta, e mantém um registro da pontuação total utilizando o `localStorage` do navegador (sem necessidade de login ou banco de dados externo).

## 🛠️ Tecnologias Usadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **HTML5:** Estruturação semântica da página (uso de tags como `<header>`, `<main>`, `<section>`).
* **CSS3:** Estilização visual e responsividade para garantir leitura em celulares e computadores (sem o uso de frameworks externos).
* **JavaScript (Vanilla):** Lógica principal do quiz, validação de entradas vazias e manipulação segura do DOM (utilizando estritamente `textContent`).
* **Web Storage API (localStorage):** Armazenamento dos dados de pontuação diretamente no navegador do usuário, mantendo o progresso salvo.

## 🚀 Como rodar o projeto

Para executar esta aplicação localmente e garantir o funcionamento correto de todos os recursos, siga os passos abaixo:

1. Faça o clone deste repositório em sua máquina ou faça o download dos arquivos.

2. Abra a pasta do projeto no seu editor de código (como o VS Code) ou terminal.

3. Inicie um servidor local. Você pode usar uma das seguintes opções:

   * **VS Code:** Instale e utilize a extensão *Live Server*, clicando no botão "Go Live" na barra inferior.
   * **Python:** Abra o terminal na pasta do projeto e execute o comando `python -m http.server 8000`. Em seguida, abra o navegador e acesse `http://localhost:8000`.

## 🌐 Análise da Aba Rede (Network)

![Aba Rede - Carregamento Inicial](151233.png)

**O que o print mostra:**
A imagem exibe as requisições (método GET) realizadas pelo navegador durante o carregamento inicial da página. Como estamos na **Trilha C**, não há chamadas para APIs externas. O status **200 (OK)** nas requisições do `localhost` (nosso arquivo HTML), `style.css` e `script.js` confirma que o servidor local os entregou perfeitamente. O arquivo `favicon.ico` retornou **404 (Not Found)** apenas porque não adicionamos um ícone de aba ao projeto (comportamento padrão do navegador), o que não afeta em nada o funcionamento da aplicação.

## 🤖 Uso de IA

* **Ferramenta utilizada:** Google Gemini.
* **O que foi pedido:** Foi solicitado auxílio para estruturar os textos da "Etapa 1: Proposta do App" com base nos requisitos do PDF da disciplina, e para gerar a base inicial do código (HTML semântico, CSS responsivo e a lógica em JavaScript puro para validação e uso do `localStorage`).
* **O que foi alterado:** O texto da proposta foi revisado, adaptado e inserido no template em PDF com os meus dados acadêmicos. O código fornecido pela IA foi lido, testado através de um servidor local (onde as variáveis foram renomeadas e comentadas para melhor legibilidade) e os arquivos foram organizados e commitados passo a passo neste repositório. Foram feitas revisões rigorosas para garantir que a inserção de dados no DOM ocorresse exclusivamente via `textContent`, prevenindo qualquer vulnerabilidade.