function sendMessage() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

function autoFillMessage(message) {
    document.getElementById('message').value = message;
}

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR');
    document.getElementById('dateTime').textContent = `Data e Hora: ${dateTimeString}`;
}

function updateBatteryStatus() {
    navigator.getBattery().then(function(battery) {
        const batteryLevel = Math.round(battery.level * 100) + '%';
        document.getElementById('batteryLevel').textContent = `Nível da bateria: ${batteryLevel}`;
    });
}

function updateSystemPhoneNumber() {
    const systemPhoneNumber = '0800-123-456'; // Substitua pelo número de telefone do sistema real
    document.getElementById('systemPhoneNumber').textContent = `Número de telefone do sistema: ${systemPhoneNumber}`;
}

setInterval(updateDateTime, 1000);
updateBatteryStatus();
updateSystemPhoneNumber();
