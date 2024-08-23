export const groupStudentsByCourse = (students) => {
    const newArray = {};

    students.forEach(student => {
        const { course } = student;
        if (!newArray[course]) {
            newArray[course] = [];
        }
        newArray[course].push(student);
    });

    return newArray;
};