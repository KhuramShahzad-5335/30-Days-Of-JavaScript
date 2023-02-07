//===================           2.
//A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// lets structure.

let [name, skills, scores] = student;

let [, ,jsScore, reactScore ] = scores

console.log(name, skills, jsScore, reactScore);

