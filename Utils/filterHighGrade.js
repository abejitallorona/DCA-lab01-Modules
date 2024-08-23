export const filterStudentsByGrade = (students) => students.filter(student => student.grade >= 80);

export const organizaStudentsByGradeDesc = (students) => students.sort((a, b) => b.grade - a.grade);