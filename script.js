// Lista de perguntas e respostas da revisão
const perguntas = [
    { pergunta: "Qual o protocolo base da Web?", resposta: "HTTP" },
    { pergunta: "Qual a linguagem padrão de marcação da Web?", resposta: "HTML" },
    { pergunta: "Qual a linguagem utilizada para estilizar páginas Web?", resposta: "CSS" }
];

// Variáveis de controle do jogo
let indiceAtual = 0;
let pontuacaoTotal = 0; // Essa vai ser salva no localStorage (Trilha C)
let acertosDestaRodada = 0;

// Pegando os elementos do HTML pelo ID
const textoPergunta = document.getElementById("texto-pergunta");
const entradaResposta = document.getElementById("entrada-resposta");
const btnResponder = document.getElementById("btn-responder");
const btnProxima = document.getElementById("btn-proxima");
const mensagemResultado = document.getElementById("mensagem-resultado");
const displayPontuacao = document.getElementById("display-pontuacao");

// Função que roda assim que a página abre
function iniciarApp() {
    console.log("Iniciando o quiz..."); // Um log para ver se o arquivo conectou direito
    
    // Tenta puxar a pontuação se o usuário já jogou antes
    const pontuacaoSalva = localStorage.getItem("pontuacaoQuiz");
    if (pontuacaoSalva) {
        pontuacaoTotal = parseInt(pontuacaoSalva);
    }
    
    atualizarPlacar();
    carregarPergunta();
}

// Coloca a pergunta atual na tela
function carregarPergunta() {
    // Verifica se ainda tem pergunta pra fazer
    if (indiceAtual < perguntas.length) {
        // Regra do professor: usar textContent no lugar de innerHTML
        textoPergunta.textContent = `Pergunta ${indiceAtual + 1}/${perguntas.length}: ${perguntas[indiceAtual].pergunta}`;
        
        // Limpa a tela pra próxima rodada
        entradaResposta.value = "";
        entradaResposta.style.display = "block";
        mensagemResultado.textContent = "";
        
        btnProxima.style.display = "none";
        btnResponder.style.display = "block";
        btnResponder.textContent = "Responder";
    } else {
        // Chegou no final do quiz
        console.log("Usuário terminou as perguntas.");
        textoPergunta.textContent = "Quiz concluído!";
        entradaResposta.style.display = "none";
        btnProxima.style.display = "none";
        
        // Transforma o botão de responder no botão de reiniciar
        btnResponder.style.display = "block";
        btnResponder.textContent = "Jogar Novamente";
        
        mensagemResultado.textContent = `Rodada finalizada! Você acertou ${acertosDestaRodada} de ${perguntas.length} questões.`;
        mensagemResultado.style.color = "blue";
    }
}

// Verifica se o que o usuário digitou está certo
function checarResposta() {
    // Se o quiz acabou, esse botão serve para reiniciar tudo
    if (btnResponder.textContent === "Jogar Novamente") {
        indiceAtual = 0;
        acertosDestaRodada = 0;
        carregarPergunta();
        return;
    }

    const respostaDoUsuario = entradaResposta.value.trim();
    
    // Cuidado exigido na etapa 1: evitar que ele mande o campo vazio
    if (respostaDoUsuario === "") {
        mensagemResultado.textContent = "Ei, você precisa digitar alguma coisa!";
        mensagemResultado.style.color = "orange";
        return;
    }

    const respostaCerta = perguntas[indiceAtual].resposta;
    
    // Transforma tudo em minúsculo pra não dar erro de formatação
    if (respostaDoUsuario.toLowerCase() === respostaCerta.toLowerCase()) {
        mensagemResultado.textContent = "Aí sim! Resposta correta!";
        mensagemResultado.style.color = "green";
        
        pontuacaoTotal += 10;
        acertosDestaRodada++;
        
        // Salva a nova pontuação no navegador
        localStorage.setItem("pontuacaoQuiz", pontuacaoTotal);
        atualizarPlacar();
    } else {
        mensagemResultado.textContent = `Errou. A resposta certa era: ${respostaCerta}`;
        mensagemResultado.style.color = "red";
    }

    // Troca os botões
    btnResponder.style.display = "none";
    btnProxima.style.display = "block";
}

// atualiza o número no topo da tela
function atualizarPlacar() {
    displayPontuacao.textContent = pontuacaoTotal;
}

// Registrando os cliques nos botões
btnResponder.addEventListener("click", checarResposta);

btnProxima.addEventListener("click", function() {
    indiceAtual++;
    carregarPergunta();
});

// inicia o app
iniciarApp();