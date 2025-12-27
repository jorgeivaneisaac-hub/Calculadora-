// Función para realizar los cálculos
function calcular() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const op = document.getElementById('operacion').value;
    let res = 0;

    // Validación mejorada
    if (isNaN(n1) || (isNaN(n2) && op !== '√')) {
        alert("Por favor, ingresa números válidos");
        return;
    }

    switch (op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': 
            res = n2 !== 0 ? n1 / n2 : "Error"; 
            break;
        case '^': res = Math.pow(n1, n2); break;
        case '√': res = Math.sqrt(n1); break;
        case '%': res = (n1 * n2) / 100; break;
    }

    // Limitar a 2 decimales solo si es necesario para no romper el diseño
    if (typeof res === 'number') {
        res = Number(res.toFixed(2));
    }

    document.getElementById('display-resultado').innerText = res;

    // --- GUARDADO ---
    localStorage.setItem('ultimoResultado', res);
}

// Función para cambiar de operación
function setOp(btn, op) {
    document.getElementById('operacion').value = op;
    
    // Quitar clase activa
    document.querySelectorAll('.op-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // UX: Desactivar visualmente el input 2 si es raíz cuadrada
    const input2 = document.getElementById('n2');
    if (op === '√') {
        input2.style.opacity = "0.3";
        input2.placeholder = "No necesario";
        input2.disabled = true;
    } else {
        input2.style.opacity = "1";
        input2.placeholder = "Número 2";
        input2.disabled = false;
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


