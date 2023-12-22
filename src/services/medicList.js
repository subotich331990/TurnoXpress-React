export function obtenerMedico() {
    // Listas de nombres y apellidos
    const nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Ana'];
    const apellidos = ['García', 'Martínez', 'López', 'Rodríguez', 'Fernández'];

    // Obtener un nombre aleatorio
    const nombreRandom = nombres[Math.floor(Math.random() * nombres.length)];

    // Obtener un apellido aleatorio
    const apellidoRandom = apellidos[Math.floor(Math.random() * apellidos.length)];

    // Devolver el nombre y apellido concatenados
    return `${nombreRandom} ${apellidoRandom}`;
}

// Ejemplo de uso
