var sinalAdicionado = 0;

function AdicionarNumero(numero) {

    if(numero == 0 && document.getElementById('display').textContent == "") {
        return;
    } else {
        document.getElementById('display').textContent = document.getElementById('display').textContent + numero;
    }
}

function AdicionarSinal(sinal) {

    if(sinalAdicionado == 0) {
        switch(sinal) {
            case 1:
                document.getElementById('display').textContent = document.getElementById('display').textContent + " + ";
                sinalAdicionado = 1;
                break;
            case 2:
                document.getElementById('display').textContent = document.getElementById('display').textContent + " - ";
                sinalAdicionado = 1;
                break;
            case 3:
                document.getElementById('display').textContent = document.getElementById('display').textContent + " % ";
                sinalAdicionado = 1;
                break;
            case 4:
                document.getElementById('display').textContent = document.getElementById('display').textContent + " * ";
                sinalAdicionado = 1;
                break;
        }
    }
}

function FinalizarConta() {
    let numerosDividos = document.getElementById('display').textContent.split(' ');

    let primeiroNumero = parseInt(numerosDividos[0])
    let segundoNumero = parseInt(numerosDividos[2])
    let resultado = "";
    sinalAdicionado = 0;
    switch(numerosDividos[1]) {
        case "+":
            resultado = primeiroNumero + segundoNumero;
            document.getElementById('display').textContent = resultado;
            break;
        case "-":
            resultado = primeiroNumero - segundoNumero;
            document.getElementById('display').textContent = resultado;
            break;
        case "*":
            resultado = primeiroNumero * segundoNumero;
            document.getElementById('display').textContent = resultado;
            break;
        case "%":
            resultado = primeiroNumero / segundoNumero;
            document.getElementById('display').textContent = resultado;
            break;
    }
}

function Limpar() {
    sinalAdicionado = 0;
    document.getElementById('display').textContent = "";
}