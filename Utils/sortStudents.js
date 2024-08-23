//Crear módulos de utilidades: Crear un módulo utils.js que exporte varias funciones para manipular y consultar los datos de los estudiantes.
//Ordena a los estudiantes por el nombre (name) en orden alfabético ascendente.
//Filtra a los estudiantes que tienen una calificación (grade)  mayor a 80 y luego ordénalos de mayor a menor calificación.
//Calcula el promedio de las calificaciones (grade) de todos los estudiantes.
//Organizar a los estudiantes en un objeto basado en su curso (course).


export const sortStudentsByName = (students) => students.sort((a, b) => a.name.localeCompare(b.name));


