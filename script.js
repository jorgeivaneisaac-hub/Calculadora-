function setOp(elemento, valor) {
    document.querySelectorAll('.op-btn').forEach(btn => btn.classList.remove('active'));
    elemento.classList.add('active');
    document.getElementById('operacion').value = valor;
    
    const l1 = document.getElementById("label-n1");
    const l2 = document.getElementById("label-n2");
    
    l1.innerText = "Número";
    l2.innerText = "Número";

    if (valor === "^") {
        l1.innerText = "Base";
        l2.innerText = "Exponente";
    } else if (valor === "√") {
        l1.innerText = "Radicando";
        l2.innerText = "Índice";
    } else if (valor === "%") {
        l1.innerText = "Cantidad";
        l2.innerText = "Porcentaje %";
    }
}

function calcular() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const op = document.getElementById("operacion").value;
    const display = document.getElementById("display-resultado");

    if (isNaN(n1) || isNaN(n2)) {
        display.innerText = "Faltan datos";
        display.style.color = "#e53e3e";
        return;
    }

    let res;
    switch (op) {
        case "+": res = n1 + n2; break;
        case "-": res = n1 - n2; break;
        case "*": res = n1 * n2; break;
        case "/": res = n2 !== 0 ? n1 / n2 : "Error ÷0"; break;
        case "^": res = Math.pow(n1, n2); break;
        case "√": 
            if (n2 === 0) res = "Índice 0";
            else res = Math.sign(n1) * Math.pow(Math.abs(n1), 1 / n2);
            break;
        case "%": res = (n1 * n2) / 100; break;
    }

    if (typeof res === "number") res = parseFloat(res.toFixed(4));

    display.style.opacity = "0.3";
    setTimeout(() => {
        display.innerText = res;
        display.style.color = (typeof res === "string") ? "#e53e3e" : "#2d3748";
        display.style.opacity = "1";
    }, 50);
}

function limpiar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("display-resultado").innerText = "0";
    // Regresa al primer botón (+)
    setOp(document.querySelector('.op-btn'), '+');
}
