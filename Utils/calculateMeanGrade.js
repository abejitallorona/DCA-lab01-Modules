export const calculateAverageGrade = (students) => {
    const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
    return totalGrades / students.length;
};