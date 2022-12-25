/* classroom.js */

/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
  return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum = sum + grade;
  });
  return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
  return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
  const grad = grades.filter(grade => grade >= 10);
  return grad
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
  const grad = grades.filter((grade) => grade <= 9);
  return grad;
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
  const grad = grades.map(function (grade) {
    return grade + 1;
  });
  return grad;
}
