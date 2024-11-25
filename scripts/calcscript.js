const botao1 = document.getElementById('botao-op1');
const botao2 = document.getElementById('botao-op2');

const calculadoraTitulo = document.getElementById('calculadora-titulo');
const resultadoTitulo = document.getElementById('resultado-titulo');

const calculadora = document.getElementById('calculadora');
let type = "";

let contador = new CountUp('resultado-numero', 0);

if (!contador.error) {
    contador.start();
    contador.reset();
} else {
    console.log(contador.error)
}

function AleatoriaSimples() {
    SetPart("AleatoriaSimples");
}

function Estratificada() {
    SetPart("Estratificada");
}

// ----- MISC. -----
function SetPart(selectedType) {
    const inputsDiv = document.getElementById('inputs');
    type = selectedType;

    if (type === "AleatoriaSimples") { // --- TAMANHO DE AMOSTRA - ALEATÓRIA SIMPLES
        //     <div class="indiv-input">
        //     <label>1. Tamanho Da População</label>
        //     <input type="number" id="tamanho-pop"><br><br>
        //     <input id="check-popinfinita" name="check-popinfinita" type="checkbox" onclick="PopInfinita()">
        //     <label for="check-popinfinita" style="display: inline;">População infinita?</label>
        // </div>

        // <div class="indiv-input">
        //     <label>2. Erro Amostral (%)</label>
        //     <input type="number" id="erro-amostral">
        // </div>
        inputsDiv.innerHTML = "<div class=\"indiv-input\">\n<label>1. Tamanho Da População</label>\n<input type=\"number\" id=\"tamanho-pop\" oninput=\"Calcular()\"><br><br>\n<input id=\"check-popinfinita\" name=\"check-popinfinita\" type=\"checkbox\" onclick=\"PopInfinita()\">\n<label for=\"check-popinfinita\" style=\"display: inline;\">População infinita?</label>\n</div>\n<div class=\"indiv-input\">\n<label>2. Erro Amostral (%)</label>\n<input type=\"number\" id=\"erro-amostral\" oninput=\"Calcular()\">\n</div>";
        calculadoraTitulo.innerHTML = "Calcular Tamanho da Amostra (Aleatória Simples)";
        resultadoTitulo.innerHTML = "TAMANHO DA AMOSTRA";  
        contador.reset();  
    } else { // --- TAMANHO DE AMOSTRA - ESTRATIFICADA
        // <div class="indiv-input">
        //      <label>1. Tamanho Da População</label>
        //      <input type="number" id="tamanho-pop" oninput="Calcular()"><br><br>
        // </div>

        // <div class="indiv-input">
        //      <label>2. Tamanho Da Amostra</label>
        //      <input type="number" id="tamanho-amostra" oninput="Calcular()">
        // </div>
        
        // <div class="indiv-input">
        //      <label>3. N° De Estratos</label>
        //      <input type="number" id="num-estratos" oninput="Calcular()">
        // </div>

        // <div class="indiv-input">
        //      <label>4. Tamanho De Um Dos Estratos</label>
        //      <input type="number" id="tamanho-estrato" oninput="Calcular()">
        // </div>
        inputsDiv.innerHTML = "<div class=\"indiv-input\">\n<label>1. Tamanho Da População</label>\n<input type=\"number\" id=\"tamanho-pop\" oninput=\"Calcular()\"><br><br>\n</div>\n<div class=\"indiv-input\">\n<label>2. Tamanho Da Amostra</label>\n<input type=\"number\" id=\"tamanho-amostra\" oninput=\"Calcular()\">\n</div>\n<div class=\"indiv-input\">\n<label>3. N° De Estratos</label>\n<input type=\"number\" id=\"num-estratos\" oninput=\"Calcular()\">\n</div>\n<div class=\"indiv-input\">\n<label>4. Tamanho De Um Dos Estratos</label>\n<input type=\"number\" id=\"tamanho-estrato\" oninput=\"Calcular()\">\n</div>";
        calculadoraTitulo.innerHTML = "Calcular Tamanho da Amostra (Estratificada)";
        resultadoTitulo.innerHTML = "TAMANHO DA AMOSTRA INDIVIDUAL";
        contador.reset();
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

function PopInfinita() {
    const inputTamanhoPop = document.getElementById('tamanho-pop');
    if (document.getElementById('check-popinfinita').checked === true) {
        inputTamanhoPop.disabled = true;
        Calcular();
    } else {
        inputTamanhoPop.disabled = false;
        Calcular();
    }
}

function Calcular() {
    const inputTamanhoPop = document.getElementById('tamanho-pop');
    const resultadoNumero = document.getElementById('resultado-numero');
    let resultado = 0;

    let infinita = inputTamanhoPop.disabled;

    if (type === "AleatoriaSimples") {
        let tamanhoPop = parseInt(document.getElementById('tamanho-pop').value);
        let erroAmostral = parseInt(document.getElementById('erro-amostral').value);

        if (isNaN(tamanhoPop) && infinita == false) return;
        if (isNaN(erroAmostral)) return;

        let n0 = new Decimal(erroAmostral);
        n0 = 1 / Decimal.pow(n0 / 100, 2);

        if (infinita === true) {
            resultado = Number(n0).toFixed(0);
        } else {
            resultado = Decimal.ceil(Decimal.div(Decimal.mul(tamanhoPop, n0), Decimal.sum(tamanhoPop, n0)));
        }
    } else { // ESTRATIFICADA

    }
    contador.update(Number(resultado));
}