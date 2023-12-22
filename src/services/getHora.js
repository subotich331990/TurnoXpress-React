export function obtenerHoraYMinuto() {
    const ahora = new Date();
    const hora = ahora.getHours() + 2;
    const minuto = ahora.getMinutes() + 15;

    // Formatear la hora y los minutos como cadena (agregando ceros a la izquierda si es necesario)
    const horaStr = hora < 10 ? '0' + hora : hora.toString();
    const minutoStr = minuto < 10 ? '0' + minuto : minuto.toString();

    // Crear la cadena en el formato HH:MM
    const horaYMinutoStr = horaStr + ':' + minutoStr;

    return horaYMinutoStr;
}

// Ejemplo de uso

