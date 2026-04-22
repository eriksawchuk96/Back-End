let tareas = [];
tareas.push("Estudiar JavaScript");
tareas.push("Hacer ejercicio");
tareas.push("Leer 30 minutos");
tareas.push("Cocinar");
tareas.push("Llamar a un amigo");

console.log("Cantidad de tareas:", tareas.length);

console.log("Lista de tareas:\n" + tareas.join("\n"));

let tareaEliminada = tareas.pop();
console.log("Tarea completada y eliminada:", tareaEliminada);
console.log("Array final:", tareas);
