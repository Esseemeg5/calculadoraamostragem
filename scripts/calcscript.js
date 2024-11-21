const botao1 = document.getElementById('botao-op1');
const botao2 = document.getElementById('botao-op2');

const calculadora = document.getElementById('calculadora');

let pastpart1 = false;
let mode = "";
let type = "";

// ----- PARTE 1 -----
function TamanhoAmostra() {
    SetPart1("TamanhoAmostra");
}

function MargemErro() {
    SetPart1("MargemErro");
}

// ----- PARTE 2 -----
function AleatoriaSimples() {
    SetPart2("AleatoriaSimples");
}

function Estratificada() {
    SetPart2("Estratificada");
}

// ----- MISC. -----
function Voltar() {
    if (pastpart1) {
        document.getElementById('voltar-seta').style.visibility = "hidden";

        document.getElementById('pergunta-calculo').textContent = "O QUE DESEJA CALCULAR?";
        botao1.innerHTML = "Tamanho Da Amostra";
        botao1.setAttribute("OnClick", "TamanhoAmostra()");

        botao2.innerHTML = "Margem De Erro";
        botao2.setAttribute("OnClick", "MargemErro()");

        mode = "";
        pastpart1 = false;
    }
}

function SetPart1(selectedMode) {
    document.getElementById('pergunta-calculo').textContent = "QUAL O TIPO DE AMOSTRAGEM?";
    botao1.innerHTML = "Aleatória Simples";
    botao1.setAttribute("OnClick", "AleatoriaSimples()");

    botao2.innerHTML = "Estratificada";
    botao2.setAttribute("OnClick", "Estratificada()");

    document.getElementById('voltar-seta').style.visibility = "visible";
    mode = selectedMode;
    pastpart1 = true;
}

function SetPart2(selectedType) {
    type = selectedType;

    if (type === "AleatoriaSimples") {

    } else {

    }

    calculadora.style.animationDuration = "1s";
    calculadora.style.animationTimingFunction = "ease-out";
    calculadora.style.animationName = "open";
}

function EsconderCalc() {
    calculadora.style.animationDuration = "0.5s";
    calculadora.style.animationTimingFunction = "ease-in";
    calculadora.style.animationName = "close";
}