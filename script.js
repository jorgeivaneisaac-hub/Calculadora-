// Función para realizar los cálculos
function calcular() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const op = document.getElementById('operacion').value;
    let res = 0;

    if (isNaN(n1) || (isNaN(n2) && op !== '√')) {
        alert("Por favor, ingresa números válidos");
        return;
    }

    switch (op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': res = n1 / n2; break;
        case '^': res = Math.pow(n1, n2); break;
        case '√': res = Math.sqrt(n1); break;
        case '%': res = (n1 * n2) / 100; break;
    }

    document.getElementById('display-resultado').innerText = res;

    // --- AQUÍ SE GUARDA EL RESULTADO ---
    localStorage.setItem('ultimoResultado', res);
}

// Función para limpiar
function limpiar() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('display-resultado').innerText = "0";
    localStorage.removeItem('ultimoResultado'); // Borra la memoria
}

// Función para cambiar de operación
function setOp(btn, op) {
    document.getElementById('operacion').value = op;
    document.querySelectorAll('.op-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// --- ESTO CARGA EL RESULTADO AL ABRIR LA PÁGINA ---
window.onload = function() {
    const guardado = localStorage.getItem('ultimoResultado');
    if (guardado !== null) {
        document.getElementById('display-resultado').innerText = guardado;
    }
};

