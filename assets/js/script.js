// Actualizar Reloj
setInterval(() => {
    const now = new Date();
    document.getElementById('live-clock').innerText = now.toLocaleTimeString();
}, 1000);

// Simular acción de registro
function handlePunch(type) {
    const empId = document.getElementById('employee-id').value;
    const board = document.getElementById('message-board');

    if (!empId) {
        alert("Por favor ingresa tu ID");
        return;
    }

    // Aquí llamarías al JSON para validar, por ahora simulamos:
    board.innerHTML = `<p style="color: #FFD700; margin-top: 20px;">
        Registro de <strong>${type.toUpperCase()}</strong> exitoso para ID: ${empId}
    </p>`;
    
    document.getElementById('employee-id').value = "";
}