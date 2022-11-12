let result = 0;

const set = (i) => (result = i);
const add = (i) => (result += i);
const sub = (i) => (result -= i);
const mult = (i) => (result *= i);
const div = (i) => (result /= i);

module.exports = { set, add, sub, mult, div };

// function set(i) {
//   return (result = i);
// }
// function add(i) {
//   return (result += i);
// }
// function sub(i) {
//   return (result -= i);
// }
// function mult(i) {
//   return (result *= i);
// }
// function div(i) {
//   return (result /= i);
// }
