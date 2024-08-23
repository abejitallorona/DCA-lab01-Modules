import { students } from './Data/students.js';

import { sortStudentsByName } from './Utils/sortStudents.js';
import { organizaStudentsByGradeDesc, filterStudentsByGrade } from './Utils/filterHighGrade.js';
import { calculateAverageGrade } from "./Utils/calculateMeanGrade.js";
import { groupStudentsByCourse } from "./Utils/organizeByCourse.js";

const renderStudentList = (students) => {
    const studentList = document.createElement("ul");

    students.forEach(({ id, name }) => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${id} - Name: ${name}`;
        studentList.appendChild(listItem);
    });

    return studentList;
};

const renderTopStudents = (students) => {
    const topStudentsList = document.createElement("ul");

    students.forEach(({ id, name, grade }) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${name} - Grade: ${grade}`;
        topStudentsList.appendChild(listItem);
    });

    return topStudentsList;
};

const renderAverageGrade = (averageGrade) => {
    const averageGradeElement = document.createElement("h2");
    averageGradeElement.textContent = `Nota promedio: ${averageGrade}`;
    return averageGradeElement;
};

const renderCourseStudents = (groupStudents) => {
    const courseContainer = document.createElement("div");

    Object.keys(groupStudents).forEach((course) => {
        const courseName = document.createElement("h3");
        courseName.textContent = course;
        courseContainer.appendChild(courseName);

        const studentList = document.createElement("ul");
        groupStudents[course].forEach(({ id, name, age, grade }) => {
            const listItem = document.createElement("li");
            listItem.textContent = `ID: ${id} - Name: ${name} - Age: ${age} - Grade: ${grade}`;
            studentList.appendChild(listItem);
        });

        courseContainer.appendChild(studentList);
    });

    return courseContainer;
};

document.addEventListener('DOMContentLoaded', () => {
    const sortedStudents = sortStudentsByName(students);
    const topStudents = filterStudentsByGrade(students);
    const averageGrade = calculateAverageGrade(students);
    const groupStudents = groupStudentsByCourse(students);

    const app = document.getElementById('app');

    // Mostrar lista de estudiantes (ID y nombre)
    const studentList = renderStudentList(sortedStudents);
    app.appendChild(studentList);

    // Mostrar estudiantes con notas más altas
    const topStudentsList = renderTopStudents(topStudents);
    const topStudentsTitle = document.createElement("h2");
    topStudentsTitle.textContent = "Estudiantes con la nota más alta :o";
    app.appendChild(topStudentsTitle);
    app.appendChild(topStudentsList);

    // Mostrar el promedio de notas
    const averageGradeElement = renderAverageGrade(averageGrade);
    app.appendChild(averageGradeElement);

    // Mostrar cursos y los estudiantes que pertenecen a cada curso
    const courseStudents = renderCourseStudents(groupStudents);
    const coursesTitle = document.createElement("h2");
    coursesTitle.textContent = "Courses:3";
    app.appendChild(coursesTitle);
    app.appendChild(courseStudents);
});
