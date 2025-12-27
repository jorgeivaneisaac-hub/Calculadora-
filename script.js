function calcular() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const op = document.getElementById('operacion').value;
    let res = 0;

    if (isNaN(n1) || (isNaN(n2) && op !== '√')) {
        alert("Ingresa números válidos");
        return;
    }

    switch (op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': res = n2 !== 0 ? n1 / n2 : "Error"; break;
        case '√': res = Math.sqrt(n1); break;
        case '%': res = (n1 * n2) / 100; break;
    }

    if (typeof res === 'number') {
        res = Number(res.toFixed(2));
    }

    document.getElementById('display-resultado').innerText = res;
    localStorage.setItem('ultimoResultado', res);
}

function setOp(btn, op) {
    document.getElementById('operacion').value = op;
    document.querySelectorAll('.op-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Desactivar n2 si es raíz cuadrada
    const n2 = document.getElementById('n2');
    if (op === '√') {
        n2.style.display = "none";
    } else {
        n2.style.display = "block";
    }
}

function limpiar() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('display-resultado').innerText = "0";
    localStorage.removeItem('ultimoResultado');
}

window.onload = function() {
    const guardado = localStorage.getItem('ultimoResultado');
    if (guardado !== null) {
        document.getElementById('display-resultado').innerText = guardado;
    }
};

