function analizarLog() {
    const fileInput = document.getElementById("logFile");
    const file = fileInput.files[0];
    
    if (!file) {
        alert("Por favor, carga un archivo de log.");
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function(event) {
        const logData = event.target.result;
        const resultados = document.getElementById("logOutput");
        const reporte = document.getElementById("reporte");

        // Mostrar el contenido del log
        resultados.textContent = logData;

        // Analizar el log en busca de patrones sospechosos
        const patronesSospechosos = [
            /failed login/i,   // Intentos de acceso fallidos
            /error/i,          // Errores en el sistema
            /attack/i,         // Palabra clave para indicar un ataque
            /malicious/i,      // Actividad maliciosa detectada
            /unauthorized/i    // Accesos no autorizados
        ];

        let incidentesDetectados = [];

        patronesSospechosos.forEach((patron) => {
            if (patron.test(logData)) {
                incidentesDetectados.push(`¡Posible incidente detectado! Patrón: ${patron.source}`);
            }
        });

        // Generar informe de incidente
        if (incidentesDetectados.length > 0) {
            reporte.textContent = incidentesDetectados.join('\n');
        } else {
            reporte.textContent = "No se detectaron incidentes en los logs.";
        }
    };
    
    reader.onerror = function() {
        alert("Hubo un error al leer el archivo. Intenta nuevamente.");
    };

    reader.readAsText(file);
}
